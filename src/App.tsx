/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { 
  CheckCircle, 
  XCircle, 
  Plus, 
  Trash2, 
  Sparkles, 
  Flame, 
  AlertTriangle, 
  Clock, 
  Phone, 
  Compass, 
  Send, 
  UploadCloud, 
  Lock, 
  Unlock, 
  Layers, 
  ArrowRight, 
  BookOpen, 
  User, 
  HelpCircle,
  FileText,
  Search,
  Check,
  Smartphone,
  Share2,
  Gamepad2,
  Coffee,
  Award,
  Calendar,
  TrendingUp,
  Bot
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PRESET_PHOTOS, PresetPhoto } from "./utils/presets";

interface Habit {
  id: string;
  name: string;
  time: string; // "HH:MM" format
  endTime?: string; // "HH:MM" format
  phoneAllowed: boolean;
  isCompulsoryUpload: boolean;
  points: number;
  completed: boolean;
  uploadedPhoto?: {
    dataUrl: string;
    description: string;
    score: number;
    feedback: string;
  };
  isCustom?: boolean;
}

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export interface CarouselSlide {
  id: string;
  title: string;
  description: string;
  badge?: string;
  renderSvg: () => React.ReactNode;
}

export function AutoCarousel({ slides }: { slides: CarouselSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000); // exact 2-seconds scroll interval!
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden h-[330px] shadow-inner">
      <div className="flex justify-between items-center mb-2 z-10">
        <span className="text-[9px] font-black tracking-widest text-[#6366F1] uppercase">
          ✦ Live Showcase
        </span>
        <span className="text-[10px] font-mono font-bold bg-slate-950 px-2 py-0.5 rounded text-amber-400 flex items-center gap-1.5 border border-slate-800">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
          2s Auto-Scroll
        </span>
      </div>

      {/* Slide Illustration Container */}
      <div className="flex-1 relative mb-3 rounded-lg overflow-hidden flex items-center justify-center bg-slate-950/60 border border-slate-850/80 p-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center p-1.5"
          >
            {slides[index].renderSvg()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Info Footer */}
      <div className="z-10 border-t border-slate-800/85 pt-2 text-left">
        <div className="flex justify-between items-center">
          <h4 className="text-xs font-black text-slate-100 uppercase tracking-tight">
            {slides[index].title}
          </h4>
          {slides[index].badge && (
            <span className="text-[9px] bg-indigo-950 text-indigo-300 border border-indigo-900/60 font-black px-1.5 py-0.5 rounded uppercase">
              {slides[index].badge}
            </span>
          )}
        </div>
        <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
          {slides[index].description}
        </p>
      </div>

      {/* Pagination bullets */}
      <div className="flex gap-1.5 justify-center mt-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-indigo-500" : "w-1.5 bg-slate-800 hover:bg-slate-700"
            }`}
            aria-label={`Go to slide ${i+1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ========================================================
// ILLUSTRATIVE SLIDESETS WITH GEOMETRIC BALANCE DESIGN
// ========================================================

const FOCUS_SLIDES: CarouselSlide[] = [
  {
    id: "f_setup",
    title: "🌅 Warm Study Setup",
    description: "Handwritten notes laid out under warm table illumination. A physical alarm clock stands at attention.",
    badge: "Cozy Space",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5"/>
        <rect x="20" y="20" width="360" height="15" rx="3" fill="#334155"/>
        <rect x="40" y="5" width="20" height="15" fill="#EF4444"/>
        <rect x="65" y="0" width="15" height="20" fill="#3B82F6"/>
        <rect x="85" y="8" width="25" height="12" fill="#F59E0B"/>
        <rect x="0" y="175" width="400" height="65" rx="2" fill="#1E293B"/>
        <rect x="0" y="175" width="400" height="3" fill="#334155"/>
        <rect x="70" y="145" width="100" height="55" rx="3" fill="#FFFBEB" transform="skewX(-15)"/>
        <line x1="82" y1="152" x2="142" y2="152" stroke="#D1FAE5" strokeWidth="2"/>
        <line x1="80" y1="165" x2="145" y2="165" stroke="#E2E8F0" strokeWidth="1.5"/>
        <line x1="78" y1="178" x2="138" y2="178" stroke="#E2E8F0" strokeWidth="1.5"/>
        <path d="M 270 175 Q 272 105 250 85" stroke="#475569" strokeWidth="5" fill="none"/>
        <rect x="235" y="70" width="28" height="18" rx="4" fill="#3B82F6" transform="rotate(15, 235, 70)"/>
        <polygon points="240,84 100,240 380,240" fill="url(#lampLightGlow)" opacity="0.12"/>
        <rect x="185" y="148" width="23" height="30" rx="3" fill="#F59E0B"/>
        <path d="M 208 153 A 5 5 0 0 1 208 171" stroke="#F59E0B" strokeWidth="2.5" fill="none"/>
        <path d="M 191 141 Q 194 136 191 131" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M 198 143 Q 201 138 198 133" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6"/>
        <defs>
          <radialGradient id="lampLightGlow" cx="60%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#FDE047"/>
            <stop offset="100%" stopColor="#0F172A" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </svg>
    )
  },
  {
    id: "f_lock",
    title: "🛡️ Cyber Lockdown Shield",
    description: "Visual concept of social media blocker. Continuous social apps are sealed under strict encryption rings.",
    badge: "Discipline",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#020210" stroke="#1E1B4B" strokeWidth="1.5"/>
        <line x1="0" y1="60" x2="400" y2="60" stroke="#1E1B4B" strokeWidth="0.5"/>
        <line x1="0" y1="120" x2="400" y2="120" stroke="#1E1B4B" strokeWidth="0.5"/>
        <line x1="0" y1="180" x2="400" y2="180" stroke="#1E1B4B" strokeWidth="0.5"/>
        <line x1="100" y1="0" x2="100" y2="240" stroke="#1E1B4B" strokeWidth="0.5"/>
        <line x1="200" y1="0" x2="200" y2="240" stroke="#1E1B4B" strokeWidth="0.5"/>
        <line x1="300" y1="0" x2="300" y2="240" stroke="#1E1B4B" strokeWidth="0.5"/>
        <polygon points="200,40 265,70 265,135 200,180 135,135 135,70" fill="#111827" fillOpacity={0.5} stroke="#6366F1" strokeWidth={3} strokeLinejoin="round"/>
        <rect x="180" y="100" width="40" height="28" rx="5" fill="#EF4444"/>
        <path d="M 190 100 L 190 85 A 10 10 0 0 1 210 85 L 210 100" stroke="#6366F1" strokeWidth={4} fill="none"/>
        <circle cx="200" cy="114" r="4" fill="#FFF"/>
        <line x1="200" y1="116" x2="200" y2="124" stroke="#FFF" strokeWidth={2}/>
        <circle cx="200" cy="110" r="70" stroke="#6366F1" strokeDasharray="3,3" opacity="0.3"/>
        <circle cx="200" cy="110" r="95" stroke="#EF4444" strokeDasharray="1,6" opacity="0.2"/>
        <text x="200" y="212" fontFamily="'JetBrains Mono', Courier, monospace" fontSize="10" fill="#818CF8" fontWeight="black" textAnchor="middle" letterSpacing="2">DOPAMINE FEED SHUTDOWN</text>
      </svg>
    )
  },
  {
    id: "f_chemistry",
    title: "🧪 Molecular Organic Notes",
    description: "Saturated carbon bonds and platonic chemistry diagram layout. AI checks notes structure precisely query-by-query.",
    badge: "Chemistry",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#022C22" stroke="#064E3B" strokeWidth="1.5"/>
        <polygon points="200,45 235,65 235,105 200,125 165,105 165,65" fill="none" stroke="#10B981" strokeWidth={2}/>
        <polygon points="200,125 235,145 235,185 200,205 165,185 165,145" fill="none" stroke="#059669" strokeWidth={1.5}/>
        <circle cx="200" cy="45" r="4" fill="#34D399"/>
        <circle cx="235" cy="65" r="4" fill="#34D399"/>
        <circle cx="165" cy="65" r="4" fill="#10B981"/>
        <circle cx="200" cy="125" r="5" fill="#F59E0B"/>
        <rect x="130" y="115" width="20" height="20" rx="3" fill="#1E293B"/>
        <text x="140" y="129" fontFamily="sans-serif" fontSize="11" fill="#FFF" fontWeight="bold" textAnchor="middle">H</text>
        <rect x="250" y="115" width="20" height="20" rx="3" fill="#1E293B"/>
        <text x="260" y="129" fontFamily="sans-serif" fontSize="11" fill="#34D399" fontWeight="bold" text-anchor="middle">O</text>
        <text x="200" y="222" fontFamily="'JetBrains Mono', Courier, monospace" fontSize="9" fill="#059669" fontWeight="bold" text-anchor="middle">REACTION: CATALYTIC HYDROGENATION</text>
      </svg>
    )
  }
];

const TIMETABLE_SLIDES: CarouselSlide[] = [
  {
    id: "t_dawn",
    title: "⏰ Early Sunrise Routine",
    description: "The 7:00 AM breakfast and wakeup slot. Complete your morning routine to secure daily streak status.",
    badge: "Sunrise Action",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5"/>
        <path d="M 50 160 Q 200 60 350 160" fill="none" stroke="#FDBA74" strokeWidth="3" strokeDasharray="4,4"/>
        <path d="M 120 160 Q 200 100 280 160" fill="none" stroke="#FB923C" strokeWidth="5"/>
        <circle cx="200" cy="120" r="28" fill="#F97316"/>
        <circle cx="200" cy="120" r="24" fill="#FBBF24"/>
        <line x1="200" y1="80" x2="200" y2="60" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
        <line x1="200" y1="160" x2="200" y2="180" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
        <line x1="160" y1="120" x2="140" y2="120" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
        <line x1="240" y1="120" x2="260" y2="120" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
        <circle cx="100" cy="180" r="18" fill="#6366F1"/>
        <path d="M 92 165 L 108 165" stroke="#FFF" strokeWidth="3" strokeLinecap="round"/>
        <rect x="96" y="174" width="8" height="12" rx="1" fill="#FFF"/>
        <text x="200" y="215" fontFamily="'JetBrains Mono', monospace" fontSize="11" fill="#475569" fontWeight="black" textAnchor="middle">WAKE UP AT 7:00 AM STRIKE</text>
      </svg>
    )
  },
  {
    id: "t_bento",
    title: "📋 Bento Matrix Agenda",
    description: "Visually categorized timetables. Color indicators define lock ranges and compulsory note uploads.",
    badge: "Scheduling",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#0B0F19" stroke="#1E293B" strokeWidth="1.5"/>
        <rect x="20" y="20" width="170" height="90" rx="6" fill="#1E1B4B" stroke="#4C1D95" strokeWidth="1"/>
        <circle cx="45" cy="45" r="12" fill="#818CF8"/>
        <path d="M 41 45 L 44 48 L 49 43" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <text x="70" y="48" fontFamily="sans-serif" fontSize="11" fill="#E0E7FF" fontWeight="bold">Study Prep</text>
        <rect x="70" y="65" width="100" height="6" rx="3" fill="#312E81"/>
        <rect x="70" y="65" width="85" height="6" rx="3" fill="#818CF8"/>
        <text x="70" y="86" fontFamily="sans-serif" fontSize="10" fill="#C7D2FE">17:00 — Math Analysis</text>
        <rect x="210" y="20" width="170" height="90" rx="6" fill="#062F2F" stroke="#0D9488" strokeWidth="1"/>
        <text x="230" y="50" fontFamily="sans-serif" fontSize="12" fill="#2DD4BF" fontWeight="extrabold">📱 Allowed Break</text>
        <text x="230" y="70" fontFamily="sans-serif" fontSize="10" fill="#85E2D6">07:00 — Free scrolling</text>
        <rect x="230" y="85" width="130" height="8" rx="4" fill="#134E4A"/>
        <rect x="20" y="130" width="360" height="85" rx="6" fill="#1E293B" stroke="#334155" strokeWidth="1"/>
        <text x="35" y="155" fontFamily="sans-serif" fontSize="11" fill="#94A3B8" fontWeight="bold">Self-Growth Progression Gauge</text>
        <rect x="35" y="175" width="330" height="15" rx="4" fill="#0F172A"/>
        <rect x="35" y="175" width="240" height="15" rx="4" fill="url(#bentoGrad)"/>
        <defs>
          <linearGradient id="bentoGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4F46E5"/>
            <stop offset="100%" stopColor="#10B981"/>
          </linearGradient>
        </defs>
        <text x="200" y="187" fontFamily="-apple-system, sans-serif" fontSize="9" fill="#FFF" fontWeight="bold" textAnchor="middle">75% HARMONIZATION RATE</text>
      </svg>
    )
  },
  {
    id: "t_night",
    title: "🌙 Restful Moonlight mode",
    description: "The 22:00 Sleep window. Deep rest rejuvenates neural focus, preparing your body for morning sunrise planning.",
    badge: "Rest Period",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#030712" stroke="#111827" strokeWidth="1.5"/>
        <circle cx="120" cy="110" r="45" fill="#312E81" opacity="0.4"/>
        <path d="M 230 40 A 65 65 0 1 0 310 145 A 50 50 0 1 1 230 40 Z" fill="#FCE7F3"/>
        <circle cx="90" cy="50" r="2.5" fill="#FFF" opacity="0.8"/>
        <circle cx="140" cy="60" r="1.5" fill="#FFF" opacity="0.6"/>
        <circle cx="70" cy="140" r="2" fill="#FFF" opacity="0.9"/>
        <circle cx="150" cy="160" r="2.5" fill="#818CF8" opacity="0.5"/>
        <path d="M 170 115 A 18 10 0 0 1 206 115" stroke="#818CF8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <text x="188" y="145" fontFamily="'JetBrains Mono', monospace" fontSize="14" fill="#818CF8" fontWeight="black" textAnchor="middle">Zzz</text>
        <text x="210" y="132" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#818CF8">Zzz</text>
        <text x="200" y="215" fontFamily="sans-serif" fontSize="10" fill="#6B7280" fontWeight="medium" textAnchor="middle">NO SCREENS RANGE: 22:00 — 07:00</text>
      </svg>
    )
  }
];

const STORE_SLIDES: CarouselSlide[] = [
  {
    id: "s_trophy",
    title: "🏆 Golden Achievement Trophy",
    description: "Earn rewards by verifying notes with Gemini. Trade active points for life prizes and study break codes.",
    badge: "Milestones",
     renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#0A0500" stroke="#2D1A00" strokeWidth="1.5"/>
        <ellipse cx="200" cy="165" rx="55" ry="15" fill="#D97706" opacity="0.2"/>
        <rect x="175" y="160" width="50" height="30" rx="3" fill="#4B2700" stroke="#D97706" strokeWidth="2"/>
        <rect x="182" y="167" width="36" height="15" rx="1" fill="#D97706" opacity="0.4"/>
        <text x="200" y="179" fontFamily="monospace" fontSize="8" fill="#FFF" fontWeight="black" textAnchor="middle">#1 STREAK</text>
        <rect x="194" y="115" width="12" height="45" fill="#F59E0B" stroke="#D97706" strokeWidth="1"/>
        <path d="M 155 70 C 155 120 245 120 245 70 Z" fill="#FBBF24" stroke="#F59E0B" strokeWidth="3"/>
        <path d="M 155 78 A 7 14 0 0 0 145 92 A 7 14 0 0 0 155 106" stroke="#FBBF24" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M 245 78 A 7 14 0 0 1 255 92 A 7 14 0 0 1 245 106" stroke="#FBBF24" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <polygon points="200,60 205,70 216,70 207,77 210,88 200,81 190,88 193,77 184,70 195,70" fill="#FFF"/>
        <circle cx="120" cy="60" r="4" fill="#FBBF24" opacity="0.8"/>
        <circle cx="280" cy="65" r="5" fill="#FBBF24" opacity="0.7"/>
        <text x="200" y="215" fontFamily="sans-serif" fontSize="11" fill="#FBBF24" fontWeight="bold" textAnchor="middle">PREMIUM CROWN &amp; GOLD CODES</text>
      </svg>
    )
  },
  {
    id: "s_coffee",
    title: "☕ Fresh Espresso Brewer",
    description: "Points can buy virtual vouchers. Reward yourself with actual coffee chips when discipline scores are met.",
    badge: "Energizers",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#1E0E05" stroke="#451A03" strokeWidth="1.5"/>
        <rect x="175" y="45" width="50" height="135" rx="6" fill="#F3F4F6" stroke="#9CA3AF" strokeWidth="1.5"/>
        <rect x="180" y="55" width="40" height="25" rx="3" fill="#D1D5DB"/>
        <circle cx="190" cy="67" r="4" fill="#DC2626"/>
        <circle cx="210" cy="67" r="4" fill="#059669"/>
        <rect x="185" y="115" width="30" height="28" rx="4" fill="#3F6212"/>
        <ellipse cx="200" cy="118" rx="12" ry="3" fill="#27272A"/>
        <path d="M 200 80 L 200 115" stroke="#9CA3AF" strokeWidth="3"/>
        <ellipse cx="200" cy="165" rx="20" ry="10" fill="#FDBA74" stroke="#F59E0B" strokeWidth="1"/>
        <ellipse cx="200" cy="162" rx="16" ry="7" fill="#78350F"/>
        <path d="M 216 153 M 216 153 C 228 153 228 163 216 163" stroke="#FDBA74" strokeWidth="2.5" fill="none"/>
        <path d="M 197 105 Q 199 97 197 89" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <path d="M 203 105 Q 205 97 203 89" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
        <text x="200" y="215" fontFamily="'JetBrains Mono', Courier, monospace" fontSize="10" fill="#FBBF24" fontWeight="black" textAnchor="middle">EXCHANGE BALANCE: 80 PTS</text>
      </svg>
    )
  },
  {
    id: "s_game",
    title: "🎮 Joystick Gaming Rest",
    description: "Steam/PSN gamecodes unlockable for study break duration. Lock automatically resumes when countdown expires.",
    badge: "Leisure Code",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#0B1329" stroke="#1E293B" strokeWidth="1.5"/>
        <rect x="130" y="70" width="140" height="85" rx="35" fill="#334155" stroke="#475569" strokeWidth="4"/>
        <ellipse cx="160" cy="110" rx="12" ry="12" fill="#1E293B"/>
        <rect x="156" y="101" width="8" height="18" rx="2" fill="#94A3B8"/>
        <rect x="151" y="106" width="18" height="8" rx="2" fill="#94A3B8"/>
        <ellipse cx="240" cy="110" rx="12" ry="12" fill="#1E293B"/>
        <circle cx="232" cy="110" r="4.5" fill="#EF4444"/>
        <circle cx="248" cy="110" r="4.5" fill="#3B82F6"/>
        <circle cx="240" cy="102" r="4.5" fill="#F59E0B"/>
        <circle cx="240" cy="118" r="4.5" fill="#10B981"/>
        <rect x="180" y="105" width="18" height="6" rx="1" fill="#475569"/>
        <rect x="202" y="105" width="18" height="6" rx="1" fill="#475569"/>
        <path d="M 134 110 Q 110 160 140 180" stroke="#334155" strokeWidth="8" strokeLinecap="round" fill="none"/>
        <path d="M 266 110 Q 290 160 260 180" stroke="#334155" strokeWidth="8" strokeLinecap="round" fill="none"/>
        <text x="200" y="212" fontFamily="monospace" fontSize="11" fill="#60A5FA" fontWeight="black" textAnchor="middle">POINT DEBIT SYSTEM VALID</text>
      </svg>
    )
  }
];

const COACH_SLIDES: CarouselSlide[] = [
  {
    id: "c_brain",
    title: "🧠 Aethel AI Network Core",
    description: "Sparkles of Gemini analytics processing study pictures, evaluating homework notes for plagiarism.",
    badge: "Smart Coach",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#020617" stroke="#1E293B" strokeWidth="1.5"/>
        <circle cx="200" cy="110" r="30" fill="#312E81" opacity="0.3"/>
        <ellipse cx="200" cy="110" rx="90" ry="45" stroke="#1E1B4B" strokeWidth="1" opacity="0.4"/>
        <ellipse cx="200" cy="110" rx="130" ry="65" stroke="#1E1B4B" strokeWidth="1" opacity="0.2"/>
        <circle cx="200" cy="110" r="16" fill="#4F46E5" opacity="0.7"/>
        <circle cx="160" cy="90" r="12" fill="#818CF8"/>
        <circle cx="240" cy="90" r="12" fill="#818CF8"/>
        <circle cx="170" cy="140" r="10" fill="#6366F1"/>
        <circle cx="230" cy="140" r="10" fill="#6366F1"/>
        <line x1="200" y1="110" x2="160" y2="90" stroke="#818CF8" strokeWidth="1.5"/>
        <line x1="200" y1="110" x2="240" y2="90" stroke="#818CF8" strokeWidth="1.5"/>
        <line x1="200" y1="110" x2="170" y2="140" stroke="#6366F1" strokeWidth="1.5"/>
        <line x1="200" y1="110" x2="230" y2="140" stroke="#6366F1" strokeWidth="1.5"/>
        <line x1="160" y1="90" x2="170" y2="140" stroke="#4F46E5" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="240" y1="90" x2="230" y2="140" stroke="#4F46E5" strokeWidth="1" strokeDasharray="2,2"/>
        <polygon points="200,45 204,53 213,54 206,60 208,69 200,64 192,69 194,60 187,54 196,53" fill="#F59E0B" className="animate-pulse"/>
        <polygon points="120,120 123,126 130,127 125,132 126,139 120,135 114,139 115,132 110,127 117,126" fill="#38BDF8" className="animate-pulse"/>
        <text x="200" y="215" fontFamily="'JetBrains Mono', monospace" fontSize="10" fill="#818CF8" fontWeight="black" textAnchor="middle">COGNITIVE ENGAGEMENT SPHERES</text>
      </svg>
    )
  },
  {
    id: "c_cheat",
    title: "🚨 Duplicate Recycled Block",
    description: "Gemini compares incoming study images against previous daily approvals, flagging duplicate recycled papers.",
    badge: "Integrity",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#1C0A0A" stroke="#450A0A" strokeWidth="1.5"/>
        <rect x="80" y="45" width="85" height="115" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5"/>
        <line x1="95" y1="65" x2="150" y2="65" stroke="#EF4444" strokeWidth="2"/>
        <line x1="95" y1="85" x2="140" y2="85" stroke="#FCA5A5" strokeWidth="1.5"/>
        <line x1="95" y1="105" x2="148" y2="105" stroke="#FCA5A5" strokeWidth="1.5"/>
        <line x1="95" y1="125" x2="135" y2="125" stroke="#FCA5A5" strokeWidth="1.5"/>
        <rect x="235" y="45" width="85" height="115" rx="4" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" opacity="0.6"/>
        <line x1="250" y1="65" x2="305" y2="65" stroke="#EF4444" strokeWidth="2"/>
        <line x1="250" y1="85" x2="295" y2="85" stroke="#FCA5A5" strokeWidth="1.5"/>
        <circle cx="210" cy="115" r="16" fill="#991B1B" opacity="0.3"/>
        <line x1="175" y1="100" x2="225" y2="100" stroke="#EF4444" strokeWidth="3"/>
        <path d="M 210 90 L 195 110 L 225 110 Z" fill="#EF4444" transform="rotate(180, 210, 100)"/>
        <line x1="60" y1="130" x2="340" y2="70" stroke="#DC2626" strokeWidth="5" strokeLinecap="round"/>
        <text x="200" y="215" fontFamily="sans-serif" fontSize="11" fill="#EF4444" fontWeight="black" textAnchor="middle">ANTI-CHEAT PHOTO VERIFICATION</text>
      </svg>
    )
  },
  {
    id: "c_stats",
    title: "📈 Personal Progression Graph",
    description: "Historical metrics. Tracking points earned from approved note submissions, streak updates and lock releases.",
    badge: "Analytics",
    renderSvg: () => (
      <svg width="100%" height="100%" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[170px]">
        <rect width="100%" height="100%" rx="8" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5"/>
        <line x1="50" y1="30" x2="50" y2="180" stroke="#475569" strokeWidth="2"/>
        <line x1="50" y1="180" x2="350" y2="180" stroke="#475569" strokeWidth="2"/>
        <path d="M 50 140 L 100 110 L 150 130 L 200 70 L 250 85 L 300 40 L 350 45" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="100" cy="110" r="5" fill="#34D399"/>
        <circle cx="200" cy="70" r="5" fill="#34D399"/>
        <circle cx="300" cy="40" r="5" fill="#10B981"/>
        <path d="M 50 160 L 100 145 L 150 150 L 200 115 L 250 120 L 300 90 L 350 100" fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        <text x="50" y="195" fontFamily="sans-serif" fontSize="9" fill="#94A3B8" textAnchor="middle">Day 1</text>
        <text x="200" y="195" fontFamily="sans-serif" fontSize="9" fill="#94A3B8" textAnchor="middle">Day 7</text>
        <text x="350" y="195" fontFamily="sans-serif" fontSize="9" fill="#94A3B8" textAnchor="middle">Day 14</text>
        <text x="200" y="218" fontFamily="sans-serif" fontSize="10" fill="#34D399" fontWeight="extrabold" textAnchor="middle">✦ OVERALL GROWTH EXPOSURE: +34%</text>
      </svg>
    )
  }
];

export default function App() {
  // --- Persistent States from LocalStorage ---
  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem("habit_guard_habits");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // use default
      }
    }
    return [
      {
        id: "h_wakeup",
        name: "🌅 Wake Up & Quick Mobile Planning",
        time: "07:00",
        endTime: "08:00",
        phoneAllowed: true,
        isCompulsoryUpload: false,
        points: 20,
        completed: false,
      },
      {
        id: "h_exercise",
        name: "🏃 morning Exercise",
        time: "08:00",
        endTime: "08:30",
        phoneAllowed: false,
        isCompulsoryUpload: false,
        points: 30,
        completed: false,
      },
      {
        id: "h_breakfast",
        name: "🍳 Breakfast Nutrition",
        time: "08:30",
        endTime: "09:00",
        phoneAllowed: false,
        isCompulsoryUpload: false,
        points: 20,
        completed: false,
      },
      {
        id: "h_study",
        name: "📚 Evening Study Session",
        time: "17:00",
        endTime: "18:00",
        phoneAllowed: false,
        isCompulsoryUpload: true,
        points: 150,
        completed: false,
      },
      {
        id: "h_sleep",
        name: "🌙 Restful Sleep Mode",
        time: "22:00",
        endTime: "23:59",
        phoneAllowed: false,
        isCompulsoryUpload: false,
        points: 50,
        completed: false,
      },
    ];
  });

  const [points, setPoints] = useState<number>(() => {
    const saved = localStorage.getItem("habit_guard_points");
    return saved ? Number(saved) : 340;
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem("habit_guard_streak");
    return saved ? Number(saved) : 12;
  });

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem("habit_guard_chat");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: "welcome_msg",
        role: "assistant",
        content: "Hi there! I am your personal Habit Guard AI assistant. I will check your study picture uploads, analyze study notes for duplication alerts, and help you structure your schedule to maximize productivity. Try simulating different times to test how the restricted phone mode blocks reels and social media!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });

  // --- Real Time and Time Simulation ---
  const [useSystemTime, setUseSystemTime] = useState<boolean>(false);
  const [simulatedHour, setSimulatedHour] = useState<number>(17); // Default to study hour 5 PM (17:00)
  const [simulatedMinute, setSimulatedMinute] = useState<number>(30); // Default to 5:30 PM

  const [currentTimeStr, setCurrentTimeStr] = useState<string>("17:30");
  const [currentLabel, setCurrentLabel] = useState<string>("Study Focus Period");

  // Keep track of which habit is currently active depending on the simulated or system time
  const [activeHabit, setActiveHabit] = useState<Habit | null>(null);

  // --- Phone lockdown, Reels simulator and Emergency bypass state ---
  const [isEmergencyBypassActive, setIsEmergencyBypassActive] = useState<boolean>(false);
  const [emergencyTimer, setEmergencyTimer] = useState<number>(0); // Seconds remaining
  const [emergencyAppMode, setEmergencyAppMode] = useState<"none" | "call" | "notes">("none");
  const [calledNumber, setCalledNumber] = useState<string>("");
  const [callStatus, setCallStatus] = useState<string>("");
  const [soughtNotesQuery, setSoughtNotesQuery] = useState<string>("");

  // Simulated Reels distraction warning flag
  const [reelsInteractionCounter, setReelsInteractionCounter] = useState<number>(0);
  const [reelsBlockedAlert, setReelsBlockedAlert] = useState<boolean>(false);

  // --- Custom Habit Form Modal state ---
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newHabitName, setNewHabitName] = useState<string>("");
  const [newHabitStart, setNewHabitStart] = useState<string>("09:00");
  const [newHabitEnd, setNewHabitEnd] = useState<string>("10:00");
  const [newHabitPhoneAllowed, setNewHabitPhoneAllowed] = useState<boolean>(false);
  const [newHabitCompulsory, setNewHabitCompulsory] = useState<boolean>(false);
  const [newHabitPoints, setNewHabitPoints] = useState<number>(40);

  // --- Photo Upload Verification States ---
  const [selectedPreset, setSelectedPreset] = useState<PresetPhoto | null>(PRESET_PHOTOS[0]);
  const [customFileBase64, setCustomFileBase64] = useState<string | null>(null);
  const [customFileName, setCustomFileName] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [latestVerification, setLatestVerification] = useState<{
    isValid: boolean;
    isDuplicate: boolean;
    score: number;
    description: string;
    feedback: string;
  } | null>(null);
  
  // Storing descriptions of past approved uploads to test duplicate alerts
  const [pastApprovedDescriptions, setPastApprovedDescriptions] = useState<string[]>(() => {
    const saved = localStorage.getItem("habit_guard_past_uploads");
    return saved ? JSON.parse(saved) : [];
  });

  // --- Tab configuration ---
  const [currentTab, setCurrentTab] = useState<"focus" | "schedule" | "rewards" | "ai">("focus");

  // --- Rewards Marketplace state ---
  interface RewardItem {
    id: string;
    title: string;
    cost: number;
    iconName: "Gamepad2" | "Coffee" | "Award" | "Share2";
    description: string;
  }

  const [rewardsList] = useState<RewardItem[]>([
    {
      id: "r_game",
      title: "🎮 30-Min Gaming Break Code",
      cost: 120,
      iconName: "Gamepad2",
      description: "Secure gaming bypass code valid on Steam / Xbox network for 30 minutes. Lock automatically restarts.",
    },
    {
      id: "r_espresso",
      title: "☕ Premium Espresso Token",
      cost: 80,
      iconName: "Coffee",
      description: "Redeem points for an espresso voucher at your local study caffeine corner.",
    },
    {
      id: "r_social",
      title: "📱 15-Mins Social Scroll Pass",
      cost: 60,
      iconName: "Share2",
      description: "Release social media blockade for 15 minutes to clear messages under AI supervisor.",
    },
    {
      id: "r_crown",
      title: "👑 Golden Streak Crown Aura",
      cost: 200,
      iconName: "Award",
      description: "Acquire glowing crown aura in Aethel assistant desk profile, boosting points efficiency by 10%.",
    }
  ]);

  const [purchasedVouchers, setPurchasedVouchers] = useState<string[]>(() => {
    const saved = localStorage.getItem("habit_guard_vouchers");
    return saved ? JSON.parse(saved) : ["🎉 Welcome free voucher!"];
  });

  // Sync vouchers to localstorage
  useEffect(() => {
    localStorage.setItem("habit_guard_vouchers", JSON.stringify(purchasedVouchers));
  }, [purchasedVouchers]);

  // Handle purchasing / redemption
  const handleRedeemReward = (item: RewardItem) => {
    if (points >= item.cost) {
      setPoints((prev) => prev - item.cost);
      
      const newVoucherCode = `VOUCHER-${item.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setPurchasedVouchers((prev) => [
        `${item.title} (Code: ${newVoucherCode}) - Redeemed at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
        ...prev
      ]);

      // Append assistant coach message
      appendAssistantMessage(`🎁 Redemption Approved! You have traded ${item.cost} points for the "${item.title}". Generated secure authorization key: "${newVoucherCode}". Keep up the solid effort!`);
    } else {
      alert(`Insufficient Points! The "${item.title}" costs ${item.cost} points, but you only have ${points} points. Complete study tasks and upload notes to earn points!`);
    }
  };

  // --- Chat inputs ---
  const [chatInput, setChatInput] = useState<string>("");
  const [isSendingChat, setIsSendingChat] = useState<boolean>(false);

  // --- Sync storage ---
  useEffect(() => {
    localStorage.setItem("habit_guard_habits", JSON.stringify(habits));
  }, [habits]);

  useEffect(() => {
    localStorage.setItem("habit_guard_points", String(points));
  }, [points]);

  useEffect(() => {
    localStorage.setItem("habit_guard_streak", String(streak));
  }, [streak]);

  useEffect(() => {
    localStorage.setItem("habit_guard_chat", JSON.stringify(chatMessages));
  }, [chatMessages]);

  useEffect(() => {
    localStorage.setItem("habit_guard_past_uploads", JSON.stringify(pastApprovedDescriptions));
  }, [pastApprovedDescriptions]);

  // --- Real / Simulated Clock Sync ---
  useEffect(() => {
    const interval = setInterval(() => {
      let h = simulatedHour;
      let m = simulatedMinute;

      if (useSystemTime) {
        const d = new Date();
        h = d.getHours();
        m = d.getMinutes();
      }

      const formattedHour = h.toString().padStart(2, "0");
      const formattedMin = m.toString().padStart(2, "0");
      const timeStr = `${formattedHour}:${formattedMin}`;
      setCurrentTimeStr(timeStr);

      // Find if there is an active habit covering this hour/minute
      const currentMinutesTotal = h * 60 + m;
      let foundActive: Habit | null = null;

      for (const hab of habits) {
        const [sh, sm] = hab.time.split(":").map(Number);
        const startMinutes = sh * 60 + sm;
        
        let endMinutes = startMinutes + 60; // 1 hour default duration
        if (hab.endTime) {
          const [eh, em] = hab.endTime.split(":").map(Number);
          endMinutes = eh * 60 + em;
        }

        if (currentMinutesTotal >= startMinutes && currentMinutesTotal < endMinutes) {
          foundActive = hab;
          break;
        }
      }

      setActiveHabit(foundActive);

      // Label setting
      if (foundActive) {
        setCurrentLabel(foundActive.name);
      } else {
        setCurrentLabel("Free Unrestricted Window");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [useSystemTime, simulatedHour, simulatedMinute, habits]);

  // --- Emergency bypass countdown mechanism ---
  useEffect(() => {
    let bypassTimer: NodeJS.Timeout;
    if (isEmergencyBypassActive && emergencyTimer > 0) {
      bypassTimer = setTimeout(() => {
        setEmergencyTimer((prev) => prev - 1);
      }, 1000);
    } else if (emergencyTimer === 0 && isEmergencyBypassActive) {
      setIsEmergencyBypassActive(false);
      setEmergencyAppMode("none");
    }
    return () => clearTimeout(bypassTimer);
  }, [isEmergencyBypassActive, emergencyTimer]);

  // --- Check if phone is locked dynamically ---
  // If use woke up at 6am or 7am:
  // User directive: "if we wake up at 7am we have to use phone at that time and if 1 day we woke up at 6:00 am also we have to use phone at 7:00 am"
  // This means between 7:00 AM and 8:00 AM, phone is allowed as stated in the wakeup habit schedule.
  // Any restricted habit locks the phone unless emergency bypass is ON.
  const isPhoneRestrictedNow = () => {
    if (isEmergencyBypassActive) return false;
    if (activeHabit) {
      // If the currently active slot allows phone, then it is NOT restricted
      return !activeHabit.phoneAllowed;
    }
    // Default: outside scheduled active habits, no restriction
    return false;
  };

  // --- Add new customized habits ---
  const handleAddHabit = (e: FormEvent) => {
    e.preventDefault();
    if (!newHabitName.trim()) return;

    const newH: Habit = {
      id: "h_custom_" + Date.now(),
      name: newHabitName,
      time: newHabitStart,
      endTime: newHabitEnd,
      phoneAllowed: newHabitPhoneAllowed,
      isCompulsoryUpload: newHabitCompulsory,
      points: Number(newHabitPoints),
      completed: false,
      isCustom: true,
    };

    setHabits((prev) => [...prev, newH].sort((a,b) => a.time.localeCompare(b.time)));
    setNewHabitName("");
    setShowAddModal(false);
  };

  const handleDeleteHabit = (id: string) => {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  };

  const toggleManualComplete = (id: string) => {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          const toggledState = !h.completed;
          if (toggledState) {
            setPoints((pts) => pts + h.points);
          } else {
            setPoints((pts) => Math.max(0, pts - h.points));
          }
          return { ...h, completed: toggledState };
        }
        return h;
      })
    );
  };

  // --- Handle custom uploaded files ---
  const handleCustomFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setCustomFileBase64(reader.result as string);
        setSelectedPreset(null); // Deselect presets
      };
      reader.readAsDataURL(file);
    }
  };

  // --- Study evidence upload validator ---
  const handleSubmitEvidence = async () => {
    setIsUploading(true);
    setLatestVerification(null);

    let activeStudyHabit = habits.find((h) => h.isCompulsoryUpload) || activeHabit;
    const currentHabitName = activeStudyHabit ? activeStudyHabit.name : "Study Practice";

    // Obtain the base64 string
    let currentImageBase64 = "";
    if (selectedPreset) {
      currentImageBase64 = selectedPreset.dataUrl;
    } else if (customFileBase64) {
      currentImageBase64 = customFileBase64;
    } else {
      setIsUploading(false);
      alert("Please select a Preset notebook notes template or upload your own file first!");
      return;
    }

    try {
      // Send the latest study template text description we saved inside past approved list
      const prevDescText = pastApprovedDescriptions.length > 0 
        ? pastApprovedDescriptions[pastApprovedDescriptions.length - 1] 
        : "None registered yet";

      const res = await fetch("/api/gemini/evaluate-photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageBase64: currentImageBase64,
          mimeType: "image/jpeg",
          habitName: currentHabitName,
          prevDescription: prevDescText,
        }),
      });

      const data = await res.json();
      setLatestVerification(data);

      if (data.isValid && !data.isDuplicate) {
        // Successful verification! Reward points
        setPoints((prev) => prev + 150);
        setStreak((prev) => prev + 1);
        
        // Save description for next evaluation comparison to alert duplicates
        if (data.description) {
          setPastApprovedDescriptions((prev) => [...prev, data.description]);
        }

        // Set the study habit completed status
        setHabits((prev) =>
          prev.map((h) => {
            if (h.isCompulsoryUpload) {
              return {
                ...h,
                completed: true,
                uploadedPhoto: {
                  dataUrl: currentImageBase64,
                  description: data.description || "Verified text notes",
                  score: data.score || 85,
                  feedback: data.feedback || "Good job!",
                },
              };
            }
            return h;
          })
        );

        // Notify in AI Chat
        appendAssistantMessage(`🎉 Awesome check! Your photo "${data.description || 'notes'}" is approved by Gemini with score ${data.score || 90}/100. "${data.feedback}" You unlocked +150 reward points! Your screen restriction is cleared for the free hours!`);
      } else if (data.isDuplicate) {
        // Detected duplication cheating alert
        setStreak(0); // Cheating resets daily progress integrity
        appendAssistantMessage(`🚨 Cheating Detected! Gemini identified that you've recycled the previous session notes photo today. Remember: "Integrity is the foundation of growth. If we are not doing this then we are just betraying ourself." Keep studying seriously and upload fresh notes! Streak reset.`);
      } else {
        // Invalid study notes (e.g. coffee cup or sleeping dog)
        appendAssistantMessage(`❌ Verification Failed: "${data.description || 'unrelated item'}" is not evaluated as valid handwritten notes. Gemini feedback: "${data.feedback}" Please study hard and try uploading an actual picture of notes.`);
      }
    } catch (e: any) {
      console.error(e);
      alert("Error talking to evaluation server: " + e.message);
    } finally {
      setIsUploading(false);
    }
  };

  // --- AI Coach assistant Send Chat Message ---
  const handleSendChat = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage: ChatMessage = {
      id: "usr_" + Date.now(),
      role: "user",
      content: chatInput,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    setIsSendingChat(true);

    try {
      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...chatMessages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        id: "ast_" + Date.now(),
        role: "assistant",
        content: data.text || "I am here to support you! Let me know if you need study advice or habit rules.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setChatMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error(err);
      appendAssistantMessage("I'm experiencing custom endpoint connection trouble. Don't worry, stay focused on your studies!");
    } finally {
      setIsSendingChat(false);
    }
  };

  const appendAssistantMessage = (text: string) => {
    setChatMessages((prev) => [
      ...prev,
      {
        id: "ast_sys_" + Date.now(),
        role: "assistant",
        content: text,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  // --- Quick trigger phone restriction click mock ---
  const handleReelsClick = () => {
    if (isPhoneRestrictedNow()) {
      setReelsInteractionCounter((prev) => prev + 1);
      setReelsBlockedAlert(true);
      setTimeout(() => setReelsBlockedAlert(false), 4000);
    } else {
      alert("Simulated Reels: 'Infinite scroll funny cat videos' is playing because there are currently NO phone restrictions in place.");
    }
  };

  // --- Enable Emergency Bypass lock ---
  const launchEmergencyBypass = () => {
    setIsEmergencyBypassActive(true);
    setEmergencyTimer(120); // 2 minutes emergency window
    setEmergencyAppMode("none");
    appendAssistantMessage("⚠️ Emergency Bypass Mode opened for 2 minutes. You can call urgent numbers or review textbook notes. All reels/distractions remain strictly locked out!");
  };

  const simulateEmergencyCall = (e: FormEvent) => {
    e.preventDefault();
    if (!calledNumber) return;
    setCallStatus(`Calling ${calledNumber}... Connected! Speaking with Study Coordinator.`);
    setTimeout(() => {
      setCallStatus("");
      setCalledNumber("");
    }, 5000);
  };

  const simulateNotesQuery = (e: FormEvent) => {
    e.preventDefault();
    if (!soughtNotesQuery) return;
    // Set mock response
    setSoughtNotesQuery("");
  };

  // Calculate daily completion statistic
  const completedCount = habits.filter((h) => h.completed).length;
  const progressPercent = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;

  return (
    <div className="w-full min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* HEADER BAR: Geometric & Beautiful */}
      <header className="h-20 bg-slate-950 border-b border-slate-800 px-6 flex items-center justify-between shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-mono font-black text-2xl tracking-tighter shadow-indigo-900/50 shadow-md">
            H
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-100 tracking-tight flex items-center gap-1.5">
              HABIT GUARD <span className="text-indigo-400 font-normal text-sm border border-indigo-800/80 px-2 py-0.5 roundedbg-indigo-950/40">v1.7</span>
            </h1>
            <p className="text-[10px] text-slate-400 tracking-wide uppercase">AI Discipline &amp; Screen Shield</p>
          </div>
        </div>

        {/* Dynamic System / Simulation Time Toggle Control */}
        <div className="hidden md:flex items-center gap-4 bg-slate-900/90 py-1.5 px-3.5 rounded-lg border border-slate-800">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-400 animate-pulse" />
            <span className="text-sm font-mono font-bold text-slate-100">{currentTimeStr}</span>
          </div>
          <div className="border-l border-slate-700 h-4 mx-1"></div>
          
          <div className="flex items-center gap-2.5">
            <span className="text-xs text-slate-400">Simulation:</span>
            <input 
              type="range" 
              min="0" 
              max="23" 
              value={simulatedHour}
              onChange={(e) => {
                setSimulatedHour(parseInt(e.target.value));
                setUseSystemTime(false);
              }}
              className="w-24 accent-indigo-500 h-1 bg-slate-800 rounded-lg cursor-pointer"
            />
            <span className="text-xs font-mono font-bold bg-slate-800 px-1.5 py-0.5 rounded text-amber-400">
              {simulatedHour.toString().padStart(2, "0")}:00
            </span>
            <button
              onClick={() => setUseSystemTime(!useSystemTime)}
              className={`text-[10px] font-bold px-2 py-1 rounded transition-colors ${
                useSystemTime ? "bg-green-700 text-white" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {useSystemTime ? "Live Time" : "Set Custom"}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reward Points</p>
            <p className="text-xl font-mono text-amber-400 font-bold flex items-center justify-end gap-1">
              {points} <span className="text-xs text-slate-400 font-normal">pts</span>
            </p>
          </div>
          
          <div className="hidden sm:block">
            <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1">
              <span>Goal Progress</span>
              <span className="italic text-indigo-400">{progressPercent}%</span>
            </div>
            <div className="w-36 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 to-green-400 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 bg-amber-950/40 border border-amber-900/60 px-3 py-1.5 rounded-lg text-amber-300">
            <Flame className="w-4 h-4 fill-amber-500 stroke-amber-600 animate-bounce" />
            <div className="leading-none text-left">
              <p className="text-sm font-mono font-black">{streak}</p>
              <p className="text-[8px] text-amber-500 tracking-wider font-extrabold uppercase">STREAK</p>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE TIMING BAR SLIDER */}
      <div className="md:hidden flex flex-col gap-2 p-3 bg-slate-950 border-b border-slate-800 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-bold">Simulated Hour Control:</span>
          <span className="font-mono text-amber-400 font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            {currentTimeStr} ({useSystemTime ? "Live PC Time" : "Custom Slide"})
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <input 
            type="range" 
            min="0" 
            max="23" 
            value={simulatedHour}
            onChange={(e) => {
              setSimulatedHour(parseInt(e.target.value));
              setUseSystemTime(false);
            }}
            className="flex-1 accent-indigo-500"
          />
          <button
            onClick={() => setUseSystemTime(!useSystemTime)}
            className="px-2.5 py-1 rounded bg-slate-800 font-bold"
          >
            {useSystemTime ? "Set Custom" : "Use Live Time"}
          </button>
        </div>
      </div>

      {/* GEOMETRIC VIEWPORT NAVIGATION TABS */}
      <div className="bg-slate-950 border-b border-slate-900 px-6 py-3 flex flex-wrap gap-2.5 items-center justify-between sticky top-20 z-40 backdrop-blur-md bg-opacity-95">
        <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setCurrentTab("focus")}
            id="nv_focus"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
              currentTab === "focus"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-950"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            1. Shield Portal
          </button>
          
          <button
            onClick={() => setCurrentTab("schedule")}
            id="nv_schedule"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
              currentTab === "schedule"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-950"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            2. Habit Rules
          </button>
          
          <button
            onClick={() => setCurrentTab("rewards")}
            id="nv_rewards"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
              currentTab === "rewards"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-950"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            3. Points Store
          </button>
          
          <button
            onClick={() => setCurrentTab("ai")}
            id="nv_ai"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all duration-200 ${
              currentTab === "ai"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-950"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
            }`}
          >
            <Bot className="w-3.5 h-3.5" />
            4. Coach Aethel
          </button>
        </div>
        
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-850 py-1.5 px-3 rounded-lg text-[11px] font-mono">
          <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
          <span className="text-slate-400">Section:</span>
          <span className="text-indigo-400 font-bold uppercase">{currentTab} Active</span>
        </div>
      </div>

      {/* THREE PANEL GRID LAYOUT: Geometric Balance Aesthetic */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-1 bg-slate-800 p-1">
        
        {/* ========================================================
            DYNAMIC COLUMN 1 (lg:col-span-3 or lg:col-span-8 base): Left Sidebars or Schedule Lists
            ======================================================== */}
        <section className={`${currentTab === "schedule" ? "lg:col-span-8" : "lg:col-span-4"} bg-slate-950 p-5 rounded-2xl border border-slate-900 shadow-md flex flex-col gap-4 overflow-y-auto`}>
          {currentTab === "focus" && (
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-widest">1. Shield Portal</h2>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight mt-1">Intelligent Phone Freeze</h3>
              </div>
              
              <AutoCarousel slides={FOCUS_SLIDES} />
              
              <div className="text-xs space-y-2 text-slate-300 bg-slate-900 p-4 rounded-xl border border-slate-850 leading-relaxed text-left">
                <p>Smartphone feeds are locked in real-time during focus habit slots to block dopamine distraction circles.</p>
                <p>Select any notebook preset template (or upload your own notes) to verify homework and earn up to 40 reward points!</p>
              </div>

              {/* simulated trigger quick links */}
              <div className="mt-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800 text-left">
                <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-wide">⚡ Simulated clock speed controls:</p>
                <div className="grid grid-cols-3 gap-1 text-[9px] font-bold">
                  <button onClick={() => { setSimulatedHour(7); setUseSystemTime(false); }} className="p-1 px-1.5 bg-slate-950 border border-slate-800 rounded text-amber-400 text-center hover:bg-slate-800">07:00 Wakeup</button>
                  <button onClick={() => { setSimulatedHour(17); setUseSystemTime(false); }} className="p-1 px-1.5 bg-indigo-950 border border-slate-800 rounded text-indigo-450 text-center animate-pulse hover:bg-indigo-900">17:00 Study Lock</button>
                  <button onClick={() => { setSimulatedHour(22); setUseSystemTime(false); }} className="p-1 px-1.5 bg-slate-950 border border-slate-800 rounded text-slate-400 text-center hover:bg-slate-800">22:00 Sleep</button>
                </div>
              </div>
            </div>
          )}

          {currentTab === "rewards" && (
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-widest">3. Points Store</h2>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight mt-1">Convert achievements</h3>
              </div>
              <AutoCarousel slides={STORE_SLIDES} />
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-850 text-xs text-left">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-1">Active Wallet Balance:</span>
                <span className="text-2xl font-mono text-amber-400 font-extrabold">{points} PTS</span>
              </div>
              <div className="bg-slate-950 rounded-xl border border-slate-900 p-3 flex flex-col flex-1 min-h-[140px] text-left">
                <h4 className="text-[10px] font-black text-slate-400 uppercase mb-2 flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-indigo-400" /> Purchased Keycode Vouchers:
                </h4>
                <div className="flex-1 overflow-y-auto space-y-1.5 max-h-[165px]">
                  {purchasedVouchers.length === 0 ? (
                    <p className="text-[10px] text-slate-500 italic text-center mt-3 font-normal">No keys redeemed inside active session.</p>
                  ) : (
                    purchasedVouchers.map((v, idx) => (
                      <div key={idx} className="p-1 px-2 border border-slate-850 rounded bg-slate-900 font-mono text-[9px] text-[#10B981] flex items-center justify-between">
                        <span>🔑 {v}</span>
                        <span className="text-[8px] bg-green-955 px-1 py-0.5 rounded leading-none text-emerald-300 font-black">ACTIVE</span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          {currentTab === "ai" && (
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="text-xs font-black text-indigo-400 uppercase tracking-widest">4. Coach Aethel</h2>
                <h3 className="text-lg font-bold text-slate-100 tracking-tight mt-1">Cognitive Guidance</h3>
              </div>
              <AutoCarousel slides={COACH_SLIDES} />
              <div className="bg-slate-900 p-3.5 rounded-xl border border-slate-850 text-left">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">Note verification trace log:</span>
                <div className="space-y-1 mt-1 font-mono text-[9.5px]">
                  {pastApprovedDescriptions.length === 0 ? (
                    <p className="text-slate-505 italic font-normal">No notes approved inside active session.</p>
                  ) : (
                    pastApprovedDescriptions.slice(-3).map((d, index) => (
                      <div key={index} className="p-1 bg-slate-950 rounded border border-slate-800 text-slate-300 truncate">
                        ✓ {d}
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="bg-slate-900 rounded-xl p-3 border border-slate-850 text-left">
                <span className="text-[9.5px] font-black text-slate-405 uppercase block mb-1.5">Weekly discipline rates</span>
                <div className="flex items-end gap-3.5 h-16 mb-1">
                  <div className="flex-1 bg-slate-800 h-[35%] rounded" />
                  <div className="flex-1 bg-slate-800 h-[50%] rounded" />
                  <div className="flex-1 bg-slate-800 h-[45%] rounded" />
                  <div className="flex-1 bg-slate-800 h-[70%] rounded" />
                  <div className="flex-1 bg-indigo-655 h-[92%] rounded animate-pulse" />
                </div>
              </div>
            </div>
          )}

          {currentTab === "schedule" && (
            <div className="flex flex-col gap-4 h-full">
              <div className="flex justify-between items-center border-b border-slate-850 pb-2 text-left w-full">
                <div>
                  <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Habit Schedule Matrix</h2>
                  <p className="text-[10px] text-indigo-400 italic">Adjust simulated clock range above to highlight active locked periods</p>
                </div>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="p-1.5 px-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-black uppercase tracking-wider transition-all"
                >
                  + Add Custom Rule
                </button>
              </div>

              <div className="space-y-2.5 flex-1 max-h-[460px] overflow-y-auto pr-1">
            {habits.map((h) => {
              // Check if currently Simulated Time equals this habit
              const [hHour, hMin] = h.time.split(":").map(Number);
              let hEndHour = hHour + 1;
              let hEndMin = hMin;
              if (h.endTime) {
                [hEndHour, hEndMin] = h.endTime.split(":").map(Number);
              }
              const [currH, currM] = currentTimeStr.split(":").map(Number);
              const habTotalStart = hHour * 60 + hMin;
              const habTotalEnd = hEndHour * 60 + hEndMin;
              const currentTotal = currH * 60 + currM;

              const isActive = currentTotal >= habTotalStart && currentTotal < habTotalEnd;

              return (
                <div 
                  key={h.id}
                  className={`group relative p-3 rounded border transition-all ${
                    isActive 
                      ? "bg-slate-900 border-indigo-500 shadow-lg shadow-indigo-950/20" 
                      : h.completed 
                        ? "bg-slate-950/60 border-slate-900 opacity-65" 
                        : "bg-slate-950/90 border-slate-800"
                  }`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => toggleManualComplete(h.id)}
                        className={`mt-0.5 rounded-full p-0.5 transition-all ${
                          h.completed 
                            ? "text-green-500 hover:text-red-500" 
                            : "text-slate-600 hover:text-indigo-400"
                        }`}
                        title={h.completed ? "Mark Incomplete" : "Mark Complete"}
                      >
                        <CheckCircle className="w-5 h-5 fill-current" />
                      </button>
                      
                      <div>
                        <p className={`text-xs font-bold ${isActive ? "text-slate-100" : "text-slate-200"}`}>
                          {h.name}
                        </p>
                        <p className="text-[10px] font-mono text-slate-400 mt-0.5 flex items-center gap-1.5">
                          <Clock className="w-3 h-3 text-indigo-400" />
                          <span>{h.time} {h.endTime ? `— ${h.endTime}` : ""}</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-right flex flex-col items-end gap-1 shrink-0">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                        h.phoneAllowed 
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-900/60" 
                          : "bg-rose-950 text-rose-400 border border-rose-950/80"
                      }`}>
                        {h.phoneAllowed ? "📱 Phone On" : "🔒 Shut Off"}
                      </span>
                      {h.isCompulsoryUpload && (
                        <span className="text-[8px] bg-indigo-950 text-indigo-300 border border-indigo-900/60 font-extrabold px-1.5 py-0.5 rounded">
                          📝 PIC REQ
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-center justify-between border-t border-slate-900 pt-2 text-[10px]">
                    <span className="font-mono text-amber-400">+{h.points} pts reward</span>
                    
                    <div className="flex items-center gap-2">
                      {h.isCustom && (
                        <button 
                          onClick={() => handleDeleteHabit(h.id)}
                          className="text-rose-500 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                      
                      {isActive && (
                        <span className="bg-indigo-600 text-white font-black text-[8px] px-2 py-0.5 rounded animate-pulse">
                          ACTIVE NOW
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Productivity Grid Representation */}
          <div className="border-t border-slate-900 pt-3">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Discipline Calendar</h3>
            <div className="grid grid-cols-7 gap-1 bg-slate-950 p-2.5 rounded border border-slate-900">
              {Array.from({ length: 14 }).map((_, i) => {
                // Mock habit completion colors representing past activity
                let color = "bg-slate-800";
                if (i < 8) color = "bg-green-600";
                else if (i < streak) color = "bg-green-500";
                else if (i === streak) color = "bg-indigo-600 animate-pulse";
                
                return (
                  <div 
                    key={i} 
                    className={`w-full aspect-square ${color} rounded-sm cursor-pointer border border-slate-900 hover:scale-105 transition-transform`} 
                    title={i === streak ? "Current simulated active day" : `Completed Day ${i + 1}`}
                  />
                );
              })}
            </div>
            <div className="flex justify-between items-center text-[9px] text-slate-400 mt-2">
              <span>Past 14 Days</span>
              <span className="font-mono font-bold text-green-400">Streak: {streak} Days Active</span>
            </div>
          </div>
        </div>
      )}
        </section>


        {/* ========================================================
            CENTER COLUMN: Active Focus & Simulated Phone (Visible in Focus & Schedule Tabs)
            ======================================================== */}
        {(currentTab === "focus" || currentTab === "schedule") && (
          <section className={`${currentTab === "focus" ? "lg:col-span-8" : "lg:col-span-4"} bg-slate-950 p-4 border border-slate-900/50 rounded-2xl flex flex-col gap-4 shadow-md overflow-y-auto`}>
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Workspace</h2>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`w-2 h-2 rounded-full ${isPhoneRestrictedNow() ? "bg-rose-500 animate-ping" : "bg-emerald-500"}`}></span>
                <span className="text-[10px] pr-2 font-bold uppercase tracking-wider">
                  {isPhoneRestrictedNow() ? "Lockdown Schedule Active" : "Unrestricted Sandbox Mode"}
                </span>
              </div>
            </div>
            
            {/* Status indicators */}
            <div className="text-right">
              <span className="text-[10px] font-mono text-slate-400">Current Slot:</span>
              <p className="text-xs font-black text-indigo-400 tracking-tight">{currentLabel}</p>
            </div>
          </div>

          {/* SIMULATED INTEGRATED MOBILE PHONE SCREENS */}
          <div className="bg-slate-900/80 rounded-2xl border-4 border-slate-800 p-3 shadow-2xl relative flex-1 flex flex-col gap-3 min-h-[500px]">
            
            {/* Mobile Status Bar */}
            <div className="flex justify-between items-center px-2 text-[10px] font-mono border-b border-slate-800/80 pb-1.5 text-slate-400 select-none">
              <span>9:41 AM <span className="text-slate-600">(Simulated)</span></span>
              <div className="flex items-center gap-2">
                <span>Signal: 5G</span>
                <span>🔋 85%</span>
              </div>
            </div>

            {/* IF MOBILE IS UNDER ACTIVE RESTRICTION / FOCUS TIME */}
            {isPhoneRestrictedNow() ? (
              <div className="flex-1 flex flex-col justify-between p-3 bg-slate-950 rounded-xl relative overflow-hidden ring-1 ring-red-500/20">
                {/* Visual Lock Accent Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
                  <Lock className="w-64 h-64 text-indigo-505" />
                </div>

                <div className="text-center pt-4">
                  <div className="w-12 h-12 bg-red-950/60 text-red-500 rounded-full flex items-center justify-center mx-auto mb-2.5 ring-2 ring-red-900/60">
                    <Lock className="w-5 h-5 animate-pulse" />
                  </div>
                  <h3 className="text-sm font-black text-slate-100 uppercase tracking-widest">
                    REELS &amp; SOCIAL LOCK ACTIVE
                  </h3>
                  <p className="text-slate-400 text-[11px] max-w-sm mx-auto mt-1 leading-relaxed">
                    Timepass distraction features are frozen to prevent continuous dopamine scrolling. Stick to your task: <span className="text-indigo-400 font-bold">"{currentLabel}"</span>.
                  </p>
                </div>

                {/* Reels test box demonstrating the block */}
                <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 my-2">
                  <p className="text-[10px] text-slate-400 mb-1.5 uppercase font-bold tracking-wide">Distraction Feed Test:</p>
                  <div className="aspect-[16/6] bg-slate-950 rounded border border-dashed border-slate-800 flex items-center justify-center relative overflow-hidden group">
                    <div className="text-center p-2 z-10">
                      <button 
                        onClick={handleReelsClick}
                        className="px-3 py-1 bg-rose-700/80 hover:bg-rose-700 text-white font-extrabold text-[10px] rounded tracking-widest transition-transform transform active:scale-95"
                      >
                        🎬 TRY TO SCROLL REELS
                      </button>
                      <p className="text-[9px] text-slate-500 mt-1">Simulate timepass attempt during lock hours</p>
                    </div>
                  </div>

                  {reelsBlockedAlert && (
                    <div className="mt-2 p-2 bg-rose-950/80 border border-rose-900/60 rounded text-rose-300 text-[10px] leading-relaxed animate-bounce">
                      🚨 <span className="font-extrabold">LOCK RANGE ACTIVE!</span> Continuous reels feed is blocked to save time. Emergency Bypass allows calling study team under 2-min limit.
                    </div>
                  )}
                </div>

                {/* STUDY VERIFICATION PHOTO FOR THE ACTIVE COMPULSORY SLOT */}
                <div className="bg-indigo-950/20 border-2 border-dashed border-indigo-900/80 rounded-xl p-3 text-center transition-colors hover:border-indigo-700/80">
                  <h4 className="text-[11px] font-black text-indigo-300 uppercase tracking-widest mb-1.5 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-indigo-450 animate-bounce" /> Compulsory Homework Picture Guard
                  </h4>
                  
                  {/* Preset Quick Select for sandbox verification */}
                  <div className="mb-2 text-left">
                    <label className="text-[9px] font-bold text-slate-450 uppercase block mb-1">
                      Choose Notebook Notes template to evaluate or upload your own:
                    </label>
                    
                    <div className="grid grid-cols-2 xs:grid-cols-3 gap-1 mb-2">
                      {PRESET_PHOTOS.map((pt) => (
                        <button
                          key={pt.id}
                          onClick={() => {
                            setSelectedPreset(pt);
                            setCustomFileBase64(null);
                          }}
                          className={`text-[9px] font-bold px-1.5 py-1 text-left rounded leading-tight border overflow-hidden text-ellipsis whitespace-nowrap transition-all ${
                            selectedPreset?.id === pt.id
                              ? "bg-indigo-600 text-white border-indigo-400"
                              : "bg-slate-900 text-slate-350 border-slate-800 hover:bg-slate-800"
                          }`}
                        >
                          {pt.name}
                        </button>
                      ))}
                    </div>

                    {/* File Drop Input */}
                    <div className="flex items-center gap-2 border border-slate-850 p-1.5 rounded bg-slate-950">
                      <label className="bg-indigo-950 text-indigo-300 px-2 py-1 rounded text-[9px] font-bold cursor-pointer hover:bg-indigo-900 transition-colors">
                        📷 Upload Custom File
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={handleCustomFileChange} 
                          className="hidden" 
                        />
                      </label>
                      <span className="text-[8px] text-slate-450 text-ellipsis overflow-hidden whitespace-nowrap max-w-[150px]">
                        {customFileName || (selectedPreset ? "(Using chosen preset)" : "No file chosen")}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleSubmitEvidence}
                    disabled={isUploading}
                    className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 text-white text-[11px] font-extrabold rounded-lg tracking-widest transition-colors flex items-center justify-center gap-1.5"
                  >
                    {isUploading ? (
                      <span className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-white"></span>
                    ) : (
                      <>
                        <UploadCloud className="w-3.5 h-3.5" /> SUBMIT EVIDENCE TO GEMINI
                      </>
                    )}
                  </button>

                  {latestVerification && (
                    <div className={`mt-2.5 p-2 rounded text-[10px] text-left leading-relaxed border ${
                      latestVerification.isValid && !latestVerification.isDuplicate
                        ? "bg-emerald-950/80 border-emerald-900/60 text-emerald-300"
                        : "bg-rose-950/80 border-rose-900/60 text-rose-300"
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-extrabold uppercase">
                          {latestVerification.isValid && !latestVerification.isDuplicate ? "✓ Verifiable studyNotes Approved" : "✗ REJECTED"}
                        </span>
                        {latestVerification.score > 0 && (
                          <span className="font-mono bg-emerald-900 px-1 py-0.5 rounded text-[8px] font-bold">
                            Score: {latestVerification.score}/100
                          </span>
                        )}
                      </div>
                      <p className="opacity-90 leading-tight">Descriptor: {latestVerification.description}</p>
                      <p className="mt-1 italic opacity-80">Feedback: {latestVerification.feedback}</p>
                    </div>
                  )}
                </div>

                {/* Footer buttons / Emergency Trigger */}
                <div className="pt-2 border-t border-slate-900 flex justify-between items-center text-[10px]">
                  <div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase">Emergency Protocol</p>
                    <p className="font-bold text-slate-200">Reels Strictly Blocked</p>
                  </div>
                  <button 
                    onClick={launchEmergencyBypass}
                    className="px-3 py-1.5 border border-red-500/80 text-red-400 rounded-full font-bold text-[10px] hover:bg-red-950/30 transition-colors flex items-center gap-1"
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500 animate-pulse" /> EMERGENCY BYPASS
                  </button>
                </div>

              </div>
            ) : (
              /* PHONE ALLOWED SCREEN / PLAYGROUND MODE */
              <div className="flex-1 flex flex-col justify-between p-3 bg-slate-950 rounded-xl">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] bg-green-950 text-green-300 px-2 py-0.5 rounded font-extrabold border border-green-900/60">
                      📱 STATIONS UNLOCKED
                    </span>
                    <span className="text-[10px] text-slate-405 font-mono">Sim time: {currentTimeStr}</span>
                  </div>
                  <h3 className="text-xs font-black text-slate-200 uppercase tracking-wider">
                    Unrestricted Phone Access Segment
                  </h3>
                  <p className="text-slate-450 text-[10px] leading-relaxed mt-1">
                    Your scheduled slot permits using the phone (e.g. 7-8 AM wake up screen time or during simulated break hours). Let's check some content:
                  </p>
                </div>

                {/* Mini Unlocked Apps Carousel or simulated reels feed */}
                <div className="bg-slate-900 p-2 rounded-xl border border-slate-800 flex-1 my-3 flex flex-col gap-2 overflow-y-auto">
                  <div className="flex items-center justify-between border-b border-slate-850 pb-1 text-[9px] font-bold text-slate-400">
                    <span>🎬 Dynamic Reels Simulator</span>
                    <span className="text-green-500">Active</span>
                  </div>

                  <div className="flex-1 min-h-[140px] bg-slate-950 rounded border border-slate-850 p-2 flex flex-col justify-between text-xs overflow-hidden relative">
                    <div className="text-[10px]">
                      <span className="font-bold text-indigo-400">@viral_science_guru</span>
                      <p className="text-slate-300 font-normal mt-0.5">"10 Calculus Tricks That Will Save Your Exam Grade Tonight! 📚🔥"</p>
                    </div>

                    <div className="absolute right-2 bottom-12 flex flex-col gap-1.5 items-center bg-slate-900/90 p-1.5 rounded-full border border-slate-800 text-[10px] font-mono font-bold">
                      <span className="text-rose-500 animate-pulse">❤️ 12K</span>
                      <span className="text-slate-400">💬 340</span>
                    </div>

                    <div className="pt-2 border-t border-slate-900/40 flex justify-between items-center bg-indigo-950/20 p-1.5 rounded">
                      <span className="text-[9px] text-indigo-300">Continuous Dopamine Reel Playing...</span>
                      <button 
                        onClick={() => alert("Reels Playing: Succeeded inside allowed habit hours.")}
                        className="px-2 py-0.5 bg-green-700 hover:bg-green-600 text-white font-extrabold text-[8px] rounded"
                      >
                        REPLAY
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-indigo-950/20 rounded-xl border border-indigo-900/60">
                  <p className="text-[10px] text-slate-200 font-bold leading-relaxed">
                    🌟 <span className="text-amber-400">Tip:</span> If you simulate putting the clock slider to <span className="text-amber-400 font-bold font-mono">17:00 (5:00 PM)</span>, the phone will instantly transition to "Locked Mode", demonstrating how it blocks feeds and requests study verification automatically!
                  </p>
                </div>
              </div>
            )}

            {/* EMERGENCY BYPASS MINI SHEET (If Active) */}
            {isEmergencyBypassActive && (
              <div className="absolute inset-x-2 bottom-2 bg-slate-950 border-2 border-red-500 rounded-xl p-3 z-30 animate-in fade-in slide-in-from-bottom duration-200">
                <div className="flex justify-between items-center border-b border-slate-800 pb-1.5 mb-2">
                  <span className="text-red-500 font-black text-xs flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> MOCK EMERGENCY BYPASS
                  </span>
                  <span className="text-[10px] font-mono text-amber-500">{emergencyTimer}s left</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold mb-2">
                  <button 
                    onClick={() => {
                      setEmergencyAppMode("call");
                      setCallStatus("");
                    }}
                    className={`p-1.5 rounded text-center border ${
                      emergencyAppMode === "call" ? "bg-red-950 border-red-500 text-red-300" : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850"
                    }`}
                  >
                    📞 Call Important Contact
                  </button>
                  <button 
                    onClick={() => setEmergencyAppMode("notes")}
                    className={`p-1.5 rounded text-center border ${
                      emergencyAppMode === "notes" ? "bg-red-950 border-red-500 text-red-300" : "bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850"
                    }`}
                  >
                    🔍 Search Web Notes
                  </button>
                </div>

                {emergencyAppMode === "call" && (
                  <form onSubmit={simulateEmergencyCall} className="space-y-1.5">
                    <label className="text-[8px] uppercase tracking-wider text-slate-450 block font-bold">Provide contact name or number to call:</label>
                    <div className="flex gap-1.5">
                      <input 
                        type="text" 
                        placeholder="E.g., Mom or Study Mentor" 
                        value={calledNumber}
                        onChange={(e) => setCalledNumber(e.target.value)}
                        className="flex-1 bg-slate-900 text-slate-100 text-xs px-2 py-1 rounded border border-slate-850 focus:outline-none focus:border-red-500"
                        required
                      />
                      <button type="submit" className="px-2.5 bg-red-600 hover:bg-red-500 text-white rounded text-[9px] font-bold">
                        CALL
                      </button>
                    </div>
                    {callStatus && (
                      <p className="text-[9px] text-green-400 italic bg-green-950/20 p-1 border border-green-905/30 rounded">
                        {callStatus}
                      </p>
                    )}
                  </form>
                )}

                {emergencyAppMode === "notes" && (
                  <form onSubmit={simulateNotesQuery} className="space-y-2">
                    <label className="text-[8px] uppercase tracking-wider text-slate-450 block font-bold">Look Up Textbook definitions or math solutions:</label>
                    <div className="flex gap-1.5">
                      <input 
                        type="text" 
                        placeholder="E.g., 'Integration derivatives table'..." 
                        value={soughtNotesQuery}
                        onChange={(e) => setSoughtNotesQuery(e.target.value)}
                        className="flex-1 bg-slate-900 text-slate-100 text-xs px-2 py-1 rounded border border-slate-850 focus:outline-none"
                        required
                      />
                      <button type="submit" className="px-2.5 bg-indigo-650 hover:bg-indigo-600 text-white rounded text-[9px] font-bold">
                        SEARCH
                      </button>
                    </div>
                    <div className="p-1.5 bg-slate-900 rounded border border-slate-800 text-[9px] text-slate-400 leading-tight">
                      <span className="font-bold text-slate-205">Bypass Search result:</span> "Using emergency pipeline bypass. Reels and tiktok blocks remain active. Stay focused!"
                    </div>
                  </form>
                )}

                <div className="flex justify-end gap-1.5 mt-2 pt-1.5 border-t border-slate-800/60">
                  <button 
                    onClick={() => {
                      setIsEmergencyBypassActive(false);
                      setEmergencyAppMode("none");
                    }}
                    className="p-1 px-2.5 bg-slate-900 hover:bg-slate-850 text-slate-400 rounded text-[9px] font-bold"
                  >
                    LOCK SHIELD BACK
                  </button>
                </div>
              </div>
            )}

            {/* Virtual Home Button indicator for realistic design */}
            <div className="w-16 h-1 bg-slate-850 rounded-full mx-auto mt-auto select-none pointer-events-none"></div>
          </div>
        </section>
      )}


      {/* ========================================================
          REWARDS BAZAAR COMPONENT (Visible in Rewards Tab)
          ======================================================== */}
      {currentTab === "rewards" && (
        <section className="lg:col-span-8 bg-slate-950 p-6 border border-slate-900 rounded-2xl flex flex-col gap-5 shadow-xl overflow-y-auto">
          <div className="border-b border-slate-850 pb-3 text-left">
            <h2 className="text-sm font-black text-slate-200 uppercase tracking-widest">Available Discipline Rewards Bazaar</h2>
            <p className="text-xs text-indigo-400 italic mt-0.5">Redeem points gained from approved note-proofs to fetch keycode bypass codes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rewardsList.map((item) => {
              const isAffordable = points >= item.cost;
              return (
                <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-indigo-900 transition-all group text-left">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xs font-black tracking-wide text-slate-100 group-hover:text-indigo-400 transition-colors uppercase">{item.title}</h4>
                      <span className="font-mono text-[10.5px] font-black text-amber-400 bg-amber-955/40 border border-amber-900/60 px-2 py-0.5 rounded-lg shrink-0">
                        {item.cost} PTS
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-normal min-h-[40px]">{item.description}</p>
                  </div>

                  <button
                    onClick={() => handleRedeemReward(item)}
                    className={`w-full h-8 rounded-lg text-[9.5px] font-mono font-black uppercase tracking-wider transition-all mt-4 ${
                      isAffordable
                        ? "bg-indigo-600 hover:bg-indigo-505 text-white shadow-md active:scale-95 cursor-pointer"
                        : "bg-slate-950 text-slate-650 border border-slate-850 cursor-not-allowed"
                    }`}
                  >
                    {isAffordable ? "🛒 Redeem Keycode Voucher" : "Insufficient wallet Balance"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}


        {/* ========================================================
            RIGHT COLUMN: Personal AI Coach Chat & Stats (Visible in AI Tab)
            ======================================================== */}
        {currentTab === "ai" && (
          <section className="lg:col-span-8 bg-slate-950 p-4 border border-slate-900/50 rounded-2xl flex flex-col gap-4 shadow-md overflow-y-auto">
          
          <div className="flex items-center gap-2 border-b border-slate-800 pb-2.5">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
            </div>
            <div>
              <h4 className="font-black text-slate-200 text-xs tracking-tight uppercase">Aethel AI Coach Desk</h4>
              <p className="text-[10px] text-slate-500">Supportive Growth &amp; Anti-cheat Evaluator</p>
            </div>
          </div>

          {/* CHAT MESSAGES WINDOW */}
          <div className="flex-1 min-h-[220px] max-h-[380px] bg-slate-900/60 rounded-xl border border-slate-900 p-2.5 flex flex-col gap-2.5 overflow-y-auto">
            {chatMessages.map((msg) => (
              <div 
                key={msg.id}
                className={`max-w-[90%] p-2.5 rounded-lg text-xs leading-relaxed ${
                  msg.role === "assistant" 
                    ? "bg-slate-800/90 text-indigo-100 rounded-tl-none border-l-2 border-indigo-500" 
                    : "bg-indigo-650 text-white rounded-tr-none ml-auto"
                }`}
              >
                <p className="font-sans whitespace-pre-line">{msg.content}</p>
                <span className="block text-[8px] opacity-70 text-right mt-1 font-mono tracking-wider">
                  {msg.timestamp || "Just now"}
                </span>
                {msg.content.includes("🚨 Cheating") && (
                  <span className="block text-[8px] uppercase tracking-widest text-rose-400 font-extrabold mt-1">
                    [DUPLICATE REVOLVING BLOCK]
                  </span>
                )}
              </div>
            ))}

            {isSendingChat && (
              <div className="bg-slate-800/50 p-2.5 rounded-lg text-xs text-indigo-400 italic rounded-tl-none flex items-center gap-2">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce [animation-delay:0.2s]">●</span>
                <span className="animate-bounce [animation-delay:0.4s]">●</span>
                <span>Aethel thinking...</span>
              </div>
            )}
          </div>

          {/* CHAT MESSAGE INPUT FORM */}
          <div className="flex gap-1.5">
            <input 
              type="text" 
              placeholder="Ask Aethel AI about habits or notes evaluation..." 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendChat();
              }}
              className="flex-1 bg-slate-900 text-slate-100 text-xs px-3 py-2 rounded-lg border border-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-slate-950 transition-all"
            />
            <button
              onClick={handleSendChat}
              disabled={isSendingChat || !chatInput.trim()}
              className="p-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-850 rounded-lg text-white font-bold transition-all shrink-0 active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Weekly Growth Metric Charts */}
          <div className="border-t border-slate-900 pt-3">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Self-Assessment Optimization</h4>
              <span className="text-[8px] bg-indigo-950 text-indigo-400 px-1.5 py-0.5 rounded border border-indigo-900/60 font-mono">
                WEEK 24
              </span>
            </div>

            <div className="bg-slate-900 rounded-xl p-3 border border-slate-900/80">
              {/* SVG Growth bar layout matching theme */}
              <div className="flex items-end gap-3 h-20 mb-2">
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="bg-slate-705 w-full h-[30%] rounded bg-slate-800 hover:bg-slate-755 transition-all text-[8px] flex items-center justify-center text-slate-500">M</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="bg-slate-705 w-full h-[55%] rounded bg-slate-800 hover:bg-slate-755 transition-all text-[8px] flex items-center justify-center text-slate-500">T</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="bg-slate-705 w-full h-[45%] rounded bg-slate-800 hover:bg-slate-755 transition-all text-[8px] flex items-center justify-center text-slate-500">W</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="bg-slate-705 w-full h-[80%] rounded bg-slate-800 hover:bg-slate-755 transition-all text-[8px] flex items-center justify-center text-slate-500 font-extrabold text-slate-450">T</div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-end h-full">
                  <div className="w-full h-[95%] rounded bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-950/40 text-[9px] font-bold text-indigo-100 flex items-center justify-center">F</div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs mt-1">
                <div>
                  <p className="text-[10px] text-slate-400">Weekly Efficiency Rate</p>
                  <p className="text-xl font-bold font-mono text-slate-100">+12.4% <span className="text-[10px] text-green-400 font-bold uppercase shrink-0">📈 Up</span></p>
                </div>
                <span className="text-[9px] bg-slate-950 border border-slate-850 p-1.5 rounded-lg text-indigo-400 block max-w-[150px] leading-tight text-right italic font-medium">
                  "Study uploads show steady daily practice complexity!"
                </span>
              </div>
            </div>
          </div>

        </section>
      )}

      </main>

      {/* FOOTER NAVIGATION */}
      <footer className="h-14 bg-slate-950 border-t border-slate-800/80 px-6 flex items-center justify-center gap-10 text-xs text-slate-400">
        <span className="text-indigo-400 font-extrabold flex items-center gap-1.5 select-none font-mono">
          <Layers className="w-4 h-4 text-indigo-505" /> SYSTEM LOGS: STREAK INTEGRIZED
        </span>
        <div className="hidden sm:flex gap-6 items-center">
          <span className="hover:text-slate-100 cursor-pointer transition-colors" onClick={() => alert("Daily View shows active timetable slots.")}>DAILY MONITOR</span>
          <span className="hover:text-slate-100 cursor-pointer transition-colors" onClick={() => alert("Anti-cheat evaluation requires freshly captured handwritten notes.")}>ANTI-CHEAT SPECS</span>
          <span className="hover:text-slate-100 cursor-pointer transition-colors" onClick={() => alert("Bypass operates with active lock block validation rules.")}>EMERGENCY PROTOCOL</span>
        </div>
      </footer>

      {/* ADD CUSTOM HABIT MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-950 rounded-xl border-2 border-slate-850 p-6 max-w-sm w-full space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-sm font-black text-slate-100 uppercase tracking-widest flex items-center gap-1.5">
                <Plus className="w-4 h-4 text-indigo-500" /> Incorporate Habit Rule
              </h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white font-extrabold text-xs"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddHabit} className="space-y-3 text-xs text-slate-300">
              <div>
                <label className="block mb-1 font-bold">Habit Focus Name:</label>
                <input 
                  type="text" 
                  value={newHabitName}
                  onChange={(e) => setNewHabitName(e.target.value)}
                  placeholder="e.g. 'Advanced Java Prep' or 'Guitar Drills'"
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-100 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block mb-1 font-bold">Hour Start:</label>
                  <input 
                    type="time" 
                    value={newHabitStart}
                    onChange={(e) => setNewHabitStart(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-100 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 font-bold">Hour End:</label>
                  <input 
                    type="time" 
                    value={newHabitEnd}
                    onChange={(e) => setNewHabitEnd(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-100 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="p-2.5 rounded bg-slate-900 border border-slate-850 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold select-none text-[11px]">
                  <input 
                    type="checkbox" 
                    checked={newHabitPhoneAllowed}
                    onChange={(e) => setNewHabitPhoneAllowed(e.target.checked)}
                    className="scale-110 accent-indigo-500"
                  />
                  <span>Permit phone / Reels scroll during this slot?</span>
                </label>
                <p className="text-[9px] text-slate-450 leading-tight">
                  If left unchecked, your simulated phone goes into Lockdown Shield, freezing distraction apps!
                </p>
              </div>

              <div className="p-2.5 rounded bg-slate-900 border border-slate-850 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold select-none text-[11px]">
                  <input 
                    type="checkbox" 
                    checked={newHabitCompulsory}
                    onChange={(e) => setNewHabitCompulsory(e.target.checked)}
                    className="scale-110 accent-indigo-500"
                  />
                  <span>Compulsory Handwritten Notes upload?</span>
                </label>
                <p className="text-[9px] text-slate-450 leading-tight">
                  If selected, you must upload fresh notebook study evidence for AI verification to clear the lockdown!
                </p>
              </div>

              <div>
                <label className="block mb-1 font-bold">Reward points for slot completion:</label>
                <input 
                  type="number" 
                  value={newHabitPoints}
                  onChange={(e) => setNewHabitPoints(parseInt(e.target.value) || 20)}
                  className="w-full bg-slate-900 border border-slate-800 rounded px-2 py-1 text-xs text-slate-100"
                  min="10"
                  max="500"
                />
              </div>

              <div className="pt-3 border-t border-slate-800 flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="px-3 py-1.5 bg-slate-900 hover:bg-slate-850 text-slate-400 rounded text-xs font-bold"
                >
                  DISCARD
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-xs font-bold font-mono"
                >
                  SAVE RULE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
