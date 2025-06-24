import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
// import { ImageCards } from "./components/image-cards";
import Services from "./components/services";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl w-full px-4">
        <Hero />
        <About />
        {/* <ImageCards /> */}
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
