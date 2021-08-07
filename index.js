import ReactDOM from "react-dom";
import Accordin from "../components/Accordin";

function App() {
  return (
    <div>
      <Accordin title="HOD1" content="PM1" />
      <Accordin title="HOD2" content="PM2" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
