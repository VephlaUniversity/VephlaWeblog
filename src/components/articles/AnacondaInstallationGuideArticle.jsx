import { useState } from "react";
import ArticleLayout from "../ArticleLayout";

const StepImage = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="bg-gray-900 p-2 rounded-lg mb-6 border border-gray-700">
        <div className="flex flex-col items-center justify-center text-center rounded border border-dashed border-gray-600 px-6 py-16">
          <p className="text-gray-300 font-medium mb-2">Image placeholder</p>
          <p className="text-gray-500 text-sm mb-2">{alt}</p>
          <p className="text-gray-500 text-xs font-mono">public{src}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 p-2 rounded-lg mb-6 border border-gray-700">
      <img
        src={src}
        alt={alt}
        className="w-full rounded"
        onError={() => setFailed(true)}
      />
    </div>
  );
};

const CodeBlock = ({ children }) => (
  <div className="bg-black/60 border border-gray-700 rounded-lg px-4 py-3 font-mono text-sm text-green-400 mb-6 overflow-x-auto whitespace-pre">
    {children}
  </div>
);

const ArticleLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-400 underline transition-colors"
  >
    {children}
  </a>
);

const AnacondaInstallationGuideArticle = () => {
  const breadcrumbs = [
    { label: "Homepage", href: "/" },
    { label: "Tutorials", href: "/tutorials" },
    {
      label: "Anaconda Installation Guide",
      href: "/anaconda-installation-guide",
    },
  ];

  return (
    <ArticleLayout
      title="Anaconda Installation Guide: Set Up Python and Jupyter Notebook"
      readTime="10 mins read"
      date="October 5th, 2026"
      author="V. Sawyer"
      authorTitle="Project Management Mentor"
      heroImage="https://images.unsplash.com/photo-1504607798333-52a30db54a5d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      breadcrumbs={breadcrumbs}
    >
      <section className="mb-12">
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          If you are starting your journey into{" "}
          <strong className="text-white font-semibold">
            Python, Data Analytics, Data Science, or Data Engineering
          </strong>
          , setting up your development environment is one of the first
          practical steps you need to take.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          One of the easiest ways for beginners to get started is with{" "}
          <strong className="text-white font-semibold">
            Anaconda Distribution
          </strong>
          , which provides Python together with tools and packages commonly used
          for data-related work. It also provides access to Jupyter Notebook and
          JupyterLab, making it possible to write, run, and document Python code
          interactively.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          This guide walks you through installing Anaconda, opening Jupyter,
          creating your first notebook, and turning your first Python practice
          into a portfolio project.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          <strong className="text-white font-semibold">Note:</strong> The exact
          appearance of the Anaconda installer and Navigator may differ slightly
          depending on your operating system and the version you install.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Is Anaconda?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Anaconda Distribution is a Python distribution designed to make it
          easier to set up and manage a Python environment for data science,
          analytics, scientific computing, and machine learning.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Instead of installing Python and numerous data-related packages
          individually, Anaconda provides a packaged environment containing
          Python, conda, Jupyter tools, Navigator, and many commonly used
          libraries.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          This is particularly useful for beginners because package dependencies
          can otherwise become confusing when setting up a new Python
          environment.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Is Jupyter Notebook?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          <strong className="text-white font-semibold">Jupyter Notebook</strong>{" "}
          is an interactive web-based environment where you can write and
          execute code in separate cells.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A notebook can contain:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Python code</li>
            <li>• Written explanations</li>
            <li>• Tables</li>
            <li>• Charts and visualizations</li>
            <li>• Mathematical expressions</li>
            <li>• Data analysis</li>
            <li>• Project documentation</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          This makes Jupyter particularly useful for data analytics and data
          science projects because you can keep your{" "}
          <strong className="text-white font-semibold">
            code, analysis, results, and explanations together in one document
          </strong>
          .
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Before You Begin</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Before installing Anaconda, make sure you have:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>
              • A computer running a supported version of Windows, macOS, or
              Linux
            </li>
            <li>• A stable internet connection</li>
            <li>• Enough storage space for the Anaconda installation</li>
            <li>• Permission to install software on your computer</li>
            <li>
              • A dedicated folder where you intend to keep your Python projects
            </li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          For new learners,{" "}
          <strong className="text-white font-semibold">Python 3</strong> should
          be used rather than Python 2. The older Python versions shown in some
          historical installation guides should not be followed for a new
          project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Download Anaconda
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          The first step is to obtain the current Anaconda Distribution
          installer. Go to the official Anaconda download page and select the
          installer appropriate for your operating system.
        </p>
        <StepImage
          src="/ana-1.png"
          alt="Google search results for 'download anaconda python' showing the Anaconda distribution download page"
        />
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          You will typically see options for:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• Windows</li>
            <li>• macOS</li>
            <li>• Linux</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Choose the installer that matches your computer's operating system and
          processor architecture.
        </p>
        <StepImage
          src="/ana-2.png"
          alt="Anaconda Individual Edition page with a Download button"
        />
        <h3 className="text-xl font-semibold text-white mb-3">Important</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Do not download an old Python version simply because it appears in an
          older tutorial. Anaconda's current download page provides the
          appropriate current distribution for new installations.
        </p>
        <StepImage
          src="/ana-3.png"
          alt="Anaconda download section showing Windows, macOS, and Linux installer options"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Install Anaconda</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Once the installer has downloaded, open it and follow the installation
          instructions displayed on your computer.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          The exact screens vary slightly between Windows, macOS, and Linux, but
          the general process is:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• Open the downloaded installer.</li>
            <li>• Review the installation information.</li>
            <li>• Accept the applicable terms and conditions.</li>
            <li>• Select the installation location.</li>
            <li>• Continue with the installation.</li>
            <li>• Wait for the installation to complete.</li>
            <li>• Close the installer when the process is finished.</li>
          </ul>
        </div>
        <StepImage
          src="/ana-4.png"
          alt="Install Anaconda3 window on macOS asking whether to continue with the installation"
        />
        <h3 className="text-xl font-semibold text-white mb-3">
          Installation Tip
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed">
          If you are installing Anaconda for the first time, using the default
          installation settings is generally the simplest option unless you have
          a specific reason to change them.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Open Anaconda Navigator
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          After installation, search for and open{" "}
          <strong className="text-white font-semibold">
            Anaconda Navigator
          </strong>
          . Navigator provides a graphical interface for managing your Anaconda
          environment and launching applications without requiring you to work
          entirely from the command line.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Depending on your version, you may see applications such as:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• JupyterLab</li>
            <li>• Jupyter Notebook</li>
            <li>• Spyder</li>
            <li>• Other available tools</li>
          </ul>
        </div>
        <StepImage
          src="/ana-5.png"
          alt="Anaconda Navigator home screen showing JupyterLab, Notebook, Qt Console, Spyder, VS Code, and Glueviz"
        />
        <p className="text-gray-300 text-lg leading-relaxed">
          The exact applications displayed can change between Anaconda releases.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Launch Jupyter</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          From Anaconda Navigator, locate the available Jupyter application.
          Select <strong className="text-white font-semibold">Launch</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Depending on the version of Anaconda and the Jupyter interface
          available, this may open Jupyter Notebook or JupyterLab in your web
          browser.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Once launched, you should see a browser-based interface through which
          you can navigate your project files.
        </p>
        <StepImage
          src="/ana-6.png"
          alt="Jupyter file browser listing folders in the home directory"
        />

        <h3 className="text-xl font-semibold text-white mb-3">
          Understand the Jupyter File Directory
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          When Jupyter opens, you may initially see a file and folder directory
          rather than an empty notebook. This is where you navigate to the
          location where you want to store your project. For example, you could
          create a dedicated folder such as: Python Projects. Inside it, you
          could organise your work like this:
        </p>
        <CodeBlock>{`Python Projects/
│
├── beginner-project/
├── data-analysis/
├── SQL-project/
└── portfolio-project/`}</CodeBlock>
        <p className="text-gray-300 text-lg leading-relaxed">
          Keeping projects organised from the beginning makes it easier to find
          your notebooks and build a professional portfolio later.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Create Your First Jupyter Notebook
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Navigate to the folder where you want to store your project. Look for
          the option to create a new notebook and select the available{" "}
          <strong className="text-white font-semibold">Python</strong> kernel. A
          new notebook will open, you can now begin writing Python code.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          For example:
        </p>
        <CodeBlock>{`print("Hello, Vephla!")`}</CodeBlock>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Run the cell to execute the code. If the output appears below the
          cell, your Python environment is working correctly.
        </p>
        <StepImage
          src="/ana-7.png"
          alt="Empty Jupyter notebook with a single code cell and the Python 3 kernel"
        />

        <h3 className="text-xl font-semibold text-white mb-3">
          Your First Data Analysis Example
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Once your notebook is working, you can move beyond simple Python
          commands and begin practising data analysis.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          For example:
        </p>
        <CodeBlock>{`import pandas as pd

data = {
    "Name": ["Ada", "David", "Sarah"],
    "Score": [85, 72, 91]
}

df = pd.DataFrame(data)

print(df)`}</CodeBlock>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          You can then calculate a simple statistic:
        </p>
        <CodeBlock>{`print(df["Score"].mean())`}</CodeBlock>
        <p className="text-gray-300 text-lg leading-relaxed">
          This demonstrates one of the ways Python can be used to work with
          structured data.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Create a Separate Environment for Your Projects
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          As you become more comfortable with Python, it is useful to understand{" "}
          <strong className="text-white font-semibold">
            conda environments
          </strong>
          . An environment gives a project its own collection of Python packages
          and dependencies. For example, you might create separate environments
          for:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Data Analytics</li>
            <li>• Machine Learning</li>
            <li>• Web Development</li>
            <li>• Data Engineering</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          This helps prevent package conflicts between different projects. A
          beginner-friendly example is:
        </p>
        <CodeBlock>conda create --name data-analysis python</CodeBlock>
        <p className="text-gray-300 text-lg leading-relaxed mb-2">
          Activate the environment with:
        </p>
        <CodeBlock>conda activate data-analysis</CodeBlock>
        <p className="text-gray-300 text-lg leading-relaxed">
          You can then install the packages required for your project.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          What Can You Build With Python?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Installing Anaconda is only the beginning. Once Python and Jupyter are
          working, you can begin building practical projects such as:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-green-400 font-semibold mb-3">
              Data Analytics Projects
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Sales performance dashboard</li>
              <li>• Customer churn analysis</li>
              <li>• Employee performance analysis</li>
              <li>• Marketing campaign analysis</li>
              <li>• E-commerce sales analysis</li>
              <li>• Student performance analysis</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-green-400 font-semibold mb-3">
              Data Engineering Projects
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Data cleaning pipeline</li>
              <li>• CSV-to-database pipeline</li>
              <li>• Automated data transformation workflow</li>
              <li>• ETL project</li>
              <li>• Data ingestion and validation system</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-green-400 font-semibold mb-3">
              Python Projects
            </h3>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Expense tracker</li>
              <li>• Student management system</li>
              <li>• Simple inventory system</li>
              <li>• Data cleaning tool</li>
              <li>• File automation script</li>
              <li>• Personal productivity tool</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="glass-card p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">
            Turn Your Practice Project Into a Portfolio Project
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Simply completing a Python exercise is useful for learning, but
            documenting the work properly can make it much more valuable as a
            portfolio project. A strong beginner project can include:
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">
            1. Problem Statement
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Explain the problem you are trying to solve.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">
            2. Objective
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            State what the project is intended to achieve.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">3. Dataset</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Explain where your data came from and what it contains.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">
            4. Data Cleaning
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Document the steps used to:
          </p>
          <div className="bg-gray-900 p-6 rounded-lg mb-6">
            <ul className="text-gray-300 space-y-2 text-sm ml-4">
              <li>• Remove duplicates</li>
              <li>• Handle missing values</li>
              <li>• Correct inconsistent values</li>
              <li>• Rename columns</li>
              <li>• Convert data types</li>
            </ul>
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">5. Analysis</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Explain the questions you investigated and the methods used.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">
            6. Visualizations
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Create charts that communicate important findings.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">7. Insights</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Clearly explain what the analysis revealed.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">
            8. Recommendations
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Translate the findings into practical recommendations.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">
            9. Documentation
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            Include your notebook, README, screenshots, and relevant files in
            your project repository.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Platforms You Can Use for Your Portfolio
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Once you have completed your project, you can showcase your work using
          platforms such as:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• GitHub</li>
            <li>• Kaggle</li>
            <li>• LinkedIn</li>
            <li>• A personal portfolio website</li>
            <li>• A project portfolio document</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          For a data analytics project, your portfolio can contain:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg">
          <p className="text-white font-semibold text-lg leading-relaxed">
            Project Title → Problem → Dataset → Tools → Process → Analysis →
            Visualizations → Insights → Recommendations → Project Link
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Trial Projects You Can Try
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          If you are just starting out, you do not need to wait for a
          professional client before building your portfolio. You can create
          your own trial project. For example:
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          Trial Project: Nigerian Food Price Analysis
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Collect a dataset containing:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4">
            <li>• Food item</li>
            <li>• Location</li>
            <li>• Month</li>
            <li>• Price</li>
            <li>• Market</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Use Python and pandas to:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg mb-6">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Load the dataset.</li>
            <li>• Clean the data.</li>
            <li>• Identify missing values.</li>
            <li>• Calculate average prices.</li>
            <li>• Compare prices across locations.</li>
            <li>• Identify price trends.</li>
            <li>• Create visualizations.</li>
            <li>• Present your findings.</li>
          </ul>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          You could then document the entire project in a Jupyter Notebook and
          publish the finished project as part of your portfolio.
        </p>

        <h3 className="text-xl font-semibold text-white mb-3">
          Other Python Portfolio Ideas
        </h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Here are additional projects you can build after setting up your
          environment:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">Beginner</h4>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Personal expense tracker</li>
              <li>• Student score analyser</li>
              <li>• Sales data analyser</li>
              <li>• Weather data analyser</li>
              <li>• Movie dataset analysis</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">Intermediate</h4>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• Customer churn analysis</li>
              <li>• E-commerce performance analysis</li>
              <li>• Marketing campaign analysis</li>
              <li>• Automated reporting system</li>
              <li>• Data cleaning pipeline</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h4 className="text-green-400 font-semibold mb-3">
              Data Engineering Focus
            </h4>
            <ul className="text-gray-300 space-y-1 text-sm ml-4">
              <li>• CSV-to-database ETL pipeline</li>
              <li>• Automated data ingestion workflow</li>
              <li>• Data validation pipeline</li>
              <li>• API-to-database pipeline</li>
              <li>• Scheduled data processing workflow</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Common Problems and What to Check
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Anaconda Does Not Open
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">Try:</p>
            <div className="bg-gray-900 p-6 rounded-lg">
              <ul className="text-gray-300 space-y-1 text-sm ml-4">
                <li>• Restarting your computer</li>
                <li>• Opening Anaconda Navigator again</li>
                <li>
                  • Checking whether the installation completed successfully
                </li>
                <li>• Updating the installation if necessary</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Jupyter Does Not Launch
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              Check that:
            </p>
            <div className="bg-gray-900 p-6 rounded-lg">
              <ul className="text-gray-300 space-y-1 text-sm ml-4">
                <li>• Anaconda was installed successfully</li>
                <li>• Navigator is working</li>
                <li>• The Jupyter application is available</li>
                <li>• Your environment is correctly configured</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              A Python Package Is Missing
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-2">
              If a package is not available in your environment, install it
              through your selected environment rather than randomly installing
              packages into different environments. For example:
            </p>
            <CodeBlock>conda install pandas</CodeBlock>
            <p className="text-gray-300 text-lg leading-relaxed mb-2">
              Or, when appropriate:
            </p>
            <CodeBlock>pip install pandas</CodeBlock>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Your Notebook Cannot Find a File
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Make sure the file is stored in the directory your notebook is
              working from, or provide the correct file path.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Beginner Setup Checklist
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Before starting your first project, confirm that:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Anaconda is installed</li>
            <li>• Anaconda Navigator opens</li>
            <li>• Jupyter Notebook/JupyterLab launches</li>
            <li>• You can create a Python notebook</li>
            <li>• Python code executes successfully</li>
            <li>• You can create folders for your projects</li>
            <li>• You understand the purpose of environments</li>
            <li>• You have a first trial project in mind</li>
            <li>• You have a place to document your portfolio projects</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">
          Looking to Learn Python and Data Skills?
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Installing Anaconda is only the first step. If you want to build
          practical skills in{" "}
          <strong className="text-white font-semibold">
            Python, Data Analytics, SQL, Data Engineering, and related technical
            areas
          </strong>
          , structured learning and hands-on projects can help you move from
          simply following tutorials to building work you can confidently
          showcase.
        </p>
        <p className="text-white font-semibold text-lg leading-relaxed mb-4">
          Looking to learn how to use Python and build practical data skills?
          Visit{" "}
          <ArticleLink href="https://www.vephlauni.com/">
            Vephla University
          </ArticleLink>
          .
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          You can also explore learning paths around:
        </p>
        <div className="bg-gray-900 p-6 rounded-lg">
          <ul className="text-gray-300 space-y-2 text-sm ml-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6">
            <li>• Data Analytics</li>
            <li>• SQL</li>
            <li>• Data Engineering</li>
            <li>• Python</li>
            <li>• Practical data projects</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-6">Final Thoughts</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Getting your Python environment ready does not have to be complicated.
          With Anaconda, you can set up a Python environment, launch Jupyter,
          create notebooks, and begin experimenting with real datasets. The most
          important step after installation is to start building.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Choose a small problem, find or create a dataset, analyse it with
          Python, document your process, and gradually turn your practice work
          into projects that demonstrate what you can do. Your first notebook
          does not have to be perfect. It simply needs to be the beginning.
        </p>
      </section>
    </ArticleLayout>
  );
};

export default AnacondaInstallationGuideArticle;
