import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-[url('../public/bg.avif')] h-screen bg-cover">
      <Card />
    </div>
  );
}

export default App;
