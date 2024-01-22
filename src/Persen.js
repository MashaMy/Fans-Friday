import './App.css';
import { useState } from "react";
import { dataPerson } from './dataPerson';


function Persen() {

  const[person, setPerson] = useState(0);
  const {id, name,description, age, image} = dataPerson[person];

  const previosPerson = () => {
    setPerson((person =>{
      person--;
      if (person<0){
        return dataPerson.length-1;
      }
      return person;
    }
    ))
  }

  const nextPerson = () => {
    setPerson((person =>{
      person++;
      if (person> dataPerson.length - 1){
        person = 0;
      }
      return person;
    }
    ))
  } 
  
  return (
<div>

<div className='containerper'>
<img src= {image} width="350px" height="500px" alt='rerson'/>
</div>

<div className="containerper">
<h1>{id} - {name}</h1>
</div>

<div className='containerper'>
<h2>{description}</h2>
</div>

<div className='containerper'>
<h2>{age} лет</h2>
</div>

<div className='btn-per containerper'>
<button className='button-per' onClick={previosPerson}>Назад</button>
<button className='button-per' onClick={nextPerson}>Вперед</button>
</div>

</div>
)
}

export default Persen;