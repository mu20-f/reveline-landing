"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, MapPin, Mail, Phone, TrendingUp, Target, 
  Zap, RefreshCw, Users, ShieldCheck, ArrowRight, Globe,
  Sword, Wind, Layers, Trophy, Youtube, Linkedin, Facebook, Instagram 
} from 'lucide-react';

export default function RevelineLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Games', id: 'games' },
    { name: 'Vision', id: 'vision' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  const partners = [
    '/Assets/CODE.png', '/Assets/MCIT_logo.png', '/Assets/NTDP.png', '/Assets/SGC.png', '/Assets/GameBootCamp Logo.jpg'
  ];

  const socialIcons = [
    { icon: Linkedin, url: 'https://www.linkedin.com/company/reveline-studio' },
    { img: '/Assets/X.png', url: 'https://x.com/reveline_studio' },
    { img: '/Assets/ItchIo.png', url: 'https://reveline-studio.itch.io/' },
    { icon: Youtube, url: 'https://www.youtube.com/@RevelineStudio' },
    { img: '/Assets/discord.png', url: 'https://discord.gg/3AgXtPst' },
    { icon: Facebook, url: 'https://www.facebook.com/reveline-studio' },
    { icon: Instagram, url: 'https://www.instgram.com/reveline-studio' },
    { img: '/Assets/Steam.png', url: 'https://www.Steam.com/reveline-studio' },

  ];

  return (
    <div className="min-h-screen bg-[#152446] text-white overflow-x-hidden font-['Roboto_Condensed'] font-normal">
      <title>Reveline Studio | Where The Message Begins</title>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');
        html { scroll-behavior: smooth; }
        .bg-grid { background-image: radial-gradient(#33627F 0.5px, transparent 0.5px); background-size: 40px 40px; }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll { animation: scroll 40s linear infinite; }
      `}</style>

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-[#132949]/95 backdrop-blur-md py-3 border-b border-[#FECD49]/20 shadow-[0_0_20px_rgba(254,205,73,0.1)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <img 
            src="/Assets/RevelineLogo.png" 
            alt="Reveline" 
            className={`h-10 md:h-14 transition-all duration-300 ${isScrolled ? 'drop-shadow-[0_0_8px_rgba(254,205,73,0.6)]' : ''}`} 
          />
          
          <div className="hidden md:flex gap-10 font-bold uppercase tracking-widest text-sm">
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:text-[#FECD49] transition-all relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FECD49] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button className="md:hidden text-[#FECD49] p-2" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 z-[110] bg-[#152446] flex flex-col p-8">
            <div className="flex justify-end mb-12">
              <button onClick={() => setMobileMenuOpen(false)}><X size={40} className="text-[#FECD49]" /></button>
            </div>
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold uppercase tracking-tighter text-white hover:text-[#FECD49]">{link.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* 1. HERO SECTION (Cover Only) */}
        <section id="home" className="relative h-screen w-full overflow-hidden">
          <picture className="absolute inset-0 z-0">
            <source media="(max-width: 768px)" srcSet="/Assets/MobileCover.png" />
            <img src="/Assets/RevelineCover.png" alt="Cover" className="w-full h-full object-cover" />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-[#152446] via-transparent to-transparent md:opacity-50" />
        </section>

        {/* SPONSORS LOOP (Smaller & Slower) */}
        <div className="bg-[#132949] py-8 border-y border-[#33627F]/30 overflow-hidden relative">
          <div className="flex w-[200%] animate-scroll items-center">
            {[...partners, ...partners].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 mx-8 md:mx-14">
                <img src={logo} alt="Partner" className="h-10 md:h-12 object-contain brightness-110" />
              </div>
            ))}
          </div>
        </div>

        {/* 2. ABOUT US */}
        <section id="about" className="py-32 px-6 bg-grid relative">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#132949] to-transparent opacity-50" />
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-6xl mx-auto text-center">
            <h2 className="text-5xl md:text-8xl font-bold mb-10 leading-none uppercase tracking-tighter">
              REVELINE IS AN INDIE <br /><span className="text-[#4A7687]">SAUDI STUDIO</span>
            </h2>
            <p className="text-2xl md:text-3xl text-white font-normal leading-relaxed max-w-4xl mx-auto italic opacity-90">
              Focus on creating <span className="text-[#FECD49] font-bold uppercase">premium, skill based games</span> with high challenge and high replayability. Our goal is to create games that reward mastery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
              {[
                { i: Target, t: "Skill-Based", d: "Mechanics that demand precision." },
                { i: Zap, t: "Fast-Paced", d: "Action that keeps you on edge." },
                { i: RefreshCw, t: "Replayability", d: "New experiences in every run." }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-[#132949]/60 border border-[#33627F]/30 rounded-3xl backdrop-blur-sm shadow-2xl">
                  <item.i className="text-[#FECD49] mx-auto mb-6" size={56} />
                  <h4 className="font-bold uppercase text-xl mb-2 tracking-widest">{item.t}</h4>
                  <p className="text-sm uppercase text-[#4A7687] font-bold">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. GAMES (VOIDSTRIKE REFINED) */}
        <section id="games" className="py-32 bg-[#111e3a] border-y border-[#33627F]/20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <motion.img 
                whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 15px rgba(254,205,73,0.3))" }}
                src="/Assets/GameLogoTransparent.png" className="w-full max-w-[400px] mb-10" alt="VoidStrike" 
              />
              <p className="text-xl md:text-2xl font-normal mb-8 text-white/90 leading-relaxed">
                 VoidStrike is a fast-paced space shooter roguelike focused on intense boss battles, where you dodge bullet hell and master skill based combat.
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  { icon: Sword, text: "Epic Boss Battles" },
                  { icon: Wind, text: "Bullet-Hell Dodging" },
                  { icon: Layers, text: "Upgrades & Progression" },
                  { icon: RefreshCw, text: "Roguelike Runs" },
                  { icon: Trophy, text: "Skill Mastery" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 font-bold uppercase text-sm text-[#4A7687]">
                    <item.icon size={20} className="text-[#FECD49]" /> {item.text}
                  </div>
                ))}
              </div>

              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(254,205,73,0.4)" }}
                className="px-10 py-5 bg-[#FECD49] text-[#152446] font-bold uppercase tracking-widest text-lg flex items-center gap-4 group"
              >
                TRY THE GAME ON ITCH.IO <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
            
<div className="space-y-6">
  
  <div className="relative group">
    <div className="absolute -inset-2 bg-gradient-to-r from-[#FECD49] to-[#4A7687] rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
    <img 
      src="/Assets/Visual-01.gif" 
      className="relative rounded-2xl border border-white/10 shadow-2xl w-full" 
      alt="Gameplay" 
    />
  </div>


  <div className="grid grid-cols-2 gap-4">
    <motion.img 
      whileHover={{ scale: 1.05 }}
      src="/Assets/vs-01.png" 
      className="rounded-xl border border-[#33627F]/30 shadow-lg object-cover" 
      alt="vs1" 
    />
    <motion.img 
      whileHover={{ scale: 1.05 }}
      src="/Assets/vs-02.png" 
      className="rounded-xl border border-[#33627F]/30 shadow-lg object-cover" 
      alt="vs2" 
    />
  </div>
</div>
</div>
        </section>

        {/* 4. VISION */}
        <section id="vision" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-6xl md:text-8xl font-bold uppercase italic tracking-tighter leading-none mb-4">THE <span className="text-[#FECD49]">VISION</span></h2>
                <p className="text-xl font-bold uppercase tracking-[0.2em] text-[#4A7687]">Empowering the Saudi Gaming Future</p>
              </div>
              <img src="/Assets/saudi-vision-2030.png" className="h-28 object-contain brightness-0 invert opacity-90" alt="Vision 2030" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "The Name", d: "Recognized name in skill-based games", i: Globe },
                { t: "Quality Titles", d: "Release multiple high-quality titles", i: ShieldCheck },
                { t: "Community", d: "Build a loyal competitive community", i: Users },
                { t: "Ecosystem", d: "Contribute to Saudi gaming ecosystem", i: TrendingUp },
                { t: "Internal Team", d: "Build an efficient and specialized team", i: Target },
              ].map((v, i) => (
                <motion.div key={i} whileHover={{ y: -10 }} className="p-10 bg-gradient-to-br from-[#132949] to-[#152446] border border-[#33627F]/30 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><v.i size={80} /></div>
                  <h4 className="text-[#FECD49] text-2xl font-bold uppercase mb-4 tracking-tighter">{v.t}</h4>
                  <p className="font-bold text-lg uppercase leading-snug opacity-80">{v.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. TEAM (Squared & Compact) */}
        <section id="team" className="py-32 bg-[#0d172d] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-center text-5xl md:text-7xl font-bold mb-24 uppercase tracking-tighter">CORE <span className="text-[#4A7687]">TEAM</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  {[
                      { name: "Mustafa Fares", role: "CEO & Technical Artist", img: "/Assets/Mustafa.jpeg" },
                      { name: "Ahmed AbdelTawab", role: "CTO & Lead Programmer", img: "/Assets/Ahmed.jpg" }
                  ].map((member, i) => (
                      <motion.div key={i} whileHover={{ y: -10 }} className="text-center group">
                          <div className="relative overflow-hidden rounded-2xl border-2 border-[#33627F]/20 aspect-square w-48 md:w-64 mx-auto mb-6 shadow-2xl">
                              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold text-[#FECD49]  tracking-tighter">{member.name}</h3>
                          <p className="text-sm font-bold text-[#4A7687] uppercase tracking-[0.2em] mt-2">{member.role}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
        </section>

        {/* 6. CONTACT & FOOTER (8 Socials) */}
        <footer id="contact" className="bg-[#111e3a] pt-32 pb-12 px-6 relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 border-b border-[#33627F]/20 pb-24">
              <div>
                  <h2 className="text-4xl md:text-8xl font-bold mb-10 uppercase italic leading-[0.85] tracking-tighter">GET IN <br /><span className="text-[#FECD49]">TOUCH</span></h2>
<div className="space-y-8 text-2xl font-bold uppercase tracking-tight">
    <div className="flex items-center gap-8 hover:text-[#FECD49] transition-colors cursor-default">
        <MapPin className="text-[#FECD49]" size={32} /> Riyadh, Saudi Arabia
    </div>
    
    <a href="mailto:Reveline.studio25@gmail.com" className="flex items-center gap-8 hover:text-[#FECD49] transition-colors">
        <Mail className="text-[#FECD49]" size={32} /> Reveline.studio25@gmail.com
    </a>
    
    <a href="tel:+966537458442" className="flex items-center gap-8 hover:text-[#FECD49] transition-colors">
        <Phone className="text-[#FECD49]" size={32} /> +966 53 745 8442
    </a>
</div>
                  
                  <div className="flex flex-wrap gap-4 mt-16">
{socialIcons.map((social: any, i: number) => {
  const Icon = social.icon;
  return (
    <motion.a 
      key={i} 
      href={social.url} 
      target="_blank" 
      whileHover={{ scale: 1.1, y: -5 }} 
      className="w-12 h-12 p-3 bg-[#152446] border border-[#33627F]/50 rounded-xl flex items-center justify-center hover:border-[#FECD49] transition-all shadow-xl text-[#FFFFFF]"
    >
      {social.img ? (
        <img src={social.img} alt="social" className="w-full h-full object-contain" />
      ) : (
        Icon && <Icon size={28} />
      )}
    </motion.a>
  );
})}
                  </div>
              </div>
<div className="bg-[#152446] p-10 rounded-3xl border border-[#33627F]/30">
                <div className="space-y-4">
                    <input className="w-full bg-[#132949] border border-[#33627F]/40 p-4 rounded outline-none focus:border-[#FECD49]" placeholder="NAME" />
                    <input className="w-full bg-[#132949] border border-[#33627F]/40 p-4 rounded outline-none focus:border-[#FECD49]" placeholder="EMAIL" />
                    <textarea className="w-full bg-[#132949] border border-[#33627F]/40 p-4 rounded outline-none focus:border-[#FECD49]" placeholder="MESSAGE" rows={4} />
                    <button className="w-full py-4 bg-[#FECD49] text-[#152446] font-bold uppercase tracking-widest hover:bg-[#FFE672]">Submit Signal</button>
                </div>
            </div>
        </div>
        <div className="text-center pt-12 border-t border-[#33627F]/20 text-[#4A7687] font-bold text-xs tracking-[0.4em] uppercase">
            © {new Date().getFullYear()} Reveline Studio. All rights reserved.
        </div>
        </footer>
      </main>
    </div>
  );
}