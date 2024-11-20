import styles from './styles/Sibgruztrans.module.scss'
import MenuBurger from './components/Menu.jsx';
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";

function App() {

  return (
      <>
          {/*<h1>Сибгрузтранс</h1>*/}
          <MenuBurger/>
          <Services/>
          <h1><img src="https://smamashin.ru/e/sibgruztrans/assets/info.png"/>О нас</h1>
          <About/>
      </>
  )
}

export default App
