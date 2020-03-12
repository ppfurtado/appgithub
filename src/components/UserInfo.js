import React from "react";
import PropTypes from "prop-types";

const UserInfo = ({ userinfo }) => (
  <div className="user-info">
    <img src={userinfo.photo} width="100" alt="logo" />
    <h1 className="user-name">
      <a href={`https://github.com/${userinfo.login}`}> {userinfo.username} </a>
    </h1>
    <ul className="repos-files">
      <li>- Repositório: {userinfo.repos} </li>
      <li>- Seguidores: {userinfo.followers} </li>
      <li>- Seguindo: {userinfo.following} </li>
    </ul>
  </div>
);

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.Isrequired,
    login: PropTypes.string.Isrequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
};

export default UserInfo;
