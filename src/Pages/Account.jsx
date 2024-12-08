import React, { useEffect, useState } from "react";

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch logged-in user details from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      alert("You need to log in first!");
      window.location.href = "/"; // Redirect to homepage if not logged in
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {user ? (
        <>
          <h1>Welcome, {user.name}!</h1>
          <p>Email: {user.email}</p>
          <h2>Your Orders</h2>
          <ul>
            {user.orders && user.orders.length > 0 ? (
              user.orders.map((order, index) => (
                <li key={index}>{order}</li>
              ))
            ) : (
              <p>No orders yet!</p>
            )}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
