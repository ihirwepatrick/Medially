import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Home } from "./_root/Pages";
import RootLayout from "./_root/RootLayout";
import "./globals.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <main className="flex h-screen ">
      <Routes>
        <Route element={<AuthLayout />}>
          {/*public routes */}
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>
        <Route element={<RootLayout />}>
          {/*private routes*/}
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
