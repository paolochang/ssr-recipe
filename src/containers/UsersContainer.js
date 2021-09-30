import React, { useEffect } from "react";
import Users from "../components/Users";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";

const UsersContainer = ({ users, getUsers }) => {
  useEffect(() => {
    if (users) return;
    getUsers();
  }, [users, getUsers]);

  return <Users users={users} />;
};

export default connect((state) => ({ users: state.users.users }), { getUsers })(
  UsersContainer
);
