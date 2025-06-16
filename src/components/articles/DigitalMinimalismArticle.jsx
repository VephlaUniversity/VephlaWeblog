import ArticleLayout from "../ArticleLayout";

const DigitalMinimalismArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Lifestyle", href: "/lifestyle" },
    { label: "Productivity", href: "/lifestyle" },
  ];

  return (
    <ArticleLayout
      title="The Digital Minimalist's Guide to Productivity"
      readTime="5 mins read"
      date="May 28th, 2025"
      author="David Kim"
      authorTitle="Product Manager, Remote"
      authorImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Less is More</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          In 2024, I had 73 apps on my phone, 12 productivity tools, and
          countless browser tabs open. My attention was scattered, and my
          productivity was at an all-time low.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Today, I use 15 apps, 3 core tools, and maintain a single-tab policy.
          The result? 40% increase in deep work hours and significantly reduced
          digital anxiety.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Minimalist Stack
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          My entire productivity system now runs on three tools: Notion for
          knowledge management, Todoist for task tracking, and Calendar for time
          blocking.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          The key insight: every additional tool introduces cognitive overhead.
          The best system is the one you actually use consistently.
        </p>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "Digital minimalism isn't about using less technology, it's about
          using technology more intentionally."
        </p>
        <cite className="text-gray-400 text-sm">
          Cal Newport, Digital Minimalism
        </cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            The 30-Day Challenge
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Start with a digital declutter: remove all non-essential apps,
            unsubscribe from newsletters you don't read, and establish
            phone-free zones in your home.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The goal isn't digital asceticism—it's creating space for what
            matters most. When you reduce digital noise, you amplify your
            capacity for deep, meaningful work.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default DigitalMinimalismArticle;
