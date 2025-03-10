import { LogoutButton } from "@/features/logout";
import { Container } from "@/shared/ui/primitives/container";
import { Flex } from "@/shared/ui/primitives/flex";
export default function HomePage() {
  return (
    <Container yPadding>
      <Flex as="header" className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Home page</h1>
        <LogoutButton />
      </Flex>
    </Container>
  );
}
