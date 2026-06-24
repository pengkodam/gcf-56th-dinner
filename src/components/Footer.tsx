import { Heart } from "lucide-react";
import { GCF, SOCIAL, DONATION } from "../data/constants";

export default function Footer() {
  return (
    <footer className="relative py-12 bg-darkest border-t border-gold/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Love Gift callout */}
        <div className="text-center mb-8">
          <a
            href={DONATION.loveGiftUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-card px-6 py-3 hover:gold-glow transition-all"
          >
            <Heart className="text-gold" size={16} />
            <p className="text-gold/60 text-xs sm:text-sm">
              Support GCF Malaysia Ministries through a Love Gift
            </p>
          </a>
        </div>

        {/* GCF info */}
        <div className="text-center space-y-3">
          <p className="font-display text-lg font-bold text-gold">{GCF.fullName}</p>
          <p className="text-white/40 text-sm">{GCF.address}</p>
          <a
            href={SOCIAL.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/60 hover:text-gold text-sm transition-colors"
          >
            gcfmalaysia.org
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent my-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} {GCF.fullName}. All rights reserved.
          </p>
          <p className="text-white/10 text-xs mt-1">
            Persatuan Siswazah Kristian Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
