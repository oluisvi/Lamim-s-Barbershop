import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowLeft, ExternalLink, Instagram, MapPin, Star } from "lucide-react";
import { business } from "@/data/business";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { reviews } from "@/data/reviews";
import { lamimsMedia } from "@/data/media";
import { DEMO_MODE } from "@/lib/constants";

export const metadata = {
  title: "Informações | Barbearia Lamim's",
  description: "Serviços, profissionais, avaliações, endereço e agendamento da Barbearia Lamim's em Jacareí."
};

function SectionMarker({ index, label, inverse = false }: { index: string; label: string; inverse?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.23em] ${inverse ? "text-[var(--color-material-chrome-light)]" : "text-[var(--color-text-muted)]"}`}>
      <span className={`font-display text-base tracking-normal ${inverse ? "text-white" : "text-[var(--color-text-primary)]"}`}>{index}</span>
      <span className={`h-px w-8 ${inverse ? "bg-[var(--color-material-chrome-line)]" : "bg-[var(--color-border-strong)]"}`} />
      {label}
    </div>
  );
}

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-canvas)] text-[var(--color-text-primary)]">
      <header className="sticky top-0 z-30 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] px-5 py-4 shadow-[0_10px_40px_rgba(17,17,17,.06)] backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4">
          <Link href="/" className="focus-ring inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-text-secondary)] md:text-xs">
            <ArrowLeft size={14} /> Voltar ao 3D
          </Link>
          <div className="hidden font-display text-lg tracking-[-0.03em] text-[var(--color-text-primary)] sm:block">LAMIM&apos;S</div>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full bg-[var(--color-action-primary)] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--color-text-inverse)] transition hover:bg-black sm:px-5 sm:text-[10px]">
            Agendar horário
          </a>
        </div>
      </header>

      <section className="relative min-h-[82svh] overflow-hidden px-5 pb-14 pt-14 md:px-10 md:pb-24 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(232,201,162,.42),transparent_31%),linear-gradient(180deg,#F7F4EF,#F4F0EA)]" />
        <div className="pointer-events-none absolute bottom-0 right-[-8%] h-[44%] w-[58%] border-t border-[var(--color-border-default)] opacity-60" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[68svh] max-w-[1240px] flex-col justify-between">
          <div>
            <div className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">Barbearia Lamim&apos;s · Jacareí</div>
            <h1 className="max-w-6xl font-display text-[clamp(4.1rem,10vw,9.4rem)] leading-[.77] tracking-[-0.06em] text-[var(--color-text-primary)]">A casa por trás<br />da porta digital.</h1>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base sm:leading-7">{business.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
                <Star size={15} fill="currentColor" className="text-[var(--color-botanical)]" />
                <strong>{business.fresha.rating.toFixed(1)}</strong>
                <span className="text-[var(--color-text-muted)]">· {business.fresha.reviewCount} avaliações no Fresha</span>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[var(--color-text-muted)]"><span>Role para explorar</span><ArrowDown size={13} /></div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-elevated)] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionMarker index="01" label="Serviços" />
            <h2 className="mt-5 max-w-md font-display text-[clamp(3rem,6vw,5.6rem)] leading-[.9] tracking-[-0.05em]">Escolha o ritual.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--color-text-secondary)]">Tempos e valores públicos reunidos em uma leitura direta, sem transformar serviço em card de catálogo.</p>
          </div>
          <div className="divide-y divide-[var(--color-border-default)] border-y border-[var(--color-border-default)]">
            {services.map((service, index) => (
              <div key={service.id} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 sm:gap-6 sm:py-6">
                <div className="font-display text-sm text-[var(--color-text-muted)]">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <div className="text-sm font-semibold sm:text-base">{service.name}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]">{service.duration}</div>
                </div>
                <div className="font-display text-xl text-[var(--color-text-primary)] sm:text-2xl">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-muted)] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <SectionMarker index="02" label="Profissionais" />
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6vw,5.8rem)] leading-[.9] tracking-[-0.05em]">Quem faz a Lamim&apos;s.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)] md:justify-self-end">Nomes listados publicamente no Fresha. Especialidades individuais ficam como conteúdo a validar com o cliente.</p>
          </div>
          <div className="mt-12 border-y border-[var(--color-border-default)]">
            {team.map((member, index) => (
              <div key={member.id} className="grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-[var(--color-border-subtle)] py-5 last:border-b-0 sm:grid-cols-[80px_1fr_auto] sm:gap-8 sm:py-6">
                <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">{String(index + 1).padStart(2, "0")}</div>
                <div className="font-display text-[clamp(2rem,4.5vw,4.6rem)] leading-none tracking-[-0.045em]">{member.name}</div>
                <div className="col-start-2 text-[9px] uppercase tracking-[0.18em] text-[var(--color-text-muted)] sm:col-start-auto">Profissional · Lamim&apos;s</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-canvas)] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 md:grid-cols-[1fr_.8fr] md:items-end">
            <div>
              <SectionMarker index="03" label="Ambiente real" />
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6vw,5.8rem)] leading-[.9] tracking-[-0.05em]">Referência antes da reconstrução.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--color-text-secondary)] md:justify-self-end">Fotos reais orientam luz, materiais, cadeiras, espelhos e proporções relativas deste MVP. Elas aproximam a experiência da Lamim&apos;s sem fingir uma planta exata.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-5">
            {lamimsMedia.map((media, index) => {
              const layout = index === 0
                ? "md:col-span-8"
                : index === 1
                  ? "md:col-span-4 md:pt-20"
                  : index === 2
                    ? "md:col-span-5"
                    : index === 3
                      ? "md:col-span-7 md:pt-10"
                      : "md:col-span-8 md:col-start-3";
              const aspect = index === 0 ? "aspect-[16/10]" : index === 1 ? "aspect-[4/5]" : index === 4 ? "aspect-[16/9]" : "aspect-[4/3]";
              return (
                <figure key={media.id} className={layout}>
                  <div className={`relative overflow-hidden bg-[var(--color-surface-media)] ${aspect}`}>
                    <Image src={media.url} alt={`${media.label} da Barbearia Lamim's`} fill className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]" sizes="(max-width: 768px) 100vw, 70vw" />
                  </div>
                  <figcaption className="flex justify-between gap-4 pt-2 text-[8px] uppercase tracking-[0.16em] text-[var(--color-text-muted)]"><span>{media.label}</span><span>Foto real · {String(index + 1).padStart(2, "0")}</span></figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-inverse)] px-5 py-16 text-[var(--color-text-inverse)] md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionMarker index="04" label="Avaliações" inverse />
            <div className="mt-6 font-display text-[clamp(5rem,12vw,10rem)] leading-[.72] tracking-[-0.06em]">5.0</div>
            <p className="mt-7 max-w-xs text-sm leading-6 text-[var(--color-text-inverse-muted)]">{business.fresha.reviewCount} avaliações públicas no Fresha. A prova social entra como voz, não como grade de cartões.</p>
          </div>
          <div className="border-y border-white/16">
            {reviews.map((review, index) => (
              <blockquote key={review.id} className="border-b border-white/12 py-7 last:border-b-0 sm:py-9">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-[var(--color-material-chrome-light)]">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}</div>
                  <div className="text-[8px] uppercase tracking-[0.16em] text-[var(--color-text-inverse-faint)]">{String(index + 1).padStart(2, "0")}</div>
                </div>
                <p className="max-w-3xl font-display text-[clamp(1.8rem,3.5vw,3.3rem)] leading-[1.05] tracking-[-0.035em]">“{review.text}”</p>
                <footer className="mt-5 text-[9px] uppercase tracking-[0.17em] text-[var(--color-text-inverse-subtle)]">{review.author} · Fresha</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-elevated)] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionMarker index="05" label="Localização" />
            <MapPin className="mt-8 text-[var(--color-botanical)]" />
            <h2 className="mt-6 max-w-xl font-display text-[clamp(3rem,6vw,5.6rem)] leading-[.9] tracking-[-0.05em]">Onde a visita vira real.</h2>
            <p className="mt-6 text-base leading-7 text-[var(--color-text-secondary)]">{business.address.formatted}<br />{business.address.place}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--color-action-primary)] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-text-inverse)] sm:text-xs">Abrir rota <ExternalLink size={14} /></a>
              <a href={business.instagram} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-[var(--color-border-strong)] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs">Instagram <Instagram size={14} /></a>
            </div>
          </div>
          <div className="self-end border-t border-[var(--color-border-default)] lg:border-l lg:border-t-0 lg:pl-10">
            {business.hours.map(([day, hours]) => (
              <div key={day} className="flex justify-between gap-6 border-b border-[var(--color-border-subtle)] py-4 text-sm"><span className="text-[var(--color-text-muted)]">{day}</span><span className="text-right font-medium">{hours}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--color-bg-muted)] px-5 py-24 text-center md:px-10 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(232,201,162,.5),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-[9px] uppercase tracking-[0.23em] text-[var(--color-text-muted)]">Agora só falta você</div>
          <h2 className="mt-6 font-display text-[clamp(4rem,9vw,8.8rem)] leading-[.8] tracking-[-0.06em]">A cadeira está esperando.</h2>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-6 text-[var(--color-text-secondary)]">Conheceu o espaço, viu quem está por trás dele e já sabe onde encontrar a Lamim&apos;s. O próximo passo é presencial.</p>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring mt-8 inline-flex min-h-14 items-center rounded-full bg-[var(--color-action-primary)] px-8 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--color-text-inverse)] transition hover:bg-black">Agendar meu horário</a>
          {DEMO_MODE && <p className="mx-auto mt-7 max-w-xl text-[9px] leading-5 tracking-[0.06em] text-[var(--color-text-muted)]">Ambiente 3D demonstrativo — as fotos reais orientam a direção visual, mas a versão final ainda depende de levantamento e assets oficiais da Lamim&apos;s.</p>}
        </div>
      </section>
    </main>
  );
}
