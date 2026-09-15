"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 32;
const STATIC_FRAME = 15;
const STATIC_SOURCE = "/dumbbell/frames/dumbbell-016.webp";

function frameSource(index: number): string {
  return `/dumbbell/frames/dumbbell-${String(index + 1).padStart(3, "0")}.webp`;
}

export function Equipment() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const [canvasReady, setCanvasReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [staticImageFailed, setStaticImageFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frames = Array.from({ length: FRAME_COUNT }, () => new Image());
    framesRef.current = frames;
    let disposed = false;
    let abandoned = false;
    let loadedCount = 0;
    let listening = false;
    let dirty = false;
    let animationId: number | undefined;
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    let lastFrame = -1;
    let lastDpr = 0;

    function stop() {
      window.removeEventListener("load", schedulePreload);
      if (listening) {
        window.removeEventListener("scroll", markDirty);
        window.removeEventListener("resize", markDirty);
      }
      if (animationId !== undefined) window.cancelAnimationFrame(animationId);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      animationId = undefined;
      listening = false;
    }

    function abandonCanvas() {
      if (disposed || abandoned) return;
      abandoned = true;
      stop();
      setFailed(true);
    }

    function draw(index: number) {
      if (disposed || abandoned || !canvas) return;
      const image = framesRef.current[index];
      if (!image?.naturalWidth || !image.naturalHeight) return;
      const dpr = window.devicePixelRatio || 1;
      if (lastFrame === index && lastDpr === dpr) return;

      try {
        const context = canvas.getContext("2d");
        if (!context) {
          abandonCanvas();
          return;
        }
        const width = image.naturalWidth;
        const height = image.naturalHeight;
        const bufferWidth = Math.round(width * dpr);
        const bufferHeight = Math.round(height * dpr);
        if (canvas.width !== bufferWidth || canvas.height !== bufferHeight) {
          canvas.width = bufferWidth;
          canvas.height = bufferHeight;
        }
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        context.clearRect(0, 0, width, height);
        context.drawImage(image, 0, 0, width, height);
        lastFrame = index;
        lastDpr = dpr;
        setCanvasReady(true);
      } catch {
        abandonCanvas();
      }
    }

    function updateFrame() {
      animationId = undefined;
      if (disposed || abandoned || !dirty || !section) return;
      dirty = false;
      const bounds = section.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height)),
      );
      draw(Math.floor(progress * (FRAME_COUNT - 1)));
    }

    function markDirty() {
      if (disposed || abandoned) return;
      dirty = true;
      // One pending RAF at a time; no drawing or layout reads in scroll events.
      if (animationId === undefined) {
        animationId = window.requestAnimationFrame(updateFrame);
      }
    }

    function preload() {
      if (disposed || abandoned) return;
      frames.forEach((image, index) => {
        if (index !== STATIC_FRAME) image.src = frameSource(index);
      });
    }

    function schedulePreload() {
      if (disposed || abandoned) return;
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(preload);
      } else {
        timeoutId = window.setTimeout(preload, 1);
      }
    }

    frames.forEach((image, index) => {
      image.onload = () => {
        if (disposed || abandoned) return;
        loadedCount += 1;
        if (index === STATIC_FRAME) draw(STATIC_FRAME);
        if (!reducedMotion && loadedCount === FRAME_COUNT && !abandoned) {
          listening = true;
          window.addEventListener("scroll", markDirty, { passive: true });
          window.addEventListener("resize", markDirty);
          markDirty();
        }
      };
      image.onerror = abandonCanvas;
    });

    // The middle frame starts immediately; the rest wait for load and idle time.
    frames[STATIC_FRAME].src = STATIC_SOURCE;
    if (!reducedMotion) {
      if (document.readyState === "complete") schedulePreload();
      else window.addEventListener("load", schedulePreload, { once: true });
    }

    return () => {
      disposed = true;
      stop();
      frames.forEach((image) => {
        image.onload = null;
        image.onerror = null;
      });
      framesRef.current = [];
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="equipment"
      className="section-cc relative overflow-hidden bg-core-black"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 70% 50%, rgba(244,246,248,0.06), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 z-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full border-[2px] border-transparent opacity-40 lg:top-1/2"
        style={{
          background: "var(--cc-metal)",
          maskImage: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
          WebkitMaskImage: "radial-gradient(farthest-side, transparent calc(100% - 2px), black calc(100% - 2px))",
        }}
      />
      <div className="container-cc relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="t-eyebrow text-muted">03 / EQUIPMENT</p>
          <h2 className="t-h2 mt-6 text-core-white">Equipment that holds its standard.</h2>
          <p className="t-body mt-4 max-w-[46ch] text-titanium">
            Commercial-grade plates, calibrated and maintained.
          </p>
        </div>
        <div className="@container order-first w-full lg:order-none">
          <div className="relative mx-auto aspect-square min-h-[min(480px,100cqw)] w-full max-w-[480px]">
            <canvas
              ref={canvasRef}
              hidden={!canvasReady || failed}
              role="img"
              aria-label="Core Club dumbbell"
              className="absolute inset-0 h-full w-full object-contain"
            />
            {/* A native image supplies an immediate preview and the preload-failure fallback. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={STATIC_SOURCE}
              alt="Core Club dumbbell"
              loading="eager"
              hidden={(canvasReady && !failed) || staticImageFailed}
              onError={() => setStaticImageFailed(true)}
              className="absolute inset-0 h-full w-full object-contain"
            />
            {staticImageFailed && (!canvasReady || failed) && (
              <p role="status" className="t-body absolute inset-0 flex items-center justify-center text-center text-titanium">
                Equipment preview unavailable.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
