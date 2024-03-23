import HeroSection from "./components/hero-section";
import Navbar from "./components/navabr";
import TokenDashboardSection from "./components/token-dashboard";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TokenDashboardSection />
    </div>
  )
}
