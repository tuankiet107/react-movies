import React, {useEffect, useState} from 'react';
import './App.css';
import Movie from './Movie';
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion"

function App() {
  const [movies, setMovies] = useState([]);
  const [actionDefault, setActionDefault] = useState(0);
  const [filter, setFilter] = useState([]);   
  useEffect(() => {
    fetchMovies();
  },[]);

  const fetchMovies = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d");
    const movies = await res.json();
    setMovies(movies.results);
    setFilter(movies.results)
  }

  return (
    <div className="App">
      <Filter actionDefault={actionDefault} setActionDefault={setActionDefault} movies={movies} setFilter={setFilter} />
      
      <motion.div animate={{opacity: 1}} initial={{ opacity: 0}} exit={{ opacity: 0}} layout className="popular-movies">
      <AnimatePresence>
        {
          filter.map((movie,index) => {
            return <Movie key={index} movie={movie} />
          })
        }
      </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
