import React from "react";
import { FaLink } from 'react-icons/fa';
import "./User.scss";

const User = ({ isUserLoaded, name, avatar, location, bio, repos }) => {
  return (
    <>
      {isUserLoaded ? (
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
      ) : null}
    </>
  );
};

export default User;
