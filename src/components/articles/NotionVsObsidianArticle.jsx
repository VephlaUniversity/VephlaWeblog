import ArticleLayout from "../ArticleLayout";

const NotionVsObsidianArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Reviews", href: "/reviews" },
    { label: "Tools", href: "/reviews" },
  ];

  return (
    <ArticleLayout
      title="Notion vs Obsidian: Which Tool Should You Choose?"
      readTime="6 mins read"
      date="June 11th, 2025"
      author="Emma Rodriguez"
      authorTitle="Productivity Consultant"
      authorImage="https://images.unsplash.com/photo-1494790108755-2616b332c706?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Knowledge Management Battle
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          After using both Notion and Obsidian for over a year each, I can tell
          you they serve different purposes despite being lumped together as
          "note-taking apps."
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Notion is a Swiss Army knife—databases, wikis, project management, and
          notes all in one. Obsidian is a precision instrument for thinking and
          connecting ideas.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          When to Choose Notion
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Choose Notion if you need a collaborative workspace that combines
          notes with project management. Its database features are unmatched for
          organizing structured information.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Perfect for: Team wikis, content calendars, CRM systems, and any
          scenario where you need to share and collaborate on structured data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          When to Choose Obsidian
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Choose Obsidian for personal knowledge management and research. Its
          linking system creates a "second brain" that helps you discover
          connections between ideas.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Perfect for: Research, writing projects, personal knowledge bases, and
          anyone who thinks in networks rather than hierarchies.
        </p>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "The best tool is the one that matches how your mind works. Notion
          thinks in databases, Obsidian thinks in connections."
        </p>
        <cite className="text-gray-400 text-sm">
          Knowledge Management Expert
        </cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">The Verdict</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I use both. Notion for project management and team collaboration,
            Obsidian for research and personal knowledge building. They
            complement rather than compete.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Start with whichever matches your primary use case, but don't be
            afraid to use both if they serve different aspects of your workflow.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default NotionVsObsidianArticle;
