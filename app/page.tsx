import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-zinc-700 to-zinc-950"> 
        <div className="space-y-6 text-center">
          <h1 className="text-6xl font-semibold text-white drop-shadow-sm">
              Auth
          </h1>
          <p className="text-white text-lg">
            Authentication service
          </p>
          <div>
            <LoginButton>
            <Button variant={"secondary"} size={"lg"}>Sign in</Button>
            </LoginButton>
          </div>
        </div>
    </main> 
  );
}
