import React, { useState, useEffect } from "react";

//API
import API from '../API';

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components

//hook
import { useHomeFetch } from '../hooks/useHomeFetch';

//images
import NoImage from "../images/no_image.jpg";

const Home = () => {

    const {state, loading, error } = useHomeFetch();
    console.log(state);
    return <div> Home page </div>;
};

export default Home;
