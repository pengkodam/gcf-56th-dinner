import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Timeline from "./components/Timeline";
import LegacyCounters from "./components/LegacyCounters";
import Testimonials from "./components/Testimonials";
import SepiaTransition from "./components/SepiaTransition";
import MinistryPillars from "./components/MinistryPillars";
import VisionReveal from "./components/VisionReveal";
import YourStory from "./components/YourStory";
import Tickets from "./components/Tickets";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-darkest">
      <Navbar />
      <Hero />
      <EventDetails />
      <Timeline />
      <LegacyCounters />
      <Testimonials />
      <SepiaTransition />
      <MinistryPillars />
      <VisionReveal />
      <YourStory />
      <Tickets />
      <Payment />
      <Contact />
      <Footer />
    </div>
  );
}
