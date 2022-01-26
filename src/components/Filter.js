import React, {useState} from 'react';

const Filter = (props) => {

  //получаем массив гостей из локального хранилища 
  //для изменения массива только в родительском состоянии
  const guestStor = props.guestStor

  const [table, setTable] = useState('')
  const [age, setAge] = useState('')
  const [drink, setDrink] = useState('')

    
  const filterTable = () => {
      let guests = guestStor.filter(i => i.table == table)
      setTable('')
      return guests
  }

  const filterAge = () => {
      let guests = guestStor.filter(i => i.age == age)
      setAge('')
      return guests
  }

  const filterDrink = () => {
      let guests = guestStor.filter(i => i.drink == drink)
      return guests 
  }

  const getAll = () =>{
    let guests = guestStor
    return guests 
  }

  return (
  <div className='filter'>
    <div className='filter__table'>
      <p>сортировать по номеру стола</p>
      <input
          type='number'
          placeholder='введите номер стола'
          onChange={e=>setTable(e.target.value)} 
          value={table}
      />
      <button 
        onClick={()=>{
          props.changeGuests(filterTable())
        }}
      >
        получить
      </button>
    </div>
    <div className='filter__age'>
      <p> сортировать по возврасту</p>
      <input
          type='number'
          placeholder='введите возвраст'
          onChange={e=>setAge(e.target.value)} 
          value={age}
      />
      <button 
        onClick={()=>{
          props.changeGuests(filterAge())
        }}
      >
        получить
      </button>
    </div>
    <div className='filter__drink'>
      <p>сортировать по либимому напитку</p>
      <select  onChange={e=>setDrink(e.target.value)}>
          <option >выбирите напиток из списка</option>
          <option >Jus</option>
          <option >Beer</option>
          <option >Wine</option>
          <option >Coffee</option>
      </select>
      <button 
        onClick={()=>{
          props.changeGuests(filterDrink())
        }}
      >
        получить
      </button>
    </div>
    <div className='filter__getAllBtn'>
      <button 
        onClick={()=>{
          props.changeGuests(getAll())
        }}
      >
        получить всех
      </button> 
    </div>
  </div>
  );
};

export default Filter;
