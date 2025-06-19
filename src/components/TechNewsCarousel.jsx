import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedPage } from "../AnimatedPage";

const TechNewsCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [screenSize, setScreenSize] = useState("lg");

  const articles = [
    {
      id: 1,
      category: "Careers",
      title: "Breaking into Networking DevOps...",
      description:
        "This is your tactical roadmap, from learning platforms to portfolio strategies, to break into the multi-million dollar...",
      image: "/0.png",
      categoryColor: "text-purple-400",
      link: "/networking-devops",
    },
    {
      id: 2,
      category: "Careers",
      title: "AI Co-pilots Are Changing Tech, H...",
      description:
        "From GitHub Copilot to ChatGPT plugins, AI is no longer optional in the dev stack. This post unpacks the shift, w...",
      image: "/1.png",
      categoryColor: "text-purple-400",
      link: "/ai-co-pilots",
    },
    {
      id: 3,
      category: "Careers",
      title: "What It's Really Like Living the Re...",
      description:
        "Digital freedom sounds dreamy, but what's the reality? We follow a full-stack dev juggling deadlines, cafes, tim...",
      image: "/2.png",
      categoryColor: "text-purple-400",
      link: "/living-the-remote-life",
    },
    {
      id: 4,
      category: "Careers",
      title: "Using React to Build a Simple Task...",
      description:
        "You'll build a fully functional task manager using React, complete with state handling, local storage, and a clean...",
      image: "/3.png",
      categoryColor: "text-purple-400",
      link: "/react-task-manager",
    },
    {
      id: 5,
      category: "Careers",
      title: "Teamflow from Idea to $100K Mon...",
      description:
        "Here's the exact strategy, stack, and customer scaling acquisition playbook behind the journey to $100K mont...",
      image: "/4.png",
      categoryColor: "text-purple-400",
      link: "/teamflow-journey",
    },
    {
      id: 6,
      category: "Careers",
      title: "Notion vs Obsidian: Which Tool Sh...",
      description:
        "Notion's sleek interface or Obsidian's raw power? What fits your workflow better? We compare features, speed,...",
      image: "/5.png",
      categoryColor: "text-purple-400",
      link: "/notion-vs-obsidian",
    },
    {
      id: 7,
      category: "Careers",
      title: "How to Transition into Tech Witho...",
      description:
        "This is your tactical roadmap, from learning platforms to portfolio strategies, to break into the multi-million dollar...",
      image: "/6.png",
      categoryColor: "text-purple-400",
      link: "/transition-into-tech",
    },
    {
      id: 8,
      category: "Careers",
      title: "AI Co-pilots Are Changing Tech, H...",
      description:
        "From GitHub Copilot to ChatGPT plugins, AI is no longer optional in the dev stack. This post unpacks the shift, w...",
      image: "/7.png",
      categoryColor: "text-purple-400",
      link: "/ai-co-pilots-impact",
    },
    {
      id: 9,
      category: "Careers",
      title: "Teamflow from Idea to $100K Mon...",
      description:
        "Here's the exact strategy, stack, and customer scaling acquisition playbook behind the journey to $100K mont...",
      image: "/8.png",
      categoryColor: "text-purple-400",
      link: "/teamflow-journey",
    },
  ];

  React.useEffect(() => {
    const updateScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 768) {
        setScreenSize("md");
      } else {
        setScreenSize("sm");
      }
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const getItemsPerPage = () => {
    switch (screenSize) {
      case "lg":
        return 3;
      case "md":
        return 2;
      case "sm":
        return 1;
      default:
        return 3;
    }
  };

  const itemsPerPage = getItemsPerPage();
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Reset to page 1 if current page exceeds total pages after screen resize
  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const getVisibleArticles = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return articles.slice(startIndex, startIndex + itemsPerPage);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationDots = () => {
    const pages = [];

    // If total pages is 5 or less, show all pages
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
              currentPage === i
                ? "bg-red-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Show first page
      pages.push(
        <button
          key={1}
          onClick={() => goToPage(1)}
          className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
            currentPage === 1
              ? "bg-red-500 text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          1
        </button>
      );

      // Show dots if current page is far from start
      if (currentPage > 3) {
        pages.push(
          <span key="dots-start" className="text-gray-400 px-2">
            ...
          </span>
        );
      }

      // Show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
                currentPage === i
                  ? "bg-red-500 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {i}
            </button>
          );
        }
      }

      // Show dots if current page is far from end
      if (currentPage < totalPages - 2) {
        pages.push(
          <span key="dots-end" className="text-gray-400 px-2">
            ...
          </span>
        );
      }

      // Show last page
      if (totalPages > 1) {
        pages.push(
          <button
            key={totalPages}
            onClick={() => goToPage(totalPages)}
            className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
              currentPage === totalPages
                ? "bg-red-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {totalPages}
          </button>
        );
      }
    }

    return pages;
  };

  return (
    <AnimatedPage>
      <div className="bg-[#0d0d0d] text-white p-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">More from Tech News</h1>
            <Link to="/">
              <button className="text-red-500 hover:text-red-400 transition-colors cursor-pointer">
                View all
              </button>
            </Link>
          </div>

          {/* Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getVisibleArticles().map((article) => (
              <div
                key={article.id}
                className="rounded-lg overflow-hidden cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-xl bg-[#0d0d0d] backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div
                      className={`text-sm font-medium mb-3 ${article.categoryColor}`}
                    >
                      {article.category}
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-gray-200 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={goToPrevious}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="flex items-center space-x-2">
              {renderPaginationDots()}
            </div>

            <button
              onClick={goToNext}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default TechNewsCarousel;
