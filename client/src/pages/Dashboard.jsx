import { useLogoutUser } from "../lib/react-query/queriesAndMutations";
import { useToast } from "../lib/contexts/ToastContext";

const Dashboard = () => {
  const { mutate: logout } = useLogoutUser();

  const { showToast } = useToast();

  return (
    <div className="dashboard-page">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "Montserrat", textAlign: "center" }}>
          Dashboard
        </h1>
        <button
          onClick={() => {
            logout();
            showToast("Logged out", false);
          }}
          className="logout-button"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
