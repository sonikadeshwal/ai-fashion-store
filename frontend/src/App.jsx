import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ShoppingBag, User, Droplets, Zap, ChevronRight, Lock } from 'lucide-react';

const mockProducts = [
  { id: 1, title: 'Midnight Velvet Jacket', category: 'Outerwear', price: '$120', imgUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '98%' },
  { id: 2, title: 'Utility Cargo Pants', category: 'Streetwear', price: '$85', imgUrl: 'https://images.unsplash.com/photo-1624378441864-6da7ac246e49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '94%' },
  { id: 3, title: 'Minimalist Sneaker', category: 'Footwear', price: '$150', imgUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '91%' },
  { id: 4, title: 'Oversized Silk Shirt', category: 'Chic', price: '$95', imgUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '89%' },
  // Newly Added Makeup Items
  { id: 5, title: 'Holographic Liquid Eyeshadow', category: 'Makeup', price: '$35', imgUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '99%' },
  { id: 6, title: 'Neon Matte Lipstick', category: 'Makeup', price: '$28', imgUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '96%' },
  { id: 7, title: 'Cyber-Glow Highlighter Palette', category: 'Cosmetics', price: '$45', imgUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '93%' },
  // Newly Added Clothes
  { id: 8, title: 'Asymmetric Cyber Skirt', category: 'Avant-Garde', price: '$110', imgUrl: 'https://images.unsplash.com/photo-1583391733958-67520c5bf315?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '92%' },
  { id: 9, title: 'Geometric Trench Coat', category: 'High Fashion', price: '$280', imgUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', match: '88%' },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nlpQuery, setNlpQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products directly based on the search query mapping to titles or categories
  const filteredProducts = mockProducts.filter((product) => {
    if (!nlpQuery) return true;
    const lowerQuery = nlpQuery.toLowerCase();
    return product.title.toLowerCase().includes(lowerQuery) || 
           product.category.toLowerCase().includes(lowerQuery);
  });

  // ========== LOGIN SCREEN ==========
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden text-white font-sans">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/40 blur-[120px] animate-float opacity-50 mix-blend-screen rounded-full"></div>
        
        <div className="z-10 max-w-lg w-full px-6 animate-fade-up">
          <div className="glass-panel p-10 flex flex-col items-center border border-white/10 relative shadow-2xl">
            <div className="absolute -top-16 p-2 rounded-full glass-panel shadow-2xl animate-float">
               {/* Note: User must drag the AI generated image into frontend/public/ folder as sonika-avatar.png */}
               <img src="/sonika-avatar.png" alt="Sonika" className="w-32 h-32 rounded-full object-cover border-4 border-[#050505]" />
            </div>
            
            <h1 className="text-3xl font-extrabold mt-16 mb-2 tracking-tight bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
              Sonika's AI Fashion Boutique
            </h1>
            <p className="text-gray-400 mb-8 text-center font-light">Access your hyper-personalized neural wardrobe.</p>
            
            <div className="w-full space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input type="text" placeholder="Username (Sonika)" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input type="password" placeholder="Password" className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
              </div>
              
              <button onClick={() => setIsLoggedIn(true)} className="w-full mt-4 bg-purple-600 hover:bg-purple-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transform hover:scale-[1.02]">
                Initialize Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ========== MAIN DASHBOARD SCREEN ==========
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-purple-500/30 overflow-hidden relative">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/40 mix-blend-screen filter blur-[120px] animate-float opacity-60"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-900/30 mix-blend-screen filter blur-[150px] animate-float opacity-50" style={{ animationDelay: '2s' }}></div>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-white/10 shadow-2xl py-3' : 'bg-transparent py-6'} px-8 flex items-center justify-between`}>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="bg-white/10 p-2 rounded-xl group-hover:bg-purple-500/20 transition-colors">
            <Sparkles className="text-purple-400 w-6 h-6 group-hover:scale-110 transition-transform" />
          </div>
          <h1 className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-white via-purple-200 to-indigo-400 bg-clip-text text-transparent">Sonika's AI</h1>
        </div>
        
        <div className="relative max-w-2xl w-full mx-12 group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-transform group-focus-within:scale-110 group-focus-within:text-purple-400">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-12 pr-4 py-3.5 border border-white/10 rounded-2xl leading-5 bg-white/5 backdrop-blur-md placeholder-gray-500 text-white focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 shadow-inner group-hover:border-white/20"
            placeholder="Search by vibe, makeup, or clothing (e.g. 'lipstick', 'chic', 'jacket')..."
            value={nlpQuery}
            onChange={(e) => setNlpQuery(e.target.value)}
          />
          <div className="absolute inset-y-0 right-2 flex items-center">
            <button className="bg-purple-600 hover:bg-purple-500 text-white p-1.5 rounded-xl transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.6)]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button onClick={() => setIsLoggedIn(false)} className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
            Logout
          </button>
          <img src="/sonika-avatar.png" alt="Sonika" className="w-10 h-10 rounded-full border-2 border-purple-500 object-cover shadow-[0_0_15px_rgba(168,85,247,0.4)]" />
        </div>
      </nav>

      <main className="pt-36 px-8 max-w-[1400px] mx-auto pb-24 relative z-10">
        
        {/* ML Feed Hero Banner - Hidden while searching */}
        {!nlpQuery && (
          <section className="mb-16 glass-panel p-10 relative overflow-hidden animate-fade-up border-white/10">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/40 to-transparent"></div>
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6 backdrop-blur-md">
                <Zap className="w-4 h-4" /> Neural Beauty & Fashion Feed
              </div>
              <h2 className="text-5xl font-extrabold mb-6 tracking-tight leading-tight">Welcome back, Sonika. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Your custom matrix is ready.</span></h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl font-light leading-relaxed">Our AI analyzed your recent photo saves. We curated the perfect blend of avant-garde clothing and cyber-punk cosmetics just for you.</p>
            </div>
          </section>
        )}

        <div className="flex items-end justify-between mb-8 animate-fade-up stagger-1">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{nlpQuery ? `Search Results for "${nlpQuery}"` : "Your Intelligent Matches"}</h3>
            <p className="text-gray-500 text-sm mt-1">{filteredProducts.length} items found across clothing and makeup.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className="group relative cursor-pointer animate-fade-up">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#0a0a0a] border border-white/5 mb-4 relative shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/10 transition-all duration-500">
                
                {product.category === 'Makeup' && (
                  <div className="absolute top-4 left-4 z-10 glass-panel px-3 py-1.5 text-xs font-bold text-pink-400 border-pink-500/30 flex items-center gap-1">
                     <Sparkles className="w-3 h-3" /> AI Makeup Verify
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md text-xs font-bold border border-white/10 text-purple-300">
                  {product.match}
                </div>
                
                <img src={product.imgUrl} alt={product.title} className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <button className="w-full glass-panel border-white/20 py-3 hover:bg-white hover:text-black transition-all font-semibold rounded-xl transform translate-y-4 group-hover:translate-y-0 duration-300">
                    Try on avatar
                  </button>
                </div>
              </div>
              <div className="px-1 transform group-hover:translate-x-1 transition-transform duration-300">
                <p className="text-xs text-purple-400 font-semibold tracking-wider uppercase mb-1">{product.category}</p>
                <h4 className="text-lg font-medium text-gray-100 mb-1">{product.title}</h4>
                <p className="text-gray-400 font-medium">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
