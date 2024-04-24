import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

export default async function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Button variant={"ghost"}>Button</Button>
      <Card>Card</Card>
    </main>
  );
}
