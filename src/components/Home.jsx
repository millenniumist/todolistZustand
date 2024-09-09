import React,{useEffect,useState} from 'react'

const Home = () => {
  const [data,setData] = useState([])
  const [show,setShow] =useState([])
  useEffect(()=>{
    const getData = async () => {
      const res = await fetch('https://dummyjson.com/users/?limit=10')
      const data = await res.json()
      setData(data.users)
    }
    getData()
  },[])
  
  const allNames = data.map(el=> <p key={el.id} id={el.id} onClick={()=>hdlShow(el.id)} style={{cursor:'pointer'}}>{el.firstName}</p>)
  const hdlShow = (index) => setShow(data.filter((el)=> index===el.id))

  return (
    <>
    {allNames}
    <pre>{JSON.stringify(show)}</pre>
    </>
  )
}

export default Home