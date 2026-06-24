import { motion } from "framer-motion";
import { Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { VIDEOS } from "../data/constants";

function VideoCard({ url, title, description, index }: {
  url: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="glass-card overflow-hidden group"
      >
        {/* Video embed */}
        <div className="relative aspect-video">
          <iframe
            src={url}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-white/50 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function VideoEmbed() {
  return (
    <section className="relative py-20 sm:py-28 bg-gradient-to-b from-darker to-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <p className="text-center text-gold/70 text-sm tracking-[0.3em] uppercase font-body mb-3">
            Watch
          </p>
          <h2 className="text-center font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            GCF in <span className="text-gold">Action</span>
          </h2>
          <p className="text-center text-white/50 max-w-xl mx-auto mb-14 text-sm sm:text-base">
            See how God is working through GCF Malaysia today.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.title} {...video} index={i} />
          ))}
        </div>

        {/* Placeholder note */}
        <ScrollReveal delay={0.3}>
          <p className="text-center text-gold/30 text-xs mt-8 italic">
            Video placeholders — replace with actual GCF YouTube URLs
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
