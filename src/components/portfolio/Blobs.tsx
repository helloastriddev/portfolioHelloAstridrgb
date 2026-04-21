export function Blobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Soft organic shapes — editorial */}
      <div className="absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-3xl animate-float" />
      <div
        className="absolute top-[40%] -left-32 h-[26rem] w-[26rem] rounded-full bg-primary/15 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-10 right-[10%] h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />
      {/* Paper grain overlay */}
      <div className="absolute inset-0 grain opacity-60" />
    </div>
  );
}
