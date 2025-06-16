import ArticleLayout from "../ArticleLayout";

const FirstRoundFundingArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Founders", href: "/founders" },
    { label: "Funding", href: "/founders" },
  ];

  return (
    <ArticleLayout
      title="Raising Your First Round: What VCs Actually Want"
      readTime="6 mins read"
      date="June 1st, 2025"
      author="Maria Santos"
      authorTitle="Founder, DataFlow Solutions"
      authorImage="https://images.unsplash.com/photo-1494790108755-2616b332c706?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Reality of Fundraising
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          After pitching to 47 investors and receiving 43 rejections, I learned
          what really matters in a fundraising pitch. It's not about having the
          perfect slides or the most polished presentation.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          VCs are looking for three things: a massive market opportunity, a team
          that can execute, and early signs of product-market fit.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Deck That Actually Worked
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Forget the 20-slide presentations. Our successful deck had 12 slides
          and told a clear story: problem, solution, market size, traction,
          team, and ask.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          The key was showing, not telling. We included real customer
          testimonials, usage metrics, and a clear path to $10M ARR.
        </p>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "VCs don't invest in ideas, they invest in execution. Show them you
          can build, sell, and scale."
        </p>
        <cite className="text-gray-400 text-sm">Partner at Tier 1 VC Fund</cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            The Numbers That Matter
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We closed our Series A at a $12M valuation with $2.5M raised. The
            metrics that sealed the deal: 300% year-over-year growth, 40% gross
            margins, and $150K ARR.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Remember: fundraising is about buying time to prove your business
            model. Make every dollar count toward product development and
            customer acquisition.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default FirstRoundFundingArticle;
