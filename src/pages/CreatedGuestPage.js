
import React, { useState } from 'react';


const CreatedGuestPage = () => {

  //первоначальное состояние
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [drink, setDrink] = useState('')
  const [table, setTable] = useState('')
  const [guest, setGuest] = useState(localStorage.length)

  //создание записи
  const createdGuest = (e) => {

    e.preventDefault()

    //проверяем заполнение данных
    if(!name||!age||!table){
      alert('Заполните имя, возвраст и номер стола!')
      return
    }

    const guestItem = {
      id:localStorage.length + 1 ,
      name,
      age,
      drink,
      table
    }

    //создаем и сохраняем обьект
    localStorage.setItem('guest'+ guestItem.id, JSON.stringify(guestItem)) 
    
    //очищаем поля ввода
    setName('')
    setTable('')
    setAge('')
    setDrink('')
    setGuest(guest+1)//изменяем счетчик гостей
 }
 
  return (
    <div className='created'>
      <h2> Создайте запись о посещении </h2>
      <form className='created__form'>
        <input
        onChange={e=>setName(e.target.value)} 
        value={name}
        type='text' 
        placeholder='Введите имя гостя'
        />
        <input
        onChange={e=>setAge(e.target.value)} 
        value={age}
        type='number' 
        placeholder='Введите возраст гостя'
        />
      {/* ограничиваем выбор напитков, 
      нужно для филтрации массива,
      чтобы не путаться в названиях  */}
        <select  onChange={e=>setDrink(e.target.value)}>
          <option >выбирите напиток из списка</option>
          <option >Jus</option>
          <option >Beer</option>
          <option >Wine</option>
          <option >Coffee</option>
        </select>
        <input
        onChange={e=>setTable(e.target.value)} 
        value={table}
        type='number' 
        placeholder='Введите номер столика гостя'
        />
        <button onClick={createdGuest} >Создать</button>
      </form>
      <p>Всего гостей: - {guest}  </p>
    </div>
  )
};

export default CreatedGuestPage;
