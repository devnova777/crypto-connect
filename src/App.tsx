import HeroSection from "./components/hero-section";
import MarketplaceSection from "./components/marketplace-sectin";
import Navbar from "./components/navabr";
import TokenDashboardSection from "./components/token-dashboard";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TokenDashboardSection />
      <MarketplaceSection />
    </div>
  )
}
