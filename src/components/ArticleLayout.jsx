import { useState } from "react";
import { ChevronLeft, Facebook, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import TechNewsCarousel from "./TechNewsCarousel";
import { AnimatedPage } from "../AnimatedPage";

const XIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.61 19.514h2.039L6.486 3.24H4.298z" />
  </svg>
);

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
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        // Fallback for older browsers / non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title || "");
    let shareUrl = "";

    switch (platform) {
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer,width=600,height=600");
  };

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
                  <button
                    onClick={handleCopyLink}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    {copied ? "Copied!" : "Copy link"}
                  </button>
                  <button
                    onClick={() => handleShare("x")}
                    aria-label="Share on X"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <XIcon className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    aria-label="Share on Facebook"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    aria-label="Share on LinkedIn"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
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
