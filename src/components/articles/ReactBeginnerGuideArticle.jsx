import ArticleLayout from "../ArticleLayout";

const ReactBeginnerGuideArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "React", href: "/tutorials" },
  ];

  return (
    <ArticleLayout
      title="Building Your First React App: Complete Beginner's Guide"
      readTime="12 mins read"
      date="June 12th, 2025"
      author="Sarah Johnson"
      authorTitle="Senior React Developer"
      authorImage="https://images.unsplash.com/photo-1494790108755-2616b332c706?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Welcome to React</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          React is a JavaScript library for building user interfaces, developed
          by Facebook. It's component-based, which means you build encapsulated
          components that manage their own state.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          In this tutorial, we'll build a simple todo app that demonstrates the
          core concepts: components, props, state, and event handling.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Setting Up Your Environment
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Before we start coding, you'll need Node.js installed on your
          computer. Once that's done, we'll use Create React App to bootstrap
          our project.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <code className="text-green-400">
            npx create-react-app my-todo-app
            <br />
            cd my-todo-app
            <br />
            npm start
          </code>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          This will create a new React project and start the development server.
          You should see your app running at http://localhost:3000.
        </p>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "The best way to learn React is by building. Start small, experiment
          often, and don't worry about perfection."
        </p>
        <cite className="text-gray-400 text-sm">React Documentation Team</cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Building Your First Component
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Components are the building blocks of React applications. They're
            like JavaScript functions that return HTML elements (called JSX).
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            We'll start by creating a simple TodoItem component that displays a
            single todo with the ability to mark it as complete. Then we'll
            build up to a full todo list with add/delete functionality.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default ReactBeginnerGuideArticle;
