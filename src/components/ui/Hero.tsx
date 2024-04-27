import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { PartyPopper } from "lucide-react";
import { Input } from "./input";

const Hero = () => {
  return (
    <Card className="bg-card/60 bg-[linear-gradient(to_right,#00FF661e_1px,transparent_1px),linear-gradient(to_bottom,#00FF661e_1px,transparent_1px)] bg-[size:14px_24px]">
      <CardContent className="space-y-4 bg-background/30  bg-[url('/hero.png')] bg-cover bg-right">
        <Button
          variant={"secondary"}
          size={"sm"}
          className="pointer-events-none text-xs text-muted"
        >
          <PartyPopper className="size-5 text-primary" />
          Over 1065+ Premade Framer Templates
        </Button>
        <div className="space-y-4 lg:w-3/4">
          <h1 className="text-3xl font-semibold lg:text-5xl">
            Get <span className="text-primary">Framer</span> Ready Made
            Templates
          </h1>
          <p className="text-muted lg:w-3/4">
            With a team of dedicated professionals who are passionate about
            crafting online experiences, we&apos;re here to elevate your online
            presence and bring your vision to life.
          </p>
        </div>
        <form
          action=""
          className="flex items-center rounded-md bg-secondary p-2 lg:w-1/2 "
        >
          <Input placeholder="Framer Agency Template" className="border-none" />
          <Button type="submit">Search Now</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Hero;
