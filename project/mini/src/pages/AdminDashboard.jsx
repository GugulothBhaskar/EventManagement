import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [adminData, setAdminData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get('/api/admin/data', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => setAdminData(response.data))
    .catch(error => console.error(error));
  }, [token]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {adminData && <pre>{JSON.stringify(adminData, null, 2)}</pre>}
    </div>
  );
};

export default AdminDashboard;