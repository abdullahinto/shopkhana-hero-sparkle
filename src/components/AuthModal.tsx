
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "@/hooks/use-toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
}

const AuthModal = ({ isOpen, onClose, initialMode = "login" }: AuthModalProps) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { signIn, signUp, resetPassword } = useAuth();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Validation
    if (mode === "signup" && !formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      
      try {
        let result;
        if (mode === "signup") {
          result = await signUp(formData.email, formData.password, formData.name);
        } else {
          result = await signIn(formData.email, formData.password);
        }

        if (!result.error) {
          onClose();
          // Reset form
          setFormData({ name: "", email: "", password: "" });
          setErrors({});
        }
      } catch (error) {
        console.error('Auth error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email.trim()) {
      setErrors({ email: "Please enter your email address" });
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    setIsLoading(true);
    await resetPassword(formData.email);
    setIsLoading(false);
  };

  const switchMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setErrors({});
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md w-[95vw] max-h-[90vh] overflow-y-auto bg-white border border-gray-200 shadow-2xl">
        {/* Custom Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-shopkhana-yellow focus:ring-offset-2 z-10"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        <DialogHeader className="text-center pb-6">
          <DialogTitle className="font-poppins font-bold text-2xl text-shopkhana-black">
            {mode === "login" ? "Welcome Back!" : "Create Your ShopKhana Account"}
          </DialogTitle>
          {mode === "login" && (
            <p className="font-inter text-gray-600 mt-2">
              Sign in to access your glam picks ✨
            </p>
          )}
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field - Only for Signup */}
          {mode === "signup" && (
            <div className="space-y-2">
              <Label htmlFor="name" className="font-inter font-medium text-gray-700">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className={`font-inter focus:ring-2 focus:ring-shopkhana-yellow focus:border-shopkhana-yellow transition-colors ${
                  errors.name ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
                }`}
                disabled={isLoading}
              />
              {errors.name && (
                <p className="text-sm text-red-500 font-inter">{errors.name}</p>
              )}
            </div>
          )}

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-inter font-medium text-gray-700">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={`font-inter focus:ring-2 focus:ring-shopkhana-yellow focus:border-shopkhana-yellow transition-colors ${
                errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
              }`}
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-sm text-red-500 font-inter">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <Label htmlFor="password" className="font-inter font-medium text-gray-700">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`font-inter pr-10 focus:ring-2 focus:ring-shopkhana-yellow focus:border-shopkhana-yellow transition-colors ${
                  errors.password ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
                }`}
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-500 font-inter">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password Link - Only for Login */}
          {mode === "login" && (
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="font-inter text-sm text-shopkhana-black hover:text-shopkhana-yellow transition-colors underline"
                disabled={isLoading}
              >
                Forgot Password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-shopkhana-yellow hover:bg-shopkhana-yellow/90 text-shopkhana-black font-inter font-semibold py-3 text-base transition-colors"
            disabled={isLoading}
          >
            {isLoading ? "Please wait..." : (mode === "login" ? "Log In" : "Sign Up")}
          </Button>

          {/* Google Auth Button (Placeholder) */}
          <Button
            type="button"
            variant="outline"
            className="w-full font-inter font-medium py-3 text-base border-gray-300 hover:bg-gray-50 transition-colors"
            disabled={isLoading}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>

          {/* Mode Switch */}
          <div className="text-center pt-4 border-t border-gray-100">
            <p className="font-inter text-gray-600">
              {mode === "login" ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={switchMode}
                className="text-shopkhana-black hover:text-shopkhana-yellow font-semibold transition-colors underline"
                disabled={isLoading}
              >
                {mode === "login" ? "Sign up" : "Log in"}
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
