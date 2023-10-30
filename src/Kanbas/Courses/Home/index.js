import ModuleList from "../Modules/ModuleList";
import { StatusBar } from "./StatusBar";
import { TopButtons } from "./TopButtons";

function Home() {
  return (
    <div className="row justify-content-between">
      <div className="col">
        <TopButtons />
        <hr />
        <ModuleList />
      </div>
      <div className="col-2">
        <StatusBar />
      </div>
    </div>
  );
}
export default Home;
