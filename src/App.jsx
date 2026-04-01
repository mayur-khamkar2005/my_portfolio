import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import { Navigate, Route, Routes } from "react-router-dom";
import { sectionRoutes } from "./lib/siteNavigation";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        {sectionRoutes.map((route) => (
          <Route key={route} path={route} element={<HomePage />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
