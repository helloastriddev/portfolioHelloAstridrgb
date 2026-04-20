export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full opacity-40 animate-blob"
        style={{ background: "radial-gradient(circle, var(--pink) 0%, transparent 65%)" }}
      />
      <div
        className="absolute bottom-0 -right-32 h-96 w-96 rounded-full opacity-40 animate-blob"
        style={{
          background: "radial-gradient(circle, var(--pop-cyan) 0%, transparent 65%)",
          animationDelay: "-8s",
        }}
      />
    </div>
  );
}
