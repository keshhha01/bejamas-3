import React,{useState} from 'react'
import Header from '../Header/Header'


function Home() {
  const [list, setList] = useState([' Alma', 'Banana','Juzum'])
  const [title,setTitle] = useState('')
  const [user,setUser] = useState([
    {
      name: 'Asir',
      age: 16,
      id: 1
    },
    {
      name:'Kadyr',
      age:19,
      id:2
    }
  ])
  const [newUser, setNewUser] = useState({ name: '', age: '' })

 console.log(list);
 function change (event){
  console.log(event);
  setTitle(event.target.value)
 }

 function addBox(){
  setList([...list, title]);
  setTitle('')
 }
 function changeUser(event){
  setNewUser({ ...newUser, [event.target.name]: event.target.value })
}
 function addUser(){
  setUser([...user, { ...newUser, id: Date.now() }]);
  setNewUser({ name: '', age: '' })
}
  return (
    <div>
       <Header/>
      Home
      <hr />
      <input value={title} onChange={change} type="text" />
      <button onClick={addBox}>Add</button>
      <div>

        {
           list.map((item,index)=>(
            <div key={index}>{item}</div>
           ))
        }
        <hr />
       <input name="name" value={newUser.name} onChange={changeUser} type="text" placeholder="Имя" />
       <input name="age" value={newUser.age} onChange={changeUser} type="text" placeholder="Возраст" />
       <button onClick={addUser}>Add user</button>
      <div>
        {user.map((item) => (
          <div key={item.id}>
            <p>Имя: {item.name}</p>
            <p>Возраст: {item.age}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Home
