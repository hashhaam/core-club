export default function Loading() {
  return (
    <div className="container-cc section-cc flex min-h-[60vh] items-center justify-center">
      <div role="status">
        <div className="size-6 animate-spin rounded-full border border-[rgba(185,190,198,0.26)] border-t-gold motion-reduce:animate-none" />
        <h1 className="sr-only">Loading</h1>
      </div>
    </div>
  );
}
