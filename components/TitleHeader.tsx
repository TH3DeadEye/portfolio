type Props = {
  title: string;
  sub: string;
  number?: string;
};

export default function TitleHeader({ title, sub, number }: Props) {
  return (
    <div className="flex flex-col items-center gap-5 text-center">
      {number && (
        <p className="font-[family-name:var(--font-jetbrains)] text-xs text-[var(--accent)]">
          {number}
        </p>
      )}
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <h2 className="font-[family-name:var(--font-syne)] font-bold md:text-5xl text-3xl text-[var(--text)] max-w-3xl leading-tight">
        {title}
      </h2>
    </div>
  );
}
