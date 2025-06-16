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

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/contact";

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/" element={<Home />}></Route>
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
        <Route path="/living-the-remote-life" element={<RemoteLifeArticle />} />

        {/* Founder Articles */}
        <Route path="/zero-to-1m-arr" element={<ZeroToArrArticle />} />
        <Route
          path="/first-round-funding"
          element={<FirstRoundFundingArticle />}
        />

        {/* Lifestyle Articles */}
        <Route
          path="/digital-minimalism"
          element={<DigitalMinimalismArticle />}
        />

        {/* Tutorial Articles */}
        <Route
          path="/react-beginner-guide"
          element={<ReactBeginnerGuideArticle />}
        />

        {/* Trend Articles */}
        <Route path="/edge-computing-2025" element={<EdgeComputingArticle />} />
        <Route path="/ai-trends" element={<AiTrendArticle />} />

        {/* Review Articles */}
        <Route
          path="/notion-vs-obsidian"
          element={<NotionVsObsidianArticle />}
        />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
}

export default App;
