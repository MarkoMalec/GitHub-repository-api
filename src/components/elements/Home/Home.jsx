import React, { useEffect, useState, useReducer } from "react";
import { API_URL } from "../../../fetch";
import LoadingCircle from "./LoadingCircle/LoadingCircle";
import Form from "../Form/Form";
import User from "../User/User";
import "./Home.scss";

const Home = () => {
  const [repos, setRepos] = useState(null);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchUser = (endpoint) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setUser(result);
        console.log(result);
      }).catch((err) => console.log(err));
  };

  const searchUser = (searchTerm) => {
    let endpoint = "";
    if (searchTerm === "") {
      alert("Type in github username");
    } else {
      endpoint = `${API_URL}${searchTerm}`;
      fetchUser(endpoint);
      fetchRepos(searchTerm);
      setSearchTerm(searchTerm);
    }
  };

  const fetchRepos = (searchTerm) => {
    fetch(`${API_URL}${searchTerm}/repos`)
      .then((response) => response.json())
      .then((result) => {
        setRepos(result);
        setLoading(false);
        console.log(result);
      }).catch((err) => console.log(err));
  };

  return (
    <section className="main">
      <div className="form-container">
        <Form callback={searchUser} />
      </div>
      {loading ? <LoadingCircle /> :
      <div className="user-container">
        <User
          userFound={user.message === 'Not Found' ? false : true}
          name={user?.name}
          avatar={user?.avatar_url}
          location={user?.location}
          bio={user?.bio}
          repos={repos}
        />
      </div>}
    </section>
  );
};

export default Home;
