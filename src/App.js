import "./App.css";
import { Header, Hero } from "./components";
import { ScrollingText } from "./components/index";
import { Work } from "./components/index";
import { About } from "./components/index";
import { SelectProjetcs } from "./components/index";
import { Contact } from "./components/index";


export default function App() {

  return (
    <>
    <div className="bg-[#1C1C22] dark:bg-[#F0F2F5]">
      <Header />
      <Hero />
      <ScrollingText />
      <About />
      <Work />
      <SelectProjetcs />
      <Contact />
    </div>
    </>
 
  );
}
