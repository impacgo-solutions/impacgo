import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXTERNAL_APP_URL } from '../components/Navbar';

// Same production base URL + route the FarmYieldIQ admin app itself uses
// (lib/admin/core/api_service.dart baseUrl + POST /auth/register).
const API_URL = 'https://etor.impacgo.com/api/auth/register';

const initialForm = {
  name: '',
  organizationName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function validate(form) {
  if (!form.name.trim()) return 'Please enter your name.';
  if (!form.organizationName.trim()) return 'Please enter your organization name.';
  if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.';
  if (form.password.length < 6) return 'Password must be at least 6 characters.';
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
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          password: form.password,
          organization_name: form.organizationName.trim(),
        }),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        // response wasn't JSON — fall through to the generic message below
      }

      if (!res.ok || data?.success === false) {
        setStatus('error');
        setErrorMessage(data?.message || 'Something went wrong creating your account. Please try again.');
        return;
      }

      if (data?.data?.token) {
        localStorage.setItem('farmyieldiq_jwt_token', data.data.token);
      }

      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMessage('Unable to reach the server. Please check your connection and try again.');
    }
  };

  return (
    <section className="bg-farmyieldiq-background min-h-[100svh] pt-28 pb-16 md:pt-40 md:pb-24 px-margin-mobile md:px-gutter flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8 md:mb-10">
          <Link
            to="/farmyieldiq"
            className="font-farmyieldiq-headline text-headline-md font-extrabold text-farmyieldiq-primary tracking-tight"
          >
            FarmYieldIQ
          </Link>
          {status === 'success' ? (
            <>
              <h1 className="font-farmyieldiq-headline text-display-lg-mobile text-farmyieldiq-on-background mt-4">
                You're all set!
              </h1>
              <p className="text-farmyieldiq-on-surface-variant font-farmyieldiq-body mt-2 max-w-md mx-auto">
                Your 15-day free trial has started.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-farmyieldiq-headline text-display-lg-mobile text-farmyieldiq-on-background mt-4">
                Create Your Account
              </h1>
              <p className="text-farmyieldiq-on-surface-variant font-farmyieldiq-body mt-2 max-w-md mx-auto">
                Start your 15-day free trial — no credit card required.
              </p>
            </>
          )}
        </div>

        <div className="bg-white rounded-3xl fyiq-sophisticated-shadow p-6 sm:p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-farmyieldiq-secondary/10 flex items-center justify-center text-farmyieldiq-secondary mx-auto">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h2 className="font-farmyieldiq-headline text-headline-md text-farmyieldiq-on-background">
                Welcome to FarmYieldIQ, {form.name}!
              </h2>
              <p className="text-farmyieldiq-on-surface-variant text-sm max-w-sm mx-auto">
                Your account for <span className="font-bold">{form.organizationName}</span> has been created. Open
                the app and log in with the email and password you just set to get started.
              </p>
              <a
                href={EXTERNAL_APP_URL}
                className="fyiq-shimmer-btn inline-block mt-4 px-8 py-3 font-farmyieldiq-body text-label-md font-bold rounded-xl bg-farmyieldiq-primary text-farmyieldiq-on-primary shadow-lg shadow-farmyieldiq-primary/20 hover:shadow-xl transition-all active:scale-95"
              >
                Open App
              </a>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-farmyieldiq-body text-label-md text-farmyieldiq-on-surface-variant" htmlFor="name">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-farmyieldiq-outline-variant focus:border-farmyieldiq-primary focus:outline-none focus:ring-4 focus:ring-farmyieldiq-primary/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label
                  className="font-farmyieldiq-body text-label-md text-farmyieldiq-on-surface-variant"
                  htmlFor="organizationName"
                >
                  Organization Name
                </label>
                <input
                  id="organizationName"
                  required
                  value={form.organizationName}
                  onChange={update('organizationName')}
                  placeholder="Acme Farms"
                  className="w-full px-4 py-3 rounded-lg border border-farmyieldiq-outline-variant focus:border-farmyieldiq-primary focus:outline-none focus:ring-4 focus:ring-farmyieldiq-primary/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-farmyieldiq-body text-label-md text-farmyieldiq-on-surface-variant" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="admin@acmefarms.com"
                  className="w-full px-4 py-3 rounded-lg border border-farmyieldiq-outline-variant focus:border-farmyieldiq-primary focus:outline-none focus:ring-4 focus:ring-farmyieldiq-primary/10 transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    className="font-farmyieldiq-body text-label-md text-farmyieldiq-on-surface-variant"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    minLength={6}
                    value={form.password}
                    onChange={update('password')}
                    placeholder="At least 6 characters"
                    className="w-full px-4 py-3 rounded-lg border border-farmyieldiq-outline-variant focus:border-farmyieldiq-primary focus:outline-none focus:ring-4 focus:ring-farmyieldiq-primary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="font-farmyieldiq-body text-label-md text-farmyieldiq-on-surface-variant"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    minLength={6}
                    value={form.confirmPassword}
                    onChange={update('confirmPassword')}
                    placeholder="Re-enter your password"
                    className="w-full px-4 py-3 rounded-lg border border-farmyieldiq-outline-variant focus:border-farmyieldiq-primary focus:outline-none focus:ring-4 focus:ring-farmyieldiq-primary/10 transition-all"
                  />
                </div>
              </div>

              {status === 'error' && <p className="text-farmyieldiq-error text-sm text-center">{errorMessage}</p>}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="fyiq-shimmer-btn w-full py-4 font-farmyieldiq-body text-label-md font-bold rounded-xl bg-farmyieldiq-primary text-farmyieldiq-on-primary shadow-lg shadow-farmyieldiq-primary/20 hover:shadow-xl hover:shadow-farmyieldiq-primary/30 transition-all active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'submitting' ? 'Creating your account…' : 'Start Free Trial'}
              </button>

              <p className="text-center text-sm text-farmyieldiq-on-surface-variant">
                Already have an account?{' '}
                <a href={EXTERNAL_APP_URL} className="text-farmyieldiq-primary font-bold hover:underline">
                  Log In
                </a>
              </p>
            </form>
          )}
        </div>

        <p className="text-center mt-8">
          <Link
            to="/farmyieldiq"
            className="text-farmyieldiq-on-surface-variant hover:text-farmyieldiq-primary transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
