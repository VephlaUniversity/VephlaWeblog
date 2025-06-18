import ArticleLayout from "../ArticleLayout";

const NodeJSAPIArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Node.js API Development", href: "/nodejs-api-development" },
  ];

  return (
    <ArticleLayout
      title="Node.js API Development: Best Practices"
      readTime="22 mins read"
      date="June 5th, 2025"
      author="David Chen"
      authorTitle="Backend Engineer & API Architect"
      authorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Building Production-Ready APIs
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Learn to build scalable REST APIs with Node.js, Express, and MongoDB
          following industry standards and best practices used by top tech
          companies.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          This comprehensive guide covers everything from project setup to
          deployment, ensuring your APIs are secure, performant, and
          maintainable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Project Architecture
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We'll set up a proper project structure that scales with your
          application. This includes separating concerns, organizing middleware,
          and setting up proper error handling.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <code className="text-green-400 text-sm">
            project-root/
            <br />
            ├── src/
            <br />
            │ ├── controllers/
            <br />
            │ ├── middleware/
            <br />
            │ ├── models/
            <br />
            │ ├── routes/
            <br />
            │ ├── services/
            <br />
            │ └── utils/
            <br />
            ├── tests/
            <br />
            ├── docs/
            <br />
            └── config/
          </code>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Security Best Practices
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Security is paramount in API development. We'll implement
          authentication, authorization, rate limiting, input validation, and
          other critical security measures.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-green-400 space-y-2">
            <li>• JWT authentication with refresh tokens</li>
            <li>• Rate limiting and request throttling</li>
            <li>• Input validation and sanitization</li>
            <li>• CORS configuration</li>
            <li>• Security headers and HTTPS enforcement</li>
            <li>• SQL injection and XSS prevention</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Database Integration
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We'll integrate MongoDB using Mongoose for elegant object modeling.
          You'll learn about schema design, indexing, and optimizing database
          queries for performance.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <code className="text-green-400">
            const userSchema = new mongoose.Schema({"{"}
            <br />
            &nbsp;&nbsp;username: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;type: String,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;required: true,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;unique: true,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;trim: true
            <br />
            &nbsp;&nbsp;{"}"},
            <br />
            &nbsp;&nbsp;email: {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;type: String,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;required: true,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;unique: true,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;lowercase: true
            <br />
            &nbsp;&nbsp;{"}"}
            <br />
            {"}"});
          </code>
        </div>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "Good API design is like good UX design - it should be intuitive,
          consistent, and make the developer's life easier, not harder."
        </p>
        <cite className="text-gray-400 text-sm">API Design Philosophy</cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Testing and Documentation
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We'll set up comprehensive testing using Jest and Supertest,
            including unit tests, integration tests, and API endpoint testing.
            Plus, we'll generate beautiful API documentation.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            By the end of this tutorial, you'll have a fully-featured, tested,
            and documented API ready for production deployment.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default NodeJSAPIArticle;
