import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Mail, MapPin, ChevronUp, Menu, X } from 'lucide-react';

const LOGO_URL = "https://raw.githubusercontent.com/kidiee558/AleksjaJankowiakPodglad/main/563440341_122153284496614308_732794193465349088_n-removebg-preview%20(1).png";
const AUTHOR_IMAGES = [
  "https://raw.githubusercontent.com/kidiee558/AleksjaJankowiakPodglad/main/autorka%20(1).jpg",
  "https://raw.githubusercontent.com/kidiee558/AleksjaJankowiakPodglad/main/autorka%20(2).jpg"
];

// Generate portfolio images array (1 to 49)
const PORTFOLIO_IMAGES = Array.from({ length: 49 }, (_, i) => `https://raw.githubusercontent.com/kidiee558/AleksjaJankowiakPodglad/main/1%20(${i + 1}).jpg`);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-main)] text-[var(--color-text-main)] selection:bg-[var(--color-accent)] selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[var(--color-bg-main)]/95 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src={LOGO_URL} alt="Aleksja Jankowiak Logo" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-[var(--color-accent)] transition-colors">O mnie</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-[var(--color-accent)] transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[var(--color-accent)] transition-colors">Cennik</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[var(--color-accent)] transition-colors">Kontakt</button>
            <a href="https://instagram.com/aleksja_fotografie" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[var(--color-accent)]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg-main)] flex flex-col items-center justify-center gap-8 text-xl uppercase tracking-widest font-medium"
          >
            <button onClick={() => scrollToSection('about')} className="hover:text-[var(--color-accent)] transition-colors">O mnie</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-[var(--color-accent)] transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-[var(--color-accent)] transition-colors">Cennik</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-[var(--color-accent)] transition-colors">Kontakt</button>
            <a href="https://instagram.com/aleksja_fotografie" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] flex items-center gap-2 mt-4">
              <Instagram size={24} /> Instagram
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src={AUTHOR_IMAGES[1]} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          {/* Delikatny gradient przyciemniający, bez ostrego przejścia w kolor tła na dole */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center mt-12">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={LOGO_URL} 
            alt="Aleksja Jankowiak Fotografia" 
            className="w-48 md:w-72 mb-8 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl md:text-5xl font-light mb-6 leading-tight text-[var(--color-bg-main)] drop-shadow-md"
          >
            Uchwycę Wasze najpiękniejsze chwile
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[1px] bg-[var(--color-accent)] mb-6"
          ></motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-sm md:text-base text-[var(--color-bg-alt)] max-w-xl mx-auto font-light leading-relaxed mb-10 drop-shadow-md"
          >
            Fotografia rodzinna, kobieca, ciążowa, dziecięca i zwierząt. 
            Wykonam dla Was pamiątkę w zgodzie z moim poczuciem estetyki oraz etyki <span className="text-[var(--color-accent)]">🤎</span>
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            onClick={() => scrollToSection('portfolio')}
            className="border border-[var(--color-accent)] text-[var(--color-bg-main)] hover:bg-[var(--color-accent)] hover:text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm transition-all duration-300"
          >
            Zobacz Portfolio
          </motion.button>
        </div>
      </section>

      {/* About Section - Minimalist & Classy with Background */}
      <section id="about" className="relative pt-24 pb-8 px-6 md:px-12 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[var(--color-bg-main)]">
          <img 
            src="https://raw.githubusercontent.com/kidiee558/AleksjaJankowiakPodglad/main/unnamed%20(1).jpg" 
            alt="O mnie tło" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          {/* Usunięto przejście na górze, zostawiono tylko na dole, aby płynnie przejść do portfolio */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg-main)]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent-dark)] font-semibold mb-4">O mnie</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-[var(--color-text-main)] mb-8">Aleksja Jankowiak</h3>
          
          <div className="w-16 h-[1px] bg-[var(--color-accent)] mx-auto mb-10"></div>
          
          <div className="space-y-6 text-[var(--color-text-main)] font-serif text-xl md:text-2xl leading-relaxed px-4">
            <p>
              Fotografia to dla mnie coś więcej niż tylko wciskanie spustu migawki. To sztuka zatrzymywania czasu, emocji i relacji, które są dla Was najważniejsze.
            </p>
            <p>
              Specjalizuję się w fotografii <span className="italic text-[var(--color-accent-dark)] font-medium">rodzinnej, kobiecej, ciążowej, dziecięcej oraz zwierząt</span>. Do każdej sesji podchodzę indywidualnie, starając się stworzyć luźną, przyjazną atmosferę, w której będziecie czuć się swobodnie.
            </p>
            <p>
              Pracuję na wysokiej jakości sprzęcie fotograficznym, co gwarantuje najwyższą jakość Waszych zdjęć. Wykonam dla Was pamiątkę w zgodzie z moim poczuciem estetyki oraz etyki. Zależy mi na naturalności, delikatności i prawdziwych emocjach.
            </p>
          </div>
          
          {/* Kreska oddzielająca sekcję O mnie od Portfolio */}
          <div className="w-full max-w-xs h-[1px] bg-[var(--color-accent)]/40 mx-auto mt-16"></div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="pt-8 pb-24 bg-[var(--color-bg-main)]">
        <div className="text-center mb-16 space-y-4 px-6">
          <h2 className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-text-main)]">Moje Prace</h3>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto font-light">
            Zajrzyj do mojego świata. Każde zdjęcie to inna historia, pełna miłości, czułości i naturalnego piękna.
          </p>
        </div>

        {/* Full-width Masonry Grid with minimal gap - 1 column mobile, 2 columns desktop */}
        <div className="w-full px-1">
          <div className="columns-1 md:columns-2 gap-1 space-y-1">
            {PORTFOLIO_IMAGES.map((img, index) => (
              <div 
                key={index}
                className="break-inside-avoid relative group overflow-hidden"
              >
                <img 
                  src={img} 
                  alt={`Portfolio ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://instagram.com/aleksja_fotografie" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white px-8 py-3 rounded-full uppercase tracking-widest text-sm transition-all duration-300"
          >
            <Instagram size={18} /> Zobacz więcej na Instagramie
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 md:px-12 bg-[var(--color-bg-alt)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-sm uppercase tracking-widest text-[var(--color-accent)] font-medium">Oferta</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[var(--color-text-main)]">Cennik Sesji</h3>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto font-light">
              Wybierz pakiet idealny dla siebie. Każda sesja jest dostosowana do Twoich indywidualnych potrzeb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto divide-y md:divide-y-0 md:divide-x divide-[var(--color-accent)]/20">
            {/* Pakiet Mini */}
            <div className="py-8 md:py-0 md:px-8 flex flex-col items-center text-center">
              <h4 className="text-2xl font-serif mb-2 text-[var(--color-text-main)]">Pakiet Mini</h4>
              <div className="w-12 h-[1px] bg-[var(--color-accent)] my-4"></div>
              <div className="text-3xl font-light mb-6 text-[var(--color-accent)]">XXX zł</div>
              <ul className="space-y-3 text-sm font-light text-[var(--color-text-muted)] mb-8 flex-grow">
                <li>5 starannie wyretuszowanych ujęć</li>
                <li>Czas trwania: do 45 minut</li>
                <li>Galeria online do wyboru zdjęć</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-colors">
                Rezerwuj
              </button>
            </div>

            {/* Pakiet Standard */}
            <div className="py-8 md:py-0 md:px-8 flex flex-col items-center text-center">
              <h4 className="text-2xl font-serif mb-2 text-[var(--color-text-main)]">Pakiet Standard</h4>
              <div className="w-12 h-[1px] bg-[var(--color-accent)] my-4"></div>
              <div className="text-3xl font-light mb-6 text-[var(--color-accent)]">XXX zł</div>
              <ul className="space-y-3 text-sm font-light text-[var(--color-text-muted)] mb-8 flex-grow">
                <li>15 starannie wyretuszowanych ujęć</li>
                <li>Czas trwania: 1 - 1.5 godziny</li>
                <li>Galeria online do wyboru zdjęć</li>
                <li>Wydruki 15x21 cm w ozdobnym pudełku</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)] px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-colors">
                Rezerwuj
              </button>
            </div>

            {/* Pakiet Premium */}
            <div className="py-8 md:py-0 md:px-8 flex flex-col items-center text-center">
              <h4 className="text-2xl font-serif mb-2 text-[var(--color-text-main)]">Pakiet Premium</h4>
              <div className="w-12 h-[1px] bg-[var(--color-accent)] my-4"></div>
              <div className="text-3xl font-light mb-6 text-[var(--color-accent)]">XXX zł</div>
              <ul className="space-y-3 text-sm font-light text-[var(--color-text-muted)] mb-8 flex-grow">
                <li>30 starannie wyretuszowanych ujęć</li>
                <li>Czas trwania: do 2 godzin</li>
                <li>Galeria online do wyboru zdjęć</li>
                <li>Wydruki 15x21 cm w ozdobnym pudełku</li>
                <li>Wszystkie dobre ujęcia z sesji (bez retuszu)</li>
              </ul>
              <button onClick={() => scrollToSection('contact')} className="border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white px-8 py-2 rounded-full text-xs uppercase tracking-widest transition-colors">
                Rezerwuj
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center text-[var(--color-text-muted)] text-sm font-light">
            <p>* Dodatkowe ujęcie poza pakietem: XXX zł / szt.</p>
            <p>* Dojazd poza granice miasta ustalany indywidualnie.</p>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer id="contact" className="bg-[var(--color-bg-main)] pt-24 pb-12 px-6 md:px-12 border-t border-[var(--color-accent)]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[var(--color-text-main)]">Porozmawiajmy o Waszej sesji</h3>
              <p className="text-[var(--color-text-muted)] font-light mb-8 max-w-md">
                Masz pytania? Chcesz zarezerwować termin? Napisz do mnie przez Instagram lub skorzystaj z poniższych danych kontaktowych.
              </p>
              
              <div className="space-y-4">
                <a href="https://instagram.com/aleksja_fotografie" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center">
                    <Instagram size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="font-light tracking-wide">@aleksja_fotografie</span>
                </a>
                <div className="flex items-center gap-4 text-[var(--color-text-main)]">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center">
                    <Mail size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="font-light tracking-wide">kontakt@aleksjafotografie.pl</span>
                </div>
                <div className="flex items-center gap-4 text-[var(--color-text-main)]">
                  <div className="w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center">
                    <MapPin size={18} className="text-[var(--color-accent)]" />
                  </div>
                  <span className="font-light tracking-wide">Działam na terenie całej Polski</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end justify-center">
              <img src={LOGO_URL} alt="Aleksja Jankowiak Logo" className="w-64 opacity-90 mb-8" referrerPolicy="no-referrer" />
              <p className="text-center md:text-right text-[var(--color-text-muted)] font-light italic max-w-sm">
                "Wykonam dla Was pamiątkę w zgodzie z moim poczuciem estetyki oraz etyki 🤎"
              </p>
            </div>
          </div>
          
          <div className="border-t border-[var(--color-accent)]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--color-text-muted)] text-sm font-light">
              &copy; {new Date().getFullYear()} Aleksja Jankowiak Fotografia. Wszelkie prawa zastrzeżone.
            </p>
            <button 
              onClick={() => scrollToSection('home')}
              className="w-10 h-10 rounded-full bg-[var(--color-bg-alt)] border border-[var(--color-accent)]/30 flex items-center justify-center text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
