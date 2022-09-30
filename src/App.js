import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import data from "./data/data";

function App() {
  console.log("helmi")
  const card = data.map((item) => {
   return <Body key={item.id} item={item} />;
  });
  return (
    <>
      <div className="travel">
        <Header />
        {card}
      </div>
    </>
  );
}

export default App;
