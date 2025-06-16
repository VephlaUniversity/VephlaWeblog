import ArticleLayout from "../ArticleLayout";

const NetworkingDevOpsArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Careers", href: "/careers" },
    { label: "DevOps", href: "/careers" },
  ];

  return (
    <ArticleLayout
      title="Breaking into Networking DevOps: Your Complete Roadmap"
      readTime="5 mins read"
      date="June 10th, 2025"
      author="Sarah Chen"
      authorTitle="Senior DevOps Engineer, CloudTech"
      authorImage="https://images.unsplash.com/photo-1494790108755-2616b332c706?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          The DevOps Revolution
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The networking and DevOps industry is experiencing unprecedented
          growth, with salaries reaching $150K+ for experienced professionals.
          But breaking in requires the right strategy.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          This comprehensive guide will walk you through everything you need to
          know to transition into this lucrative field, regardless of your
          current background.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Essential Skills to Master
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Before diving into job applications, you need to build a solid
          foundation. Here are the core competencies that hiring managers look
          for:
        </p>
        <ul className="text-gray-300 text-lg leading-relaxed mb-6 space-y-2">
          <li>• Cloud platforms (AWS, Azure, GCP)</li>
          <li>• Container orchestration (Docker, Kubernetes)</li>
          <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
          <li>• CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions)</li>
          <li>• Monitoring and logging (Prometheus, ELK Stack)</li>
        </ul>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "The best DevOps engineers don't just know the tools—they understand
          the business impact of their work."
        </p>
        <cite className="text-gray-400 text-sm">
          Tech Lead at Fortune 500 Company
        </cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Your Action Plan
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Success in DevOps isn't just about technical skills—it's about
            demonstrating value through real-world projects and continuous
            learning.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Start building your portfolio today, contribute to open source
            projects, and focus on solving actual business problems. The
            industry rewards those who can bridge the gap between development
            and operations.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default NetworkingDevOpsArticle;
