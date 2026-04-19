export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-60 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, var(--pink) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full opacity-50 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, var(--lavender) 0%, transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-50 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, var(--beige) 0%, transparent 70%)",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
