import { Search, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Link, Links } from "react-router-dom";

export const CareersBlog = () => {
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter articles based on search term only
  const filteredArticles = useMemo(() => {
    if (searchTerm.trim()) {
      return articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          article.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return articles;
  }, [searchTerm]);

  const ArticleCard = ({ article }) => (
    <div className="group cursor-pointer">
      <Link to={article.link}>
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
      </Link>
    </div>
  );

  const NotFoundMessage = () => (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-24 h-24 mb-6 rounded-full bg-gray-800/50 flex items-center justify-center">
        <Search className="w-10 h-10 text-gray-500" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-3">
        No articles found
      </h3>
      <p className="text-gray-400 max-w-md">
        We couldn't find any articles matching "{searchTerm}".
      </p>
      <button
        onClick={() => setSearchTerm("")}
        className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-700 text-white rounded-lg transition-colors"
      >
        Clear search
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className=" text-white overflow-hidden py-4">
        {/* Navigation */}
        <nav className="flex items-center justify-center pt-6 pb-4 px-4 sm:pt-8 sm:pb-6">
          <div className="flex items-center space-x-2 sm:space-x-4 text-gray-400 text-sm sm:text-base">
            <Link
              to="/"
              className="hover:text-white transition-colors duration-200"
            >
              Homepage
            </Link>
            <span className="text-gray-600">›</span>
            <Link
              to="/"
              className="hover:text-white transition-colors duration-200"
            >
              Blog
            </Link>
            <span className="text-gray-600">›</span>
            <span className="text-white">Careers</span>
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center px-4 lg:px-16">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 tracking-tight leading-tight max-w-6xl">
            Shaping The Future of Tech
          </h1>

          <div className="flex items-center justify-center w-[70%] pb-16">
            <div className="relative">
              <img
                src="9.png"
                alt="category-image"
                className="w-full object-contain  drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
        <h2 className="text-xl md:text-4xl font-bold mb-8 lg:mb-0 text-white">
          Latest in the Tech World
        </h2>

        {/* Search */}
        <div className="relative max-w-md w-full lg:w-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-6 py-3 bg-[#1b1b1b] border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-400 backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Results count */}
      {searchTerm && (
        <div className="mb-6">
          <p className="text-gray-400 text-sm">
            {filteredArticles.length} article
            {filteredArticles.length !== 1 ? "s" : ""} found
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>
      )}

      {/* Articles Grid or Not Found Message */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <NotFoundMessage />
      )}
    </div>
  );
};
