import { Ground } from "./components/Ground";
import { Title } from "./components/Title";


const App = () => {
  return (
    <>
    <div>
      <div style={outerStyle}>
        <Ground />
      </div>
    </div>
    </>
  );
}

//style

const outerStyle = {
  width: "100vh",
  height: "100vw",
  transform: "rotate(-90deg) translateX(-100vh)",
  transformOrigin: "top left",
  overflowY: "scroll",
  overflowX: "hidden",
  position: "absolute",
}


export default App;
