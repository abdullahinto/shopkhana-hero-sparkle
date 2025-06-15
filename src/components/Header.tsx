
import { useState } from "react";
import { Search, ShoppingCart, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItemCount = 3;
  const wishlistItemCount = 2;

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" }
  ];

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full bg-shopkhana-black border-b border-shopkhana-yellow/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            
            {/* Left Side - Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <h1 className="font-poppins font-bold text-xl sm:text-2xl lg:text-3xl text-shopkhana-yellow hover:scale-105 transition-transform duration-200">
                  ShopKhana
                </h1>
              </a>
            </div>

            {/* Center - Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-inter font-medium text-white hover:text-shopkhana-yellow transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-shopkhana-yellow transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Right Side - Icons */}
            <div className="flex items-center space-x-1 sm:space-x-2">
              
              {/* Search Icon */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-shopkhana-yellow hover:bg-shopkhana-yellow/10 transition-colors duration-200 h-8 w-8 sm:h-10 sm:w-10"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Search</p>
                </TooltipContent>
              </Tooltip>

              {/* Wishlist Icon with Badge */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-white hover:text-shopkhana-yellow hover:bg-shopkhana-yellow/10 transition-colors duration-200 h-8 w-8 sm:h-10 sm:w-10"
                    aria-label="Wishlist"
                  >
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                    {wishlistItemCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs bg-shopkhana-yellow text-shopkhana-black font-bold"
                      >
                        {wishlistItemCount}
                      </Badge>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Wishlist</p>
                </TooltipContent>
              </Tooltip>

              {/* Cart Icon with Badge */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-white hover:text-shopkhana-yellow hover:bg-shopkhana-yellow/10 transition-colors duration-200 h-8 w-8 sm:h-10 sm:w-10"
                    aria-label="Shopping Cart"
                  >
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
                    {cartItemCount > 0 && (
                      <Badge 
                        variant="destructive" 
                        className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center p-0 text-xs bg-shopkhana-yellow text-shopkhana-black font-bold"
                      >
                        {cartItemCount}
                      </Badge>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shopping Cart</p>
                </TooltipContent>
              </Tooltip>

              {/* Profile Icon */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:text-shopkhana-yellow hover:bg-shopkhana-yellow/10 transition-colors duration-200 h-8 w-8 sm:h-10 sm:w-10"
                    aria-label="My Account"
                  >
                    <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sign In</p>
                </TooltipContent>
              </Tooltip>

              {/* Mobile Menu */}
              <div className="lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:text-shopkhana-yellow hover:bg-shopkhana-yellow/10 transition-colors duration-200 h-8 w-8 sm:h-10 sm:w-10"
                      aria-label="Menu"
                    >
                      <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px] sm:w-[300px] bg-shopkhana-black border-l border-shopkhana-yellow/20">
                    <div className="flex flex-col h-full">
                      
                      {/* Mobile Menu Header */}
                      <div className="flex items-center justify-between py-4 border-b border-shopkhana-yellow/20">
                        <h2 className="font-poppins font-bold text-xl text-shopkhana-yellow">
                          ShopKhana
                        </h2>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setIsOpen(false)}
                          className="text-white hover:text-shopkhana-yellow hover:bg-shopkhana-yellow/10"
                        >
                          <X className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Mobile Navigation Links */}
                      <nav className="flex flex-col space-y-2 py-6">
                        {navigationLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-inter font-medium text-lg text-white hover:text-shopkhana-yellow transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-shopkhana-yellow/10"
                          >
                            {link.name}
                          </a>
                        ))}
                      </nav>

                      {/* Mobile Menu Footer */}
                      <div className="mt-auto py-6 border-t border-shopkhana-yellow/20">
                        <p className="font-inter text-sm text-gray-400 text-center">
                          Affordable Glam. Desi Style.
                        </p>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-shopkhana-yellow to-transparent opacity-50"></div>
      </header>
    </TooltipProvider>
  );
};

export default Header;
