import { BrowserRouter, Routes, Route } from "react-router";
import { AboutPage } from "../pages/About.page";
import { BlogPage } from "../pages/Blog.page";
import { Homepage } from "../pages/home.page";
import { BlogPostPage } from "../pages/BlogPost.page";
import { Header } from "../components/Header.view";
import { GalleriesPage } from "../pages/Galleries.page";
import { GalleryPage } from "../pages/Gallery.page";
import { Routings } from "../routings";
import { Footer } from "../components/Footer.view";

export const RootRoutes: React.FC = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path={Routings.ABOUT} element={<AboutPage />} />
        <Route path={Routings.BLOG} element={<BlogPage />}>
          <Route index element={<BlogPage />} />
          <Route path={Routings.BLOG_POST} element={<BlogPostPage />} />
        </Route>
        <Route path={Routings.GALLERIES} element={<GalleriesPage />}>
          <Route index element={<GalleriesPage />} />
          <Route path={Routings.GALLERY} element={<GalleryPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);
