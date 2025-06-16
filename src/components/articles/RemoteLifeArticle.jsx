import ArticleLayout from "../ArticleLayout";

const RemoteLifeArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: "Remote Work", href: "/careers" },
  ];

  return (
    <ArticleLayout
      title="What It's Really Like Living the Remote Life"
      readTime="4 mins read"
      date="June 8th, 2025"
      author="Marcus Rodriguez"
      authorTitle="Full-Stack Developer, Remote"
      authorImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Reality Check
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          After three years of remote work across different time zones and
          coffee shops, I can tell you: it's not the Instagram paradise you
          think it is.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Remote work requires discipline, boundaries, and a complete mindset
          shift about productivity and work-life balance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Good, Bad, and Lonely
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The freedom is real—I've coded from Bali beaches and mountain cabins.
          But isolation hits harder than you expect, and the line between work
          and life blurs completely.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Communication becomes everything. Over-communicate, document
          obsessively, and invest in relationships with your team members.
        </p>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "Remote work isn't about working from anywhere—it's about working
          effectively from everywhere."
        </p>
        <cite className="text-gray-400 text-sm">
          Digital Nomad, 5 years remote
        </cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Making It Work</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Set up dedicated workspaces, maintain regular hours, and prioritize
            face-to-face interactions (even virtual ones) with your team.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The remote life can be incredibly rewarding, but it demands
            intentionality in every aspect of how you work and live.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default RemoteLifeArticle;
