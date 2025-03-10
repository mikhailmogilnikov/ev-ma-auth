import { Outlet } from "react-router";
import { Suspense } from "react";
import { FullscreenLoader } from "@/shared/ui/common/fullscreen-loader";
import { Navigate } from "react-router";
import { APP_ROUTES } from "@/shared/config/routes";
import { useSession } from "@/entities/session";

export default function PrivateLayout() {
  const { isAuthenticated } = useSession();

  if (!isAuthenticated) {
    return <Navigate to={APP_ROUTES.LOGIN} replace />;
  }

  return (
    <Suspense fallback={<FullscreenLoader />}>
      <Outlet />
    </Suspense>
  );
}
