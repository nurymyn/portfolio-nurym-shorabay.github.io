import type { ReactNode } from "react";
import { ArrowRight, Bot, Clapperboard, Code2, Film, Instagram, Mail, Music2, Play, Send, Sparkles, Youtube } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import aitLogo from "@/imports/______________1_.png";
import aitMark from "@/imports/____________.png";
import portrait from "@/imports/f90246b6-1a64-4ef9-91f9-4f4dd45985df.jpg";
import rekreateLogo from "@/imports/568576978_17951069202021482_4137275561340757870_n.jpg";

const navItems = [
  ["Басты бет", "#home"],
  ["Мен туралы", "#about"],
  ["Дағдылар", "#skills"],
  ["Жобалар", "#projects"],
  ["Байланыс", "#contact"],
];

const tools = [
  { name: "Midjourney", type: "visual prompts", icon: Sparkles },
  { name: "Runway", type: "AI video", icon: Clapperboard },
  { name: "Sora", type: "text-to-video", icon: Film },
  { name: "CapCut", type: "short edit", icon: Play },
  { name: "Premiere", type: "timeline edit", icon: Clapperboard },
  { name: "ChatGPT", type: "idea + script", icon: Bot },
  { name: "Python", type: "automation", icon: Code2 },
  { name: "JavaScript", type: "web basics", icon: Code2 },
];

const instagramReelUrl = "https://www.instagram.com/reel/DYmvl_5xXyS/?igsh=NGlxY2F2ZGswMjhw";

const projects = [
  { title: "Instagram Reel Showcase", meta: "AI video • Instagram Reel", gradient: "from-cyan-300 via-blue-500 to-fuchsia-500", url: instagramReelUrl },
  { title: "Future Student Reel", meta: "Storyboard • 00:24", gradient: "from-violet-400 via-indigo-500 to-cyan-400", url: instagramReelUrl },
  { title: "Synthetic Product Ad", meta: "Edit + sound • 00:15", gradient: "from-pink-400 via-fuchsia-500 to-orange-300", url: instagramReelUrl },
  { title: "Avatar Intro Pack", meta: "Motion intro • 00:10", gradient: "from-emerald-300 via-cyan-400 to-blue-500", url: instagramReelUrl },
  { title: "AI Fashion Loop", meta: "Generative loop • 00:12", gradient: "from-indigo-300 via-violet-500 to-fuchsia-400", url: instagramReelUrl },
  { title: "Practice Demo 2026", meta: "College portfolio • 00:30", gradient: "from-sky-300 via-purple-500 to-pink-500", url: instagramReelUrl },
];

const buttonSpec = [
  ["Primary", "#22D3EE → #EC4899", "48–56px height, pill radius, neon glow"],
  ["Secondary", "rgba(255,255,255,.06)", "1px border, blur surface, white text"],
  ["Card hover", "translateY(-8px)", "border cyan/pink, soft glow, color lift"],
];

function PrimaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 px-7 py-3 font-bold text-slate-950 shadow-[0_0_42px_rgba(34,211,238,.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(236,72,153,.32)]">{children}<ArrowRight className="size-5 transition group-hover:translate-x-1" /></a>;
}

function SecondaryButton({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.055] px-7 py-3 font-bold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-300/10">{children}</a>;
}

function SectionTitle({ number, kicker, title }: { number: string; kicker: string; title: string }) {
  return (
    <div className="mb-10 grid gap-5 md:grid-cols-[140px_1fr] md:items-end">
      <p className="font-mono text-sm text-cyan-300">/{number}</p>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-fuchsia-200/80">{kicker}</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">{title}</h2>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-fuchsia-400 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_17%_8%,rgba(34,211,238,.22),transparent_30%),radial-gradient(circle_at_82%_4%,rgba(236,72,153,.18),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(139,92,246,.14),transparent_32%),linear-gradient(180deg,#050613_0%,#09071d_58%,#050613_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:72px_72px]" />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#050613]/75 backdrop-blur-2xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#home" className="flex items-center gap-3">
            <span className="group relative grid size-12 place-items-center rounded-[1.15rem] bg-gradient-to-br from-cyan-300 via-sky-400 to-fuchsia-400 p-[1px] shadow-[0_0_34px_rgba(34,211,238,.26)] transition duration-300 hover:scale-105 hover:shadow-[0_0_44px_rgba(236,72,153,.28)]"><span className="absolute inset-[-5px] -z-10 rounded-[1.35rem] bg-cyan-300/15 blur-lg transition group-hover:bg-fuchsia-400/20" /><span className="grid size-full place-items-center rounded-[1.05rem] bg-white/95 ring-1 ring-white/35"><ImageWithFallback src={aitMark} alt="Astana IT University белгісі" className="size-9 object-contain drop-shadow-[0_6px_10px_rgba(5,6,19,.22)]" /></span></span>
            <span><span className="block font-display text-base font-extrabold text-white md:text-lg">Шорабай Нұрым</span><span className="block font-mono text-[10px] uppercase tracking-[0.20em] text-white/45">Astana IT University</span></span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-white/68 lg:flex">
            {navItems.map(([label, href]) => <a key={label} href={href} className="transition hover:text-cyan-200">{label}</a>)}
          </nav>
          <a href="#contact" className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">Contact Me</a>
        </div>
      </header>

      <section id="home" className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-32 md:grid-cols-[1.1fr_.9fr] md:px-10 md:pb-28 md:pt-40">
        <div className="flex flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.20em] text-fuchsia-100"><Sparkles className="size-4" /> AI video generation portfolio</div>
          <h1 className="font-display text-[clamp(3.15rem,8vw,8.7rem)] font-extrabold uppercase leading-[0.88] text-white">Шорабай <span className="block bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-violet-300 bg-clip-text text-transparent">Нұрым</span></h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-white/72 md:text-2xl">AI Video Creator | Software Engineering Student. Жасанды интеллект арқылы динамикалық видео, motion content және креативті digital storytelling жасаймын.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row"><PrimaryButton href="#projects">Жұмыстарымды көру</PrimaryButton><SecondaryButton href="#contact">Contact Me</SecondaryButton></div>
        </div>
        <div className="relative mx-auto grid min-h-[460px] w-full max-w-[560px] place-items-center md:min-h-[590px]">
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-300/35 via-fuchsia-400/25 to-violet-500/30 blur-3xl" />
          <div className="relative size-[300px] rounded-full bg-gradient-to-br from-cyan-300 via-fuchsia-400 to-violet-500 p-[4px] shadow-[0_0_90px_rgba(217,70,239,.35)] sm:size-[390px] md:size-[460px]"><div className="size-full rounded-full bg-slate-950 p-4"><ImageWithFallback src={portrait} alt="Шорабай Нұрымның профиль суреті" className="size-full rounded-full object-cover" /></div></div>
          <div className="absolute bottom-6 right-2 w-64 rounded-[1.75rem] border border-white/15 bg-slate-950/75 p-4 shadow-2xl backdrop-blur-xl"><div className="aspect-video rounded-[1.2rem] bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 p-3"><div className="grid h-full place-items-center rounded-2xl border border-white/15 bg-black/35"><Play className="size-11 fill-white text-white" /></div></div><p className="mt-3 font-mono text-xs uppercase tracking-[0.20em] text-cyan-200">video frame</p></div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <SectionTitle number="01" kicker="About Me" title="Мен туралы" />
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 text-lg leading-8 text-white/72 backdrop-blur md:p-10">Мен — Шорабай Нұрым Бақытжанұлы, 16 жастағы AI video creator және Astana IT University ЖШС колледжінің “Бағдарламалық қамтамасыз ету” мамандығы бойынша студентімін. AI видео жасауға қызығушылығым prompt арқылы идеяны бірнеше минутта визуалға айналдырудан басталды. Сонымен қатар RekreateAI компаниясында контент-мейкер бағыты бойынша стажер болып білім алдым. Қазір мен генерация, монтаж, storytelling және бағдарламалау негіздерін біріктіріп, оқу практикам үшін нақты әрі заманауи портфолио ұсынамын.</div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-fuchsia-400/10 p-7"><ImageWithFallback src={aitLogo} alt="Astana IT University колледжі" className="h-24 w-full rounded-2xl bg-white object-contain p-4" /><p className="mt-6 font-display text-2xl font-bold text-white">Astana IT University College</p><p className="mt-2 text-white/60">Software Engineering student</p></div>
            <div className="rounded-[2rem] border border-fuchsia-300/20 bg-gradient-to-br from-fuchsia-400/15 to-violet-500/10 p-7"><ImageWithFallback src={rekreateLogo} alt="RekreateAI логотипі" className="size-20 rounded-3xl object-cover shadow-[0_0_30px_rgba(236,72,153,.20)]" /><p className="mt-5 font-display text-2xl font-bold text-white">RekreateAI</p><p className="mt-2 text-white/60">Контент-мейкер стажері</p></div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <SectionTitle number="02" kicker="Tools + Coding" title="Дағдылар" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{tools.map(({ name, type, icon: Icon }) => <div key={name} className="group rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/45 hover:bg-white/[0.08] hover:shadow-[0_0_35px_rgba(34,211,238,.12)]"><div className="mb-7 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-fuchsia-400/20 text-cyan-200"><Icon className="size-6" /></div><p className="font-display text-2xl font-bold text-white">{name}</p><p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-white/45">{type}</p></div>)}</div>
      </section>

      <section id="projects" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <SectionTitle number="03" kicker="Portfolio / Projects" title="AI video галерея" />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{projects.map((p) => <article key={p.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card transition duration-300 hover:-translate-y-2 hover:border-fuchsia-300/45 hover:shadow-[0_0_45px_rgba(236,72,153,.14)]"><div className={`relative aspect-video bg-gradient-to-br ${p.gradient}`}><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.35),transparent_23%),linear-gradient(135deg,transparent,rgba(0,0,0,.48))]" /><a href={p.url} target="_blank" rel="noreferrer" aria-label={`${p.title} play`} className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-slate-950 shadow-[0_0_35px_rgba(255,255,255,.35)] transition group-hover:scale-110"><Play className="ml-1 size-7 fill-current" /></a><span className="absolute bottom-4 left-4 rounded-full bg-black/35 px-3 py-1 font-mono text-xs text-white backdrop-blur">INSTAGRAM REEL</span></div><div className="p-6"><p className="font-display text-2xl font-bold text-white">{p.title}</p><p className="mt-2 text-white/55">{p.meta}</p></div></article>)}</div>
      </section>

      <section id="contact" className="mx-auto max-w-[1440px] px-5 py-16 md:px-10">
        <SectionTitle number="04" kicker="Contact" title="Байланыс" />
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8"><Mail className="mb-8 size-10 text-cyan-200" /><h3 className="font-display text-4xl font-bold text-white">Project немесе практика туралы сөйлесейік</h3><p className="mt-4 text-white/62">Instagram, YouTube, TikTok арқылы немесе телефонмен байланысуға болады.</p><a href="tel:+77023963689" className="mt-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 font-mono text-lg font-bold text-cyan-100 transition hover:bg-cyan-300/20">+7 702 396 3689</a><div className="mt-8 flex gap-3">{[[Instagram,'Instagram'],[Youtube,'YouTube'],[Music2,'TikTok']].map(([Icon,label]) => <a key={label as string} href="#" className="grid size-14 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:-translate-y-1 hover:bg-white/10" aria-label={label as string}>{typeof Icon !== 'string' && <Icon />}</a>)}</div></div>
          <form className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur md:p-8"><div className="grid gap-4 sm:grid-cols-2"><input className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-cyan-300" placeholder="Атыңыз" /><input className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-cyan-300" value="+7 702 396 3689" readOnly aria-label="Телефон нөмірі" /></div><textarea className="mt-4 min-h-36 w-full rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-white outline-none placeholder:text-white/35 focus:border-cyan-300" placeholder="Хабарлама..." /><a href="tel:+77023963689" className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 sm:w-auto"><Send className="size-5" /> Call Me</a></form>
        </div>
      </section>

      <footer className="mx-auto max-w-[1440px] px-5 pb-8 pt-8 md:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto_auto] lg:items-start"><div><ImageWithFallback src={aitLogo} alt="Astana IT University логотипі" className="h-12 w-56 rounded-xl bg-white object-contain p-2" /><p className="mt-5 max-w-md text-white/60">AI video generation, motion content және software engineering бағытындағы жеке практика портфолиосы.</p></div><div className="grid gap-2 text-white/65">{navItems.map(([label, href]) => <a key={label} href={href} className="hover:text-cyan-200">{label}</a>)}</div><div className="flex gap-3">{[Instagram, Youtube, Music2].map((Icon, i) => <a key={i} href="#" className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white"><Icon /></a>)}</div></div><div className="mt-8 border-t border-white/10 pt-6 font-mono text-xs uppercase tracking-[0.18em] text-white/40">© 2026 Shorabai Nurym. Astana IT University College.</div>
        </div>
      </footer>
    </main>
  );
}
