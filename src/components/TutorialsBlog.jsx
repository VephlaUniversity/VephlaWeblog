import { Search, ArrowUpRight } from "lucide-react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const TutorialsBlog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      category: "Tutorials",
      title: "Building Your First React App: Complete Beginner's Guide",
      description:
        "Step-by-step tutorial on creating a React application from scratch, covering components, state, and props.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
      categoryColor: "text-cyan-400",
      link: "/react-beginner-guide",
    },
    {
      id: 2,
      category: "Tutorials",
      title: "Mastering CSS Grid: From Zero to Hero",
      description:
        "Learn CSS Grid layout system with practical examples and real-world projects.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center",
      categoryColor: "text-cyan-400",
      link: "/css-grid-mastery",
    },
    {
      id: 3,
      category: "Tutorials",
      title: "Node.js API Development: Best Practices",
      description:
        "Build scalable REST APIs with Node.js, Express, and MongoDB following industry standards.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center",
      categoryColor: "text-cyan-400",
      link: "/nodejs-api-development",
    },
  ];

  const filteredArticles = useMemo(() => {
    if (searchTerm.trim()) {
      return articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return articles;
  }, [searchTerm]);

  const ArticleCard = ({ article }) => (
    <Link to={article.link} className="group cursor-pointer block">
      <div className="relative overflow-hidden rounded-xl bg-[#0d0d0d] backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="p-6">
          <div className={`text-sm font-medium mb-3 ${article.categoryColor}`}>
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
  );

  return (
    <div className="min-h-screen bg-background">
      <div className=" text-white overflow-hidden mt-12 py-4">
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
            Learn It. Apply It. Master It.
          </h1>

          <div className="flex items-center justify-center w-[70%] pb-16">
            <div className="relative">
              <img
                src="12.png"
                alt="category-image"
                className="w-full object-contain  drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 lg:mb-0 text-white">
            Tutorials & Guides
          </h2>
          <div className="relative max-w-md w-full lg:w-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <input
              type="text"
              placeholder="Search tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-3 bg-[#1b1b1b] border border-gray-700 rounded-lg focus:outline-none focus:border-gray-600 text-white placeholder-gray-400 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorialsBlog;
