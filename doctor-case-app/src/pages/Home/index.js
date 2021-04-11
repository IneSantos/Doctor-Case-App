import React from "react";
import Nav from "../../components/nav/index.js";
import ReviewCases from "../../components/reviewCases/index.js";
import './index.css';

const Home = ({user}) => (
      <>
          <Nav user={user}/>
          <ReviewCases user={user}/>
      </>
    );

export default Home;