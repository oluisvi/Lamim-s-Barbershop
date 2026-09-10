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

function SectionMarker({ index, label, dark = false }: { index: string; label: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.23em] ${dark ? "text-[#bda88c]" : "text-[#805c3c]"}`}>
      <span className={`font-display text-base tracking-normal ${dark ? "text-[#f0dcc0]" : "text-[#7b4f31]"}`}>{index}</span>
      <span className={`h-px w-8 ${dark ? "bg-[#d0ad78]/50" : "bg-[#8a5b34]/35"}`} />
      {label}
    </div>
  );
}

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#201a15] text-[#fff8ec]">
      <header className="sticky top-0 z-30 border-b border-[#f3eadb]/10 bg-[#17130f]/88 px-5 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4">
          <Link href="/" className="focus-ring inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d8c8b2] md:text-xs"><ArrowLeft size={14} /> Voltar ao 3D</Link>
          <div className="hidden font-display text-lg tracking-[-0.03em] text-[#fff8ec] sm:block">LAMIM&apos;S</div>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full bg-[#f3eadb] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#211b16] transition hover:bg-white sm:px-5 sm:text-[10px]">Agendar horário</a>
        </div>
      </header>

      <section className="relative min-h-[82svh] overflow-hidden px-5 pb-14 pt-14 md:px-10 md:pb-24 md:pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(199,157,95,.20),transparent_30%),linear-gradient(180deg,#201a15,#17130f)]" />
        <div className="relative mx-auto flex min-h-[68svh] max-w-[1240px] flex-col justify-between">
          <div>
            <div className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[#c9b89f]">Barbearia Lamim&apos;s · Jacareí</div>
            <h1 className="max-w-6xl font-display text-[clamp(4.1rem,10vw,9.4rem)] leading-[.77] tracking-[-0.06em] text-[#fff8ec]">A casa por trás<br />da porta digital.</h1>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="max-w-2xl text-sm leading-6 text-[#d5c4ad] sm:text-base sm:leading-7">{business.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm"><Star size={15} fill="currentColor" className="text-[#c79d5f]" /><strong>{business.fresha.rating.toFixed(1)}</strong><span className="text-[#b9aa96]">· {business.fresha.reviewCount} avaliações no Fresha</span></div>
            </div>
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#ad9a80]"><span>Role para explorar</span><ArrowDown size={13} /></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1e7d7] px-5 py-16 text-[#2a211a] md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionMarker index="01" label="Serviços" />
            <h2 className="mt-5 max-w-md font-display text-[clamp(3rem,6vw,5.6rem)] leading-[.9] tracking-[-0.05em]">Escolha o ritual.</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#6d5b4e]">Tempos e valores públicos reunidos em uma leitura direta, sem transformar serviço em card de catálogo.</p>
          </div>
          <div className="divide-y divide-[#2a211a]/14 border-y border-[#2a211a]/14">
            {services.map((service, index) => (
              <div key={service.id} className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 sm:gap-6 sm:py-6">
                <div className="font-display text-sm text-[#97704c]">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <div className="text-sm font-semibold sm:text-base">{service.name}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[#77675a]">{service.duration}</div>
                </div>
                <div className="font-display text-xl text-[#8a5b34] sm:text-2xl">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#211a15] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <SectionMarker index="02" label="Profissionais" dark />
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6vw,5.8rem)] leading-[.9] tracking-[-0.05em] text-[#fff8ec]">Quem faz a Lamim&apos;s.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#c5b59f] md:justify-self-end">Nomes listados publicamente no Fresha. Especialidades individuais ficam como conteúdo a validar com o cliente.</p>
          </div>
          <div className="mt-12 border-y border-[#f3eadb]/12">
            {team.map((member, index) => (
              <div key={member.id} className="grid grid-cols-[auto_1fr] items-baseline gap-5 border-b border-[#f3eadb]/10 py-5 last:border-b-0 sm:grid-cols-[80px_1fr_auto] sm:gap-8 sm:py-6">
                <div className="text-[9px] uppercase tracking-[0.18em] text-[#a98d6b]">{String(index + 1).padStart(2, "0")}</div>
                <div className="font-display text-[clamp(2rem,4.5vw,4.6rem)] leading-none tracking-[-0.045em] text-[#fff8ec]">{member.name}</div>
                <div className="col-start-2 text-[9px] uppercase tracking-[0.18em] text-[#93816a] sm:col-start-auto">Profissional · Lamim&apos;s</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eee3d2] px-5 py-16 text-[#2a211a] md:px-10 md:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 md:grid-cols-[1fr_.8fr] md:items-end">
            <div>
              <SectionMarker index="03" label="Ambiente real" />
              <h2 className="mt-5 max-w-3xl font-display text-[clamp(3rem,6vw,5.8rem)] leading-[.9] tracking-[-0.05em]">Referência antes da reconstrução.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#645448] md:justify-self-end">Fotos públicas da própria Lamim&apos;s no Fresha orientam materiais, cadeiras, espelhos, fachada e proporções relativas neste MVP.</p>
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
                  <div className={`relative overflow-hidden bg-[#d8ccbb] ${aspect}`}>
                    <Image src={media.url} alt={`${media.label} da Barbearia Lamim's`} fill className="object-cover transition-transform duration-700 ease-out hover:scale-[1.015]" sizes="(max-width: 768px) 100vw, 70vw" unoptimized />
                  </div>
                  <figcaption className="flex justify-between gap-4 pt-2 text-[8px] uppercase tracking-[0.16em] text-[#756457]"><span>{media.label}</span><span>Fresha · {String(index + 1).padStart(2, "0")}</span></figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#241d17] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionMarker index="04" label="Avaliações" dark />
            <div className="mt-6 font-display text-[clamp(5rem,12vw,10rem)] leading-[.72] tracking-[-0.06em] text-[#fff8ec]">5.0</div>
            <p className="mt-7 max-w-xs text-sm leading-6 text-[#bda98f]">{business.fresha.reviewCount} avaliações públicas no Fresha. A prova social entra como voz, não como grade de cartões.</p>
          </div>
          <div className="border-y border-[#f3eadb]/12">
            {reviews.map((review, index) => (
              <blockquote key={review.id} className="border-b border-[#f3eadb]/10 py-7 last:border-b-0 sm:py-9">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex gap-1 text-[#c79d5f]">{Array.from({length:review.rating}).map((_,i)=><Star key={i} size={12} fill="currentColor" />)}</div>
                  <div className="text-[8px] uppercase tracking-[0.16em] text-[#8f7a61]">{String(index + 1).padStart(2, "0")}</div>
                </div>
                <p className="max-w-3xl font-display text-[clamp(1.8rem,3.5vw,3.3rem)] leading-[1.05] tracking-[-0.035em] text-[#fff8ec]">“{review.text}”</p>
                <footer className="mt-5 text-[9px] uppercase tracking-[0.17em] text-[#a9957b]">{review.author} · Fresha</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1e7d7] px-5 py-16 text-[#2a211a] md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionMarker index="05" label="Localização" />
            <MapPin className="mt-8 text-[#8a5b34]" />
            <h2 className="mt-6 max-w-xl font-display text-[clamp(3rem,6vw,5.6rem)] leading-[.9] tracking-[-0.05em]">Onde a visita vira real.</h2>
            <p className="mt-6 text-base leading-7 text-[#645448]">{business.address.formatted}<br />{business.address.place}</p>
            <div className="mt-7 flex flex-wrap gap-2"><a href={business.mapsUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#2a211a] px-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#fff8ec] sm:text-xs">Abrir rota <ExternalLink size={14}/></a><a href={business.instagram} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-[#2a211a]/20 px-5 text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs">Instagram <Instagram size={14}/></a></div>
          </div>
          <div className="self-end border-t border-[#2a211a]/14 lg:border-l lg:border-t-0 lg:pl-10">{business.hours.map(([day,hours])=><div key={day} className="flex justify-between gap-6 border-b border-[#2a211a]/12 py-4 text-sm"><span className="text-[#78675a]">{day}</span><span className="text-right font-medium">{hours}</span></div>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17130f] px-5 py-24 text-center md:px-10 md:py-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(199,157,95,.17),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl">
          <div className="text-[9px] uppercase tracking-[0.23em] text-[#c2ad92]">Agora só falta você</div>
          <h2 className="mt-6 font-display text-[clamp(4rem,9vw,8.8rem)] leading-[.8] tracking-[-0.06em] text-[#fff8ec]">A cadeira está esperando.</h2>
          <p className="mx-auto mt-7 max-w-lg text-sm leading-6 text-[#c9b79e]">Conheceu o espaço, viu quem está por trás dele e já sabe onde encontrar a Lamim&apos;s. O próximo passo é presencial.</p>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring mt-8 inline-flex min-h-14 items-center rounded-full bg-[#c79d5f] px-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#17130f] transition hover:bg-[#dab57e]">Agendar meu horário</a>
          {DEMO_MODE&&<p className="mx-auto mt-7 max-w-xl text-[9px] leading-5 tracking-[0.06em] text-[#a9977f]">Ambiente 3D demonstrativo — a versão final deve ser recalibrada com levantamento e assets oficiais da Lamim&apos;s.</p>}
        </div>
      </section>
    </main>
  );
}
