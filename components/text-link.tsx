export function TextLink({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      className="underline underline-offset-4 decoration-foreground/40 hover:decoration-accent hover:decoration-2 transition-all"
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  );
}
