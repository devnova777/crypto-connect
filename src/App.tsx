import EducationalResourcesSection from "./components/education-resource-section";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import MarketplaceSection from "./components/marketplace-sectin";
import Navbar from "./components/navbar";
import TokenDashboardSection from "./components/token-dashboard";

export default function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TokenDashboardSection />
      <MarketplaceSection />
      <EducationalResourcesSection />
      <Footer />
    </div>
  )
}
