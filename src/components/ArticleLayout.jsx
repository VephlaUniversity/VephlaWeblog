import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import TechNewsCarousel from "./TechNewsCarousel";
import { AnimatedPage } from "../AnimatedPage";

const ArticleLayout = ({
  title,
  readTime,
  date,
  author,
  authorTitle,
  authorImage,
  heroImage,
  children,
  breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Blog", href: "/" },
    { label: "Trends", href: "/" },
  ],
}) => {
  return (
    <AnimatedPage>
      <div className="min-h-screen bg-background mt-24">
        {/* Navigation Breadcrumbs */}
        <nav className="pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Link
                    to={crumb.href}
                    className="hover:text-white transition-colors underline"
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="px-6 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm mb-12">
              <span>{readTime}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="px-6 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden bg-gray-800">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Article Content */}
        <main className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              {children}
            </article>
          </div>
        </main>

        {/* Author Section */}
        <footer className="px-6 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center space-x-4">
                <img
                  src={authorImage}
                  alt={author}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold text-lg">{author}</h3>
                  <p className="text-gray-400">{authorTitle}</p>
                </div>
                <div className="ml-auto flex space-x-4">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
                    Copy link
                  </button>
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white">𝕏</span>
                  </button>
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white">f</span>
                  </button>
                  <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white">in</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* More Articles Section */}
        <section className="px-6 pb-20">
          <TechNewsCarousel />
        </section>
      </div>
    </AnimatedPage>
  );
};

export default ArticleLayout;
