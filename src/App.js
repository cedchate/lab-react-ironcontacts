// import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const [contactsOne, setContactsOne]= useState(contacts.slice(0,5))
  const AddOne=()=>{
    const random= contacts[Math.floor(Math.random() * contacts.length)];
    const copy= [...contactsOne];
    copy.push(random);
    setContactsOne(copy);
  }
  const SortByName=()=>{
    const copy= [...contactsOne];
    copy.sort((a,b)=> b.name<a.name? 1: -1)
    setContactsOne(copy);
  }
  const SortByPop=()=>{
    const copy= [...contactsOne];
    copy.sort((a,b)=> b.popularity-a.popularity)
    setContactsOne(copy);
  }
  const deleteOne= (name)=> {
    const copy= [...contactsOne];
    const list= copy.filter((one) => one.name!==name);
    setContactsOne(list);
  }
  return (
    <div className="App">
    <h1>Every One Tabs</h1>
    <div>
    <button onClick={AddOne}>Add One</button>
    <button onClick={SortByName}>Sort by Name</button>
    <button onClick={SortByPop}>Sort by Popularity</button>
    </div>
    <table>
    <tbody>
      <tr id='lineOne'>
        <td>Picture</td>
        <td>Name</td>
        <td>Popularity</td>
        <td>Won Oscar</td>
        <td>Won Emmy</td>
        <td>Action</td>
      </tr>
      {contactsOne.map((one) => {
        {/* console.log('one') */}
        return (
          <tr>
        <td><img src={one.pictureUrl} alt={one.name}/></td>
        <td>{one.name}</td>
        <td>{one.popularity}</td>
        <td>{one.wonOscar? <i className='fa fa-trophy'></i>: ''}</td>
        <td>{one.wonEmmy? <i className='fa fa-trophy'></i>: ''}</td>
        <td><button onClick={()=>deleteOne(one.name)}>Delete</button></td>
      </tr>
      );
      })}
      </tbody>
    </table>
    </div>
  );
}

export default App;
