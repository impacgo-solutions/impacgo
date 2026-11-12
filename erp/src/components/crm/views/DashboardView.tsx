"use client";

import Link from "next/link";
import { PageBody } from "@/components/crm/CrmShell";
import { Icon } from "@/components/crm/icons";
import { PipelineChart } from "@/components/crm/PipelineChart";
import { TaskList } from "@/components/crm/TaskList";
import { Avatar, Badge, Card, EmptyState, btnPrimary, btnSecondary } from "@/components/crm/ui";
import { useCrm } from "@/lib/crm-store";
import { getDashboard } from "@/lib/crm-data";
import { formatCurrency, formatDate } from "@/lib/modules";

function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
}

const link = "text-[14px] font-bold text-[#2d4fe0] hover:underline";

export function DashboardView() {
  const { state, profile, loadSample } = useCrm();
  const { stats, pipeline, openTasks, recentLeads, closingDeals, isEmpty } = getDashboard(state);
  const firstName = profile.name.split(/\s+/)[0];
  const dateLabel = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

  const header = (
    <div className="relative mb-6 overflow-hidden rounded-2xl border border-[#dfe5ff] bg-[linear-gradient(120deg,#eef1ff,#fff5f1_60%,#fff3ea)] px-6 py-6 sm:px-8">
      <div className="relative flex flex-wrap items-center gap-5">
        <Avatar name={profile.name} size={52} />
        <div className="min-w-0 flex-1">
          <p className="text-[13px] font-medium text-[#5c6170]">{dateLabel}</p>
          <h2 className="text-[24px] font-bold tracking-[-0.3px] text-[#14161c]">
            {greeting()}, {firstName}
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/crm/leads/new" className="inline-flex h-9 items-center rounded-lg bg-[#2d4fe0] px-4 text-[14px] font-semibold text-white transition-colors hover:bg-[#2443cc]">
            New lead
          </Link>
          <Link href="/crm/deals?view=board" className="inline-flex h-9 items-center rounded-lg border border-[#ebe5dc] bg-white px-4 text-[14px] font-semibold text-[#14161c] transition-colors hover:border-[#d6cfc4]">
            Open pipeline
          </Link>
        </div>
      </div>
    </div>
  );

  if (isEmpty) {
    return (
      <PageBody>
        {header}
        <Card>
          <div className="flex flex-col items-center px-6 py-16 text-center">
            <p className="text-[20px] font-bold text-[#14161c]">Your CRM is empty</p>
            <p className="max-w-[460px] pt-2 text-[15px] text-[#5c6170]">
              Add your first lead, or load the sample records to explore the pipeline, related lists and lead conversion.
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              <Link href="/crm/leads/new" className={btnPrimary}>
                Create Lead
              </Link>
              <button type="button" onClick={loadSample} className={btnSecondary}>
                Load sample data
              </button>
            </div>
          </div>
        </Card>
      </PageBody>
    );
  }

  const tiles = [
    { label: "Open Leads", value: stats.openLeads.toLocaleString("en-US"), note: `${stats.newLeadsThisMonth} new this month`, href: "/crm/leads", icon: "leads", tint: "#eef1ff", color: "#2d4fe0" },
    { label: "Open Pipeline", value: formatCurrency(stats.pipelineValue), note: `${stats.openDeals} open deals`, href: "/crm/deals?view=board", icon: "pipeline", tint: "#eef5fc", color: "#6d4ef0" },
    { label: "Won to Date", value: formatCurrency(stats.wonValue), note: "Closed Won deals", href: "/crm/deals?filter=Closed+Won", icon: "deals", tint: "#ecfdf3", color: "#15803d" },
    { label: "Overdue Tasks", value: stats.overdueTasks.toLocaleString("en-US"), note: `${stats.contacts} contacts · ${stats.accounts} accounts`, href: "/crm/tasks", icon: "clock", tint: "#fff1ec", color: "#c8452a" },
  ];

  return (
    <PageBody>
      {header}
      <div className="grid gap-4 pb-5 sm:grid-cols-2 xl:grid-cols-4">
        {tiles.map((t) => (
          <Link
            key={t.label}
            href={t.href}
            className="flex items-start gap-4 rounded-xl border border-[#ebe5dc] bg-white px-5 py-4 transition-[translate,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgb(20_22_28/8%)]"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-[10px]" style={{ background: t.tint, color: t.color }}>
              <Icon name={t.icon} size={22} />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] text-[#5c6170]">{t.label}</span>
              <span className="block pt-0.5 text-[26px] leading-tight font-bold text-[#14161c] tabular-nums">{t.value}</span>
              <span className="block pt-0.5 text-[12px] text-[#686c79]">{t.note}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_400px]">
        <div className="flex min-w-0 flex-col gap-5">
          <Card title="Deal value by stage" actions={<Link href="/crm/deals?view=board" className={link}>Open pipeline</Link>}>
            <PipelineChart data={pipeline} />
          </Card>

          <Card title="My Deals Closing Soon" actions={<Link href="/crm/deals" className={link}>View all</Link>}>
            {closingDeals.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-[#ebe5dc] bg-[#faf7f2] text-[13px] text-[#5c6170]">
                      <th className="px-5 py-2.5 font-bold">Deal Name</th>
                      <th className="px-4 py-2.5 font-bold">Stage</th>
                      <th className="px-4 py-2.5 text-right font-bold">Amount</th>
                      <th className="px-5 py-2.5 text-right font-bold">Closing Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {closingDeals.map((deal) => (
                      <tr key={deal.id} className="border-b border-[#f3efe8] last:border-b-0 hover:bg-[#faf7f2]">
                        <td className="px-5 py-3">
                          <Link href={`/crm/deals/${deal.id}`} className="font-bold text-[#2d4fe0] hover:underline">
                            {deal._title}
                          </Link>
                          <span className="block text-[12px] text-[#5c6170]">{deal._ref_account_id ?? "No account"}</span>
                        </td>
                        <td className="px-4 py-3">
                          <Badge value={String(deal.stage)} />
                        </td>
                        <td className="px-4 py-3 text-right font-bold tabular-nums">{formatCurrency(deal.amount as number | null)}</td>
                        <td className="px-5 py-3 text-right text-[#5c6170]">{formatDate(deal.closing_date as string | null)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <EmptyState title="No open deals" body="Create a deal or convert a lead to start your pipeline." />
            )}
          </Card>
        </div>

        <div className="flex flex-col gap-5">
          <Card title={`My Open Tasks (${openTasks.length})`} actions={<Link href="/crm/tasks/new" className={link}>+ Task</Link>}>
            {openTasks.length > 0 ? <TaskList tasks={openTasks} /> : <EmptyState title="All caught up" body="No open tasks right now." />}
          </Card>

          <Card title="Today's Leads" actions={<Link href="/crm/leads" className={link}>View all</Link>}>
            {recentLeads.length > 0 ? (
              <ul className="divide-y divide-[#f3efe8]">
                {recentLeads.map((lead) => (
                  <li key={lead.id} className="flex items-center gap-3 px-5 py-3 text-[14px]">
                    <Avatar name={lead._title} size={34} />
                    <div className="min-w-0 flex-1">
                      <Link href={`/crm/leads/${lead.id}`} className="font-bold text-[#2d4fe0] hover:underline">
                        {lead._title}
                      </Link>
                      <p className="truncate text-[12px] text-[#5c6170]">{lead.company ?? "—"}</p>
                    </div>
                    <Badge value={String(lead.status)} />
                  </li>
                ))}
              </ul>
            ) : (
              <EmptyState title="No open leads" body="New leads will appear here." />
            )}
          </Card>
        </div>
      </div>
    </PageBody>
  );
}
