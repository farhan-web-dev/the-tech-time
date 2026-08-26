"use client";

import { brand } from "@/data/site";

export function WhatsAppButton() {
  const cleanNumber = brand.phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    "Hello! I would like to inquire about courses at The Time Tech.",
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip Label */}
      <span className="mr-3 hidden md:inline-block px-3 py-1.5 bg-[#1F1208] text-[#F3E5AB] text-xs font-bold rounded-xl shadow-xl border border-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Chat on WhatsApp (+971 56 611 2150)
      </span>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp (+971 56 611 2150)"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95 border-2 border-white/80"
      >
        {/* Animated Ping Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="relative w-8 h-8 fill-current drop-shadow-sm"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.67-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.926 0-3.725-.515-5.281-1.413l-.379-.222-3.924 1.029 1.047-3.826-.247-.393c-.987-1.57-1.507-3.39-1.507-5.26 0-5.385 4.381-9.766 9.767-9.766 2.607 0 5.059 1.015 6.903 2.86 1.843 1.844 2.858 4.296 2.858 6.904 0 5.386-4.381 9.767-9.766 9.767m0-21.734C5.57 0 0 5.57 0 12.472c0 2.21.576 4.364 1.667 6.257L0 24.944l6.398-1.678c1.821.993 3.882 1.518 5.974 1.518 6.901 0 12.472-5.57 12.472-12.472 0-3.332-1.297-6.463-3.654-8.82C18.835 1.134 15.704 0 12.051 0z" />
        </svg>
      </a>
    </div>
  );
}
