import { useState } from "react";
import { Check, X } from "lucide-react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!email.trim()) {
      alert("Please enter an email address.");
      return;
    }

    setIsLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const isValid = validateEmail(email.trim());
      setIsValidEmail(isValid);
      setIsLoading(false);
      setShowModal(true);

      if (isValid) {
        console.log("Subscribed with email:", email.trim());
        setEmail("");
      }
    }, 1500);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero.png')",
        }}
      >
        {/* Dark Overlay to maintain readability */}
        <div className="absolute inset-0 bg-[#0d0d0d]/50"></div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-end justify-center px-4 overflow-hidden">
        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Your Daily Spark Of Creativity That
            <br className="hidden md:block" />
            &nbsp;Shapes
            <span className="text-red-500"> The Future Of Tech</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Vephla Daily delivers powerful learnings crafted to sharpen your
            edge, keep you informed, and ignite your move.
          </p>

          {/* Email Signup */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-[#1b1b1b]/90 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-400 backdrop-blur-sm"
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className={`px-8 py-4 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center gap-2 min-w-[140px] ${
                isLoading
                  ? "bg-red-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-700"
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                "Get Vephla Daily"
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 animate-in fade-in duration-300">
          <div className="bg-[#1b1b1b] rounded-lg p-8 max-w-sm w-full text-center border border-gray-700 relative animate-in zoom-in-95 fade-in duration-300 slide-in-from-bottom-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            {isValidEmail ? (
              <>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  Success!
                </h3>
                <p className="text-gray-300">
                  {`You've successfully subscribed with ${email.trim()}. Thank you for joining Vephla Daily!`}
                </p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <X size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-red-400 mb-2">
                  Invalid Email
                </h3>
                <p className="text-gray-300">
                  Please enter a valid email address to subscribe to Vephla
                  Daily.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
