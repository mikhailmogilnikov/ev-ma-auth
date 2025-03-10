import { BrowserRouter, Route, Routes } from "react-router";
import PublicLayout from "./layouts/public-layout";
import PrivateLayout from "./layouts/private-layout";
import LoginPage from "@/pages/login/ui/lazy";
import HomePage from "@/pages/home/ui/lazy";
import { APP_ROUTES } from "@/shared/config/routes";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
          <Route
            path={APP_ROUTES.FORGOT_PASSWORD}
            element={<p>Forgot password</p>}
          />
          <Route path={APP_ROUTES.REGISTER} element={<p>Register</p>} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path={APP_ROUTES.HOME} index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
