import { Fragment } from "react";

const User = ({ obj }) => {
  return (
    <Fragment>
      <p>
        {obj.name.title}. {obj.name.first} {obj.name.last}
      </p>
      <p>Gender: {obj.gender}</p>
      <p>Age: {obj.registered.age}</p>
      <p>Email: {obj.email}</p>
      <p>Phone: {obj.phone}</p>
      <p>Country: {obj.location.country}</p>
      <p>State: {obj.location.state}</p>
      <p>City: {obj.location.city}</p>
      <p>Postcode: {obj.location.postcode}</p>
      <p>Username: {obj.login.username}</p>
      <img src={obj.picture.large} alt="" />
      <hr />
    </Fragment>
  );
};

export default User;
