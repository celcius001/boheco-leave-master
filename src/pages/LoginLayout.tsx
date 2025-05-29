import LoginForm from "@/components/LoginForm";
import axios from "axios";
import { useEffect, useState } from "react";
import LeaveDashboard from "@/components/dashboard/LeaveDashboard";
import Navigation from "@/components/Navigation";

function LoginLayout() {
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const res = async () => {
      if (sessionStorage.getItem("x-access-token") == null) {
        setLogin(false);
        return;
      }
      await axios({
        method: "POST",
        url: "https://bill-inquiry-api.onrender.com/api/v1/login/auth",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": sessionStorage.getItem("x-access-token"),
        },
      }).then((response) => {
        console.log(response);
        if (sessionStorage.getItem("x-access-token") == null) {
          window.location.href = "/";
          setLogin(response.data.auth);
        } else {
          setLogin(response.data.auth);
        }

        if (response.data.message === "Unauthorized") {
          sessionStorage.clear();
        }

        if (response.data.message === "Incorrect Auth") {
          sessionStorage.clear();
        }
      });
    };

    res();
  }, []);
  return (
    <div className="flex h-full w-full flex-col bg-gray-100 dark:bg-gray-900 dark:text-white">
      {login ? (
        <div>
          <Navigation login={login} />
          <LeaveDashboard />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default LoginLayout;
