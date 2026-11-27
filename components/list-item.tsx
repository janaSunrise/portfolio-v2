export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-baseline gap-3">
      <span aria-hidden="true" className="text-foreground/50">
        +
      </span>
      <div className="min-w-0">{children}</div>
    </li>
  );
}
