import React from "react";
import {
  useFollowUserMutation,
  useGetUserQuery,
  useIsUserFollowedQuery,
  useUnfollowUserMutation,
} from "src/features/api/userApi";
import WhiteButton from "src/Components/Buttons/WhiteButton";

const FollowButton = (props) => {
  const [followUser] = useFollowUserMutation();
  const [unfollowUser] = useUnfollowUserMutation();
  const { data: isUserFollowed, isError: isError } = useIsUserFollowedQuery(
    props.id
  );

  const style = props.style ?? {
    fontSize: "16px",
    borderRadius: "1vmin",
    padding: "2% 4%",
    backgroundColor: `${isError === false ? "#4161df" : "white"}`,
    color: `${isError === false ? "white" : "#4161df"}`,
  };
  const followBtnHandler = () => {
    if (!isError) {
      unfollowUser(props.id);
    } else {
      followUser(props.id);
    }
  };
  return (
    <WhiteButton style={style} {...props} onClick={followBtnHandler}>
      {isError === false ? "Following" : "Follow"}
    </WhiteButton>
  );
};

export default FollowButton;
