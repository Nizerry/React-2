import  {useState,useEffect} from 'react'
import Card from './Card.jsx'

const App = () => {
  const [items,setItems] = useState([]);
  

  useEffect(()=>{
    fetchItems();
  },[])

  const fetchItems = async () =>{
    const api = await fetch('https://fakestoreapi.com/products')
    const data = await api.json();
    setItems(data)
    console.log(data);
  }

  return (
    
    <div>
      <Card items={items}/>
    </div>
  )
}

export default App
