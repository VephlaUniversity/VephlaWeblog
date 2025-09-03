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
          <Route path="/" element={<Weblog />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/news-blog" element={<Home />}></Route>
          <Route path="/terms" element={<TermsAndService />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
          {/* Category Pages */}
          <Route path="/careers" element={<CareersBlog />} />
          <Route path="/founders" element={<FoundersBlog />} />
          <Route path="/lifestyle" element={<LifestyleBlog />} />
          <Route path="/tutorials" element={<TutorialsBlog />} />
          <Route path="/trends" element={<TrendsBlog />} />
          <Route path="/reviews" element={<ReviewsBlog />} />

          {/* Individual Articles */}
          <Route path="/ai-co-pilots" element={<AiCopilotsArticle />} />
          <Route
            path="/networking-devops"
            element={<NetworkingDevOpsArticle />}
          />
          <Route
            path="/living-the-remote-life"
            element={<RemoteLifeArticle />}
          />
          <Route path="/zero-to-1m-arr" element={<ZeroToArrArticle />} />
          <Route
            path="/first-round-funding"
            element={<FirstRoundFundingArticle />}
          />

          <Route
            path="/digital-minimalism"
            element={<DigitalMinimalismArticle />}
          />

          <Route
            path="/react-beginner-guide"
            element={<ReactBeginnerGuideArticle />}
          />

          <Route
            path="/edge-computing-2025"
            element={<EdgeComputingArticle />}
          />
          <Route path="/ai-trends" element={<AiTrendArticle />} />

          <Route
            path="/notion-vs-obsidian"
            element={<NotionVsObsidianArticle />}
          />

          <Route
            path="/macbook-vs-thinkpad-dev"
            element={<MacBookVsThinkPadArticle />}
          />
          <Route
            path="/work-life-balance-remote"
            element={<WorkLifeBalanceArticle />}
          />
          <Route
            path="/webassembly-future"
            element={<WebAssemblyFutureArticle />}
          />
          <Route
            path="/react-task-manager"
            element={<ReactTaskManagerArticle />}
          />
          <Route
            path="/teamflow-journey"
            element={<TeamflowJourneyArticle />}
          />
          <Route path="/css-grid-mastery" element={<CSSGridMasteryArticle />} />
          <Route
            path="/transition-into-tech"
            element={<TransitionIntoTechArticle />}
          />
          <Route
            path="/vscode-extensions-2025"
            element={<VSCodeExtensionsArticle />}
          />
          <Route
            path="/macbook-vs-thinkpad-dev"
            element={<MacBookVsThinkPadArticle />}
          />
          <Route
            path="/nodejs-api-development"
            element={<NodeJSAPIArticle />}
          />
          <Route path="/mvp-mistakes" element={<MVPMistakesArticle />} />

          {/* Catch-all for 404 */}
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center h-screen text-gray-500">
                <h1 className="text-3xl font-bold">Page Not Found</h1>
                <button
                  onClick={() => (window.location.href = "/")}
                  className="ml-4 px-4 py-2 bg-red-500 hover:bg-red-700 text-white rounded transition-colors"
                >
                  Go to Homepage
                </button>
              </div>
            }
          />
        </Routes>
      </AnimatePresence>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
