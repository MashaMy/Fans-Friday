import './App.css';
import { useState } from "react";
import { dataFan } from './dataFan';


function Fan() {

  const[cafe, setcafe] = useState(dataFan);
  const [showMore, setShowMore] = useState(false);
  
const removecafe = (id) =>{
let newcafe = cafe.filter(cafeName => cafeName.id!==id);
setcafe(newcafe)
  }


  return (
<div>
    <div className='container'>
    <h1>Топ {cafe.length} ресторана в Москве</h1>
    </div>
{cafe.map(( element => {
  const {id, cafeName, description, image} = element;
  
  return(
    <div key={id}>
<div className='container'>
<h2>{id} - {cafeName}</h2>
</div>

<div className='container'>
<p>{ showMore ? description : description.substring(0,130) + "..."} 
<button className='showMore' onClick={() => setShowMore(!showMore)}>{showMore ? "Показать меньше" : "Показать больше"}</button>
</p>
</div>

<div className='container'>
<img src={image} width="500px" alt='rest'/>
</div>

<div className='container'>
<button className='button-per' onClick={() => removecafe(id)} >Очистить</button>
</div>


</div>
  )
}
))}
   
</div>
  )
}

export default Fan;
