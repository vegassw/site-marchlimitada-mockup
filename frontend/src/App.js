import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Menu, X, ChevronRight, Phone, Mail, MapPin, MessageCircle, Copy, Star, ArrowRight } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_estimar-cloud/artifacts/am9rmxu9_Logo%20Final.png";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="MARCH LIMITADA" className="h-14 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="font-body text-sm tracking-wide text-[#1a1a1a] hover:text-[#C9A227] transition-colors">
              INICIO
            </Link>
            <Link to="/catalogo" className="font-body text-sm tracking-wide text-[#1a1a1a] hover:text-[#C9A227] transition-colors">
              CATÁLOGO
            </Link>
            <Link to="/nosotros" className="font-body text-sm tracking-wide text-[#1a1a1a] hover:text-[#C9A227] transition-colors">
              NOSOTROS
            </Link>
            <Link to="/contacto" className="font-body text-sm tracking-wide text-[#1a1a1a] hover:text-[#C9A227] transition-colors">
              CONTACTO
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-[#C9A227] transition-colors" data-testid="search-btn">
              <Search size={20} />
            </button>
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#1a1a1a] absolute top-20 left-0 right-0 p-6"
        >
          <nav className="flex flex-col gap-4">
            <Link to="/" className="text-white text-lg py-2 border-b border-gray-700">INICIO</Link>
            <Link to="/catalogo" className="text-white text-lg py-2 border-b border-gray-700">CATÁLOGO</Link>
            <Link to="/nosotros" className="text-white text-lg py-2 border-b border-gray-700">NOSOTROS</Link>
            <Link to="/contacto" className="text-white text-lg py-2">CONTACTO</Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center bg-white pt-20">
    <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A227] uppercase">Bienvenido a</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-tight">
              MARCH<br />
              <span className="text-[#C9A227]">LIMITADA</span>
            </h1>
            <p className="font-body text-lg text-gray-600 max-w-md leading-relaxed">
              Tu destino para productos de calidad. Hogar, tecnología, accesorios y herramientas con la mejor relación precio-calidad.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/catalogo"
              className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#C9A227] hover:text-black transition-all duration-300"
              data-testid="ver-catalogo-btn"
            >
              VER CATÁLOGO
              <ArrowRight size={18} />
            </Link>
            <a 
              href="https://wa.me/5694727116"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
              data-testid="whatsapp-hero-btn"
            >
              <MessageCircle size={18} />
              CONTACTAR
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1760072513442-9872656c1b07?crop=entropy&cs=srgb&fm=jpg&q=85&w=800"
              alt="Productos MARCH"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#C9A227] text-black p-6">
            <p className="font-heading text-4xl font-bold">200+</p>
            <p className="font-body text-sm uppercase tracking-wide">Productos</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Categories Section
const CategoriesSection = () => {
  const categories = [
    { name: "Hogar", image: "https://images.unsplash.com/photo-1760072513357-9d450e935a80?crop=entropy&cs=srgb&fm=jpg&q=85&w=600", count: 45 },
    { name: "Tecnología", image: "https://images.unsplash.com/photo-1759588071845-3864bd8cc9d3?crop=entropy&cs=srgb&fm=jpg&q=85&w=600", count: 38 },
    { name: "Accesorios", image: "https://images.unsplash.com/photo-1558038785-4fe65c791c99?crop=entropy&cs=srgb&fm=jpg&q=85&w=600", count: 52 },
    { name: "Herramientas", image: "https://images.unsplash.com/photo-1745426863308-308b92bff031?crop=entropy&cs=srgb&fm=jpg&q=85&w=600", count: 28 },
  ];
  
  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-[#C9A227] uppercase mb-4">Explora</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1a1a1a]">Categorías</h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
              data-testid={`category-${cat.name.toLowerCase()}`}
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl text-white mb-1">{cat.name}</h3>
                <p className="font-mono text-xs text-white/70">{cat.count} productos</p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/0 group-hover:bg-[#C9A227] flex items-center justify-center transition-all duration-300">
                <ChevronRight className="text-white group-hover:text-black" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Products Section
const FeaturedProducts = () => {
  const products = [
    { name: "Lámpara Moderna LED", price: 45990, salePrice: 35990, image: "https://images.unsplash.com/photo-1766756388111-e3d5cb5edafb?crop=entropy&cs=srgb&fm=jpg&q=85&w=500" },
    { name: "Audífonos Bluetooth Pro", price: 89990, salePrice: null, image: "https://images.unsplash.com/photo-1760462787799-eccd2ccdb2dd?crop=entropy&cs=srgb&fm=jpg&q=85&w=500" },
    { name: "Set Organizadores", price: 29990, salePrice: 24990, image: "https://images.unsplash.com/photo-1758995115785-d13726ac93f0?crop=entropy&cs=srgb&fm=jpg&q=85&w=500" },
    { name: "Kit Herramientas 52 pcs", price: 79990, salePrice: 59990, image: "https://images.unsplash.com/photo-1745571479305-fc943d218520?crop=entropy&cs=srgb&fm=jpg&q=85&w=500" },
  ];
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(price);
  };
  
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-[#C9A227] uppercase mb-4">Lo Mejor</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1a1a1a]">Productos Destacados</h2>
          </div>
          <Link 
            to="/catalogo" 
            className="hidden md:flex items-center gap-2 text-[#1a1a1a] hover:text-[#C9A227] transition-colors font-body text-sm tracking-wide"
          >
            VER TODOS <ArrowRight size={16} />
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              data-testid={`product-card-${index}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-[#F5F5F5]">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.salePrice && (
                  <span className="absolute top-4 left-4 bg-[#C9A227] text-black px-3 py-1 text-xs font-bold tracking-wide">
                    OFERTA
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-[#1a1a1a] text-white py-3 text-sm font-semibold tracking-wider hover:bg-[#C9A227] hover:text-black transition-colors">
                    VER PRODUCTO
                  </button>
                </div>
              </div>
              <h3 className="font-body font-medium text-[#1a1a1a] mb-2">{product.name}</h3>
              <div className="flex items-center gap-3">
                {product.salePrice ? (
                  <>
                    <span className="font-body font-semibold text-[#C9A227]">{formatPrice(product.salePrice)}</span>
                    <span className="font-body text-sm text-gray-400 line-through">{formatPrice(product.price)}</span>
                  </>
                ) : (
                  <span className="font-body font-semibold text-[#1a1a1a]">{formatPrice(product.price)}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Vision & Mission Section
const VisionMission = () => (
  <section className="py-24 bg-[#1a1a1a]">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="w-12 h-1 bg-[#C9A227]" />
          <h3 className="font-heading text-3xl md:text-4xl text-white">Nuestra Visión</h3>
          <p className="font-body text-gray-300 leading-relaxed">
            Ser la tienda líder en Chile en productos de calidad accesibles, ofreciendo variedad, 
            innovación y excelente servicio. Queremos que cada hogar tenga acceso a productos 
            que mejoren su calidad de vida.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="w-12 h-1 bg-[#C9A227]" />
          <h3 className="font-heading text-3xl md:text-4xl text-white">Nuestra Misión</h3>
          <p className="font-body text-gray-300 leading-relaxed">
            Conectar a nuestros clientes con los mejores productos del mercado a precios justos, 
            garantizando una experiencia de compra excepcional y un servicio post-venta que 
            genere confianza y fidelidad.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

// Footer
const Footer = () => (
  <footer className="bg-[#1a1a1a] border-t border-gray-800 py-16">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <img src={LOGO_URL} alt="MARCH LIMITADA" className="h-16 w-auto brightness-0 invert" />
          <p className="font-body text-gray-400 text-sm leading-relaxed">
            Tu tienda de confianza para productos de hogar, tecnología, accesorios y herramientas.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-heading text-lg text-white">Enlaces</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Inicio</Link>
            <Link to="/catalogo" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Catálogo</Link>
            <Link to="/nosotros" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Nosotros</Link>
            <Link to="/contacto" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Contacto</Link>
          </nav>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-heading text-lg text-white">Categorías</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/catalogo?cat=hogar" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Hogar</Link>
            <Link to="/catalogo?cat=tecnologia" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Tecnología</Link>
            <Link to="/catalogo?cat=accesorios" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Accesorios</Link>
            <Link to="/catalogo?cat=herramientas" className="font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">Herramientas</Link>
          </nav>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-heading text-lg text-white">Contacto</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+5694727116" className="flex items-center gap-3 font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">
              <Phone size={16} /> +56 9 4727 1116
            </a>
            <a href="mailto:contacto@marchlimitada.cl" className="flex items-center gap-3 font-body text-gray-400 hover:text-[#C9A227] transition-colors text-sm">
              <Mail size={16} /> contacto@marchlimitada.cl
            </a>
            <span className="flex items-center gap-3 font-body text-gray-400 text-sm">
              <MapPin size={16} /> Santiago, Chile
            </span>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center">
        <p className="font-body text-gray-500 text-sm">
          © 2026 MARCH LIMITADA. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

// Home Page
const HomePage = () => (
  <div className="min-h-screen bg-white" data-testid="home-page">
    <Header />
    <HeroSection />
    <CategoriesSection />
    <FeaturedProducts />
    <VisionMission />
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
