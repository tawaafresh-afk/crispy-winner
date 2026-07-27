export function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 8.5h2V5.2c-.5-.07-1.6-.2-2.8-.2C11.6 5 10 6.4 10 9v2.5H7.3V15H10v6h3v-6h2.6l.4-3.5H13V9.3c0-.6.2-.8.9-.8Z" />
    </svg>
  );
}

export function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 4v10.2a2.8 2.8 0 1 1-2.2-2.74" strokeLinecap="round" />
      <path d="M14 4c.4 2.2 2 3.8 4 4" strokeLinecap="round" />
    </svg>
  );
}
