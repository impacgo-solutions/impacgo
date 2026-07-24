import { useState } from 'react';
import { Link } from 'react-router-dom';

// Same production base URL the StockLyte admin app itself uses ('https://stocklyte.impacgo.com/api/v1').
const API_URL = 'https://stocklyte.impacgo.com/api/v1/auth/signup';
const APP_LOGIN_URL = 'https://stocklyte.impacgo.com/';

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
  if (!form.organizationName.trim()) return 'Please enter your company / organization name.';
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
    <section className="bg-stocklyte-background min-h-[100svh] pt-32 pb-16 px-6 flex items-center justify-center grid-pattern">
      <div className="w-full max-w-2xl relative z-10">
        <div className="text-center mb-8 md:mb-10">
          <Link
            to="/stocklyte"
            className="font-stocklyte-headline text-xl font-extrabold tracking-tight text-stocklyte-on-background"
          >
            StockLyte
          </Link>
          {status === 'success' ? (
            <>
              <h1 className="font-stocklyte-headline text-4xl font-bold text-stocklyte-on-background mt-4">
                You're all set!
              </h1>
              <p className="text-stocklyte-on-surface-variant mt-2 max-w-md mx-auto">
                Your 14-day free trial has started.
              </p>
            </>
          ) : (
            <>
              <h1 className="font-stocklyte-headline text-4xl font-bold text-stocklyte-on-background mt-4">
                Create Your Account
              </h1>
              <p className="text-stocklyte-on-surface-variant mt-2 max-w-md mx-auto">
                Start your 14-day free trial — no credit card required.
              </p>
            </>
          )}
        </div>

        <div className="glass border-gradient rounded-3xl p-6 sm:p-8 md:p-10">
          {status === 'success' ? (
            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-stocklyte-secondary/10 flex items-center justify-center text-stocklyte-secondary mx-auto">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h2 className="font-stocklyte-headline text-2xl font-bold text-stocklyte-on-background">
                Welcome to StockLyte, {form.firstName}!
              </h2>
              <p className="text-stocklyte-on-surface-variant text-sm max-w-sm mx-auto">
                Your account for <span className="font-bold">{form.organizationName}</span> has been created. Open
                the app and log in with the email and password you just set to get started.
              </p>
              <a
                href={APP_LOGIN_URL}
                className="shimmer-btn inline-block mt-4 px-8 py-3 font-bold rounded-xl bg-stocklyte-primary text-stocklyte-on-primary shadow-lg command-shadow hover:shadow-xl transition-all active:scale-95"
              >
                Open App
              </a>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-stocklyte-on-surface-variant" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    required
                    value={form.firstName}
                    onChange={update('firstName')}
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-lg bg-stocklyte-surface-container-low border border-stocklyte-outline-variant text-stocklyte-on-background focus:border-stocklyte-primary focus:outline-none focus:ring-4 focus:ring-stocklyte-primary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-stocklyte-on-surface-variant" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    value={form.lastName}
                    onChange={update('lastName')}
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-lg bg-stocklyte-surface-container-low border border-stocklyte-outline-variant text-stocklyte-on-background focus:border-stocklyte-primary focus:outline-none focus:ring-4 focus:ring-stocklyte-primary/10 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-stocklyte-on-surface-variant" htmlFor="organizationName">
                  Company / Organization Name
                </label>
                <input
                  id="organizationName"
                  required
                  value={form.organizationName}
                  onChange={update('organizationName')}
                  placeholder="Acme Distribution Co."
                  className="w-full px-4 py-3 rounded-lg bg-stocklyte-surface-container-low border border-stocklyte-outline-variant text-stocklyte-on-background focus:border-stocklyte-primary focus:outline-none focus:ring-4 focus:ring-stocklyte-primary/10 transition-all"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-stocklyte-on-surface-variant" htmlFor="email">
                    Work Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-lg bg-stocklyte-surface-container-low border border-stocklyte-outline-variant text-stocklyte-on-background focus:border-stocklyte-primary focus:outline-none focus:ring-4 focus:ring-stocklyte-primary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-stocklyte-on-surface-variant" htmlFor="phone">
                    Phone <span className="opacity-50">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-lg bg-stocklyte-surface-container-low border border-stocklyte-outline-variant text-stocklyte-on-background focus:border-stocklyte-primary focus:outline-none focus:ring-4 focus:ring-stocklyte-primary/10 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-stocklyte-on-surface-variant" htmlFor="password">
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
                    className="w-full px-4 py-3 rounded-lg bg-stocklyte-surface-container-low border border-stocklyte-outline-variant text-stocklyte-on-background focus:border-stocklyte-primary focus:outline-none focus:ring-4 focus:ring-stocklyte-primary/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-stocklyte-on-surface-variant" htmlFor="confirmPassword">
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
                    className="w-full px-4 py-3 rounded-lg bg-stocklyte-surface-container-low border border-stocklyte-outline-variant text-stocklyte-on-background focus:border-stocklyte-primary focus:outline-none focus:ring-4 focus:ring-stocklyte-primary/10 transition-all"
                  />
                </div>
              </div>

              {status === 'error' && (
                <p className="text-stocklyte-error text-sm text-center">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="shimmer-btn w-full py-4 font-bold rounded-xl bg-stocklyte-primary text-stocklyte-on-primary shadow-lg command-shadow hover:shadow-xl transition-all active:scale-95 disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === 'submitting' ? 'Creating your account…' : 'Start Free Trial'}
              </button>

              <p className="text-center text-sm text-stocklyte-on-surface-variant">
                Already have an account?{' '}
                <a href={APP_LOGIN_URL} className="text-stocklyte-primary font-bold hover:underline">
                  Log In
                </a>
              </p>
            </form>
          )}
        </div>

        <p className="text-center mt-8">
          <Link
            to="/stocklyte"
            className="text-stocklyte-on-surface-variant hover:text-stocklyte-primary transition-colors text-sm"
          >
            ← Back to Home
          </Link>
        </p>
      </div>
    </section>
  );
}
