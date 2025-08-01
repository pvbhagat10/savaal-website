import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Menu, X, Leaf, Award, Truck, Phone, MapPin, Mail } from 'lucide-react';
import flavoured_dates from "./assets/images/flavoured_dates.png";
import flavoured_cashew from "./assets/images/flavoured_cashew.png";
import flavoured_almonds from "./assets/images/flavoured_almonds.png";
import flavoured_figs from "./assets/images/flavoured_figs.png";
import flavoured_raisins from "./assets/images/flavoured_raisins.png";
import premium_brazil_nuts from "./assets/images/premium_brazil_nuts.png";
import premium_macadamianuts from "./assets/images/premium_macadamianuts.png";
import premium_hazelnuts from "./assets/images/premium_hazelnuts.png";
import single_almonds from "./assets/images/single_almonds.png";
import premium_prunes from "./assets/images/premium_prunes.png";
import premium_apricots from "./assets/images/premium_apricots.png";
import premium_cranberries from "./assets/images/premium_cranberries.png";
import premium_pinenuts from "./assets/images/premium_pinenuts.png";
import single_cashew from "./assets/images/single_cashew.png";
import single_walnut from "./assets/images/single_walnut.png";
import premium_blueberries from "./assets/images/premium_blueberries.png";
import single_raisin from "./assets/images/single_raisin.png";
import premium_black_currant from "./assets/images/premium_black_currant.png";
import premium_goji_berries from "./assets/images/premium_goji_berries.png";
import single_date from "./assets/images/single_date.png";
import single_fig from "./assets/images/single_fig.png";
import single_coconut from "./assets/images/single_coconut.png";
import single_pistachio from "./assets/images/single_pistachio.png";
import logo from "./assets/images/saval_logo.png";
import name_logo from "./assets/images/saval_name_logo.png";

// --- Corrected and Expanded Data for Products ---
const FacebookIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = (props) => (
    <svg {...props} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const productData = {
  basic: [
    { name: 'Almonds', image: single_almonds }, 
    { name: 'Cashew Nuts', image: single_cashew  },
     { name: 'Walnuts', image: single_walnut  },
     { name: 'Raisins', image: single_raisin  },
     { name: 'Pistachios', image: single_pistachio  },
     { name: 'Dates (Khajoor)', image: single_date  },
     { name: 'Figs (Dried)', image: single_fig  },
     { name: 'Coconut Slices', image: single_coconut  }
  ],
  premium: [
    { name: 'Macadamia Nuts', image: premium_macadamianuts },
     { name: 'Brazil Nuts', image: premium_brazil_nuts  },
     { name: 'Hazelnuts', image: premium_hazelnuts },
     { name: 'Pine Nuts (Chilgoza)', image: premium_pinenuts },
     { name: 'Dried Apricots', image: premium_apricots },
     { name: 'Dried Prunes', image: premium_prunes },
     { name: 'Dried Cranberries', image: premium_cranberries },
     { name: 'Dried Blueberries', image: premium_blueberries },
     { name: 'Black Currants', image: premium_black_currant  },
     { name: 'Goji Berries', image: premium_goji_berries },
  ],
  flavored: [
    { name: 'Flavored Almonds', flavors: ['Chocolate', 'Rose', 'Kesar', 'Masala', 'Honey'], image: flavoured_almonds },
    { name: 'Flavored Cashews', flavors: ['Peri Peri', 'Cheese', 'Masala', 'Chocolate'], image: flavoured_cashew },
    { name: 'Flavored Raisins', flavors: ['Pan', 'Strawberry', 'Kesar', 'Mango'], image: flavoured_raisins },
    { name: 'Flavored Figs', flavors: ['Rose-infused', 'Honey-dipped'], image: flavoured_figs },
    { name: 'Flavored Dates', flavors: ['Stuffed with Almonds', 'Coconut', 'Chocolate-coated'], image: flavoured_dates },
  ],
  seedsAndMixes: [
    { name: 'Sunflower Seeds' }, { name: 'Pumpkin Seeds' }, { name: 'Chia Seeds' }, { name: 'Flax Seeds' }, { name: 'Muskmelon Seeds' }, { name: 'Watermelon Seeds' }, { name: 'Trail Mix' }, { name: 'Muesli' },
  ],
  giftAndPremium: [
    { name: 'Breakfast Mix', description: "Almonds, Cashew, Figs, Dates, Raisins, & Seeds." },
    { name: 'Diwali Festive Hamper', description: "A grand collection of Flavored Nuts & Chocolate Dry Fruits." },
    { name: 'Energy Bites', description: "Wholesome energy balls made from a Dates & Nuts combo." },
    { name: 'Dry Fruit Laddoo', description: "Traditional bites made with pure ghee & jaggery." },
  ],
};

const placeholderImgUrl = (name, square = false) => {
    const size = square ? '400x400' : '600x400';
    return `https://placehold.co/${size}/f3e8d3/5d4037?text=${name.replace(/\s/g, '+')}`;
}
const buyUrl = (name) => `https://www.example.com/buy/${name.toLowerCase().replace(/ /g, '-')}`;

// --- Helper Hook for Animations ---
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);
        const currentRef = ref.current;
        if (currentRef) { observer.observe(currentRef); }
        return () => { if (currentRef) { observer.unobserve(currentRef); } };
    }, [ref, options]);
    return [ref, isVisible];
};

const AnimatedSection = ({ children, className = '' }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (<div ref={ref} className={`${className} transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>{children}</div>);
};

// --- Reusable & New Section Components ---

const TopBar = () => (
    <div className="bg-amber-800 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="hidden md:flex items-center gap-4">
                <a href="#" className="flex items-center gap-1 hover:text-amber-200 transition-colors">
                    <Phone size={14} />
                    <span>+91 12345 67890</span>
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-amber-200 transition-colors">
                    <MapPin size={14} />
                    <span>Store Locator</span>
                </a>
            </div>
            <div className="flex items-center gap-4 ml-auto">
                <a href="#" className="hover:text-amber-200 transition-colors">Login</a>
                <span className="text-amber-600">|</span>
                <a href="#" className="hover:text-amber-200 transition-colors">Register</a>
            </div>
        </div>
    </div>
);


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Shop All", "Gifting", "About Us", "Contact"];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <header className="bg-white/90 backdrop-blur-lg sticky top-0 z-40 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-20">
                        <div className="flex-1 flex items-center">
                            <div className="lg:hidden">
                                <button onClick={() => setIsOpen(true)} className="text-gray-700 hover:text-amber-800 p-2 -ml-2">
                                    <Menu size={28} />
                                </button>
                            </div>
                        </div>

                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <a href="#">
                                <img src={name_logo} alt="Savaal Logo" className="h-48 md:h-56" />
                            </a>
                        </div>

                        <div className="flex-1 flex items-center justify-end">
                            <div className="flex items-center space-x-4 ml-0 lg:ml-8">
                                <a href="#" className="text-gray-600 hover:text-amber-800"><Search size={22} /></a>
                                <a href="#" className="text-gray-600 hover:text-amber-800 relative">
                                    <ShoppingBag size={22} />
                                    <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* --- Mobile Side Drawer Menu (Moved outside of header) --- */}
            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 lg:hidden ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setIsOpen(false)}
            ></div>

            {/* Side Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                     <h2 className="font-bold text-lg text-amber-800">Menu</h2>
                    <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-amber-800">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex flex-col p-4 space-y-2">
                    {navLinks.map(link => (
                        <a key={link} href="#" onClick={handleLinkClick} className="text-gray-700 hover:text-amber-800 hover:bg-amber-50 p-3 rounded-lg font-medium transition-colors">
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

const HeroSection = () => {
     const heroRef = useRef(null);
     const [activeTextIndex, setActiveTextIndex] = useState(0);
    
     const [logoScale, setLogoScale] = useState(1.2);

     const storyTexts = [
         {
             title: "सहत का साहस, स्वाद का बल",
             subtitle: "The Courage of Health, the Strength of Taste"
         },
         {
             title: "Purity. Power. Prestige.",
             subtitle: "Saval is not just a brand — it’s a promise to deliver purity-packed products that elevate your health."
         },
         {
             title: "Our Vision",
             subtitle: "To restore India’s ancient wellness traditions through powerful, natural superfoods."
         },
         {
             title: "The Soul of Saval",
             subtitle: "The logo reflects our soul: “Sah Bal” (सह बल) — the strength within."
         }
     ];

     useEffect(() => {
         const handleScroll = () => {
             if (!heroRef.current) return;
             const { top, height } = heroRef.current.getBoundingClientRect();
            
             const scrollableHeight = height - window.innerHeight;
             let scrollProgress = (-top / scrollableHeight);
             scrollProgress = Math.max(0, Math.min(1, scrollProgress));

             const textIndex = Math.floor(scrollProgress * storyTexts.length);
             setActiveTextIndex(Math.min(textIndex, storyTexts.length - 1));

             const scale = 1.2 + scrollProgress * 1;
             setLogoScale(scale);
         };

         window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll);
     }, [storyTexts.length]);

     return (
         <div ref={heroRef} className="h-[200vh] relative">
             <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-amber-50/50 overflow-hidden">
                 <div
                     className="flex flex-col items-center justify-center text-center transition-transform duration-300 ease-out"
                     style={{ transform: `scale(${logoScale})` }}
                 >
                    {/* --- THIS IS THE CORRECTED LINE --- */}
                     <img src={logo} alt="Saval Logo" className="h-48 md:h-72" />
                 </div>
                
                 <div className="absolute top-1/2 mt-56 left-1/2 -translate-x-1/2 w-full px-4">
                     {storyTexts.map((text, index) => (
                         <div
                             key={index}
                             className={`transition-opacity duration-700 absolute w-full left-0 ${index === activeTextIndex ? 'opacity-100' : 'opacity-0'}`}
                         >
                             <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-2 text-center" style={{ fontFamily: 'serif' }}>
                                 {text.title}
                             </h2>
                             <p className="text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto">
                                 {text.subtitle}
                             </p>
                         </div>
                     ))}
                 </div>
             </div>
         </div>
     );
 };

// --- DYNAMIC SECTIONS WITH HORIZONTAL SCROLL ---

const EssentialsSection = ({ title, products }) => (
    <AnimatedSection className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{title}</h2>
            <div className="flex overflow-x-auto space-x-8 pb-4 no-scrollbar">
                {products.map(p => (
                    <a href={buyUrl(p.name)} key={p.name} target="_blank" rel="noopener noreferrer" className="block group text-center flex-shrink-0 w-28 md:w-32">
                        <div className="aspect-square bg-amber-100 rounded-full flex items-center justify-center p-2 overflow-hidden shadow-inner transform group-hover:-translate-y-2 transition-transform duration-300">
                           <img src={p.image} alt={p.name} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <h3 className="mt-4 font-semibold text-gray-700 text-sm md:text-base">{p.name}</h3>
                    </a>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const PremiumProductSection = ({ title, products }) => (
    <AnimatedSection className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">{title}</h2>
            <p className="text-center text-gray-500 mb-12">Indulge in our most exquisite, globally-sourced selection.</p>
            <div className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar">
                {products.map(p => (
                    <a href={buyUrl(p.name)} key={p.name} target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0 w-52 md:w-60">
                        {/* Changed aspect ratio from square to 4:3 to reduce height. */}
                        <div className="aspect-[5/3] overflow-hidden rounded-2xl bg-amber-50 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                            <img 
                                src={p.image}
                                alt={p.name} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">{p.name}</h3>
                    </a>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const FlavoredProductSection = ({ title, products }) => (
    <AnimatedSection className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">{title}</h2>
            <p className="text-center text-gray-500 mb-12">Creative fusions of flavor for the adventurous palate.</p>
            <div className="flex overflow-x-auto space-x-8 pb-4 no-scrollbar">
                {products.map(p => (
                    <div key={p.name} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col flex-shrink-0 w-80 md:w-96">
                        <img src={p.image} alt={p.name} className="w-full h-48 object-cover"/>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{p.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {p.flavors.map(flavor => (
                                    <span key={flavor} className="bg-amber-100 text-amber-800 text-sm font-medium px-3 py-1 rounded-full">{flavor}</span>
                                ))}
                            </div>
                            <div className="mt-auto">
                                <a href={buyUrl(p.name)} className="font-semibold text-amber-800 hover:text-amber-900">View Options &rarr;</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);

const GiftSection = ({ title, products }) => (
    <AnimatedSection className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {products.map(p => (
                    <div key={p.name} className="relative rounded-3xl overflow-hidden text-white shadow-2xl group min-h-[400px] flex flex-col justify-end">
                        <img src={placeholderImgUrl(p.name)} alt={p.name} className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20"></div>
                        <div className="relative p-8 md:p-10">
                            <h3 className="text-3xl md:text-4xl font-bold">{p.name}</h3>
                            <p className="max-w-lg mt-2 mb-6 text-gray-200 text-lg">{p.description}</p>
                            <a href={buyUrl(p.name)} className="bg-white text-amber-900 font-bold py-3 px-8 rounded-full hover:bg-amber-50 transition-colors duration-300 inline-block">View Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </AnimatedSection>
);


const WhyChooseUsSection = () => (
    <AnimatedSection className="bg-amber-50 py-16 md:py-20"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid md:grid-cols-3 gap-12 text-center"><div className="flex flex-col items-center"><div className="bg-white rounded-full p-5 shadow-lg mb-4"><Award size={32} className="text-amber-700"/></div><h3 className="text-xl font-bold text-gray-800 mb-2">Premium Quality</h3><p className="text-gray-600">Every product is sourced from the best farms and rigorously quality-checked.</p></div><div className="flex flex-col items-center"><div className="bg-white rounded-full p-5 shadow-lg mb-4"><Leaf size={32} className="text-amber-700"/></div><h3 className="text-xl font-bold text-gray-800 mb-2">Naturally Processed</h3><p className="text-gray-600">We believe in retaining the natural goodness, with minimal processing.</p></div><div className="flex flex-col items-center"><div className="bg-white rounded-full p-5 shadow-lg mb-4"><Truck size={32} className="text-amber-700"/></div><h3 className="text-xl font-bold text-gray-800 mb-2">Fast & Safe Delivery</h3><p className="text-gray-600">Your favorite dry fruits, delivered to your doorstep with utmost care.</p></div></div></div></AnimatedSection>
);

const Footer = () => (
    <footer className="bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto pt-12 pb-8 px-4 sm:px-6 lg:px-8">
            
            {/* --- MODIFIED BRAND SECTION (Top) --- */}
            <div className="mb-12">
                <img src={name_logo} alt="Savaal Logo" className="h-60 md:h-72 mb-4" />
                <p className="text-amber-200 text-sm leading-relaxed">Discover nature's finest delicacies. We bring you premium quality dry fruits, sourced with care and delivered with love.</p>
            </div>

            {/* Links and Newsletter Grid (Below Brand Section) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold text-lg mb-4 tracking-wider uppercase">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">About Us</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">Gifting</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">Contact Us</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">FAQs</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-semibold text-lg mb-4 tracking-wider uppercase">Support</h4>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">Shipping Policy</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">Returns & Exchanges</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">Privacy Policy</a></li>
                        <li><a href="#" className="text-amber-200 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 inline-block">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-semibold text-lg mb-4 tracking-wider uppercase">Stay Updated</h4>
                    <p className="text-amber-200 mb-4 text-sm">Join our newsletter for exclusive offers and updates.</p>
                    <form className="flex">
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input id="email-address" type="email" placeholder="Your email" className="w-full rounded-l-md border-0 py-2 px-3 bg-amber-100 text-amber-900 placeholder-amber-500 focus:outline-none transition" />
                        <button type="submit" className="bg-amber-700 hover:bg-amber-600 rounded-r-md px-4 font-semibold transition-colors duration-300">Subscribe</button>
                    </form>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-16 border-t border-amber-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-amber-300 text-sm text-center md:text-left order-2 md:order-1">&copy; {new Date().getFullYear()} Savaal Foods. All Rights Reserved.</p>
                
                <div className="flex space-x-5 items-center order-3">
                    <a href="#" aria-label="Facebook" className="text-amber-300 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"><FacebookIcon className="h-6 w-6" /></a>
                    <a href="#" aria-label="Instagram" className="text-amber-300 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"><InstagramIcon className="h-6 w-6" /></a>
                    <a href="#" aria-label="Twitter" className="text-amber-300 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5"><TwitterIcon className="h-6 w-6" /></a>
                </div>
            </div>
        </div>
    </footer>
);

// --- Main App Component ---
export default function App() {
  return (
    <>
      {/* This style tag hides the scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
      <div className="bg-gray-50 font-sans">
        <TopBar />
        <Navbar />
        <main>
          <HeroSection />
          <div id="products">
            <EssentialsSection title="Our Essentials" products={productData.basic} />
            <PremiumProductSection title="Premium & Exotic Dry Fruits" products={productData.premium} />
            <FlavoredProductSection title="Fancy & Flavored Creations" products={productData.flavored} />
            <WhyChooseUsSection />
            <GiftSection title="Gift & Premium Mixes" products={productData.giftAndPremium} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
