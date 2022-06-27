import React,{useState, useEffect} from 'react';
import Axios  from 'axios';
import {ListGroup, ListGroupItem } from "reactstrap";

//somebody gonna call url in repos
const Repos = ({repos_url}) => {
  const [ repos, setRepos ]=useState([]);
  
  //method to fetch repos
  const fetchRepos = async ()=>{
        //const response= await Axios.get(repos_url);
        const {data}= await Axios.get(repos_url);
        setRepos(data);  //store entire data in state
  }

  //method which can fire req before loading anything
  useEffect(()=>{
    fetchRepos()
  },[repos_url])


    return (
        <ListGroup className='repos'>
            {
                repos.map(repo=>(
                    <ListGroupItem key={repo.id}>
<div className='text-secondary'>  {repo.name}  </div>
<div className='text-info'>  {repo.language}  </div>
<div className='text-primary'>  {repo.url}  </div>
<div className='text-secondary'>  {repo.description}  </div>
                    </ListGroupItem>
                ))
            }
        </ListGroup>
        )
};

export default Repos;
