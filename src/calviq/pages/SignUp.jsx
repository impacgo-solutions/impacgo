import { useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'https://api.dfms.impacgo.com/api/public/signup';
const APP_LOGIN_URL = 'https://calviq.impacgo.com/#/login';

const initialForm = {
  firstName: '',
  lastName: '',
  organizationName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

function validate(form) {
  if (!form.firstName.trim()) return 'Please enter your first name.';
  if (!form.organizationName.trim()) return 'Please enter your farm / organization name.';
  if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.';
  if (form.password.length < 8) return 'Password must be at least 8 characters.';
  if (form.password !== form.confirmPassword) return 'Passwords do not match.';
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
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: form.firstName.trim(),
          last_name: form.lastName.trim() || null,
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim() || null,
          organization_name: form.organizationName.trim(),
          password: form.password,
        }),
      });

      if (!res.ok) {
        let message = 'Something went wrong creating your account. Please try again.';
        if (res.status === 409) {
          message = 'An account with this email already exists.';
        } else {
          try {
            const data = await res.json();
            message = data?.message || data?.error || message;
          } catch {
            // response wasn't JSON — fall back to the default message
          }
        }
        setStatus('error');
        setErrorMessage(message);
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Unable to reach the server. Please check your connection and try again.');
    }
  };

  return (
    <section className="bg-background-alt min-h-[100svh] pt-28 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-gutter flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8 md:mb-10">
          <Link to="/calviq" className="font-headline-md text-headline-md font-extrabold text-primary tracking-tight">
            CALVIQ
          </Link>
          {status === 'success' ? (
            <>
              <h1 className="font-display-lg text-display-lg-mobile text-on-surface mt-4">You're all set!</h1>
              <p className="text-on-surface-variant font-body-lg mt-2 max-w-md mx-auto">
                Your 14-day free trial has started.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-display-lg text-display-lg-mobile text-on-surface mt-4">Create Your Account</h1>
              <p className="text-on-surface-variant font-body-lg mt-2 max-w-md mx-auto">
                Start your 14-day free trial — no credit card required.
              </p>
            </>
          )}
        </div>

        <div className="bg-white rounded-3xl sophisticated-shadow p-6 sm:p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Welcome to CALVIQ, {form.firstName}!
              </h2>
              <p className="text-on-surface-variant text-sm max-w-sm mx-auto">
                Your account for <span className="font-bold">{form.organizationName}</span> has been created. Open
                the app and log in with the email and password you just set to get started.
              </p>
              <a
                href={APP_LOGIN_URL}
                className="shimmer-btn inline-block mt-4 px-8 py-3 font-label-md text-label-md font-bold rounded-xl bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl transition-all active:scale-95"
              >
                Open App
              </a>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    required
                    value={form.firstName}
                    onChange={update('firstName')}
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    value={form.lastName}
                    onChange={update('lastName')}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="organizationName">
                  Farm / Organization Name
                </label>
                <input
                  id="organizationName"
                  required
                  value={form.organizationName}
                  onChange={update('organizationName')}
                  placeholder="Verma Dairy Exports"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
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
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="phone">
                    Phone <span className="text-outline">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    minLength={8}
                    value={form.password}
                    onChange={update('password')}
                    placeholder="At least 8 characters"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    minLength={8}
                    value={form.confirmPassword}
                    onChange={update('confirmPassword')}
                    placeholder="Re-enter your password"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="text-error text-sm text-center">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="shimmer-btn w-full py-4 font-label-md text-label-md font-bold rounded-xl bg-primary text-on-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'submitting' ? 'Creating your account…' : 'Start Free Trial'}
              </button>

              <p className="text-center text-sm text-on-surface-variant">
                Already have an account?{' '}
                <a href={APP_LOGIN_URL} className="text-primary font-bold hover:underline">
                  Log In
                </a>
              </p>
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
