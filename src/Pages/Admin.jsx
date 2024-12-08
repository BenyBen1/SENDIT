import React, { useState } from "react";
import { Table, Button } from "reactstrap";

const AdminPage = () => {
  const [parcels, setParcels] = useState([
    { id: 1, sender: "Alice", recipient: "Bob", status: "In Transit" },
    { id: 2, sender: "Charlie", recipient: "David", status: "Delivered" },
  ]);

  const updateStatus = (id, status) => {
    setParcels(
      parcels.map((parcel) =>
        parcel.id === id ? { ...parcel, status } : parcel
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender</th>
            <th>Recipient</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parcels.map((parcel) => (
            <tr key={parcel.id}>
              <td>{parcel.id}</td>
              <td>{parcel.sender}</td>
              <td>{parcel.recipient}</td>
              <td>{parcel.status}</td>
              <td>
                <Button
                  color="primary"
                  size="sm"
                  onClick={() => updateStatus(parcel.id, "In Transit")}
                >
                  In Transit
                </Button>{" "}
                <Button
                  color="success"
                  size="sm"
                  onClick={() => updateStatus(parcel.id, "Delivered")}
                >
                  Delivered
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminPage;