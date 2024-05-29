import "./App.css";
// import Requirements from "./components/Requirements";
// import Header from "./components/Header";
// import Video from "./components/Video";
// import Turotial from "./components/Tutorial";
import Generator from "./components/Generator";
import GeneratorProvider from "./context/generator";

function App() {
  return (
    <>
      {/* <h1>Tutorial Eden AI X Webflow</h1>
      <div className="flex-col">
        <Header />
        <Requirements />
        <Video />
        <Turotial />
      </div> */}
      <GeneratorProvider>
        <Generator />
      </GeneratorProvider>
    </>
  );
}

export default App;
