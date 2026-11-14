import { Link } from "react-router-dom";

function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLabel,
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-100 px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white px-6 py-9 shadow-sm sm:px-10 sm:py-11">

        {/* Header */}
        <header className="mb-9 text-center">
          <Link
            to="/"
            className="mb-5 inline-flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
              M
            </span>

            <span className="text-lg font-bold tracking-tight text-black">
              MarketFlow AI
            </span>
          </Link>

          <h1 className="text-2xl font-semibold tracking-tight text-neutral-950">
            {title}
          </h1>

          <p className="mt-2 text-sm leading-3 text-neutral-500">
            {subtitle}
          </p>
        </header>

        {/* Form */}
        {children}

        {/* Footer */}
        <footer className="mt-4 border-t border-neutral-100 pt-6 text-center">
          <p className="text-sm text-neutral-500">
            {footerText}{" "}
            <Link
              to={footerLink}
              className="font-semibold text-black underline-offset-4 transition hover:underline"
            >
              {footerLabel}
            </Link>
          </p>
        </footer>
      </section>
    </main>
  );
}

export default AuthLayout;
