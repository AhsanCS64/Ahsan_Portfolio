import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import WorkPage from "./pages/WorkPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import CvPage from "./pages/CvPage.jsx";
import AchievementsPage from "./pages/AchievementsPage.jsx";
import EcaPage from "./pages/EcaPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/eca" element={<EcaPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  );
}
