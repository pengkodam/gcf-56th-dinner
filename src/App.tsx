import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Timeline from "./components/Timeline";
import LegacyCounters from "./components/LegacyCounters";
import SepiaTransition from "./components/SepiaTransition";
import PhotoGallery from "./components/PhotoGallery";
import Testimonials from "./components/Testimonials";
import MinistryPillars from "./components/MinistryPillars";
import VisionReveal from "./components/VisionReveal";
import VideoEmbed from "./components/VideoEmbed";
import YourStory from "./components/YourStory";
import LoveGift from "./components/LoveGift";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink grain">
      <Navbar />
      <Hero />
      <EventDetails />
      <Timeline />
      <LegacyCounters />
      <SepiaTransition />
      <PhotoGallery />
      <Testimonials />
      <MinistryPillars />
      <VisionReveal />
      <VideoEmbed />
      <YourStory />
      <LoveGift />
      <Contact />
      <Footer />
    </div>
  );
}
