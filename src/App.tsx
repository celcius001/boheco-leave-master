import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoginLayout from "./pages/LoginLayout";
import MainLayout from "./pages/MainLayout";
import LeaveDashboard from "./components/dashboard/LeaveDashboard";
import LeaveFormPage from "./pages/LeaveFormPage";

function App() {
  return (
    <>
      {/* <LeaveFormPage /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<LoginLayout />}>
            <Route path="/" element={<LoginForm />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<LeaveDashboard />} />
            <Route path="/leave" element={<LeaveFormPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
