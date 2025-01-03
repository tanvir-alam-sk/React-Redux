/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
export default function HomeCard({ photo, handelFavorite }) {
  const { url, title } = photo;

  const dispatch=useDispatch()
  const favorite=useSelector((state)=>state.likes)

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={url} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <FaRegHeart onClick={() => handelFavorite(photo)} />
          {/* <FaHeart onClick={() => handelFavorite(photo)} /> */}
        </button>
      </div>
    </div>
  );
}
