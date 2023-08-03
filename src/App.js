
import './App.css';

import DropdownComponent from './UI/DropDown/DropDown';
import Header from './UI/Header/Header';
import Card from './UI/Card/Card';
import CardsContainer from './UI/CardsContainer/CardContainer';
import { React, useRef, useState } from 'react';
import axios from "axios";

function App() {


  const [currentFiles, setFiles] = useState([]);
  const OptionRef = useRef();
  const changeHandler = (event) => {
    let filter = event.target.value;
    if (filter === 'Date') {
      OptionRef.current.textContent = `${filter}`;
    }
    else {
      OptionRef.current.textContent = ` Alphabet ${filter}`;

    }
    axios.get(`http://localhost:3000/readData?filter=${filter}`)
      .then(res => {

        setFiles(res.data);
        console.log(currentFiles);
      })


  }
  return (

    <div className="App">
      <Header></Header>
      <div className="container mx-auto">

        <div className='header pt-5'>
          <h1>Welcome to files app</h1>
          <p>You can filter by date, alpahbet asc or desc</p>
        </div>
        <div className='container pt-5'>
          <DropdownComponent changeHandler={changeHandler} OptionRef={OptionRef}></DropdownComponent>

        </div>
        <div className='main'>
          <CardsContainer>
            {
              currentFiles.length > 0 ?
                currentFiles.map(file => {
                 
                  return (
                    <Card key={Math.random()} name={file.name} date={file.date}></Card>
                  )
                })
                :
                'No Data'}
          </CardsContainer>
        </div>
      </div>

    </div>
  );
}

export default App;
