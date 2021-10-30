import Sidebar from "../components/Sidebar";
import Welcome from "../components/Welcome";

const Dashboard = () => {
  return (
    <div className="dashboard container">
      <Sidebar />
      <Welcome />
    </div>
  );
};

export default Dashboard;
