export default function ToolShell({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8 lg:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

export function FieldLabel({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-extrabold text-navy/75">
      {children}
    </label>
  );
}

export function ErrorText({ children }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-2 flex items-start gap-2 text-[13px] font-semibold text-rose-600">
      <span aria-hidden="true">⚠</span>
      {children}
    </p>
  );
}

export function SuccessText({ children }) {
  if (!children) return null;
  return (
    <p role="status" className="mt-2 flex items-start gap-2 text-[13px] font-semibold text-teal-600">
      <span aria-hidden="true">✓</span>
      {children}
    </p>
  );
}
