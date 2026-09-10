import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Instagram, MapPin, Star } from "lucide-react";
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

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-[#0d0c0a] text-[#f3eadb]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0d0c0a]/90 px-5 py-4 backdrop-blur-xl md:px-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <Link href="/" className="focus-ring inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#c8baa7]"><ArrowLeft size={14} /> Voltar ao 3D</Link>
          <a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring rounded-full bg-[#f3eadb] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#0d0c0a]">Agendar horário</a>
        </div>
      </header>

      <section className="px-5 pb-20 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[#9d896f]">Barbearia Lamim&apos;s · Jacareí</div>
          <h1 className="max-w-5xl font-display text-[clamp(4.2rem,10vw,9rem)] leading-[.78] tracking-[-0.055em]">A casa por trás<br />da porta digital.</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-[#ae9e89]">{business.description}</p>
          <div className="mt-7 inline-flex items-center gap-2 text-sm"><Star size={15} fill="currentColor" className="text-[#c79d5f]" /><strong>{business.fresha.rating.toFixed(1)}</strong><span className="text-[#877966]">· {business.fresha.reviewCount} avaliações no Fresha</span></div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div><div className="text-[10px] uppercase tracking-[0.23em] text-[#9e886e]">Serviços</div><h2 className="mt-4 font-display text-5xl tracking-[-0.045em]">Escolha o ritual.</h2></div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((service) => <div key={service.id} className="grid grid-cols-[1fr_auto] gap-4 py-4"><div><div className="text-sm">{service.name}</div><div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#766958]">{service.duration}</div></div><div className="font-display text-xl text-[#c79d5f]">{service.price}</div></div>)}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6"><div><div className="text-[10px] uppercase tracking-[0.23em] text-[#9e886e]">Profissionais</div><h2 className="mt-4 font-display text-5xl tracking-[-0.045em]">Quem faz a Lamim&apos;s.</h2></div><p className="max-w-md text-sm leading-6 text-[#958672]">Nomes listados publicamente no Fresha. Especialidades individuais ficam como conteúdo a validar com o cliente.</p></div>
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">{team.map((member, i) => <div key={member.id} className="min-h-48 bg-[#11100d] p-6"><div className="text-[10px] tracking-[0.18em] text-[#806f5c]">{String(i+1).padStart(2,"0")}</div><div className="mt-20 font-display text-3xl tracking-[-0.04em]">{member.name}</div></div>)}</div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8"><div className="text-[10px] uppercase tracking-[0.23em] text-[#9e886e]">Ambiente real</div><h2 className="mt-4 font-display text-5xl tracking-[-0.045em]">Referência antes da reconstrução.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-[#958672]">Fotos públicas da própria Lamim&apos;s no Fresha orientam materiais, cadeiras, espelhos, fachada e proporções relativas neste MVP.</p></div>
          <div className="grid gap-3 md:grid-cols-2">{lamimsMedia.map((media, i) => <figure key={media.id} className={i===0?"md:col-span-2":""}><div className={`relative overflow-hidden rounded-[24px] bg-[#191611] ${i===0?"aspect-[16/8]":"aspect-[4/3]"}`}><Image src={media.url} alt={`${media.label} da Barbearia Lamim's`} fill className="object-cover" sizes={i===0?"100vw":"50vw"} unoptimized /></div><figcaption className="px-1 pt-2 text-[9px] uppercase tracking-[0.16em] text-[#716452]">{media.label} · fonte pública Fresha</figcaption></figure>)}</div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div><div className="text-[10px] uppercase tracking-[0.23em] text-[#9e886e]">Avaliações</div><h2 className="mt-4 font-display text-5xl tracking-[-0.045em]">5.0.</h2></div>
          <div className="space-y-3">{reviews.map((review) => <blockquote key={review.id} className="rounded-3xl border border-white/10 p-5"><div className="mb-3 flex gap-1 text-[#c79d5f]">{Array.from({length:review.rating}).map((_,i)=><Star key={i} size={12} fill="currentColor" />)}</div><p className="font-display text-2xl leading-8">“{review.text}”</p><footer className="mt-4 text-[9px] uppercase tracking-[0.17em] text-[#786a58]">{review.author} · Fresha</footer></blockquote>)}</div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div><MapPin className="text-[#c79d5f]"/><h2 className="mt-6 font-display text-5xl tracking-[-0.045em]">Onde a visita vira real.</h2><p className="mt-5 text-base leading-7 text-[#aa9b87]">{business.address.formatted}<br />{business.address.place}</p><div className="mt-6 flex flex-wrap gap-2"><a href={business.mapsUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-[#f3eadb] px-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#0d0c0a]">Abrir rota <ExternalLink size={14}/></a><a href={business.instagram} target="_blank" rel="noreferrer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full border border-white/15 px-5 text-xs uppercase tracking-[0.14em]">Instagram <Instagram size={14}/></a></div></div>
          <div className="border-t border-white/10 md:border-l md:border-t-0 md:pl-10">{business.hours.map(([day,hours])=><div key={day} className="flex justify-between border-b border-white/10 py-3 text-sm"><span className="text-[#8f806c]">{day}</span><span>{hours}</span></div>)}</div>
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-20 text-center md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl"><div className="text-[10px] uppercase tracking-[0.23em] text-[#9e886e]">Agora só falta você</div><h2 className="mt-5 font-display text-6xl leading-[.9] tracking-[-0.055em] md:text-8xl">A cadeira está esperando.</h2><a href={business.fresha.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring mt-8 inline-flex min-h-14 items-center rounded-full bg-[#c79d5f] px-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#0d0c0a]">Agendar meu horário</a>{DEMO_MODE&&<p className="mx-auto mt-7 max-w-xl text-[10px] leading-5 text-[#6f6251]">Ambiente 3D demonstrativo — a versão final deve ser recalibrada com levantamento e assets oficiais da Lamim&apos;s.</p>}</div>
      </section>
    </main>
  );
}
