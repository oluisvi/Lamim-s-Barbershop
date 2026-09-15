"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ExternalLink, Instagram, MapPin, Star, X } from "lucide-react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { reviews } from "@/data/reviews";
import { lamimsMedia } from "@/data/media";
import { DEMO_MODE } from "@/lib/constants";
import { useExperienceStore } from "@/hooks/useExperienceStore";

const panelTitles = {
  none: "",
  services: "Serviços",
  team: "Profissionais",
  story: "Sobre a Lamim's",
  reviews: "Avaliações",
  location: "Localização",
  gallery: "Ambiente real"
} as const;

function SectionIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mb-7">
      <div className="mb-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--color-botanical)]">{eyebrow}</div>
      <h2 className="font-display text-4xl leading-none tracking-[-0.045em] text-[var(--color-text-primary)] md:text-5xl">{title}</h2>
      {children ? <div className="mt-4 max-w-xl text-sm leading-6 text-[var(--color-text-secondary)]">{children}</div> : null}
    </div>
  );
}

function ServicesPanel() {
  return (
    <>
      <SectionIntro eyebrow="Fonte pública · Fresha" title="Serviços">Valores e tempos verificados em 10/09/2026. No projeto final, estes dados devem continuar centralizados e atualizáveis.</SectionIntro>
      <div className="divide-y divide-[var(--color-border-subtle)] border-y border-[var(--color-border-subtle)]">
        {services.map((service) => (
          <div key={service.id} className="grid grid-cols-[1fr_auto] gap-5 py-4">
            <div>
              <div className="text-sm font-medium text-[var(--color-text-primary)]">{service.name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[var(--color-text-muted)]">{service.duration}</div>
            </div>
            <div className="self-center font-display text-xl text-[var(--color-botanical)]">{service.price}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function TeamPanel() {
  return (
    <>
      <SectionIntro eyebrow="A casa é feita por gente" title="Quem faz a Lamim's">Equipe listada publicamente no Fresha. Especialidades individuais permanecem pendentes de validação do cliente.</SectionIntro>
      <div className="border-y border-[var(--color-border-subtle)]">
        {team.map((member, index) => (
          <div key={member.id} className="grid grid-cols-[44px_1fr] items-baseline gap-3 border-b border-[var(--color-border-subtle)] py-4 last:border-b-0 sm:grid-cols-[64px_1fr_auto] sm:gap-5 sm:py-5">
            <div className="font-display text-sm text-[var(--color-botanical)]">{String(index + 1).padStart(2, "0")}</div>
            <div className="font-display text-[clamp(1.65rem,5vw,2.8rem)] leading-none tracking-[-0.04em] text-[var(--color-text-primary)]">{member.name}</div>
            <div className="col-start-2 text-[8px] uppercase tracking-[0.17em] text-[var(--color-text-muted)] sm:col-start-auto">Profissional · Fresha</div>
          </div>
        ))}
      </div>
    </>
  );
}

function StoryPanel() {
  return (
    <>
      <SectionIntro eyebrow="Mais de uma década em Jacareí" title="Um lugar para voltar.">A história pública da marca fala de técnica clássica, atendimento moderno e de um espaço pensado para ser aconchegante e familiar.</SectionIntro>
      <div className="space-y-5 text-base leading-7 text-[var(--color-text-secondary)]">
        <p>A Lamim&apos;s não é tratada aqui como apenas um lugar para cortar cabelo. O ambiente, a conversa, a confiança e as relações pessoais fazem parte do produto.</p>
        <p>É justamente por isso que o MVP transforma o espaço em interface: você entra, se orienta, conhece as cadeiras, encontra as pessoas e chega ao agendamento sem sair da experiência.</p>
      </div>
      <div className="mt-8 border-l-2 border-[var(--color-botanical)] pl-5 font-display text-2xl leading-8 text-[var(--color-text-primary)]">“A Barbearia Lamim&apos;s não tem uma página na internet. Ela tem uma porta digital.”</div>
    </>
  );
}

function ReviewsPanel() {
  return (
    <>
      <SectionIntro eyebrow={`${business.fresha.rating.toFixed(1)} · ${business.fresha.reviewCount} avaliações no Fresha`} title="O ambiente também é parte do corte.">Trechos públicos recentes, verificados em 10/09/2026.</SectionIntro>
      <div className="border-y border-[var(--color-border-subtle)]">
        {reviews.map((review, index) => (
          <blockquote key={review.id} className="border-b border-[var(--color-border-subtle)] py-5 last:border-b-0 sm:py-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex gap-1 text-[var(--color-botanical)]">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
              <span className="font-display text-sm text-[var(--color-text-muted)]">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <p className="font-display text-[clamp(1.45rem,4.5vw,2.25rem)] leading-[1.12] tracking-[-0.025em] text-[var(--color-text-primary)]">“{review.text}”</p>
            <footer className="mt-4 text-[8px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{review.author} · Fresha</footer>
          </blockquote>
        ))}
      </div>
    </>
  );
}

function LocationPanel() {
  return (
    <>
      <SectionIntro eyebrow="Centro · Jacareí" title="A porta física.">No Boulevard Jacareí Office & Mall.</SectionIntro>
      <div className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-subtle)] p-5">
        <MapPin className="mb-6 text-[var(--color-botanical)]" size={24} />
        <div className="font-display text-2xl leading-8 text-[var(--color-text-primary)]">{business.address.street}<br />{business.address.district} — {business.address.city} — {business.address.state}<br />{business.address.postalCode}</div>
        <div className="mt-5 text-sm text-[var(--color-text-secondary)]">{business.address.place}</div>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-action-primary)] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)]">Abrir rota <ExternalLink size={14} /></a>
        <a href={business.instagram} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-border-default)] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-primary)]">Instagram <Instagram size={14} /></a>
      </div>
      <div className="mt-8 border-t border-[var(--color-border-subtle)] pt-5">
        {business.hours.map(([day, hours]) => (
          <div key={day} className="flex justify-between py-2 text-xs"><span className="text-[var(--color-text-muted)]">{day}</span><span className="font-medium text-[var(--color-text-primary)]">{hours}</span></div>
        ))}
      </div>
    </>
  );
}

function GalleryPanel() {
  return (
    <>
      <SectionIntro eyebrow="REFERÊNCIA REAL" title="Referências reais da Lamim's">As fotos recebidas orientam materiais, luminosidade, mobiliário e layout percebido do MVP. A reconstrução continua aproximada até existir levantamento físico; publicação final depende da validação do cliente.</SectionIntro>
      <div className="grid gap-3 sm:grid-cols-2">
        {lamimsMedia.map((media, index) => (
          <figure key={media.id} className={index === 0 ? "sm:col-span-2" : ""}>
            <div className={`relative overflow-hidden rounded-2xl bg-[var(--color-surface-elevated)] ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <Image src={media.url} alt={`${media.label} da Barbearia Lamim's`} fill sizes={index === 0 ? "(max-width: 640px) 100vw, 700px" : "(max-width: 640px) 100vw, 340px"} className="object-cover" />
            </div>
            <figcaption className="px-1 pt-2 text-[9px] uppercase tracking-[0.15em] text-[var(--color-text-muted)]">{media.label} · Foto real</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export function InfoDrawer() {
  const panel = useExperienceStore((s) => s.activePanel);
  const closePanel = useExperienceStore((s) => s.closePanel);

  useEffect(() => {
    if (panel === "none") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [panel, closePanel]);

  if (panel === "none") return null;

  return (
    <aside className="fixed inset-0 z-[90] flex items-end justify-center bg-[var(--color-surface-overlay)] backdrop-blur-sm sm:items-stretch sm:justify-end" aria-label={panelTitles[panel]}>
      <button type="button" className="absolute inset-0 cursor-default" onClick={closePanel} aria-label="Fechar painel" />
      <div className="relative max-h-[84dvh] w-full overflow-y-auto overscroll-contain rounded-t-[28px] border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-14 text-[var(--color-text-primary)] shadow-[0_-22px_70px_rgba(17,17,17,.16)] sm:h-full sm:max-h-none sm:w-[min(760px,88vw)] sm:rounded-none sm:border-l sm:border-t-0 sm:px-8 sm:pb-10 sm:pt-20 sm:shadow-2xl md:px-10">
        <div className="absolute left-1/2 top-3 h-1 w-10 -translate-x-1/2 rounded-full bg-black/15 sm:hidden" aria-hidden="true" />
        <button type="button" onClick={closePanel} className="focus-ring absolute right-4 top-3 grid h-11 w-11 place-items-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-primary)] transition hover:bg-[var(--color-bg-subtle)] sm:right-5 sm:top-5" aria-label="Fechar"><X size={18} /></button>
        {panel === "services" && <ServicesPanel />}
        {panel === "team" && <TeamPanel />}
        {panel === "story" && <StoryPanel />}
        {panel === "reviews" && <ReviewsPanel />}
        {panel === "location" && <LocationPanel />}
        {panel === "gallery" && <GalleryPanel />}

        <div className="mt-10 border-t border-[var(--color-border-subtle)] pt-5">
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-action-primary)] px-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-inverse)] transition hover:bg-[var(--color-action-primary-hover)]">Agendar horário no Fresha</a>
          {DEMO_MODE && <p className="mt-4 text-[9px] leading-4 tracking-[0.08em] text-[var(--color-text-muted)]">Ambiente 3D demonstrativo — art direction baseada em fotos reais; medidas e reconstrução final dependem dos assets oficiais da Lamim&apos;s.</p>}
        </div>
      </div>
    </aside>
  );
}
