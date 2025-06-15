
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = {
    shop: [
      { name: "All Products", href: "#" },
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Sale", href: "#" }
    ],
    support: [
      { name: "About Us", href: "#" },
      { name: "Contact", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Return Policy", href: "#" },
      { name: "Size Guide", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Instagram", href: "#", icon: "📸" },
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "TikTok", href: "#", icon: "🎵" }
  ];

  const paymentMethods = [
    { name: "COD", icon: "💵" },
    { name: "JazzCash", icon: "📱" },
    { name: "EasyPaisa", icon: "💳" },
    { name: "Visa", icon: "💳" },
    { name: "Mastercard", icon: "💳" }
  ];

  return (
    <footer className="bg-gradient-to-b from-shopkhana-black to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-poppins font-bold text-2xl lg:text-3xl text-shopkhana-yellow mb-2">
                ShopKhana
              </h3>
              <p className="font-inter text-gray-300 text-sm lg:text-base">
                Affordable Glam. Desi Style.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-shopkhana-yellow flex-shrink-0" />
                <a 
                  href="mailto:support@shopkhana.com" 
                  className="font-inter text-sm text-gray-300 hover:text-shopkhana-yellow transition-colors"
                >
                  support@shopkhana.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-shopkhana-yellow flex-shrink-0" />
                <a 
                  href="https://wa.me/923xxxxxxxxx" 
                  className="font-inter text-sm text-gray-300 hover:text-shopkhana-yellow transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +92-3XX-XXXXXXX
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-poppins font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-lg hover:bg-shopkhana-yellow hover:text-shopkhana-black transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">Shop</h4>
            <ul className="space-y-3">
              {navigationLinks.shop.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-gray-300 hover:text-shopkhana-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {navigationLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-inter text-sm text-gray-300 hover:text-shopkhana-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="font-poppins font-semibold text-white mb-6">We Accept</h4>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="bg-white rounded-lg p-3 flex flex-col items-center justify-center h-16 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg mb-1">{method.icon}</span>
                  <span className="text-xs font-inter font-medium text-gray-800">
                    {method.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-inter text-xs text-gray-300">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-shopkhana-yellow rounded-full"></div>
                <span className="font-inter text-xs text-gray-300">Free Shipping PKR 2,000+</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-inter text-xs text-gray-300">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <Separator className="bg-gray-700" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-inter text-sm text-gray-400 text-center sm:text-left">
            © {currentYear} ShopKhana. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-inter text-sm text-gray-400 hover:text-shopkhana-yellow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-sm text-gray-400 hover:text-shopkhana-yellow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
