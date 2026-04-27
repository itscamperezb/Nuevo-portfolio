import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/NabTabs/Projects.jsx";
import Experience from "./components/NabTabs/Experience.jsx";
import ExperienceIcons from "./components/ExperienceIcons.jsx";
import ProfileInfo from "./components/ProfileInfo.jsx";
import NavTabsInfo from "./components/NabTabs/NavTabsInfo.jsx";

import { Particles } from "@/components/ui/particles.jsx";

function App() {
  return (
    <div>
      <div className="relative size-full overflow-auto">
        <Particles className="absolute -z-10 h-full place-self-center" />
        <Header />
        <ProfileInfo />
        <ExperienceIcons />
        <NavTabsInfo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
