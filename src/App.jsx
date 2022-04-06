import { ParallaxBg } from "./components/ParallaxBg";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Title } from "./components/Title";


const App = () => {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <ParallaxBg />
    </ParallaxProvider>
  );
}



export default App;
