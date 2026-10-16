import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1 className="font-work text-gold-gradient text-4xl">Title</h1>
      <button className="btn-gold px-6 py-2.5 rounded-full">Explore</button>
      <div className="bg-cream-primary border border-golden p-6">Card</div>

      <Button text={"View our services"} showIcon={true} type={"button"}/>
    </>
  );
}

export default App;
