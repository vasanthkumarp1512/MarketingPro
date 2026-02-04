import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Features />
    </main>
  );
}
