import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { VIDEOS } from "../data/constants";

function VideoCard({ url, title, description, index }: {
  url: string;
  title: string;
  description: string;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card overflow-hidden group"
      >
        <div className="relative aspect-video overflow-hidden">
          <iframe
            src={url}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-6">
          <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-white/45 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function VideoEmbed() {
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-to-b from-ink to-darkest">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionDivider label="Watch" />
            <h2 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              GCF in <span className="foil-text">Action</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mt-6 text-sm sm:text-base font-light">
              See how God is working through GCF Malaysia today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VIDEOS.map((video, i) => (
            <VideoCard key={video.title} {...video} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
