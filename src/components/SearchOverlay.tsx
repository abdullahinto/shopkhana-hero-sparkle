
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Focus the input when overlay opens
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when overlay is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
      setSearchQuery("");
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center"
          onClick={handleOverlayClick}
        >
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 400, 
              damping: 30,
              duration: 0.3 
            }}
            className="w-full bg-shopkhana-black border-b border-shopkhana-yellow/20 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearch} className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-shopkhana-yellow h-5 w-5" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for cosmetics, jewelry, garments..."
                    className="w-full bg-white/10 border border-shopkhana-yellow/30 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-shopkhana-yellow focus:ring-2 focus:ring-shopkhana-yellow/20 text-lg"
                    aria-label="Search products"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-semibold px-6 py-3 rounded-lg"
                  disabled={!searchQuery.trim()}
                >
                  Search
                </Button>
                
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="text-white hover:text-shopkhana-yellow hover:bg-shopkhana-yellow/10 rounded-lg"
                  aria-label="Close search"
                >
                  <X className="h-6 w-6" />
                </Button>
              </form>
              
              <div className="mt-3 text-center">
                <p className="text-gray-400 text-sm">
                  Press <kbd className="bg-white/10 px-2 py-1 rounded text-xs">Enter</kbd> to search or <kbd className="bg-white/10 px-2 py-1 rounded text-xs">Esc</kbd> to close
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
