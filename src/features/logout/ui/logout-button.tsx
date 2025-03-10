import { Button } from "@/shared/ui/primitives/button";
import { useSession } from "@/entities/session";

export const LogoutButton = () => {
  const { logout } = useSession();

  const handleLogout = () => {
    logout();
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};
