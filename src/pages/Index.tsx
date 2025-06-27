
import ProblemSection from "@/components/ProblemSection";
import SolutionOverview from "@/components/SolutionOverview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <ProblemSection />
      <SolutionOverview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
