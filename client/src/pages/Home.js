import { useState } from "react";
import ZooMap from "../components/ZooMap";
import Header from "../components/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// var animalData = require();

const Home = () => {

  // const [animal, setAnimal] = useState(animalData);
  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem("id_token");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const httpLink = createHttpLink({
    uri: "/graphql",
  });
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <div className="card bg-white card-rounded w-50">
        <Header />
      <div className="image-container">
        {/* <img src={`${process.env.PUBLIC_URL}/assets/images/ZooMap.jpg`} alt="Map of the Zoo"></img> */}
        <ZooMap />
      </div>
      <div className="animal_list"></div>
    </div>
  );
};

export default Home;
