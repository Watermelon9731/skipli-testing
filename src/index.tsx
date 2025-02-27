import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Data from "./pages/data";
import Profile from "./pages/profile";
import GithubUser from "./pages/githubUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="data" element={<Data />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:slug" element={<GithubUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
