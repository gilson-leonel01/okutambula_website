import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { Footer } from "@/app/components/footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
