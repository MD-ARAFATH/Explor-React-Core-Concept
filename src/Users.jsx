import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  return (
    <div>
      <h2>User :{users.length}</h2>
    </div>
  );
}

// 1.declear a state gold the data
// 2.useEffect with call back function and dependency array
//3.use fetch to load data
