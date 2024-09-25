import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import MovieGallery from './components/Moviegallery';
import { setAllMovies,setSearchedMovies } from './store/action';
import { connect } from 'react-redux';

const baseUrl = `https://test.create.diagnal.com/`;

function App(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMovies = useCallback(() => {
    axios
      .get(`${baseUrl}data/page1.json`)
      .then((resp) => {
        const movieList = resp.data.page['content-items'].content;
        props.setAllMovies(movieList)
        props.setSearchedMovies(movieList)
      })
      .catch((err) => {
        console.log('Error occurred:', err);
      });
  }, []);
  
  const handleSearch = (query)=>{
    const filteredMovies = props.allmovies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );
    props.setSearchedMovies(filteredMovies);

  }

  useEffect(()=>{
     fetchMovies();
  },[fetchMovies])

  useEffect(()=>{
    handleSearch(searchTerm);
  },[searchTerm])

  return (
    <div className="App bg-[#171717] text-[#FFFFFF] font-titillium w-full h-full">
      <div className="bg-black text-white p-4 min-h-screen">
        <Navbar />
        <div className="my-4 mt-16">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Movies..."
            className="w-full p-2 bg-gray-800 text-white rounded"
          />
        </div>

        <MovieGallery movies={props.searchList}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  allmovies: state.allmovies,
  searchList: state.searchList
});

const mapDispatchToProps = {
   setAllMovies,
   setSearchedMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


