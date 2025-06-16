// import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Hero } from "./Hero";
import { Link } from "react-router-dom";
export const Main = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  const cardData = [
    {
      category: "Careers",
      categoryColor: "text-purple-400",
      title: "Unlock Your Career Move",
      description:
        "Discover insights, advice, and opportunities to help you grow, pivot, or thrive in your professional journey.",
      bgGradient: "from-purple-500/20 via-blue-500/20 to-cyan-500/20",
      icon: "/9.png",
      link: "/careers",
    },
    {
      category: "Founders",
      categoryColor: "text-green-400",
      title: "From Idea to Impact",
      description:
        "Stories, struggles, and strategies from real founders building the future one bold decision at a time.",
      bgGradient: "from-orange-500/20 via-red-500/20 to-blue-500/20",
      icon: "/10.png",
      link: "/founders",
    },
    {
      category: "Lifestyle",
      categoryColor: "text-orange-400",
      title: "Lifestyle That Works for You",
      description:
        "Explore tips, habits, and mindsets for living a balanced, intentional, and creatively fulfilling life.",
      bgGradient: "from-pink-500/20 via-purple-500/20 to-cyan-500/20",
      icon: "/11.png",
      link: "/lifestyle",
    },
    {
      category: "Tutorials",
      categoryColor: "text-cyan-400",
      title: "Learn It. Apply It. Master It.",
      description:
        "Step-by-step guides and practical walkthroughs to sharpen your skills and solve real design problems.",
      bgGradient: "from-cyan-500/20 via-pink-500/20 to-purple-500/20",
      icon: "/12.png",
      link: "/tutorials",
    },
    {
      category: "Trends",
      categoryColor: "text-red-400",
      title: "Shaping The Future of Tech",
      description:
        "Stay ahead with deep dives into emerging tools, styles, and shifts shaping the digital design landscape.",
      bgGradient: "from-blue-500/20 via-purple-500/20 to-pink-500/20",
      icon: "/13.png",
      link: "/trends",
    },
    {
      category: "Reviews",
      categoryColor: "text-blue-400",
      title: "No Fluff, Just Real Takes",
      description:
        "Honest and informed breakdowns of tools, platforms, and resources every designer should know about.",
      bgGradient: "from-red-500/20 via-yellow-500/20 to-blue-500/20",
      icon: "/14.png",
      link: "/reviews",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Header */}
      <Hero />
      <hr className="text-gray-700 mt-24" />
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 lg:p-8 gap-4 mt-18">
        <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold">
          Latest in the Tech World
        </h1>

        {/* <div className="relative w-full sm:w-auto sm:min-w-[300px]">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-3 bg-[#1b1b1b] border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-400 backdrop-blur-sm"
          />
        </div> */}
      </header>

      {/* Main Content Grid */}
      <main className="px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="relative rounded-2xl p-6 lg:p-2 ">
              {/* Card Content */}
              <div className="relative z-10">
                {/* Icon/Visual Element */}
                <div className="mb-6 lg:mb-8 w-full">
                  <Link to={card.link}>
                    <div className="w-full h-48 lg:h-56 rounded-xl bg-[#1b1b1b] flex items-center justify-center overflow-hidden hover:scale-[1.05] transition-all duration-300 cursor-pointer">
                      <img
                        src={card.icon}
                        alt={`${card.category} icon`}
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </div>
                  </Link>
                </div>

                {/* Category */}
                <div
                  className={`text-sm font-medium ${card.categoryColor} mb-3 lg:mb-4 uppercase tracking-wide`}
                >
                  {card.category}
                </div>

                {/* Title */}
                <Link to={card.link} className="">
                  <div className="flex items-center justify-between mb-4 lg:mb-6 cursor-pointer hover:text-red-500 transition-colors duration-300 group">
                    <h2 className="text-xl lg:text-xl xl:text-2xl font-bold leading-tight">
                      {card.title}
                    </h2>
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0 ml-4">
                      <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white group-hover:text-red-500 transition-colors duration-300" />
                    </div>
                  </div>
                </Link>

                {/* Description */}
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 lg:mb-8">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
