import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Page } from "./components/page";

function App() {
  return (
    <div className="flex flex-col h-screen bg-spotify-green overflow-auto">
      <Header />
      <Main />
      {/* <Page pageTitle="Day" />
      <Page pageTitle="Week" />
      <Page pageTitle="Month" /> */}
      <Footer />
    </div>
  );
}

export default App;
