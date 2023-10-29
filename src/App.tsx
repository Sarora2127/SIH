import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop4 from "./pages/Desktop4";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Desktop5 from "./pages/Desktop5";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-5":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop4 />} />
      <Route path="/4" element={<Frame />} />
      <Route path="/3" element={<Frame1 />} />
      <Route path="/desktop-5" element={<Desktop5 />} />
    </Routes>
  );
}
export default App;
