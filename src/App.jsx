import { Ground } from "./components/Ground";
import { Title } from "./components/Title";


const App = () => {
  return (
    <>
    <div>
      <div>
        <Title />
      </div>
      <div className="d-flex justify-content-center">
        <Ground />
      </div>
    </div>
    </>
  );
}

export default App;
