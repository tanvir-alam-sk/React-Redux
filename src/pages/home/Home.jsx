import { useEffect, useState } from "react";
import HomeCard from "../../components/homeComponent/HomeCard";
import Navbar from "../../components/shared/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { disLikePost, likePost } from "../../redux/slices/favoriteSlice";
// import { fetchPhoto } from "../../redux/slices/photoSlice";



export default function Home() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  


  const dispatch=useDispatch()
  const favorite=useSelector((state)=>state.likes)

  const handelFavorite=(item)=>{ 
    const remain=favorite.find((postId)=>postId.id==item.id)  
    if(remain){
      dispatch(disLikePost(item))
    }else{
      dispatch(likePost(item))
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="grid grid-cols-3">
        {photos.slice(0, 30).map((photo, i) => (
          <HomeCard key={i} photo={photo} handelFavorite={handelFavorite}></HomeCard>
        ))}
      </div>
    </>
  );
}
