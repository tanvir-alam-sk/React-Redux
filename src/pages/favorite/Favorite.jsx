// import React from 'react'

import { useSelector } from "react-redux";
import Navbar from "../../components/shared/Navbar";
import HomeCard from "../../components/homeComponent/HomeCard";

export default function Favorite() {
  // const dispatch=useDispatch()
  const favorites = useSelector((state) => state.likes);
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-3 gap-5">
        {favorites.map((favorite, i) => (
          <HomeCard
            key={i}
            photo={favorite}
          ></HomeCard>
        ))}
      </div>
    </>
  );
}
