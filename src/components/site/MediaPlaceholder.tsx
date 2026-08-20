type Props = {
  label: string;
  hint?: string;
  aspect?: string;
};

/** Reserved space for client-supplied media (intro videos, photos). */
export function MediaPlaceholder({ label, hint, aspect = "16 / 9" }: Props) {
  return (
    <div
      style={{ aspectRatio: aspect }}
      className="flex w-full flex-col items-center justify-center gap-3 rounded-md border border-dashed border-gold/50 bg-secondary/60 p-6 text-center"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/60">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-gold" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
      <p className="font-display text-lg text-foreground">{label}</p>
      {hint ? <p className="max-w-xs text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
