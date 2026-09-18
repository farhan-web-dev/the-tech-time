"use client";

import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1F1208] rounded-3xl overflow-hidden shadow-2xl border border-[#D4AF37]/30">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="aspect-video w-full bg-black">
          <video src="/intro.mp4" controls autoPlay className="w-full h-full object-contain" />
        </div>
        <div className="p-6 bg-[#2C1A0B] text-white flex items-center justify-between border-t border-[#D4AF37]/20">
          <div>
            <h3 className="text-lg font-bold text-[#F3E5AB]">The Time Tech — Academy Overview</h3>
            <p className="text-xs text-amber-200/70">Live instructor-led training in Dubai</p>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gradient-to-r from-[#D4AF37] to-[#C59B27] hover:from-[#C59B27] hover:to-[#B8860B] text-white text-xs font-bold rounded-full transition-all shadow"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
