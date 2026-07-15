type IconProps = {
  size?: number;
  className?: string;
};

export function FacebookIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8v3.1h2.62V21h2.88Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.6 2h-3.2v13.2c0 1.5-1.2 2.7-2.7 2.7-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7.3 0 .55.04.8.12v-3.25a5.9 5.9 0 0 0-.8-.05A5.95 5.95 0 0 0 4.8 15.2a5.95 5.95 0 0 0 5.9 5.95 5.95 5.95 0 0 0 5.9-5.95V8.4a7.6 7.6 0 0 0 4.4 1.4V6.6a4.35 4.35 0 0 1-4.4-4.6Z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.19 0 4.25.85 5.8 2.4a8.2 8.2 0 0 1 2.42 5.84c0 4.55-3.71 8.25-8.26 8.25a8.3 8.3 0 0 1-4.21-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.39c0-4.55 3.71-8.24 8.3-8.24Zm-4.6 4.6c-.17 0-.44.06-.67.32-.23.26-.87.85-.87 2.08s.9 2.42 1.02 2.59c.13.17 1.77 2.78 4.36 3.79 2.15.85 2.59.68 3.06.64.47-.04 1.5-.61 1.72-1.2.21-.6.21-1.11.15-1.21-.06-.11-.23-.17-.47-.29-.25-.13-1.5-.74-1.73-.83-.23-.09-.4-.13-.57.13-.17.26-.65.83-.8 1-.15.17-.3.19-.55.06-.26-.13-1.08-.4-2.06-1.28-.76-.68-1.28-1.52-1.43-1.78-.15-.26-.02-.4.11-.53.12-.12.26-.3.4-.46.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.57-1.4-.79-1.92-.2-.5-.41-.43-.57-.44-.15-.01-.32-.01-.49-.01Z" />
    </svg>
  );
}
