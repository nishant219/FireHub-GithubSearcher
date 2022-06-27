import React from 'react';
import {Card, CardBody, CardTitle} from "reactstrap";


//assume somebody is giving user object directly
//

const UserCard = ({user}) => {
  return (
<Card className="text-center mt-3 mb-4">

{/* <img src={avatar_url} className="img-thumbnail" /> */}
<img src={user.avatar_url} height="180" width="180" className="img rounded-circle img-thumbnail" />

<CardBody>
     <CardTitle>
        <h3 className="name">{user.name}</h3>
      </CardTitle>

{/* <div className='text-primary'> {user.name} </div> */}
<div className='text-primary'> {user.location} </div>
<div className='text-primary'> {user.bio} </div>
{/* <div className='text-primary'> {user.created_at} </div> */}
<div className='text-info'> {user.hireable ? "YES, hireable right now" : "Not hireable right now"} </div>
<div className='text-info'> followers :{user.followers } </div>
<div className='text-info'> {user.blog } </div>
</CardBody>

</Card>
    )
};

export default UserCard;
