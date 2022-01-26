import React, { useState} from 'react';

const UpdateGuest = (props) => {
  
    //состояние берем из props
    const [name, setName] = useState(props.name)
    const [age, setAge] = useState(props.age)
    const [drink, setDrink] = useState(props.drink)
    const [table, setTable] = useState(props.table)

  return (
    <div className='update'>
      <form className='update__form'>
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
        <select 
        className='update__select' 
        onChange={e=>setDrink(e.target.value)}
        >
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
        <button 
          onClick={(e)=>{
            //отправляем состояние в родительский компонент
            props.onChangeGuest(e,{name, age, table, drink})
          }}
        >
          Изменить
        </button>
      </form>
    </div>
  )};

export default UpdateGuest;
