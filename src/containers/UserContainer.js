import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "../components/User";
import { usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = ({ id }) => {
  console.log("UserContainer", id);
  const user = useSelector((state) => state.users.user);
  const dispatch = useDispatch();
  console.log("User:", user);

  usePreloader(() => dispatch(getUser(id)));
  useEffect(() => {
    console.log("useEffect:", user);
    if (user && user.id === parseInt(id, 10)) return;
    dispatch(getUser(id));
  }, [dispatch, id, user]);

  // if (!user) {
  //   return <Preloader resolve={() => dispatch(getUser(id))} />;
  // }
  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
