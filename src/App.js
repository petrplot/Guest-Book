
import './styles/App.scss';// подключаем стили
import Nav from './components/Nav'; // панель навигации
import Router from './router';// маршрутизатор

const App = () => {
 
  return (
    <div className="container">
      <Nav/>
      <Router/>
    </div>
  );
}

export default App;
