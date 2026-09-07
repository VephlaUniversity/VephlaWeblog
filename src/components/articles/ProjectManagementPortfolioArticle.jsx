import ArticleLayout from "../ArticleLayout";

const ProjectManagementPortfolioArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Project Management Portfolio", href: "/project-management-portfolio" },
  ];

  return (
    <ArticleLayout
      title="How to Set Up a Project Management Portfolio That Gets You Noticed"
      readTime="14 mins read"
      date="September 7th, 2026"
      author="David Chen"
      authorTitle="Project Management Mentor"
      authorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          If you are building a career in Project Management, your CV tells
          people where you have worked and what you have done. But a Project
          Management portfolio can show them how you actually think, plan,
          communicate, solve problems, and deliver projects.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A strong portfolio gives recruiters, hiring managers, clients, and
          potential collaborators something tangible to review. It allows you
          to move beyond simply saying "I have Project Management experience"
          to actually demonstrating it.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The good news is that you do not need dozens of professional
          projects to get started. You can build a useful Project Management
          portfolio from professional work, academic projects, volunteer
          experiences, personal projects, and clearly labelled trial projects.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Here is how to get started.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Is a Project Management Portfolio?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A Project Management portfolio is a collection of projects, case
          studies, documents, and other evidence that demonstrates your
          ability to manage projects from planning through execution and
          completion.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Unlike a CV, which may summarize your responsibilities, a portfolio
          gives you room to explain:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• What problem the project was solving</li>
            <li>• What your role was</li>
            <li>• How you planned the work</li>
            <li>• Who you worked with</li>
            <li>• How you managed tasks and timelines</li>
            <li>• How you handled risks and challenges</li>
            <li>• What tools you used</li>
            <li>• What was delivered</li>
            <li>• What you learned from the project</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          The goal is not to make your portfolio as long as possible. The
          goal is to make it useful.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Should a Project Manager's Portfolio Include?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A good Project Management portfolio should make it easy for someone
          to understand your experience and approach.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          1. About Me
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Start with a short introduction that explains who you are, your
          area of interest, and the type of projects you enjoy managing.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          For example:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <p className="text-gray-300 italic">
            "I am a Project Manager focused on coordinating cross-functional
            teams, improving project execution, and turning ideas into
            structured, measurable outcomes."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Keep this section concise. Your portfolio should quickly move from
          who you are to what you can demonstrate.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          2. Project Case Studies
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          This should be the main part of your portfolio. Instead of simply
          listing project names, create a case study for each major project.
          A useful case-study structure is:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold mb-1">
                Project Name
              </h4>
              <p className="text-gray-300 text-sm">
                Give the project a clear name.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Project Overview
              </h4>
              <p className="text-gray-300 text-sm">
                Briefly explain what the project was about.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Problem or Objective
              </h4>
              <p className="text-gray-300 text-sm">
                What problem were you trying to solve?
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">My Role</h4>
              <p className="text-gray-300 text-sm">
                Clearly explain what you personally owned.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Team and Stakeholders
              </h4>
              <p className="text-gray-300 text-sm">
                Who did you work with?
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Timeline
              </h4>
              <p className="text-gray-300 text-sm">
                How long did the project run?
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Planning and Execution
              </h4>
              <p className="text-gray-300 text-sm">
                Explain how you organized and managed the work.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Tools Used
              </h4>
              <p className="text-gray-300 text-sm">
                Mention relevant tools such as project management,
                communication, documentation, design, analytics, or
                collaboration platforms.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Challenges and Blockers
              </h4>
              <p className="text-gray-300 text-sm">
                What problems came up?
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                How I Responded
              </h4>
              <p className="text-gray-300 text-sm">
                Explain the decisions or actions you took.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Outcome</h4>
              <p className="text-gray-300 text-sm">
                What was delivered or achieved?
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">
                Lessons Learned
              </h4>
              <p className="text-gray-300 text-sm">
                What did the experience teach you, and what would you improve
                next time?
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          This structure helps the person reviewing your portfolio understand
          not only what happened, but also how you managed it.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          3. Project Management Skills
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Create a section highlighting the skills you have developed. These
          could include:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-1 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Project planning</li>
            <li>• Task and timeline management</li>
            <li>• Requirements gathering</li>
            <li>• Stakeholder management</li>
            <li>• Team coordination</li>
            <li>• Risk and issue management</li>
            <li>• Documentation</li>
            <li>• Communication</li>
            <li>• Agile project management</li>
            <li>• Research</li>
            <li>• Process improvement</li>
            <li>• Reporting and project tracking</li>
            <li>• Project delivery</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Where possible, connect each skill to a project in your portfolio
          rather than simply listing it.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          4. Tools and Platforms
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          You can also include the tools you are comfortable using. For
          example:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-1 text-sm ml-4 grid grid-cols-2 sm:grid-cols-3 gap-x-6">
            <li>• Asana</li>
            <li>• Jira</li>
            <li>• Notion</li>
            <li>• Trello</li>
            <li>• Microsoft Excel</li>
            <li>• Google Workspace</li>
            <li>• Figma</li>
            <li>• FigJam</li>
            <li>• Slack</li>
            <li>• Microsoft Teams</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Only include tools you have actually used or understand well enough
          to discuss.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Where Can You Build or Present a Project Management Portfolio?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          You do not need a complicated website to start. The best platform
          depends on how you want your work to be presented and who you want
          to reach.
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="text-green-400 font-semibold mb-2">
              Personal Portfolio Website
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A personal website gives you the most control over how your
              work is presented. You can create dedicated pages for your
              projects, case studies, skills, experience, resume, and contact
              information. This is especially useful if you want your
              portfolio to become a long-term professional asset.
            </p>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold mb-2">LinkedIn</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              LinkedIn can serve as both a professional profile and a place to
              showcase selected projects, case studies, publications, and
              professional achievements. You can use your profile to explain
              your experience and direct visitors to a more detailed
              portfolio where necessary.
            </p>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold mb-2">Medium</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              Medium can be useful if you enjoy writing and want to
              demonstrate your ability to communicate ideas clearly. For
              example, you could publish articles about:
            </p>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Lessons learned from managing a project</li>
              <li>• Project planning methods</li>
              <li>• Stakeholder management</li>
              <li>• Project documentation</li>
              <li>• Working with cross-functional teams</li>
              <li>• Project retrospectives</li>
              <li>• Productivity and workflow systems</li>
            </ul>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              This can demonstrate another important Project Management
              skill: clear communication.
            </p>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold mb-2">
              Notion or Other Document-Based Portfolios
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A structured workspace can also work well for presenting
              project case studies, documentation, project artifacts, and
              supporting materials. This can be particularly useful when you
              want to create a detailed portfolio without building a website
              from scratch.
            </p>
          </div>
          <div>
            <h4 className="text-green-400 font-semibold mb-2">
              PDF Portfolio
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A PDF portfolio can be useful when applying for jobs,
              internships, freelance opportunities, or specific Project
              Management roles. Keep it organized and easy to navigate, and
              avoid putting every project or certificate you have ever
              completed into one document.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What If You Don't Have Professional Project Management Experience?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          This is one of the biggest concerns for people starting out. You
          don't necessarily need to wait until someone gives you your first
          Project Manager job before creating a portfolio.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          You can create trial projects that demonstrate how you approach
          project management. The important thing is to be transparent. Do
          not present a personal or fictional project as professional client
          work. Instead, label it clearly as:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-8 text-center">
          <p className="text-white font-medium">
            Personal Project — or — Trial Project
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          How to Create a Trial Project for Your Project Management Portfolio
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Let's say you decide to create a trial project around a fictional
          Student Mentorship Programme. Your objective could be:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <p className="text-gray-300 italic">
            Design and coordinate a four-week virtual mentorship programme
            connecting students with industry professionals.
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Now manage the project as though it were a real project.
        </p>

        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                Step 1: Create a Project Brief
              </h4>
              <p className="text-gray-300 text-sm mb-2">Document:</p>
              <ul className="text-gray-300 space-y-1 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <li>• Project name</li>
                <li>• Background</li>
                <li>• Problem statement</li>
                <li>• Objectives</li>
                <li>• Target audience</li>
                <li>• Scope</li>
                <li>• Deliverables</li>
                <li>• Timeline</li>
                <li>• Stakeholders</li>
                <li>• Success criteria</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                Step 2: Break the Work Into Tasks
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                Create a simple work breakdown structure. For example:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-200 text-sm font-medium">
                    Planning
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm ml-4">
                    <li>• Define programme objectives</li>
                    <li>• Identify target participants</li>
                    <li>• Develop project timeline</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-200 text-sm font-medium">
                    Recruitment
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm ml-4">
                    <li>• Create application form</li>
                    <li>• Recruit mentors</li>
                    <li>• Review applications</li>
                    <li>• Confirm participants</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-200 text-sm font-medium">
                    Programme Setup
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm ml-4">
                    <li>• Schedule sessions</li>
                    <li>• Prepare communication materials</li>
                    <li>• Set up the virtual platform</li>
                    <li>• Share participant information</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-200 text-sm font-medium">
                    Execution
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm ml-4">
                    <li>• Run mentorship sessions</li>
                    <li>• Track attendance</li>
                    <li>• Monitor issues</li>
                    <li>• Collect feedback</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-200 text-sm font-medium">
                    Closure
                  </p>
                  <ul className="text-gray-300 space-y-1 text-sm ml-4">
                    <li>• Review outcomes</li>
                    <li>• Collect final feedback</li>
                    <li>• Prepare project report</li>
                    <li>• Document lessons learned</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                Step 3: Create a Timeline
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                Set realistic milestones and deadlines. For example:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm ml-4">
                <li>• Week 1 — Project planning</li>
                <li>• Week 2 — Recruitment</li>
                <li>• Week 3 — Programme setup</li>
                <li>• Week 4 — Programme launch</li>
                <li>• Week 5–8 — Programme execution</li>
                <li>• Week 9 — Evaluation and closure</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-3">
                Step 4: Create a Risk Register
              </h4>
              <p className="text-gray-300 text-sm mb-4">
                Think about what could go wrong.
              </p>
              <div className="overflow-x-auto rounded-lg border border-gray-700">
                <table className="w-full text-sm text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                        Risk
                      </th>
                      <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                        Potential Impact
                      </th>
                      <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                        Response
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800">
                      <td className="text-gray-300 px-4 py-3">
                        Mentor cancellation
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Session disruption
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Maintain backup mentors
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="text-gray-300 px-4 py-3">
                        Low participant attendance
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Reduced programme impact
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Send reminders and follow-ups
                      </td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="text-gray-300 px-4 py-3">
                        Technical issues
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Session delays
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Test platform before sessions
                      </td>
                    </tr>
                    <tr>
                      <td className="text-gray-300 px-4 py-3">
                        Delayed communication
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Missed deadlines
                      </td>
                      <td className="text-gray-300 px-4 py-3">
                        Establish communication timelines
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                Step 5: Create a Communication Plan
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                Identify who needs information, what they need to know, and
                when they need it. For example:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm ml-4">
                <li>• Mentors: Programme updates and session schedules</li>
                <li>
                  • Participants: Instructions, reminders, and resources
                </li>
                <li>• Project Team: Progress, blockers, and action items</li>
                <li>
                  • Leadership: Milestones, risks, and overall project status
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-400 font-semibold mb-2">
                Step 6: Document the Project
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                Keep examples of your:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <li>• Project brief</li>
                <li>• Timeline</li>
                <li>• Task tracker</li>
                <li>• Meeting notes</li>
                <li>• Risk register</li>
                <li>• Communication plan</li>
                <li>• Status reports</li>
                <li>• Decision log</li>
                <li>• Final report</li>
                <li>• Lessons learned</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          These become evidence that you understand how projects are
          managed.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Project Artifacts Can You Add to Your Portfolio?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Your portfolio does not have to contain only screenshots of
          finished products. You can include examples of the documents and
          systems you used throughout the project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-3">
              Planning Artifacts
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Project brief</li>
              <li>• Project charter</li>
              <li>• Project plan</li>
              <li>• Roadmap</li>
              <li>• Timeline</li>
              <li>• Work breakdown structure</li>
              <li>• Milestone tracker</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-3">
              Execution Artifacts
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Task board</li>
              <li>• Sprint plan</li>
              <li>• Meeting notes</li>
              <li>• Status reports</li>
              <li>• Progress tracker</li>
              <li>• Project dashboard</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-3">
              Risk and Stakeholder Management
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Risk register</li>
              <li>• Issue tracker</li>
              <li>• Stakeholder map</li>
              <li>• Communication plan</li>
              <li>• Decision log</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-white font-semibold mb-3">
              Project Closure
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Final project report</li>
              <li>• Retrospective</li>
              <li>• Lessons learned</li>
              <li>• Project outcome</li>
              <li>• Recommendations</li>
            </ul>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Remember to remove or anonymize confidential information before
          adding professional project documents to a public portfolio.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          How Many Projects Should You Include?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          You don't need twenty projects. Start with three to five strong
          case studies. Choose projects that demonstrate different aspects of
          your ability. For example:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• A project where you coordinated a team</li>
            <li>• A project where you solved a significant problem</li>
            <li>• A project where you managed a tight timeline</li>
            <li>• A project involving multiple stakeholders</li>
            <li>
              • A personal or trial project demonstrating your Project
              Management process
            </li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Quality matters more than quantity.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Don't Just List What You Did — Show How You Did It
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          One of the easiest ways to improve your portfolio is to move beyond
          generic statements. Instead of writing:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-400 italic">
            "Managed a team and coordinated project activities."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Explain what that actually involved:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "Coordinated deliverables across Design and Engineering, tracked
            project progress, followed up on blockers, and maintained
            alignment with the agreed project timeline."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Even better, include measurable outcomes where they are available.
          For example:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "Coordinated a cross-functional team of six contributors across a
            four-week project and maintained weekly progress tracking through
            delivery."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Specific evidence makes your experience easier to understand.
        </p>
      </section>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Use Your Portfolio to Tell a Story
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            A strong Project Management portfolio should tell a story.
            Someone reviewing your project should be able to follow this
            sequence:
          </p>
          <p className="text-green-400 text-lg font-semibold mb-6 text-center">
            Problem → Objective → Plan → Execution → Challenge → Response →
            Outcome → Lessons Learned
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            This makes your portfolio much more meaningful than a collection
            of screenshots and certificates. Your portfolio should ultimately
            answer five questions:
          </p>
          <ul className="text-gray-300 space-y-1 text-sm ml-4">
            <li>• What was the problem?</li>
            <li>• What was my responsibility?</li>
            <li>• How did I approach it?</li>
            <li>• What did I deliver?</li>
            <li>• What did I learn?</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Build Your Project Management Skills Alongside Your Portfolio
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A portfolio is strongest when it reflects real knowledge and
          practical experience. If you are interested in learning Project
          Management and developing the skills needed to manage projects
          effectively, visit Vephla University to explore Project Management
          learning opportunities.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          You can also use your learning experience to create projects,
          practice project documentation, and develop case studies that
          demonstrate your growing skills.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Project Management Portfolio Checklist
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Before publishing your portfolio, ask yourself:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">Profile</h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Do I have a clear introduction?</li>
              <li>• Is my Project Management focus obvious?</li>
              <li>• Have I included my relevant skills?</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">Projects</h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Have I included three to five strong projects?</li>
              <li>• Is my role clearly explained?</li>
              <li>• Have I explained the problem or objective?</li>
              <li>• Have I shown how I planned the project?</li>
              <li>• Have I documented challenges and solutions?</li>
              <li>• Have I included outcomes and lessons learned?</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">Evidence</h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Have I included relevant project artifacts?</li>
              <li>• Are the documents easy to understand?</li>
              <li>• Have I removed confidential information?</li>
              <li>• Have I clearly labelled trial or personal projects?</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              Presentation
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Is the portfolio easy to navigate?</li>
              <li>• Are the project descriptions concise?</li>
              <li>• Are there unnecessary documents or screenshots?</li>
              <li>
                • Does the portfolio work well on mobile and desktop?
              </li>
              <li>• Are all links working?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Final Thoughts
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Your Project Management portfolio does not need to be perfect
          before you publish it. Start with what you have.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A volunteer project can become a case study. A university project
          can demonstrate planning and coordination. A personal project can
          demonstrate your ability to structure work. A professional project
          can show how you operate in a real environment.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          What matters is that you clearly communicate your role, your
          thinking, your process, and your results.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Your portfolio is not simply proof that you have worked on
          projects. It is an opportunity to show people how you work as a
          Project Manager.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          If you're ready to build your Project Management skills and gain
          practical knowledge that you can apply to your portfolio, visit
          Vephla University and take the next step in your learning journey.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default ProjectManagementPortfolioArticle;
