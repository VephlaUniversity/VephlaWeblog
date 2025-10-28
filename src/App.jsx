import "./App.css";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactPage } from "./components/contact/Contact";
import { Home } from "./components/Home";
import { CareersBlog } from "./components/CareersBlog";
import AiCopilotsArticle from "./components/AiCopilotsArticle";
import FoundersBlog from "./components/FoundersBlog";
import LifestyleBlog from "./components/LifestyleBlog";
import NetworkingDevOpsArticle from "./components/articles/NetworkingDevOpsArticle";
import RemoteLifeArticle from "./components/articles/RemoteLifeArticle";
import TutorialsBlog from "./components/TutorialsBlog";
import TrendsBlog from "./components/TrendsBlog";
import ReviewsBlog from "./components/ReviewsBlog";
import ZeroToArrArticle from "./components/articles/ZeroToArrArticle";
import FirstRoundFundingArticle from "./components/articles/FirstRoundFundingArticle";
import DigitalMinimalismArticle from "./components/articles/DigitalMinimalismArticle";
import ReactBeginnerGuideArticle from "./components/articles/ReactBeginnerGuideArticle";
import EdgeComputingArticle from "./components/articles/EdgeComputingArticle";
import NotionVsObsidianArticle from "./components/articles/NotionVsObsidianArticle";
import AiTrendArticle from "./components/AiTrendArticle";
import MacBookVsThinkPadArticle from "./components/articles/MacBookVsThinkPadArticle";
import WorkLifeBalanceArticle from "./components/articles/WorkLifeBalanceArticle";
import WebAssemblyFutureArticle from "./components/articles/WebAssemblyFutureArticle";
import ReactTaskManagerArticle from "./components/articles/ReactTaskManagerArticle";
import TeamflowJourneyArticle from "./components/articles/TeamflowJourneyArticle";
import CSSGridMasteryArticle from "./components/articles/CSSGridMasteryArticle";
import TransitionIntoTechArticle from "./components/articles/TransitionIntoTechArticle";
import VSCodeExtensionsArticle from "./components/articles/VSCodeExtensionsArticle";
import NodeJSAPIArticle from "./components/articles/NodeJSAPIArticle";
import MVPMistakesArticle from "./components/articles/MVPMistakesArticle";
import { Weblog } from "./components/Weblog";
import { AnimatePresence } from "framer-motion";
import { TermsAndService } from "./components/Terms";
import { PrivacyPolicy } from "./components/Privacy";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";

// Custom hook to set page title
function usePageTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

// Wrapper components with titles
function WeblogWithTitle() {
  usePageTitle("Vephla Dailies | Vephla Group ®");
  return <Weblog />;
}

function ContactWithTitle() {
  usePageTitle("Contact Us | Vephla Group ®");
  return <ContactPage />;
}

function HomeWithTitle() {
  usePageTitle("News Blog | Vephla Group ®");
  return <Home />;
}

function TermsWithTitle() {
  usePageTitle("Terms of Service | Vephla Group ®");
  return <TermsAndService />;
}

function PrivacyWithTitle() {
  usePageTitle("Privacy Policy | Vephla Group ®");
  return <PrivacyPolicy />;
}

function CareersBlogWithTitle() {
  usePageTitle("Careers | Vephla Group ®");
  return <CareersBlog />;
}

function FoundersBlogWithTitle() {
  usePageTitle("Founders | Vephla Group ®");
  return <FoundersBlog />;
}

function LifestyleBlogWithTitle() {
  usePageTitle("Lifestyle | Vephla Group ®");
  return <LifestyleBlog />;
}

function TutorialsBlogWithTitle() {
  usePageTitle("Tutorials | Vephla Group ®");
  return <TutorialsBlog />;
}

function TrendsBlogWithTitle() {
  usePageTitle("Trends | Vephla Group ®");
  return <TrendsBlog />;
}

function ReviewsBlogWithTitle() {
  usePageTitle("Reviews | Vephla Group ®");
  return <ReviewsBlog />;
}

function AiCopilotsArticleWithTitle() {
  usePageTitle("AI Co-Pilots | Vephla Group ®");
  return <AiCopilotsArticle />;
}

function NetworkingDevOpsArticleWithTitle() {
  usePageTitle("Networking & DevOps | Vephla Group ®");
  return <NetworkingDevOpsArticle />;
}

function RemoteLifeArticleWithTitle() {
  usePageTitle("Living the Remote Life | Vephla Group ®");
  return <RemoteLifeArticle />;
}

function ZeroToArrArticleWithTitle() {
  usePageTitle("Zero to $1M ARR | Vephla Group ®");
  return <ZeroToArrArticle />;
}

function FirstRoundFundingArticleWithTitle() {
  usePageTitle("First Round Funding | Vephla Group ®");
  return <FirstRoundFundingArticle />;
}

function DigitalMinimalismArticleWithTitle() {
  usePageTitle("Digital Minimalism | Vephla Group ®");
  return <DigitalMinimalismArticle />;
}

function ReactBeginnerGuideArticleWithTitle() {
  usePageTitle("React Beginner Guide | Vephla Group ®");
  return <ReactBeginnerGuideArticle />;
}

function EdgeComputingArticleWithTitle() {
  usePageTitle("Edge Computing 2025 | Vephla Group ®");
  return <EdgeComputingArticle />;
}

function AiTrendArticleWithTitle() {
  usePageTitle("AI Trends | Vephla Group ®");
  return <AiTrendArticle />;
}

function NotionVsObsidianArticleWithTitle() {
  usePageTitle("Notion vs Obsidian | Vephla Group ®");
  return <NotionVsObsidianArticle />;
}

function MacBookVsThinkPadArticleWithTitle() {
  usePageTitle("MacBook vs ThinkPad for Developers | Vephla Group ®");
  return <MacBookVsThinkPadArticle />;
}

function WorkLifeBalanceArticleWithTitle() {
  usePageTitle("Work-Life Balance Remote | Vephla Group ®");
  return <WorkLifeBalanceArticle />;
}

function WebAssemblyFutureArticleWithTitle() {
  usePageTitle("WebAssembly Future | Vephla Group ®");
  return <WebAssemblyFutureArticle />;
}

function ReactTaskManagerArticleWithTitle() {
  usePageTitle("React Task Manager | Vephla Group ®");
  return <ReactTaskManagerArticle />;
}

function TeamflowJourneyArticleWithTitle() {
  usePageTitle("Teamflow Journey | Vephla Group ®");
  return <TeamflowJourneyArticle />;
}

function CSSGridMasteryArticleWithTitle() {
  usePageTitle("CSS Grid Mastery | Vephla Group ®");
  return <CSSGridMasteryArticle />;
}

function TransitionIntoTechArticleWithTitle() {
  usePageTitle("Transition Into Tech | Vephla Group ®");
  return <TransitionIntoTechArticle />;
}

function VSCodeExtensionsArticleWithTitle() {
  usePageTitle("VSCode Extensions 2025 | Vephla Group ®");
  return <VSCodeExtensionsArticle />;
}

function NodeJSAPIArticleWithTitle() {
  usePageTitle("Node.js API Development | Vephla Group ®");
  return <NodeJSAPIArticle />;
}

function MVPMistakesArticleWithTitle() {
  usePageTitle("MVP Mistakes | Vephla Group ®");
  return <MVPMistakesArticle />;
}

function NotFoundWithTitle() {
  usePageTitle("Page Not Found | Vephla Group ®");
  return (
    <div className="flex items-center justify-center h-screen text-gray-500">
      <h1 className="text-3xl font-bold">Page Not Found</h1>
      <button
        onClick={() => (window.location.href = "/")}
        className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded transition-colors"
      >
        Go to Homepage
      </button>
    </div>
  );
}

function App() {
  const location = useLocation();
  const hideFooterPaths = ["/contact", "/"];
  const hideFooter = hideFooterPaths.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<WeblogWithTitle />}></Route>
          <Route path="/contact" element={<ContactWithTitle />}></Route>
          <Route path="/news-blog" element={<HomeWithTitle />}></Route>
          <Route path="/terms" element={<TermsWithTitle />}></Route>
          <Route path="/privacy" element={<PrivacyWithTitle />}></Route>

          {/* Category Pages */}
          <Route path="/careers" element={<CareersBlogWithTitle />} />
          <Route path="/founders" element={<FoundersBlogWithTitle />} />
          <Route path="/lifestyle" element={<LifestyleBlogWithTitle />} />
          <Route path="/tutorials" element={<TutorialsBlogWithTitle />} />
          <Route path="/trends" element={<TrendsBlogWithTitle />} />
          <Route path="/reviews" element={<ReviewsBlogWithTitle />} />

          {/* Individual Articles */}
          <Route
            path="/ai-co-pilots"
            element={<AiCopilotsArticleWithTitle />}
          />
          <Route
            path="/networking-devops"
            element={<NetworkingDevOpsArticleWithTitle />}
          />
          <Route
            path="/living-the-remote-life"
            element={<RemoteLifeArticleWithTitle />}
          />
          <Route
            path="/zero-to-1m-arr"
            element={<ZeroToArrArticleWithTitle />}
          />
          <Route
            path="/first-round-funding"
            element={<FirstRoundFundingArticleWithTitle />}
          />
          <Route
            path="/digital-minimalism"
            element={<DigitalMinimalismArticleWithTitle />}
          />
          <Route
            path="/react-beginner-guide"
            element={<ReactBeginnerGuideArticleWithTitle />}
          />
          <Route
            path="/edge-computing-2025"
            element={<EdgeComputingArticleWithTitle />}
          />
          <Route path="/ai-trends" element={<AiTrendArticleWithTitle />} />
          <Route
            path="/notion-vs-obsidian"
            element={<NotionVsObsidianArticleWithTitle />}
          />
          <Route
            path="/macbook-vs-thinkpad-dev"
            element={<MacBookVsThinkPadArticleWithTitle />}
          />
          <Route
            path="/work-life-balance-remote"
            element={<WorkLifeBalanceArticleWithTitle />}
          />
          <Route
            path="/webassembly-future"
            element={<WebAssemblyFutureArticleWithTitle />}
          />
          <Route
            path="/react-task-manager"
            element={<ReactTaskManagerArticleWithTitle />}
          />
          <Route
            path="/teamflow-journey"
            element={<TeamflowJourneyArticleWithTitle />}
          />
          <Route
            path="/css-grid-mastery"
            element={<CSSGridMasteryArticleWithTitle />}
          />
          <Route
            path="/transition-into-tech"
            element={<TransitionIntoTechArticleWithTitle />}
          />
          <Route
            path="/vscode-extensions-2025"
            element={<VSCodeExtensionsArticleWithTitle />}
          />
          <Route
            path="/nodejs-api-development"
            element={<NodeJSAPIArticleWithTitle />}
          />
          <Route
            path="/mvp-mistakes"
            element={<MVPMistakesArticleWithTitle />}
          />

          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFoundWithTitle />} />
        </Routes>
      </AnimatePresence>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
