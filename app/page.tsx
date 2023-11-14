import About from "@/components/about";
import Profile from "@/components/profile";
import Spacer from "@/components/spacer";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Profile />
      <Spacer />
      <About />
    </main>
  );
}
