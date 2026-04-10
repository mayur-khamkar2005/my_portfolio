import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const SkillDetailPage = lazy(() => import("./pages/SkillDetailPage"));
const SkillsPage = lazy(() => import("./pages/SkillsPage"));

function RouteFallback() {
  return (
    <div className="section-shell pt-32 pb-16 sm:pt-36">
      <div
        className="surface-card-strong flex items-center gap-4 px-5 py-5 sm:px-6"
        role="status"
        aria-live="polite"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
        <span className="text-sm font-medium text-text-muted">Loading page...</span>
      </div>
    </div>
  );
}

function renderPage(PageComponent) {
  return (
    <Suspense fallback={<RouteFallback />}>
      <PageComponent />
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={renderPage(HomePage)} />
          <Route path="about" element={renderPage(AboutPage)} />
          <Route path="skills" element={renderPage(SkillsPage)} />
          <Route path="skills/:skillSlug" element={renderPage(SkillDetailPage)} />
          <Route path="projects" element={renderPage(ProjectsPage)} />
          <Route path="contact" element={renderPage(ContactPage)} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
