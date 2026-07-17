import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const herdSizeLabels = {
  '1-50': '1 – 50 Animals',
  '51-200': '51 – 200 Animals',
  '201-1000': '201 – 1,000 Animals',
  '1000+': '1,000+ Animals',
};

export default function BookDemo() {
  const [form, setForm] = useState({ name: '', farmName: '', email: '', herdSize: '' });
  const [status, setStatus] = useState('idle');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          farm_name: form.farmName,
          email: form.email,
          herd_size: herdSizeLabels[form.herdSize] || form.herdSize,
          time: new Date().toLocaleString(),
          message: `${form.name} from ${form.farmName} requested a CALVIQ demo. Herd size: ${
            herdSizeLabels[form.herdSize] || form.herdSize
          }.`,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus('sent');
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
    }
  };

  return (
    <section className="bg-background-alt min-h-[100svh] pt-28 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-gutter flex items-center justify-center">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8 md:mb-10">
          <Link to="/calviq" className="font-headline-md text-headline-md font-extrabold text-primary tracking-tight">
            CALVIQ
          </Link>
          <h1 className="font-display-lg text-display-lg-mobile text-on-surface mt-4">Book a Demo</h1>
          <p className="text-on-surface-variant font-body-lg mt-2 max-w-md mx-auto">
            See how CALVIQ can transform your dairy operations. Fill in your details and our team will reach out.
          </p>
        </div>
        <div className="bg-white rounded-3xl sophisticated-shadow p-6 sm:p-8 md:p-10">
          {status === 'sent' ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto">
                <span className="material-symbols-outlined text-3xl">event_available</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">Request received!</h2>
              <p className="text-on-surface-variant text-sm">
                Thanks, {form.name || 'there'}. Our team will contact you shortly to schedule your CALVIQ demo.
              </p>
              <Link
                to="/calviq"
                className="inline-block mt-4 px-8 py-3 font-label-md text-label-md font-bold rounded-xl bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-95"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="name">
                  Full Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="farmName">
                  Farm Name
                </label>
                <input
                  id="farmName"
                  required
                  value={form.farmName}
                  onChange={update('farmName')}
                  placeholder="Verma Dairy Exports"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@farm.com"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="herdSize">
                  Herd Size
                </label>
                <select
                  id="herdSize"
                  required
                  value={form.herdSize}
                  onChange={update('herdSize')}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all bg-white"
                >
                  <option value="" disabled>
                    Select herd size
                  </option>
                  <option value="1-50">1 – 50 Animals</option>
                  <option value="51-200">51 – 200 Animals</option>
                  <option value="201-1000">201 – 1,000 Animals</option>
                  <option value="1000+">1,000+ Animals</option>
                </select>
              </div>
              {status === 'error' && (
                <p className="text-error text-sm text-center">
                  Something went wrong sending your request. Please try again in a moment.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="shimmer-btn w-full py-4 font-label-md text-label-md font-bold rounded-xl bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'sending' ? 'Sending…' : 'Request Demo'}
              </button>
            </form>
          )}
        </div>
        <p className="text-center mt-8">
          <Link to="/calviq" className="text-on-surface-variant hover:text-primary transition-colors text-sm">
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
