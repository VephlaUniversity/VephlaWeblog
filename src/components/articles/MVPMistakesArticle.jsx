import ArticleLayout from "../ArticleLayout";

const MVPMistakesArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Founders", href: "/founders" },
    { label: "MVP Mistakes", href: "/mvp-mistakes" },
  ];

  return (
    <ArticleLayout
      title="Building Your MVP: The Mistakes That Kill Startups"
      readTime="16 mins read"
      date="June 3rd, 2025"
      author="Jessica Park"
      authorTitle="Startup Advisor & Former YC Partner"
      authorImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Why Most MVPs Fail
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          95% of startups fail, and most of those failures can be traced back to
          fundamental mistakes made during the MVP phase. This isn't about
          building the wrong product - it's about building products the wrong
          way.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          We'll explore the counterintuitive approach that actually validates
          your market and sets you up for sustainable growth.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Fatal MVP Mistakes
        </h2>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-red-400 font-semibold mb-2">
                Mistake #1: Building Too Much
              </h4>
              <p className="text-gray-300 text-sm">
                Adding features you think users want instead of validating what
                they actually need.
              </p>
            </div>
            <div>
              <h4 className="text-red-400 font-semibold mb-2">
                Mistake #2: Perfectionism Paralysis
              </h4>
              <p className="text-gray-300 text-sm">
                Spending months polishing an MVP that nobody wants instead of
                getting real user feedback.
              </p>
            </div>
            <div>
              <h4 className="text-red-400 font-semibold mb-2">
                Mistake #3: Wrong Success Metrics
              </h4>
              <p className="text-gray-300 text-sm">
                Measuring vanity metrics instead of actionable insights that
                drive business decisions.
              </p>
            </div>
            <div>
              <h4 className="text-red-400 font-semibold mb-2">
                Mistake #4: No Clear Hypothesis
              </h4>
              <p className="text-gray-300 text-sm">
                Building without a clear, testable hypothesis about customer
                problems and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The Counterintuitive Approach
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The most successful MVPs don't try to solve everything. They focus
          ruthlessly on one core problem and validate it with real customers who
          are willing to pay.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-green-400 font-bold">1.</span>
              <div>
                <h4 className="text-green-400 font-semibold">
                  Start with Customer Interviews
                </h4>
                <p className="text-gray-300 text-sm">
                  Talk to 50+ potential customers before writing a single line
                  of code.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-400 font-bold">2.</span>
              <div>
                <h4 className="text-green-400 font-semibold">
                  Define Your Riskiest Assumption
                </h4>
                <p className="text-gray-300 text-sm">
                  Identify the biggest leap of faith in your business model.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-400 font-bold">3.</span>
              <div>
                <h4 className="text-green-400 font-semibold">
                  Build the Smallest Test
                </h4>
                <p className="text-gray-300 text-sm">
                  Create the minimum experiment to validate that assumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "The goal of an MVP is not to build a minimal product. It's to
          maximize learning per dollar spent."
        </p>
        <cite className="text-gray-400 text-sm">
          Eric Ries, The Lean Startup
        </cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Market Validation Framework
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We'll walk through a proven framework for validating your market
            before you build. This includes customer discovery techniques,
            hypothesis testing, and interpreting early signals.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Learn how to distinguish between customers who say they want your
            product and those who will actually pay for it.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default MVPMistakesArticle;
