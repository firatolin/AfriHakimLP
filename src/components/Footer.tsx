import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const links = ["Home", "About", "Features", "Contact", "Privacy Policy"];
  const hrefs: Record<string, string> = {
    Home: "#home",
    About: "#solution",
    Features: "#solution",
    Contact: "#cta",
    "Privacy Policy": "#",
  };

  return (
    <footer className="bg-[#1F2933] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">AfriHakim</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              AI-driven healthcare ecosystem transforming access across Africa.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={hrefs[link]}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
                { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
                { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-[#0E5E9C] hover:text-white transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AfriHakim. All rights reserved. Built with ❤️ for Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
