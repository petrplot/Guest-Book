import React, {useState} from 'react';
import UpdateGuest from '../components/UpdateGuest';


const GuestPage = () => {

  //получаем id из строки запроса, делим по слешу, получаем ост.часть
  const id = window.location.pathname.split('/')[2]

  //достаем из локального хранилища обьект
  const guestItem = JSON.parse(localStorage.getItem('guest'+ id))

  // если обьект пуст срабатывает rerender()
  //это нужно если кто-нибудь добавит неправильный id вручную
  if(!guestItem){
    rerender()
  }

  //отправляет на главную
  function rerender(){
    window.location.href = "http://localhost:3000/guests"
  }
 
  // состаяние получаем из обьекта если он не пустой
  const [name, setName] = useState(guestItem.name)
  const [age, setAge] = useState(guestItem.age)
  const [drink, setDrink] = useState(guestItem.drink)
  const [table, setTable] = useState(guestItem.table)


  // эта функця получает параметром состояние из дочернего компонента
  // функция передана в props
  const updateGuest = (e,{name, age, table, drink}) => {

    e.preventDefault()//отменяем дефолтное поведение 

    const guest = { id:guestItem.id,name, age, drink, table}

    //создаем новый обьект и сохраняем его
    localStorage.setItem('guest'+ guestItem.id, JSON.stringify(guest))

    //меняем состояние
    setDrink(drink)
    setName(name)
    setTable(table)
    setAge(age)

  }
  
  return (
    <div className='guest'>
      <div className='guest__info'>
        <p>имя гостя: {name} </p>  
        <p>возвраст: {age} </p> 
        <p>столик: {table} </p> 
        <p>либимый напиток: {drink} </p>
      </div>
      <div className='guest__update'>
        <UpdateGuest 
          id={guestItem.id} 
          name={name}
          age={age}
          table={table}
          drink={drink}
          onChangeGuest={updateGuest}
        />
      </div>
    </div>
    )
};

export default GuestPage;
