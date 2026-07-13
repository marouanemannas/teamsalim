import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message: string;
  label: string;
  className?: string;
  variant?: "solid" | "outline";
}

const VARIANT_STYLES: Record<NonNullable<WhatsAppButtonProps["variant"]>, string> = {
  solid:
    "bg-accent text-foreground hover:bg-accent-glow hover:shadow-[0_0_30px_rgba(59,130,255,0.35)]",
  outline:
    "border border-accent/50 text-foreground hover:border-accent hover:bg-accent/10",
};

export function WhatsAppButton({
  message,
  label,
  className = "",
  variant = "solid",
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppLink(WHATSAPP_NUMBER, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition-all duration-300 hover:scale-[1.02] ${VARIANT_STYLES[variant]} ${className}`}
    >
      <span>{label}</span>
      <MessageCircle
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110"
      />
    </a>
  );
}
