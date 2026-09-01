import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>3-Tier Application</h1>

      <h2>Users</h2>

      {error && <p>{error}</p>}

      {users.map((user) => (
        <div key={user.id}>
          <p>
            {user.name} — {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
