import { LogoutButton } from "@/features/logout";
import { Container } from "@/shared/ui/primitives/container";

export default function HomePage() {
  return (
    <Container yPadding className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">Home page</h1>
      <LogoutButton />
    </Container>
  );
}
