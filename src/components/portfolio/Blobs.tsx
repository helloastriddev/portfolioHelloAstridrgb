export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Big halftone dots */}
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-70 animate-blob"
        style={{ background: "radial-gradient(circle, var(--pink) 0%, transparent 65%)" }}
      />
      <div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full opacity-60 animate-blob"
        style={{
          background: "radial-gradient(circle, var(--pop-cyan) 0%, transparent 65%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-60 animate-blob"
        style={{
          background: "radial-gradient(circle, var(--accent) 0%, transparent 65%)",
          animationDelay: "-12s",
        }}
      />
      {/* Solid pop circles with comic borders */}
      <div className="absolute top-[20%] right-[8%] h-16 w-16 rounded-full bg-accent pop-border-2 shadow-soft animate-float" />
      <div
        className="absolute bottom-[25%] left-[5%] h-10 w-10 rounded-full bg-secondary pop-border-2 shadow-soft animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute top-[60%] right-[20%] h-12 w-12 rounded-full bg-primary pop-border-2 shadow-soft animate-float"
        style={{ animationDelay: "-1.5s" }}
      />
    </div>
  );
}
