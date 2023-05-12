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
  const { data: isEventLiked, isError } = useIsEventLikedQuery(props.id);
  const likeBtnHandler = () => {
    if (isEventLiked) {
      unlikeEvent(props.id);
    } else {
      likeEvent(props.id);
    }
  };
  const fillColor = isEventLiked === true ? "#d1410c" : "white";
  const color = isEventLiked === true ? "#d1410c" : "black";
  return (
    <button>
      <HiOutlineHeart
        onClick={likeBtnHandler}
        size="2em"
        fill={fillColor}
        color={color}
      />
    </button>
  );
};

export default LikeButton;
