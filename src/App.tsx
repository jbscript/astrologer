import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <main className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Dr. Poduval's Astrology Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience authentic Vedic astrology consultations with personalized
            guidance for your life's most important decisions.
          </p>
        </div>
      </main>
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
