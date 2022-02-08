import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

const apiEndpoint = "https://randomuser.me/api";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  const fetchRandomData = async () => {
    const { data } = await axios(apiEndpoint);
    const newUsers = [...users, data.results[0]];
    setUsers(newUsers);
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  const buttonStyle = {
    margin: 20,
  };

  return (
    <div className="App">
      <h1>Counter</h1>

      <div style={buttonStyle}>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div style={buttonStyle}>
        <button onClick={() => fetchRandomData()}>Fetch Random User</button>
      </div>

      <ul>
        {users.map((user) => (
          <User key={user.login.username} obj={user} />
        ))}
      </ul>
    </div>
  );
};

export default Counter;
