/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

type FilterProps = {
  actionDefault: number;
  setActionDefault: any;
  movies: Array<object>
  setFilter: any;
}

const Filter:React.FC<FilterProps> = ({ actionDefault, setActionDefault, movies, setFilter }) => {

useEffect(() => {
  if(actionDefault === 0){
    setFilter(movies);
    return;
  }
  const filtered = movies.filter((item: any) => item.genre_ids.includes(actionDefault));
  setFilter(filtered)
}, [actionDefault])

  return (
    <div className='filter-option'>
        <button className={actionDefault === 0 ? "action" : ""} onClick={() => setActionDefault(0)}>All</button>
        <button className={actionDefault === 35 ? "action" : ""} onClick={() => setActionDefault(35)}>Comedy</button>
        <button className={actionDefault === 28 ? "action" : ""} onClick={() => setActionDefault(28)}>Action</button>
    </div>
  )
}

export default Filter