import ArticleLayout from "../ArticleLayout";

const ZeroToArrArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Founders", href: "/founders" },
    { label: "Growth", href: "/founders" },
  ];

  return (
    <ArticleLayout
      title="From Zero to $1M ARR: The Complete Playbook"
      readTime="8 mins read"
      date="June 5th, 2025"
      author="Alex Chen"
      authorTitle="Founder & CEO, TechFlow"
      authorImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Journey Begins
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Eighteen months ago, our SaaS was just an idea scribbled on a napkin
          during a coffee shop conversation. Today, we've crossed the $1M ARR
          milestone with 2,500+ customers across 40 countries.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          This isn't another "overnight success" story. It's a detailed
          breakdown of the strategies, mistakes, and pivots that got us here.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Foundation: Months 1-3
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We started with a problem we experienced firsthand: project management
          tools that were either too complex or too simple. Our initial MVP took
          3 months to build with a team of 2 developers.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Key metrics from our first quarter: 50 beta users, $0 revenue, 200+
          feature requests, and one major pivot that changed everything.
        </p>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "The biggest mistake we made was building features before validating
          the problem. We spent 2 months on features that nobody wanted."
        </p>
        <cite className="text-gray-400 text-sm">
          Founder reflection, Month 3
        </cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            The Playbook That Worked
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            After the pivot, we focused on three core principles: customer
            obsession, rapid iteration, and relentless focus on product-market
            fit.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            The result? We went from $0 to $83K MRR in 12 months, with a
            customer acquisition cost of $47 and lifetime value of $2,100.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default ZeroToArrArticle;
