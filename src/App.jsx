import './styles/Sibgruztrans.scss';
import MenuBurger from './components/Menu.jsx';
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Form from "./components/Form.jsx";

function App() {

  return (
    <>
      <MenuBurger/>
        <div className='layout'>
            {/*<h1>Сибгрузтранс</h1>*/}
            {/* <MenuBurger/> */}
            <h1>О нас</h1>
            <About/>
            <h1><span className="border-h">Наши услуги</span></h1>
            <Services/>
            {/*<img src="https://smamashin.ru/e/sibgruztrans/assets/info.png"/>*/}
            <h1>Оставить заявку</h1>
            <Form/>
            <h1>Наши контакты</h1>
        </div>
    </>
  )
}

export default App
