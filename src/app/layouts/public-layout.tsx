import { useSession } from "@/entities/session";
import { APP_ROUTES } from "@/shared/config/routes";
import { FullscreenLoader } from "@/shared/ui/common/fullscreen-loader";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router";

export default function PublicLayout() {
  const { isAuthenticated } = useSession();

  if (isAuthenticated) {
    return <Navigate to={APP_ROUTES.HOME} replace />;
  }

  return (
    <Suspense fallback={<FullscreenLoader />}>
      <Outlet />
    </Suspense>
  );
}
