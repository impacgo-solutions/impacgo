import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

// HealthVault is a mobile app (not yet a hosted web product), so this page
// collects early-access leads via the same EmailJS integration the main
// site's Contact section already uses — rather than posting to a live
// registration API the way FarmYieldIQ's SignUp does, since no such backend
// exists for HealthVault yet.
const initialForm = {
  name: '',
  email: '',
  phone: '',
};

function validate(form) {
  if (!form.name.trim()) return 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.';
  return null;
}

export default function SignUp() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate(form);
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      await emailjs.send(
        'service_d7y8ehi',
        'template_yadp6j3',
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || 'Not Provided',
          message: `HealthVault early-access request from ${form.name} (${form.email}).`,
          time: new Date().toLocaleString(),
        },
        'IFgEgXdtrHt3Am0eV'
      );
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Unable to submit your request right now. Please try again.');
    }
  };

  return (
    <section className="bg-healthvault-background min-h-[100svh] pt-28 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-gutter flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8 md:mb-10">
          <Link
            to="/healthvault"
            className="font-healthvault-headline text-headline-md font-bold text-healthvault-primary tracking-tight"
          >
            HealthVault
          </Link>
          {status === 'success' ? (
            <>
              <h1 className="font-healthvault-headline text-display-lg-mobile text-healthvault-on-background mt-4">
                You&apos;re on the list!
              </h1>
              <p className="text-healthvault-on-surface-variant font-healthvault-body mt-2 max-w-md mx-auto">
                We&apos;ll reach out as soon as early access opens up.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-healthvault-headline text-display-lg-mobile text-healthvault-on-background mt-4">
                Get Early Access
              </h1>
              <p className="text-healthvault-on-surface-variant font-healthvault-body mt-2 max-w-md mx-auto">
                Join the HealthVault early-access list — no cost, no obligation.
              </p>
            </>
          )}
        </div>

        <div className="bg-white rounded-3xl hv-sophisticated-shadow p-6 sm:p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-healthvault-secondary/10 flex items-center justify-center text-healthvault-secondary mx-auto">
                <span className="material-symbols-outlined text-3xl">mark_email_read</span>
              </div>
              <h2 className="font-healthvault-headline text-headline-md text-healthvault-on-background">
                Thanks, {form.name}!
              </h2>
              <p className="text-healthvault-on-surface-variant text-sm max-w-sm mx-auto">
                Your request has been received. Our team will follow up at{' '}
                <span className="font-bold">{form.email}</span> with next steps.
              </p>
              <Link
                to="/healthvault"
                className="hv-shimmer-btn inline-block mt-4 px-8 py-3 font-healthvault-body text-label-md font-bold rounded-xl bg-healthvault-primary text-healthvault-on-primary shadow-lg shadow-healthvault-primary/20 hover:shadow-xl transition-all active:scale-95"
              >
                Back to HealthVault
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-healthvault-body text-label-md text-healthvault-on-surface-variant" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3 rounded-lg border border-healthvault-outline-variant focus:border-healthvault-primary focus:outline-none focus:ring-4 focus:ring-healthvault-primary/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-healthvault-body text-label-md text-healthvault-on-surface-variant" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-healthvault-outline-variant focus:border-healthvault-primary focus:outline-none focus:ring-4 focus:ring-healthvault-primary/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-healthvault-body text-label-md text-healthvault-on-surface-variant" htmlFor="phone">
                  Phone (Optional)
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg border border-healthvault-outline-variant focus:border-healthvault-primary focus:outline-none focus:ring-4 focus:ring-healthvault-primary/10 transition-all"
                />
              </div>

              {status === 'error' && <p className="text-healthvault-error text-sm text-center">{errorMessage}</p>}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="hv-shimmer-btn w-full py-4 font-healthvault-body text-label-md font-bold rounded-xl bg-healthvault-primary text-healthvault-on-primary shadow-lg shadow-healthvault-primary/20 hover:shadow-xl hover:shadow-healthvault-primary/30 transition-all active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'submitting' ? 'Submitting…' : 'Get Early Access'}
              </button>

              <p className="text-center text-sm text-healthvault-on-surface-variant">
                Have questions first?{' '}
                <a href="/contact" className="text-healthvault-primary font-bold hover:underline">
                  Contact Us
                </a>
              </p>
            </form>
          )}
        </div>

        <p className="text-center mt-8">
          <Link
            to="/healthvault"
            className="text-healthvault-on-surface-variant hover:text-healthvault-primary transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
