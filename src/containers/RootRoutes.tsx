import { BrowserRouter, Routes, Route } from "react-router";
import { AboutPage } from "../pages/About.page";
import { BlogPage } from "../pages/Blog.page";
import { Homepage } from "../pages/home.page";
import { BlogPostPage } from "../pages/BlogPost.page";
import { Header } from "../components/Header.view";

export const RootRoutes: React.FC = () => (
  <div>
    <div>
      <Header />
    </div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />}>
          <Route index element={<BlogPage />} />
          <Route path=":postId" element={<BlogPostPage />} />
        </Route>
        <Route path="galleries" element={<BlogPage />}>
          <Route index element={<BlogPage />} />
          <Route path=":galleryId" element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);
