import React from "react";
import propTypes from 'prop-types';
import { FaLink } from 'react-icons/fa';
import "./User.scss";

const User = ({ userFound, name, avatar, location, bio, repos }) => {
  return (
    <>
      {userFound === true ? (
        <div className="user-info">
          <div className="user-header">
            <div className="user-avatar">
            <img src={`${avatar}`} />
            </div>
            <h1>{name}</h1>
          </div>
          <div className="user-details">
            <h4>bio</h4>
            {bio ? <p>{bio}</p> : <p>This user has no bio</p>}
            <h4>location</h4>
            {location ? <p>{location}</p> : <p>Unknown</p>}
          </div>
          {repos ? (
            <>
              <h4>repositories</h4>
              <div className="user-repos">
                {repos?.map((el) => {
                return <div className="user-repo-box" key={el.id}>
                        <FaLink /> <a href={el.html_url} target="_blank" rel="noopener noreferrer">{el.name}</a>
                       </div>;
                })}
              </div>
            </>
          ) : (
            <h1>This user has no repositories.</h1>
          )}
        </div>
      ) : <h1>No user found.</h1>}
    </>
  );
};

User.propTypes = {
    userFound: propTypes.bool,
    name: propTypes.string,
    avatar: propTypes.string,
    location: propTypes.string,
    bio: propTypes.string,
    repos: propTypes.array
}

export default User;
