"use client";

import Image from "next/image";
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
      <div className="mb-3 text-[9px] uppercase tracking-[0.25em] text-[#a99275]">{eyebrow}</div>
      <h2 className="font-display text-4xl leading-none tracking-[-0.045em] text-[#f3eadb] md:text-5xl">{title}</h2>
      {children ? <div className="mt-4 max-w-xl text-sm leading-6 text-[#a99b88]">{children}</div> : null}
    </div>
  );
}

function ServicesPanel() {
  return (
    <>
      <SectionIntro eyebrow="Fonte pública · Fresha" title="Serviços">Valores e tempos verificados em 10/09/2026. No projeto final, estes dados devem continuar centralizados e atualizáveis.</SectionIntro>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {services.map((service) => (
          <div key={service.id} className="grid grid-cols-[1fr_auto] gap-5 py-4">
            <div>
              <div className="text-sm text-[#eee3d4]">{service.name}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#7f7160]">{service.duration}</div>
            </div>
            <div className="self-center font-display text-xl text-[#c79d5f]">{service.price}</div>
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
      <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {team.map((member, index) => (
          <div key={member.id} className="min-h-32 bg-[#12100d] p-5">
            <div className="mb-7 flex h-8 w-8 items-center justify-center rounded-full border border-[#c79d5f]/30 font-display text-sm text-[#c79d5f]">{String(index + 1).padStart(2, "0")}</div>
            <div className="font-display text-2xl tracking-[-0.03em] text-[#eee3d4]">{member.name}</div>
            <div className="mt-2 text-[9px] uppercase tracking-[0.17em] text-[#7c6e5c]">Profissional · Fresha</div>
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
      <div className="space-y-5 text-base leading-7 text-[#c3b6a4]">
        <p>A Lamim&apos;s não é tratada aqui como apenas um lugar para cortar cabelo. O ambiente, a conversa, a confiança e as relações pessoais fazem parte do produto.</p>
        <p>É justamente por isso que o MVP transforma o espaço em interface: você entra, se orienta, conhece as cadeiras, encontra as pessoas e chega ao agendamento sem sair da experiência.</p>
      </div>
      <div className="mt-8 border-l border-[#c79d5f]/50 pl-5 font-display text-2xl leading-8 text-[#eadcca]">“A Barbearia Lamim&apos;s não tem uma página na internet. Ela tem uma porta digital.”</div>
    </>
  );
}

function ReviewsPanel() {
  return (
    <>
      <SectionIntro eyebrow={`${business.fresha.rating.toFixed(1)} · ${business.fresha.reviewCount} avaliações no Fresha`} title="O ambiente também é parte do corte.">Trechos públicos recentes, verificados em 10/09/2026.</SectionIntro>
      <div className="space-y-3">
        {reviews.map((review) => (
          <blockquote key={review.id} className="rounded-3xl border border-white/10 bg-white/[.025] p-5">
            <div className="mb-3 flex gap-1 text-[#c79d5f]">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
            <p className="font-display text-xl leading-7 text-[#e9ddcd]">“{review.text}”</p>
            <footer className="mt-4 text-[9px] uppercase tracking-[0.18em] text-[#7e705e]">{review.author} · Fresha</footer>
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
      <div className="rounded-3xl border border-white/10 bg-white/[.025] p-5">
        <MapPin className="mb-6 text-[#c79d5f]" size={24} />
        <div className="font-display text-2xl leading-8 text-[#eee3d4]">{business.address.street}<br />{business.address.district} — {business.address.city} — {business.address.state}<br />{business.address.postalCode}</div>
        <div className="mt-5 text-sm text-[#9e8e79]">{business.address.place}</div>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f3eadb] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d0c0a]">Abrir rota <ExternalLink size={14} /></a>
        <a href={business.instagram} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-5 text-xs uppercase tracking-[0.14em] text-[#e9dfd0]">Instagram <Instagram size={14} /></a>
      </div>
      <div className="mt-8 border-t border-white/10 pt-5">
        {business.hours.map(([day, hours]) => (
          <div key={day} className="flex justify-between py-2 text-xs"><span className="text-[#8e806d]">{day}</span><span className="text-[#d7c9b7]">{hours}</span></div>
        ))}
      </div>
    </>
  );
}

function GalleryPanel() {
  return (
    <>
      <SectionIntro eyebrow="REAL_PUBLIC_SOURCE" title="Referências reais da Lamim's">Estas imagens públicas do Fresha orientam o MVP. A publicação final deve usar arquivos oficiais autorizados pelo cliente.</SectionIntro>
      <div className="grid gap-3 sm:grid-cols-2">
        {lamimsMedia.map((media, index) => (
          <figure key={media.id} className={index === 0 ? "sm:col-span-2" : ""}>
            <div className={`relative overflow-hidden rounded-2xl bg-[#211d17] ${index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
              <Image src={media.url} alt={`${media.label} da Barbearia Lamim's`} fill sizes={index === 0 ? "(max-width: 640px) 100vw, 700px" : "(max-width: 640px) 100vw, 340px"} className="object-cover" unoptimized />
            </div>
            <figcaption className="px-1 pt-2 text-[9px] uppercase tracking-[0.15em] text-[#7c6e5c]">{media.label} · Fresha</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

export function InfoDrawer() {
  const panel = useExperienceStore((s) => s.activePanel);
  const closePanel = useExperienceStore((s) => s.closePanel);
  if (panel === "none") return null;

  return (
    <aside className="absolute inset-0 z-[60] flex justify-end bg-black/50 backdrop-blur-sm" aria-label={panelTitles[panel]}>
      <button type="button" className="absolute inset-0 cursor-default" onClick={closePanel} aria-label="Fechar painel" />
      <div className="relative h-full w-full overflow-y-auto border-l border-white/10 bg-[#0f0e0c]/98 px-5 pb-10 pt-20 shadow-2xl sm:w-[min(760px,88vw)] sm:px-8 md:px-10">
        <button type="button" onClick={closePanel} className="focus-ring absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[#e9ddcc] transition hover:border-white/25" aria-label="Fechar"><X size={18} /></button>
        {panel === "services" && <ServicesPanel />}
        {panel === "team" && <TeamPanel />}
        {panel === "story" && <StoryPanel />}
        {panel === "reviews" && <ReviewsPanel />}
        {panel === "location" && <LocationPanel />}
        {panel === "gallery" && <GalleryPanel />}

        <div className="mt-10 border-t border-white/10 pt-5">
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#c79d5f] px-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0d0c0a] transition hover:bg-[#d9b77f]">Agendar horário no Fresha</a>
          {DEMO_MODE && <p className="mt-4 text-[9px] leading-4 tracking-[0.08em] text-[#756959]">Ambiente 3D demonstrativo — versão final será reconstruída com os assets oficiais da Lamim&apos;s.</p>}
        </div>
      </div>
    </aside>
  );
}
