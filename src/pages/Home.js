import React, { useState, useContext } from "react";
import Axios from "axios";

import {
  Row,
  Container,
  Col,
  Input,
  Button,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";


const Home = () => {

  const context = useContext(UserContext);
  const[query, setQuery]=useState("");
  const[user, setUser]=useState(null);

  // method which can make web req & store data in our state
  const fetchDetails= async() =>{
    try{
      const {data} = await Axios.get(`https://api.github.com/users/${query}`);
      setUser(data)
    }catch(error){
      toast("not able to locate user", {type: "error"})
    }
  }

// to put behind login page 
// if context has access of user and user have something unique id then good but not then redirect to signin
if(!context.user?.uid){
  return <Navigate to="/signin" />
}

  //onchange as a we have event we will fire method setQuery in that we store value e.target.value
return (
  <Container>
    <Row className=" mt-3">
      <Col md="5">
        <InputGroup>
          <Input
            type="text"
            value={query}
            onChange={e=>setQuery(e.target.value)}
            placeholder="Please provide the username"
          />
          <InputGroupAddon addonType="append">
            <Button onClick={fetchDetails} color="primary">Fetch User</Button>
          </InputGroupAddon>
        </InputGroup>
{/* // to dispaly the data if user present */}
{
  user ? (
    <UserCard user={user}/>
  ) : (
    null
  )
}

      </Col>
      <Col md="7"> { user ? (<Repos repos_url={user.repos_url} />) : (null) } </Col>
    </Row>
  </Container>
);

};

export default Home;

