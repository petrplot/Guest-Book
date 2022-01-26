import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';

const AllGuestsListPage = () => {

  const guestStor = []//массив обьектов полученных из локального хранилища
  //создаем состояние
  const [guests, setGuest] = useState(guestStor)
  
  //цикл для изьятия обьектов из localStorage
  for(let key in localStorage){
    if(!localStorage.hasOwnProperty(key)){
      continue
    }
    let item = localStorage.getItem(key)
    guestStor.push(JSON.parse(item))
  }

  //удаление обьекта
  const removeGuest = (id) => {
    localStorage.removeItem('guest' + id)
    setGuest( guests.filter(i => i.id !== id) )
  }

  
  //принимаем отфильтрованный массив из дочернего компонента 
  const changeGuests = (newArrGuests) => {
    setGuest(newArrGuests)
  }

  //для отрисовки берем массив из состояния,
  // для удобного применения фильтров 
  return (
    <div className='guests'>
      <div className='guests__count'>
        <p> Всего гостей: - {guests.length}  </p>
      </div>
      <div className='guests__content'>
      {guests.map(guest => {
          return (
            
            <div
            className='guests__card' 
            key={guest.id}
            >
              <h2>
                <Link className='link' to={'/guests/'+ guest.id}>
                  имя гостя: {guest.name}
                </Link>
              </h2>
              <p>
                номер столика: {guest.table}
              </p>
              <button 
                onClick={()=>{
                  removeGuest(guest.id)
                }}
              >
                удалить
              </button>
            </div>
            
          )
        })
      }
      </div>
      <div className='guests__filter'>
        {/* здесь передаем в props массив из локального 
        хранилища и функцию для изменения состояния 
        */}
        <Filter guestStor={guestStor} changeGuests={changeGuests} />
      </div>
      
      
    </div>
    
    )
};

export default AllGuestsListPage;
