export const Hero = () => {
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
              className="flex-1 px-6 py-4 bg-[#1b1b1b]/90 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-400 backdrop-blur-sm"
            />
            <button className="px-8 py-4 bg-red-500 hover:bg-red-700 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer">
              Get Vephla Daily
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
