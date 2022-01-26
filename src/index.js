
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

ReactDOM.render(
  //рендер главного компонента (App)
  //оборачиваем в BrowserRouter для работы маршрутизатора
  <BrowserRouter>
      <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);


