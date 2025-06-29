import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import PersonalHoroscopeReadingPage from "./pages/services/personal-horoscope-reading";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/personal-horoscope-reading"
        element={<PersonalHoroscopeReadingPage />}
      />
    </Routes>
  );
}
