import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_20px_rgba(0,0,0,0.4),0_0_20px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:scale-110 active:scale-95 sm:bottom-6 sm:right-6"
    >
      <MessageCircle
        size={28}
        strokeWidth={2}
        className="text-white transition-transform duration-300 group-hover:scale-110"
      />
    </a>
  );
}
