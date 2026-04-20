export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Halftone dot patches — pop art texture */}
      <div
        className="absolute -top-10 right-10 h-64 w-64 dots-pink-bg opacity-50"
        style={{ maskImage: "radial-gradient(circle, black 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)" }}
      />
      <div
        className="absolute top-[45%] -left-10 h-72 w-72 dots-blue-bg opacity-40"
        style={{ maskImage: "radial-gradient(circle, black 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-32 right-[8%] h-56 w-56 dots-bg opacity-30"
        style={{ maskImage: "radial-gradient(circle, black 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 70%)" }}
      />
    </div>
  );
}
