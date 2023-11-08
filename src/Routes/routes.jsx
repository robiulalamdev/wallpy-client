import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../components/Home/Home";
import Register from "../Authentication/Register/Register";
import Login from "../Authentication/Login/Login";
import Forgetpassword from "../Authentication/Forgetpassword/Forgetpassword";
import ForgetEmail from "../Authentication/Forgetpassword/ForgetEmail";
import ConfirmationEmail from "../Authentication/Forgetpassword/ConfirmationEmail";
import SearchPage from "../pages/SearchPage/SearchPage";
import WallPaper from "../pages/WallPaper/WallPaper";
import Profile from "../pages/Profile/Profile";
import About from "../pages/About/About";
import CopyrightInformation from "../pages/CopyrightInformation/CopyrightInformation";
import Socials from "../pages/Socials/Socials";
import CommunityRules from "../pages/CommunityRules/CommunityRules";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgetpassword",
    element: <Forgetpassword />,
  },
  {
    path: "/forgetemail",
    element: <ForgetEmail />,
  },
  {
    path: "/confirmationEmail",
    element: <ConfirmationEmail />,
  },
  {
    path: "/searchPage",
    element: <SearchPage />,
  },
  {
    path: "/wallpaper",
    element: <WallPaper />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/copyright-information",
    element: <CopyrightInformation />,
  },
  {
    path: "/socials",
    element: <Socials />,
  },
  {
    path: "/community-rules",
    element: <CommunityRules />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
]);
