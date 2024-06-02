import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddToDo from './component/AddToDo'
import Card from './component/Card'
import { useState } from 'react'

function App() {
  let [cardData, setCardData] = useState([]);
  const [editData, setEditData] = useState(null);

  return (
    <>
      <AddToDo appData={cardData} setCardData={setCardData} editData={editData} setEditData={setEditData}></AddToDo>
      <Card data={cardData} setCardData={setCardData} setEditData={setEditData}></Card>
    </>
  )
}

export default App
