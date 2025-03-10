import { LoginForm } from "@/features/login";
import { Container } from "@/shared/ui/primitives/container";

export default function LoginPage() {
  return (
    <Container fullscreen className="flex items-center justify-center">
      <LoginForm />
    </Container>
  );
}
