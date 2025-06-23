import { Phone, Mail, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-slate-800 text-white">
      {/* Top Contact Bar – hidden on mobile */}
      <div className="bg-slate-900 py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500">Talk to our Astrogers</span>
            <span>- +1800&nbsp;326&nbsp;3264</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500">Talk to our Astrogers</span>
            <span>- support@website.com</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              {/* Sun Logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center relative">
                <span className="text-white font-bold text-base md:text-lg">
                  {"☀"}
                </span>
                {/* Sun rays */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-2 md:h-3 bg-orange-500"
                      style={{
                        top: "-4px",
                        left: "50%",
                        transformOrigin: "50% 24px",
                        transform: `translateX(-50%) rotate(${i * 45}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            <span className="ml-2 md:ml-3 text-xl md:text-2xl font-bold text-orange-500">
              AstrologerPoduval
            </span>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden text-white hover:text-orange-500 p-2"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="bg-slate-700 py-3 px-4 hidden lg:block">
        <div className="container mx-auto flex items-center justify-between">
          <ul className="flex items-center space-x-8">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services", true],
              ["/blog", "Blog"],
              ["/appointment", "Appointment"],
              ["/shop", "Shop"],
              ["/pages", "Pages"],
              ["/contact", "Contact"],
            ].map(([href, label, active]) => (
              <li key={href as string}>
                <a
                  href={href as string}
                  className={`transition-colors ${
                    active
                      ? "text-orange-500 font-medium"
                      : "hover:text-orange-500"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-orange-500"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-700 border-t border-slate-600">
          <div className="container mx-auto py-4 px-4">
            <ul className="space-y-4">
              {[
                ["/", "Home"],
                ["/about", "About"],
                ["/services", "Services", true],
                ["/blog", "Blog"],
                ["/appointment", "Appointment"],
                ["/shop", "Shop"],
                ["/pages", "Pages"],
                ["/contact", "Contact"],
              ].map(([href, label, active]) => (
                <li key={href as string}>
                  <a
                    href={href as string}
                    className={`block py-2 transition-colors ${
                      active
                        ? "text-orange-500 font-medium"
                        : "hover:text-orange-500"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact info */}
            <div className="mt-6 pt-4 border-t border-slate-600 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500">Call:</span>
                <span>+1800&nbsp;326&nbsp;3264</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500">Email:</span>
                <span>support@website.com</span>
              </div>
            </div>

            {/* Search */}
            <div className="mt-4 pt-4 border-t border-slate-600">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-white hover:text-orange-500"
              >
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
