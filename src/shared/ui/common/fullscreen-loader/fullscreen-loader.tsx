import { Spinner } from "../../primitives/spinner";

export function FullscreenLoader() {
  return (
    <div className="flex h-dvh w-dvw items-center justify-center">
      <Spinner />
    </div>
  );
}
