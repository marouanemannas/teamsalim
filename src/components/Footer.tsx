import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon } from "@/components/icons/SocialIcons";
import { GOOGLE_MAPS_LINK, GYM_ADDRESS, SOCIAL_LINKS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer id="contatti" className="relative border-t border-white/5 bg-background-surface/40 py-16">
      <Container className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col gap-3">
          <div className="group flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Team Salim"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-heading text-lg tracking-wide text-foreground">
              TEAM SALIM
            </span>
          </div>
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2 text-sm text-foreground-muted transition-colors duration-300 hover:text-accent-glow"
          >
            <MapPin size={16} className="mt-0.5 shrink-0 text-accent-glow" />
            <span className="underline decoration-transparent underline-offset-4 transition-colors duration-300 group-hover:decoration-accent-glow">
              {GYM_ADDRESS}
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-foreground-muted">
            Seguici
          </span>
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-all duration-300 hover:scale-110 hover:text-accent-glow"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-all duration-300 hover:scale-110 hover:text-accent-glow"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.tiktok}
              className="text-foreground-muted transition-all duration-300 hover:scale-110 hover:text-accent-glow"
              aria-label="TikTok"
            >
              <TikTokIcon size={20} />
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-all duration-300 hover:scale-110 hover:text-accent-glow"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </div>
      </Container>

      <Container className="mt-10 border-t border-white/5 pt-6">
        <p className="text-center text-xs text-foreground-muted">
          © {new Date().getFullYear()} Team Salim. Tutti i diritti riservati.
        </p>
      </Container>
    </footer>
  );
}
