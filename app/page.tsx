import { HeaderPage } from "@/components/Header";
import { BodyPage } from "@/components/body";
import { FooterPage } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-950">
      <HeaderPage />
      <BodyPage />
      <FooterPage />
    </div>
  );
}
