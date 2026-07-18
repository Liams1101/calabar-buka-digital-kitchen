import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MapPin, Instagram, MessageCircle, ChevronDown, Flame, UtensilsCrossed, Menu, X } from "lucide-react";

import logo from "@/assets/logo.jpg.asset.json";
import afangAsset from "@/assets/Afang-soup.jpg.asset.json";
import jollofAsset from "@/assets/Jollof-rice.jpg.asset.json";
import catfishAsset from "@/assets/Catfish.jpg.asset.json";
import amalaAsset from "@/assets/Amala_Ewedu.jpg.asset.json";
import nativeRiceAsset from "@/assets/Native-rice.jpg.asset.json";
import friedRiceAsset from "@/assets/Fried-rice.jpg.asset.json";
import pineappleAsset from "@/assets/Pineapple-fried-rice.jpg.asset.json";
import snailAsset from "@/assets/Peppered-snail.jpg.asset.json";

const afang = afangAsset.url;
const jollof = jollofAsset.url;
const grilledFish = catfishAsset.url;
const isiewu = amalaAsset.url;
const banga = nativeRiceAsset.url;
const pineappleRice = pineappleAsset.url;
const heroSpread = pineappleAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_URL = "https://wa.me/2348141838985";
const PHONE = "+2348141838985";
const INSTAGRAM = "https://www.instagram.com/calabar.buka?igsh=MWtydmJtbmtoN2VpYw==";
const ADDRESS = "87 Ndidem Usang Iso Road, opposite Vicon Pharmacy, Marian, Calabar";

type MenuItem = { name: string; desc?: string; price: string };
type MenuCategory = { id: string; title: string; blurb: string; items: MenuItem[]; featured?: boolean };

const MENU: MenuCategory[] = [
  {
    id: "specials",
    title: "Chef's Specials",
    blurb: "The dishes we're famous for.",
    featured: true,
    items: [
      { name: "Pineapple Fried Rice Combo", desc: "Pineapple fried rice with shrimps, chicken lap & fried plantain", price: "₦15,000" },
      { name: "Dirty Rice", desc: "With plantain, chicken and beef chunks", price: "₦12,000" },
      { name: "Amala & Ewedu with Omi Obe", desc: "With fish, kpomo and assorted meats", price: "₦6,000" },
      { name: "Isiewu", desc: "Spicy goat head delicacy", price: "₦15,000" },
      { name: "Grilled Fish", desc: "Whole fish grilled over wood fire", price: "₦12,000" },
    ],
  },
  {
    id: "soups",
    title: "Soups",
    blurb: "Traditional Nigerian soups simmered slow with love.",
    items: [
      { name: "Afang Soup", desc: "With goat meat and eba", price: "₦4,200" },
      { name: "Vegetable Soup", desc: "With goat meat and fufu", price: "₦4,200" },
      { name: "Banga Soup", desc: "With catfish and fufu", price: "₦9,500" },
      { name: "White Soup", desc: "With goat meat and garri or fufu", price: "₦4,200" },
      { name: "Okra Soup (Goat Meat)", desc: "With goat meat and garri", price: "₦4,200" },
      { name: "Okra Soup (Catfish)", desc: "With catfish and eba", price: "₦9,500" },
      { name: "Fisherman Soup", desc: "With middle of fish or tail & fufu (head ₦10,500)", price: "₦9,500" },
    ],
  },
  {
    id: "rice",
    title: "Rice Dishes",
    blurb: "From smoky native pots to party jollof.",
    items: [
      { name: "Native Rice", price: "₦2,500" },
      { name: "Jollof Rice", price: "₦2,500" },
      { name: "Rice & Goat Meat Pepper Soup", price: "₦4,700" },
      { name: "Fried Rice", price: "₦2,500" },
    ],
  },
  {
    id: "proteins",
    title: "Proteins",
    blurb: "Fresh cuts, grilled or stewed to order.",
    items: [
      { name: "Fried Fish", price: "₦3,000" },
      { name: "Chicken Lap", price: "₦4,500" },
      { name: "Chicken Lap (Cut)", price: "₦2,500" },
      { name: "Goat Meat", desc: "Per piece", price: "₦800" },
      { name: "Catfish Head", price: "₦10,500" },
      { name: "Catfish Middle", price: "₦9,500" },
    ],
  },
];

const GALLERY = [
  { src: afang, label: "Afang Soup" },
  { src: jollof, label: "Jollof Rice" },
  { src: grilledFish, label: "Grilled Catfish" },
  { src: isiewu, label: "Amala & Ewedu" },
  { src: banga, label: "Native Rice" },
  { src: pineappleRice, label: "Pineapple Fried Rice" },
  { src: friedRiceAsset.url, label: "Fried Rice" },
  { src: snailAsset.url, label: "Peppered Snail" },
];

function Index() {
  const [openCat, setOpenCat] = useState<string>("specials");
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-brand-black text-white">
        <div className="container-x flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Calabar Buka & Grills logo" width={44} height={44} className="h-11 w-11 rounded-full bg-white p-0.5" />
            <div className="leading-tight">
              <div className="font-display font-extrabold text-sm sm:text-base">Calabar Buka</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-flame-yellow">& Grills</div>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-display font-semibold text-sm">
            <a href="#about" className="hover:text-brand-red transition">About</a>
            <a href="#menu" className="hover:text-brand-red transition">Menu</a>
            <a href="#gallery" className="hover:text-brand-red transition">Gallery</a>
            <a href="#contact" className="hover:text-brand-red transition">Contact</a>
          </nav>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="hidden md:inline-flex btn-primary text-sm !py-2.5 !px-4">
            <MessageCircle className="h-4 w-4" /> Order
          </a>
          <button className="md:hidden text-white" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden border-t border-white/10 px-5 py-4 flex flex-col gap-3 font-display font-semibold">
            <a onClick={() => setNavOpen(false)} href="#about">About</a>
            <a onClick={() => setNavOpen(false)} href="#menu">Menu</a>
            <a onClick={() => setNavOpen(false)} href="#gallery">Gallery</a>
            <a onClick={() => setNavOpen(false)} href="#contact">Contact</a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary text-sm justify-center">
              <MessageCircle className="h-4 w-4" /> Order via WhatsApp
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-brand-black text-white">
        <img
          src={heroSpread}
          alt="Spread of Nigerian dishes"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <div className="relative container-x py-20 sm:py-28 md:py-36 grid md:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <span className="eyebrow !text-flame-yellow"><Flame className="h-3.5 w-3.5" /> Marian · Calabar</span>
            <h1 className="mt-4 font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
              Calabar <span className="text-brand-red">Buka</span> <br />
              <span className="text-flame-orange">& Grills</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-xl font-body">
              Healthy, tasty meals served with love. Traditional soups, sizzling grills and everyday specials — cooked fresh over wood fire.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary">
                <MessageCircle className="h-5 w-5" /> Order Now via WhatsApp
              </a>
              <a href="#menu" className="btn-outline">
                <UtensilsCrossed className="h-4 w-4" /> View Menu
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-brand-red/40 blur-3xl" />
              <img src={logo.url} alt="" width={360} height={360} className="relative h-72 w-72 rounded-full bg-white p-4 shadow-2xl" />
            </div>
          </div>
        </div>
        <div className="ankara-divider" />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 sm:py-28">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-brand-red shadow-warm">
              <img src={afang} alt="Traditional Afang soup" width={800} height={800} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-brand-black text-white rounded-2xl p-5 max-w-[220px] shadow-soft">
              <div className="text-flame-yellow font-display text-xs uppercase tracking-widest">Since day one</div>
              <div className="mt-1 font-display font-bold">Cooked fresh, daily.</div>
            </div>
          </div>
          <div>
            <span className="eyebrow"><span className="h-px w-8 bg-brand-red inline-block" /> About Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black leading-tight">
              A taste of Calabar, <span className="text-brand-red">made with love.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Located at <strong>87 Ndidem Usang Iso Road, opposite Vicon Pharmacy, Marian, Calabar</strong> — Calabar Buka is your go-to spot for authentic Nigerian cuisine. We serve traditional soups, rice dishes, proteins, and chef's specials prepared fresh every day.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-flame-yellow/25 border-l-4 border-brand-red p-4">
              <Flame className="h-5 w-5 text-brand-red mt-0.5 shrink-0" />
              <p className="text-sm font-semibold text-brand-black">Please note: Payment validates order.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="ankara-divider" />

      {/* MENU */}
      <section id="menu" className="py-20 sm:py-28 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center"><Flame className="h-3.5 w-3.5" /> Our Menu</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Straight from the pot.</h2>
            <p className="mt-4 text-muted-foreground">Tap a category to explore what's cooking today.</p>
          </div>

          <div className="mt-12 max-w-3xl mx-auto space-y-4">
            {MENU.map((cat) => {
              const isOpen = openCat === cat.id;
              return (
                <div
                  key={cat.id}
                  className={`rounded-2xl border-2 overflow-hidden transition-all ${
                    cat.featured
                      ? "border-brand-red bg-gradient-to-br from-brand-red/5 to-flame-yellow/20"
                      : "border-black/10 bg-brand-cream"
                  }`}
                >
                  <button
                    onClick={() => setOpenCat(isOpen ? "" : cat.id)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center font-display font-black ${
                        cat.featured ? "bg-brand-red text-white" : "bg-brand-black text-flame-yellow"
                      }`}>
                        {cat.title.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl flex items-center gap-2">
                          {cat.title}
                          {cat.featured && <span className="text-[10px] bg-brand-red text-white px-2 py-0.5 rounded-full uppercase tracking-widest">Signature</span>}
                        </h3>
                        <p className="text-sm text-muted-foreground">{cat.blurb}</p>
                      </div>
                    </div>
                    <ChevronDown className={`h-6 w-6 text-brand-red transition-transform shrink-0 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6">
                      <ul className="divide-y divide-black/10">
                        {cat.items.map((item) => (
                          <li key={item.name} className="py-4 flex items-start justify-between gap-4">
                            <div>
                              <div className="font-display font-bold text-base sm:text-lg">{item.name}</div>
                              {item.desc && <div className="text-sm text-muted-foreground mt-0.5">{item.desc}</div>}
                            </div>
                            <div className="font-display font-black text-brand-red whitespace-nowrap">{item.price}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <a href={WA_URL} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle className="h-5 w-5" /> Place your order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className="ankara-divider" />

      {/* GALLERY */}
      <section id="gallery" className="py-20 sm:py-28">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow justify-center">Gallery</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">A feast for the eyes.</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {GALLERY.map((g) => (
              <div key={g.label} className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft">
                <img
                  src={g.src}
                  alt={g.label}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-display font-extrabold text-lg sm:text-xl">{g.label}</div>
                  <div className="h-1 w-8 bg-brand-red mt-2 group-hover:w-16 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="ankara-divider" />

      {/* CONTACT */}
      <section id="contact" className="py-20 sm:py-28 bg-brand-black text-white">
        <div className="container-x grid md:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow !text-flame-yellow">Contact</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-black">Come eat with us.</h2>
            <p className="mt-4 text-white/80 max-w-md">
              Walk in, call ahead, or send your order on WhatsApp. We'll have your plate hot and ready.
            </p>

            <div className="mt-8 space-y-5">
              <a href={`tel:${PHONE}`} className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-full bg-brand-red flex items-center justify-center shrink-0"><Phone className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-flame-yellow">Call</div>
                  <div className="font-display font-bold text-lg group-hover:text-brand-red transition">+234 814 183 8985</div>
                </div>
              </a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-full bg-brand-red flex items-center justify-center shrink-0"><MessageCircle className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-flame-yellow">WhatsApp</div>
                  <div className="font-display font-bold text-lg group-hover:text-brand-red transition">Chat & order now</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-full bg-brand-red flex items-center justify-center shrink-0"><MapPin className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-flame-yellow">Visit</div>
                  <div className="font-display font-bold text-lg">{ADDRESS}</div>
                </div>
              </div>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                <div className="h-11 w-11 rounded-full bg-brand-red flex items-center justify-center shrink-0"><Instagram className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-flame-yellow">Instagram</div>
                  <div className="font-display font-bold text-lg group-hover:text-brand-red transition">@calabar.buka</div>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border-4 border-brand-red shadow-warm min-h-[380px]">
            <iframe
              title="Calabar Buka & Grills location"
              src="https://www.google.com/maps?q=87+Ndidem+Usang+Iso+Road,+Calabar,+Nigeria&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: 380, border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-black text-white/70 border-t border-white/10">
        <div className="ankara-divider" />
        <div className="container-x py-12 grid md:grid-cols-3 gap-8 items-start">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" width={56} height={56} className="h-14 w-14 rounded-full bg-white p-1" />
            <div>
              <div className="font-display font-extrabold text-white text-lg">Calabar Buka & Grills</div>
              <div className="text-xs uppercase tracking-widest text-flame-yellow">Healthy · Tasty · Served with love</div>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-display font-bold text-white mb-2">Follow the flavor</div>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-brand-red">
              <Instagram className="h-4 w-4" /> @calabar.buka
            </a>
          </div>
          <div className="text-sm">
            <div className="font-display font-bold text-white mb-2">Tag us</div>
            <div className="flex flex-wrap gap-2">
              {["#CalabarBuka", "#SundaySpecial", "#AfangSoup", "#SundayBrunch"].map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/10 text-flame-yellow font-semibold">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Calabar Buka & Grills. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
