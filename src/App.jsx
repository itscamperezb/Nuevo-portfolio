import "./App.css";
import Header from "@/components-temp/Header.jsx";
import Footer from "@/components-temp/Footer.jsx";
import Projects from "@/components-temp/NabTabs/Projects.jsx";
import Experience from "@/components-temp/NabTabs/Experience.jsx";
import ExperienceIcons from "@/components-temp/ExperienceIcons.jsx";
import ProfileInfo from "@/components-temp/ProfileInfo.jsx";
import NavTabsInfo from "@/components-temp/NabTabs/NavTabsInfo.jsx";

import { Particles } from "@/components-temp/ui/particles.jsx";

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
