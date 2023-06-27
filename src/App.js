import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes component
import Navbar from './components/Navbar';
import Form from './components/Form';
import MovieDetails from './components/MovieDetails';
import axios from 'axios';
import Watch from './components/Watch';

import ContactUs from './components/ContactUs';

function App() { 




  const [isMovie, setisMovie] = useState(false);



  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const getMovie = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${text}&apikey=21f1ff65`)
      .then((Response) => {
        setList(Response.data.Search[0]);
        setisMovie(true);
      })
      .catch((error) => {
        alert('Your searched movie was not found! Please enter a valid name.');
      });
  };

  const searchData = (event) => {
    setText(event.target.value);
  };

  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path="/" element={ <>

              <Form text={text} searchData={searchData} getMovie={getMovie}/>
              <MovieDetails isMovie={isMovie}   movieData={list} /></> } />



        <Route path="/watch" element={<Watch movieData={list} />} /> 
        <Route path="/ContactUs" element={<ContactUs/>} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
