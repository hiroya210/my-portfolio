import { Tiles } from "./components/Tiles";
import { Title } from "./components/Title";


const App = () => {
  return (
    <div style={{position: "relative", height:"100vh"}}>
      <div className="d-flex flex-wrap" style={{position:"absolute", bottom:0}}>
        <Tiles />
      </div>
    </div>
  )
}



export default App;
