import React from 'react'
import { motion } from "framer-motion";

type Props = {
  movie: any
}

const Movie: React.FC<Props> = ({ movie }) => {
  return (
    <motion.div animate={{opacity: 1}} initial={{ opacity: 0}} exit={{ opacity: 0}} layout className='movie-item'>
      <motion.h2 animate={{ color: '#ff2994'}}>{movie.title}</motion.h2>
      <img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path } alt="" />
    </motion.div>
  )
}

export default Movie