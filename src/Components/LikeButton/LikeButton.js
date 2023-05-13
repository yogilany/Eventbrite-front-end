import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import {
  useIsEventLikedQuery,
  useLikeEventMutation,
  useUnlikeEventMutation,
} from "src/features/api/userApi";

const LikeButton = (props) => {
  const [likeEvent] = useLikeEventMutation();
  const [unlikeEvent] = useUnlikeEventMutation();
  const { data: isEventLiked } = useIsEventLikedQuery(props.id);
  const likeBtnHandler = () => {
    if (isEventLiked) {
      unlikeEvent(props.id);
    } else {
      likeEvent(props.id);
    }
  };
  const fillColor = isEventLiked === true ? "#d1410c" : "white";
  const color =
    isEventLiked === true
      ? "#d1410c"
      : "rgb(75 85 99 / var(--tw-text-opacity))";
  return (
    <button
      type="button"
      onClick={likeBtnHandler}
      class=" transition text-gray-600 bg-gray-0 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center  "
    >
      <svg
        class="w-4 h-4"
        fill={fillColor}
        stroke={color}
        stroke-width="3"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        ></path>
      </svg>
      <span class="sr-only">Icon description</span>
    </button>
  );
};

export default LikeButton;
