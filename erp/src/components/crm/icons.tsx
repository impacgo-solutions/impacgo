import type { ReactNode, SVGProps } from "react";

/* Outline icons for the CRM app (stroke follows currentColor). */

const PATHS: Record<string, ReactNode> = {
  home: <><path d="M4 11l8-7 8 7" /><path d="M6 9.5V20h12V9.5" /></>,
  pipeline: <><rect x="3" y="4" width="5" height="16" rx="1.5" /><rect x="10" y="4" width="5" height="11" rx="1.5" /><rect x="17" y="4" width="4" height="7" rx="1.5" /></>,
  tasks: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  leads: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" /></>,
  contacts: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="10" r="3" /><path d="M6.8 18a6 6 0 0110.4 0" /></>,
  accounts: <><path d="M4 20V6l7-2v16" /><path d="M11 9h7a2 2 0 012 2v9" /><path d="M3 20h18M7 8h1M7 12h1M7 16h1M14 13h2M14 16h2" /></>,
  deals: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18" /></>,
  folder: <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  chevronDown: <path d="M6 9l6 6 6-6" />,
  chevronUp: <path d="M6 15l6-6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  bell: <><path d="M6 16V11a6 6 0 0112 0v5l1.5 2h-15z" /><path d="M10 20a2 2 0 004 0" /></>,
  calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9L5.3 5.3" /></>,
  grid: <>{[5, 12, 19].flatMap((x) => [5, 12, 19].map((y) => <circle key={`${x}${y}`} cx={x} cy={y} r="1.3" fill="currentColor" stroke="none" />))}</>,
  collapse: <><rect x="3.5" y="4" width="17" height="16" rx="2" /><path d="M9 4v16M15.5 9.5L13 12l2.5 2.5" /></>,
  more: <>{[5, 12, 19].map((x) => <circle key={x} cx={x} cy="12" r="1.5" fill="currentColor" stroke="none" />)}</>,
  filter: <path d="M4 5h16l-6 7.5V19l-4-2v-4.5z" />,
  sort: <><path d="M8 4v16M4.5 7.5L8 4l3.5 3.5" /><path d="M16 20V4M12.5 16.5L16 20l3.5-3.5" /></>,
  list: <><path d="M9 6h11M9 12h11M9 18h11" /><circle cx="4.5" cy="6" r="1" /><circle cx="4.5" cy="12" r="1" /><circle cx="4.5" cy="18" r="1" /></>,
  kanban: <><rect x="4" y="4" width="6" height="16" rx="1.5" /><rect x="14" y="4" width="6" height="10" rx="1.5" /></>,
  download: <><path d="M12 4v11M7.5 10.5L12 15l4.5-4.5" /><path d="M5 19h14" /></>,
  trash: <><path d="M4 7h16M10 11v6M14 11v6" /><path d="M6 7l1 13h10l1-13M9 7V4h6v3" /></>,
  back: <path d="M15 5l-7 7 7 7" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6l8.5 7 8.5-7" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" />,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  convert: <><circle cx="7" cy="7" r="3" /><path d="M7 10v4a4 4 0 004 4h6" /><path d="M14 15l3 3-3 3" /></>,
  edit: <><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></>,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  logout: <><path d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3" /><path d="M10 8l-4 4 4 4M6 12h10" /></>,
  refresh: <><path d="M20 12a8 8 0 11-2.3-5.6L20 9" /><path d="M20 4v5h-5" /></>,
};

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 18, ...p }: SVGProps<SVGSVGElement> & { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...p}
    >
      {PATHS[name]}
    </svg>
  );
}
