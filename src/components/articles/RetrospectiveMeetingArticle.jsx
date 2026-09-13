import ArticleLayout from "../ArticleLayout";

const RetrospectiveMeetingArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Tutorials", href: "/tutorials" },
    { label: "Retrospective Meeting", href: "/retrospective-meeting" },
  ];

  return (
    <ArticleLayout
      title="How to Run Your First Retrospective Meeting"
      readTime="16 mins read"
      date="June 22nd, 2025"
      author="David Chen"
      authorTitle="Project Management Mentor"
      authorImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
      heroImage="https://images.unsplash.com/photo-1676277757211-ebd7fdeb3d5b?w=1200&h=600&fit=crop&crop=center"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A practical step-by-step guide for new Project Managers, including
          questions to ask your team and how to turn feedback into meaningful
          action.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Starting a new role as a Project Manager can come with a lot of
          firsts: your first project, your first sprint, your first
          stakeholder meeting, and eventually, your first retrospective.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A retrospective meeting gives a project team an opportunity to
          pause, reflect on the work they have completed, and identify ways
          to improve how they work together.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          For a new Project Manager, learning how to facilitate an effective
          retrospective is an important skill. The goal is not to find
          someone to blame when something goes wrong. Instead, the goal is to
          understand what happened, identify what worked, learn from what did
          not, and agree on practical improvements for the next phase of
          work. If you want to learn more about this, visit Vephla University
          to learn more.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Is a Retrospective Meeting?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A retrospective is a structured team discussion held after a period
          of work to reflect on the team's experience and identify
          opportunities for improvement.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          It can be conducted after:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• A sprint</li>
            <li>• A project milestone</li>
            <li>• A product launch</li>
            <li>• A major deliverable</li>
            <li>• A campaign</li>
            <li>• A project phase</li>
            <li>• A significant challenge or incident</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A simple retrospective usually answers three questions:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• What went well?</li>
            <li>• What did not go well?</li>
            <li>• What can we do differently next time?</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          The important thing to remember is that a retrospective should
          focus on improving the team's processes, communication, and ways
          of working rather than assigning blame to individuals.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Why Should Project Managers Run Retrospectives?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Projects rarely go exactly according to plan.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Requirements can change. Deadlines can shift. Dependencies can
          cause delays. Communication can break down. A process that seemed
          efficient at the beginning of a project may become a bottleneck
          later.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Retrospectives give the team a structured opportunity to learn
          from these experiences.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A good retrospective can help a team:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Identify recurring problems</li>
            <li>• Improve communication</li>
            <li>• Strengthen collaboration</li>
            <li>• Identify process bottlenecks</li>
            <li>• Surface risks and dependencies</li>
            <li>• Recognize successful practices</li>
            <li>• Improve future planning</li>
            <li>• Create specific actions for improvement</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          For a Project Manager, it is also an opportunity to understand how
          the team is experiencing the project rather than relying only on
          timelines, task boards, and status reports.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          When Should You Run a Retrospective?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          There is no single rule for when a retrospective must happen. For
          teams working in sprints, a retrospective may take place at the
          end of each sprint. For other projects, it can be useful to hold
          one after a major milestone or project phase.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          You may also want to organize an additional retrospective when:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• A major deadline has been completed.</li>
            <li>• A project experienced significant delays.</li>
            <li>• A major issue or incident occurred.</li>
            <li>• A new process has been introduced.</li>
            <li>• The team has completed a major launch.</li>
            <li>
              • You want to evaluate how a new way of working is performing.
            </li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          The key is to make retrospectives part of continuous improvement
          rather than something the team does only when there is a problem.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          How to Prepare for Your First Retrospective
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          An effective retrospective begins before the meeting itself.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          1. Define the Objective
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Know what you want the team to achieve.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          Instead of simply saying:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-4">
          <p className="text-gray-400 italic">
            "We are having a retrospective."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          Define a clear purpose. For example:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "By the end of this retrospective, we want to identify the three
            biggest process challenges from this sprint and agree on
            specific actions to improve them."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          A clear objective keeps the conversation focused.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          2. Invite the Right People
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          The people who were directly involved in the work should have an
          opportunity to contribute. Depending on the project, this may
          include:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Project Managers</li>
            <li>• Product Managers</li>
            <li>• Designers</li>
            <li>• Engineers</li>
            <li>• QA team members</li>
            <li>• Operations</li>
            <li>• Other relevant stakeholders</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Avoid inviting people who do not need to participate simply
          because they are connected to the project.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          3. Review the Work Before the Meeting
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          As the Project Manager, take some time to review what happened
          during the period being discussed.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">Look at:</p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Planned versus completed work</li>
            <li>• Missed deadlines</li>
            <li>• Blockers</li>
            <li>• Dependencies</li>
            <li>• Scope changes</li>
            <li>• Major decisions</li>
            <li>• Communication issues</li>
            <li>• Escalations</li>
            <li>• Stakeholder feedback</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          This helps you enter the meeting with context without allowing
          your own perspective to dominate the discussion.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          4. Prepare Your Questions
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Do not rely entirely on spontaneous conversation.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Prepare a few questions in advance so you can guide the discussion
          if the conversation becomes quiet or goes off track.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          How to Start the Retrospective
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          At the beginning of the meeting, explain the purpose and establish
          a safe environment for honest discussion.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          You can start with something as simple as:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "The purpose of today's retrospective is to understand what
            worked, what didn't, and what we can improve going forward. This
            is not about assigning blame. We are here to learn from the way
            we worked and agree on practical improvements."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          You can also establish a few ground rules:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• Be respectful.</li>
            <li>• Focus on processes rather than personalities.</li>
            <li>• Give everyone an opportunity to contribute.</li>
            <li>• Listen before responding.</li>
            <li>• Be specific when raising an issue.</li>
            <li>• Focus on solutions and improvements.</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          A Simple Retrospective Framework
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          If this is your first retrospective, you do not need a complicated
          framework.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          A simple{" "}
          <span className="text-green-400 font-medium">What Went Well</span>{" "}
          /{" "}
          <span className="text-green-400 font-medium">
            What Didn't Go Well
          </span>{" "}
          /{" "}
          <span className="text-green-400 font-medium">
            What Can We Improve?
          </span>{" "}
          structure is enough.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          What Went Well?
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Ask the team to identify practices, decisions, or events that
          contributed positively to the work.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Questions you can ask include:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• What worked particularly well?</li>
            <li>• What should we continue doing?</li>
            <li>• What helped us deliver successfully?</li>
            <li>• Which process made the work easier?</li>
            <li>
              • Was there a decision that had a particularly positive
              impact?
            </li>
            <li>• Where did collaboration work well?</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          The purpose is not simply to celebrate. Successful practices
          should be identified so the team can repeat them.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          What Didn't Go Well?
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Next, create space for the team to discuss challenges.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          You can ask:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• What slowed us down?</li>
            <li>• What created unnecessary work?</li>
            <li>• Where did communication break down?</li>
            <li>• What caused delays?</li>
            <li>• Were there unclear requirements?</li>
            <li>• Did we encounter unexpected dependencies?</li>
            <li>• What frustrated the team?</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          As the facilitator, avoid becoming defensive when problems are
          raised. The purpose is to understand the problem, not defend
          previous decisions.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          What Can We Improve?
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          This is where reflection becomes action.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">Ask:</p>
        <div className="bg-gray-900 p-6 rounded-lg">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• What could we have done differently?</li>
            <li>• What should we start doing?</li>
            <li>• What should we stop doing?</li>
            <li>• What should we continue doing?</li>
            <li>• What process should we change?</li>
            <li>
              • What would make the next sprint or project phase easier?
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Sample Retrospective Questions for New PMs
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          If you are facilitating your first retrospective, these questions
          can help you guide the conversation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">Delivery</h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Did we achieve what we planned?</li>
              <li>• What helped us deliver successfully?</li>
              <li>• What caused delays?</li>
              <li>• Were our estimates realistic?</li>
              <li>• Were there unexpected blockers?</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              Communication
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Was important information shared early enough?</li>
              <li>• Were responsibilities clear?</li>
              <li>• Did everyone know what was expected of them?</li>
              <li>• Where did communication break down?</li>
              <li>• How can we improve communication next time?</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              Collaboration
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Did team members have the support they needed?</li>
              <li>• Which areas of collaboration worked well?</li>
              <li>
                • Where could cross-functional collaboration improve?
              </li>
              <li>• Were there any handoff problems between teams?</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">Process</h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Which part of our workflow worked well?</li>
              <li>• Which process created unnecessary friction?</li>
              <li>
                • Is there anything we repeatedly do that could be
                simplified?
              </li>
              <li>
                • Did our tools and systems support the team effectively?
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              Project Management
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Were priorities clear?</li>
              <li>• Were risks identified early enough?</li>
              <li>• Were dependencies properly tracked?</li>
              <li>• Were changes communicated quickly?</li>
              <li>• Did our timeline reflect the actual workload?</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              Improvement
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• What is one thing we should start doing?</li>
              <li>• What is one thing we should stop doing?</li>
              <li>• What is one thing we should continue doing?</li>
              <li>
                • What is the most important improvement we should make
                before the next phase?
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Don't Let the Retrospective Become a Complaint Session
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          One of the biggest challenges for a new Project Manager is knowing
          how to handle complaints constructively.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          For example, someone might say:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-400 italic">
            "Engineering never communicates properly."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          Rather than simply recording the complaint, the PM can ask:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-4">
          <p className="text-gray-300 italic">
            "Can you give us an example of where the communication broke
            down?"
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">Then:</p>
        <div className="bg-gray-900 p-6 rounded-lg mb-4">
          <p className="text-gray-300 italic">
            "What impact did that have on the project?"
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          And finally:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "What could we change to prevent that from happening again?"
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          This turns:
        </p>
        <p className="text-green-400 text-lg font-semibold mb-6 text-center">
          Complaint → Specific example → Root cause → Solution
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          The goal is to make the discussion constructive and actionable.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Prioritize the Issues You Discover
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          A retrospective can produce a long list of problems. You do not
          need to solve everything at once.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Prioritize issues based on factors such as:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• Impact</li>
            <li>• Frequency</li>
            <li>• Urgency</li>
            <li>• Effort required to address them</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          For example:
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-700 mb-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                  Issue
                </th>
                <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                  Impact
                </th>
                <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                  Priority
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="text-gray-300 px-4 py-3">
                  Unclear requirements
                </td>
                <td className="text-gray-300 px-4 py-3">High</td>
                <td className="text-gray-300 px-4 py-3">High</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="text-gray-300 px-4 py-3">
                  Late status updates
                </td>
                <td className="text-gray-300 px-4 py-3">Medium</td>
                <td className="text-gray-300 px-4 py-3">Medium</td>
              </tr>
              <tr>
                <td className="text-gray-300 px-4 py-3">Meeting duration</td>
                <td className="text-gray-300 px-4 py-3">Low</td>
                <td className="text-gray-300 px-4 py-3">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          Focus on the issues that will make the biggest difference to the
          team's performance.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Turn Feedback Into Action Items
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          This is one of the most important responsibilities of the Project
          Manager.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          A retrospective should not end with:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-4">
          <p className="text-gray-400 italic">
            "We need to communicate better."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          That is an observation, not an action. Instead, turn the
          observation into something measurable.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          For example:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-8">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>
              <span className="text-gray-100 font-medium">Improvement:</span>{" "}
              Improve daily communication.
            </li>
            <li>
              <span className="text-gray-100 font-medium">Action:</span>{" "}
              Introduce a short daily project status update in the team
              channel.
            </li>
            <li>
              <span className="text-gray-100 font-medium">Owner:</span>{" "}
              Project Manager.
            </li>
            <li>
              <span className="text-gray-100 font-medium">Start:</span> Next
              sprint.
            </li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A useful structure is:
        </p>
        <h3 className="text-xl font-semibold text-white mb-4">
          Action → Owner → Deadline
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          For example:
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-700 mb-6">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-800">
                <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                  Improvement
                </th>
                <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                  Action
                </th>
                <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                  Owner
                </th>
                <th className="text-gray-100 font-semibold px-4 py-3 border-b border-gray-700">
                  Deadline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="text-gray-300 px-4 py-3">
                  Improve requirements clarity
                </td>
                <td className="text-gray-300 px-4 py-3">
                  Introduce requirements review before development
                </td>
                <td className="text-gray-300 px-4 py-3">PM/Product</td>
                <td className="text-gray-300 px-4 py-3">
                  Before next sprint
                </td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="text-gray-300 px-4 py-3">
                  Improve blocker visibility
                </td>
                <td className="text-gray-300 px-4 py-3">
                  Add daily blocker updates
                </td>
                <td className="text-gray-300 px-4 py-3">PM</td>
                <td className="text-gray-300 px-4 py-3">Next sprint</td>
              </tr>
              <tr>
                <td className="text-gray-300 px-4 py-3">
                  Improve design handoffs
                </td>
                <td className="text-gray-300 px-4 py-3">
                  Confirm design sign-off before development
                </td>
                <td className="text-gray-300 px-4 py-3">Design Lead</td>
                <td className="text-gray-300 px-4 py-3">Immediately</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          When possible, make each action specific enough that you can later
          determine whether it was actually completed.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          How to Handle Difficult Conversations
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Not every retrospective will be comfortable. Team members may
          disagree about what happened or have different perspectives on the
          same issue.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          As the facilitator:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• Listen to each perspective.</li>
            <li>• Ask for specific examples.</li>
            <li>• Avoid taking sides.</li>
            <li>• Separate facts from assumptions.</li>
            <li>• Redirect personal criticism toward processes.</li>
            <li>• Look for the underlying issue.</li>
            <li>• Bring the conversation back to improvement.</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          For example, instead of allowing:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-4">
          <p className="text-gray-400 italic">
            "You always send requirements late."
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          A PM can redirect:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "Let's focus on the process. At what point did the requirement
            become available, and what can we change to make that earlier
            next time?"
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          This keeps the conversation productive.
        </p>
      </section>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Example: Running Your First Retrospective
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Imagine a team has just completed a two-week sprint. The team
            delivered most of its planned work, but one feature was delayed
            because requirements were unclear.
          </p>

          <h3 className="text-xl font-semibold text-white mb-3">
            What Went Well?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            The team identifies:
          </p>
          <ul className="text-gray-300 space-y-2 text-sm ml-4 mb-8">
            <li>• Daily check-ins helped identify blockers quickly.</li>
            <li>• Design and Engineering collaborated effectively.</li>
            <li>• Most planned tasks were completed.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">
            What Didn't Go Well?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            The team identifies:
          </p>
          <ul className="text-gray-300 space-y-2 text-sm ml-4 mb-8">
            <li>• Some requirements were unclear.</li>
            <li>• A few changes were communicated late.</li>
            <li>• One dependency was discovered later than expected.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">
            What Can We Improve?
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-2">
            The team agrees to:
          </p>
          <ul className="text-gray-300 space-y-2 text-sm ml-4 mb-8">
            <li>• Review requirements before development begins.</li>
            <li>
              • Document major scope changes in the project channel.
            </li>
            <li>• Track dependencies during sprint planning.</li>
          </ul>

          <h3 className="text-xl font-semibold text-white mb-3">
            Resulting Action Items
          </h3>
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• PM: Introduce a requirements-review checklist.</li>
            <li>
              • Design Lead: Confirm designs before Engineering begins
              implementation.
            </li>
            <li>
              • Engineering Lead: Flag unclear requirements before
              development starts.
            </li>
          </ul>
          <p className="text-gray-300 text-lg leading-relaxed mt-6">
            This is what makes a retrospective valuable: the discussion
            leads to changes that can be tested in the next phase of work.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Common Mistakes New PMs Should Avoid
        </h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-semibold mb-2">
              1. Turning the Meeting Into a Blame Session
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Focus on what happened and how the process can improve.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">
              2. Allowing One Person to Dominate
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Make space for quieter team members to contribute.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">
              3. Discussing Problems Without Solutions
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              A problem is only the starting point. Ask what can be changed.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">
              4. Trying to Fix Everything
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Prioritize the issues with the greatest impact.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">
              5. Failing to Document Decisions
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Capture the key observations, decisions, and action items.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">
              6. Not Following Up
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              If action items are never reviewed, the retrospective loses
              much of its value.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What to Do After the Retrospective
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          The meeting should not be the end of the process.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          After the retrospective, the Project Manager should:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Document the key discussion points.</li>
            <li>• Share the agreed action items.</li>
            <li>• Assign owners.</li>
            <li>• Set realistic deadlines.</li>
            <li>• Add the actions to the team's project management system.</li>
            <li>• Track progress.</li>
            <li>
              • Review whether the changes actually improved the team's
              workflow.
            </li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          During the next retrospective, revisit previous action items. Ask:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "Did the improvement we agreed on last time actually help?"
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          This creates a continuous improvement cycle.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Your First Retrospective Checklist
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Use this checklist before and after your first retrospective.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              Before the Meeting
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Define the objective.</li>
              <li>• Invite the appropriate participants.</li>
              <li>• Review the project's progress.</li>
              <li>• Review blockers and dependencies.</li>
              <li>• Prepare discussion questions.</li>
              <li>• Prepare the meeting structure.</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              During the Meeting
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Explain the purpose.</li>
              <li>• Establish ground rules.</li>
              <li>• Give everyone an opportunity to contribute.</li>
              <li>• Discuss what went well.</li>
              <li>• Discuss what did not go well.</li>
              <li>• Identify improvement opportunities.</li>
              <li>• Prioritize the most important issues.</li>
              <li>• Agree on specific actions.</li>
              <li>• Assign owners and deadlines.</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              After the Meeting
            </h4>
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Document the outcomes.</li>
              <li>• Share the action items.</li>
              <li>
                • Assign the actions in the project management system.
              </li>
              <li>• Track progress.</li>
              <li>• Review the improvements during the next retrospective.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Build Your Project Management Skills
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Running an effective retrospective is one of many skills a Project
          Manager develops over time.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          If you are new to Project Management and want to build a stronger
          foundation in project planning, execution, stakeholder management,
          communication, and delivery, structured learning can help you
          develop these skills.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Looking to learn Project Management? Visit Vephla University to
          learn more.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Final Thoughts
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Your first retrospective does not need to be perfect. What matters
          is creating a structured opportunity for the team to reflect
          honestly, learn from its experience, and agree on practical
          improvements.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Start with a simple structure. Ask clear questions. Listen
          carefully. Avoid blame. Turn feedback into specific actions, and
          follow up on those actions.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          As you gain experience, you can experiment with different
          retrospective formats and facilitation techniques.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          The most important question to keep asking is:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <p className="text-gray-300 italic">
            "What can we learn from the way we worked, and what can we do
            better next time?"
          </p>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          That mindset is at the heart of continuous improvement and
          effective Project Management.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default RetrospectiveMeetingArticle;
