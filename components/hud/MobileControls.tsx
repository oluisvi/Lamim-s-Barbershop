"use client";

import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useExperienceStore } from "@/hooks/useExperienceStore";

export function MobileControls() {
  const mode = useExperienceStore((s) => s.mode);
  const setMovement = useExperienceStore((s) => s.setMovement);

  if (mode !== "free") return null;

  const bind = (x: number, z: number) => ({
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.currentTarget.setPointerCapture(e.pointerId);
      setMovement({ x, z });
    },
    onPointerUp: () => setMovement({ x: 0, z: 0 }),
    onPointerCancel: () => setMovement({ x: 0, z: 0 }),
    onPointerLeave: () => setMovement({ x: 0, z: 0 })
  });

  const keyClass = "focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/45 text-[#f3eadb] backdrop-blur active:bg-[#c79d5f] active:text-black";

  return (
    <div className="absolute bottom-20 left-4 z-30 md:hidden">
      <div className="mb-2 max-w-[130px] text-[8px] uppercase leading-4 tracking-[0.16em] text-[#9e8f7b]">arraste a cena para olhar</div>
      <div className="grid grid-cols-3 gap-1">
        <span />
        <button aria-label="Andar para frente" className={keyClass} {...bind(0, -1)}><ChevronUp size={18} /></button>
        <span />
        <button aria-label="Andar para esquerda" className={keyClass} {...bind(-1, 0)}><ChevronLeft size={18} /></button>
        <button aria-label="Andar para trás" className={keyClass} {...bind(0, 1)}><ChevronDown size={18} /></button>
        <button aria-label="Andar para direita" className={keyClass} {...bind(1, 0)}><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}
