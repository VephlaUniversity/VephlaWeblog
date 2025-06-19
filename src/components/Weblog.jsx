import { Link } from "react-router-dom";
import { AnimatedPage } from "../AnimatedPage";

export const Weblog = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-[#0d0d0d] text-white relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat m-24"
          style={{
            backgroundImage: "url('/weblog.png')",
          }}
        >
          {/* Dark Overlay to maintain readability */}
          <div className="absolute inset-0 bg-[#0d0d0d]/60"></div>
        </div>

        {/* Content */}
        <div className="relative min-h-screen flex items-end justify-center px-4 overflow-hidden">
          {/* Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto pb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="text-red-500">Stay Active</span> With Real
              Stories
              <br className="hidden sm:block" />
              From The Tech Frontline
            </h1>

            <p className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Learn from real projects, student breakthroughs, and expert takes
              inside the Vephla ecosystem.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center max-w-sm sm:max-w-none mx-auto px-4">
              <Link to="/news-blog">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer">
                  Explore Selected Articles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};
