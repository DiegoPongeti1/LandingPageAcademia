import { HeaderPage } from "@/components/Header";
import { BodyPage } from "@/components/body";
import { FooterPage } from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-400 h-screen">
      <HeaderPage />
      <BodyPage />
      <FooterPage />
    </div>
  );
}
