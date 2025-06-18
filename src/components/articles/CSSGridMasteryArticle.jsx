import ArticleLayout from "../ArticleLayout";

const CSSGridMasteryArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "CSS Grid Mastery", href: "/css-grid-mastery" },
  ];

  return (
    <ArticleLayout
      title="Mastering CSS Grid: From Zero to Hero"
      readTime="14 mins read"
      date="June 12th, 2025"
      author="Emma Thompson"
      authorTitle="Frontend Developer & CSS Expert"
      authorImage="https://images.unsplash.com/photo-1494790108755-2616b332c706?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Welcome to CSS Grid Mastery
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          CSS Grid is the most powerful layout system available in CSS today.
          It's a 2-dimensional system, meaning it can handle both columns and
          rows simultaneously, unlike flexbox which is largely a 1-dimensional
          system. This fundamental difference makes Grid the ideal choice for
          complex layouts that require precise control over both horizontal and
          vertical positioning.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Grid represents a paradigm shift in how we approach web layout. Before
          Grid, creating complex layouts required elaborate workarounds using
          floats, positioning, and flexbox combinations. Grid eliminates these
          hacks by providing direct, declarative control over layout structure.
          You can create magazine-style layouts, dashboard interfaces, and
          responsive designs that would have been nearly impossible with
          previous CSS techniques.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          In this comprehensive guide, we'll learn CSS Grid through practical
          examples and real-world projects. We'll start with fundamental
          concepts and build up to advanced techniques that will transform how
          you approach layout challenges. By the end, you'll be able to
          implement any design with confidence and precision.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Grid Fundamentals
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Let's start with the basics. A grid container is the parent element
          where we apply display: grid, and grid items are the direct children
          of the grid container. The grid container establishes the grid
          formatting context, and all direct children automatically become grid
          items with default positioning behavior.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The fundamental Grid properties control the structure of your layout:
          grid-template-columns and grid-template-rows define the size and
          number of tracks, gap controls spacing between items, and
          grid-template-areas provides a visual way to name and position grid
          areas. Understanding these core properties is essential before moving
          to advanced techniques.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <code className="text-green-400">
            .grid-container {"{"}
            <br />
            &nbsp;&nbsp;display: grid;
            <br />
            &nbsp;&nbsp;grid-template-columns: 1fr 1fr 1fr; /* Three equal
            columns */
            <br />
            &nbsp;&nbsp;grid-template-rows: 100px 200px auto; /* Three rows with
            specific heights */
            <br />
            &nbsp;&nbsp;gap: 20px; /* 20px gap between all grid items */
            <br />
            &nbsp;&nbsp;padding: 20px;
            <br />
            {"}"}
            <br />
            <br />
            /* Alternative syntax using repeat() */
            <br />
            .grid-container-alt {"{"}
            <br />
            &nbsp;&nbsp;display: grid;
            <br />
            &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);
            <br />
            &nbsp;&nbsp;grid-template-rows: repeat(2, minmax(100px, auto));
            <br />
            &nbsp;&nbsp;gap: 1rem 2rem; /* Different row and column gaps */
            <br />
            {"}"}
          </code>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          The fr unit is Grid's flexible unit, representing a fraction of
          available space. It's similar to flexbox's flex-grow but more powerful
          because it works in both dimensions. The minmax() function allows you
          to set minimum and maximum sizes for tracks, creating responsive
          layouts without media queries.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Practical Grid Layouts
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We'll build several real-world layouts that demonstrate Grid's
          versatility: a responsive card grid that adapts to different screen
          sizes, a magazine-style layout with overlapping elements, and a
          complete website layout with header, sidebar, main content, and
          footer. Each example builds upon previous concepts while introducing
          new techniques.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The magazine layout showcases Grid's named areas feature, which allows
          you to create visual representations of your layout directly in CSS.
          This approach makes complex layouts more maintainable and easier to
          understand, especially when working with teams or returning to code
          after time away.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <code className="text-green-400">
            .magazine-layout {"{"}
            <br />
            &nbsp;&nbsp;display: grid;
            <br />
            &nbsp;&nbsp;grid-template-areas:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"header header header"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"sidebar main aside"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;"footer footer footer";
            <br />
            &nbsp;&nbsp;grid-template-columns: 200px 1fr 150px;
            <br />
            &nbsp;&nbsp;grid-template-rows: auto 1fr auto;
            <br />
            &nbsp;&nbsp;min-height: 100vh;
            <br />
            &nbsp;&nbsp;gap: 1rem;
            <br />
            {"}"}
            <br />
            <br />
            .header {"{ grid-area: header; }"}
            <br />
            .sidebar {"{ grid-area: sidebar; }"}
            <br />
            .main {"{ grid-area: main; }"}
            <br />
            .aside {"{ grid-area: aside; }"}
            <br />
            .footer {"{ grid-area: footer; }"}
            <br />
            <br />
            /* Responsive behavior */
            <br />
            @media (max-width: 768px) {"{"}
            <br />
            &nbsp;&nbsp;.magazine-layout {"{"}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;grid-template-areas:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"header"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"main"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"sidebar"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"aside"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"footer";
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;grid-template-columns: 1fr;
            <br />
            &nbsp;&nbsp;{"}"}
            <br />
            {"}"}
          </code>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          This layout demonstrates how Grid template areas make responsive
          design intuitive. Instead of complex positioning calculations, you
          simply redefine the grid areas for different screen sizes. The layout
          automatically adapts while maintaining the visual relationships
          between elements.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Advanced Grid Techniques
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Once you master the basics, advanced Grid techniques unlock truly
          sophisticated layouts. Auto-fit vs auto-fill creates responsive grids
          that adapt to content, implicit grid handling manages overflow
          gracefully, and subgrid (where supported) enables nested grid
          alignment. These techniques solve complex layout challenges that were
          previously very difficult.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Grid also excels at creating overlapping layouts, something that was
          cumbersome with previous CSS methods. You can layer elements precisely
          using grid-area coordinates, create complex magazine-style designs
          with text wrapping around images, and build dashboard interfaces with
          overlapping panels and widgets.
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <code className="text-green-400">
            /* Auto-fit creates responsive columns */
            <br />
            .responsive-grid {"{"}
            <br />
            &nbsp;&nbsp;display: grid;
            <br />
            &nbsp;&nbsp;grid-template-columns: repeat(auto-fit, minmax(250px,
            1fr));
            <br />
            &nbsp;&nbsp;gap: 1rem;
            <br />
            {"}"}
            <br />
            <br />
            /* Overlapping elements */
            <br />
            .overlay-grid {"{"}
            <br />
            &nbsp;&nbsp;display: grid;
            <br />
            &nbsp;&nbsp;grid-template-columns: repeat(4, 1fr);
            <br />
            &nbsp;&nbsp;grid-template-rows: repeat(3, 1fr);
            <br />
            {"}"}
            <br />
            <br />
            .overlay-item-1 {"{"}
            <br />
            &nbsp;&nbsp;grid-area: 1 / 1 / 3 / 3; /* row start / col start / row
            end / col end */
            <br />
            &nbsp;&nbsp;z-index: 1;
            <br />
            {"}"}
            <br />
            <br />
            .overlay-item-2 {"{"}
            <br />
            &nbsp;&nbsp;grid-area: 2 / 2 / 4 / 4;
            <br />
            &nbsp;&nbsp;z-index: 2;
            <br />
            {"}"}
            <br />
            <br />
            /* Dense packing for dynamic content */
            <br />
            .masonry-style {"{"}
            <br />
            &nbsp;&nbsp;display: grid;
            <br />
            &nbsp;&nbsp;grid-template-columns: repeat(auto-fill, minmax(200px,
            1fr));
            <br />
            &nbsp;&nbsp;grid-auto-rows: 10px;
            <br />
            &nbsp;&nbsp;grid-auto-flow: dense;
            <br />
            {"}"}
          </code>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          The auto-fit and auto-fill keywords create truly responsive layouts
          without media queries. Auto-fit collapses empty columns while
          auto-fill maintains them, giving you precise control over responsive
          behavior. The dense keyword in grid-auto-flow fills gaps in the
          layout, useful for masonry-style designs.
        </p>
      </section>

      <blockquote className="border-l-4 border-red-500 pl-8 py-6 mb-12 bg-gray-900/50 rounded-r-lg">
        <p className="text-red-400 text-xl italic font-medium mb-4">
          "CSS Grid is not just another layout method. It's the layout method
          that finally gives us the power to create any layout we can imagine,
          with precision and maintainability that was impossible before."
        </p>
        <cite className="text-gray-400 text-sm">
          Rachel Andrew, CSS Grid Expert
        </cite>
      </blockquote>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Mastering Grid in Practice
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Once you master these fundamentals and advanced techniques, you'll
            discover that Grid changes how you approach layout challenges.
            Instead of working around CSS limitations, you'll be designing with
            intent and precision. Complex layouts become straightforward to
            implement and maintain, responsive behavior becomes predictable, and
            your CSS becomes more semantic and readable.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            The key to Grid mastery is practice with real-world projects. Start
            by recreating existing layouts using Grid, then experiment with
            designs that would have been difficult with previous methods. Pay
            attention to how Grid changes your design thinking – you'll find
            yourself considering layouts that weren't practical before.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            By the end of this guide, you'll be able to create any layout you
            can imagine with confidence and precision. Grid isn't just a tool –
            it's a new way of thinking about web layout that makes complex
            designs achievable and maintainable. The future of CSS layout is
            here, and it's more powerful than we ever imagined.
          </p>
        </div>
      </section>
    </ArticleLayout>
  );
};

export default CSSGridMasteryArticle;
