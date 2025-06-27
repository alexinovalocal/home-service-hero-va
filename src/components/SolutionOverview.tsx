
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Immediate time and money savings",
  "Nonstop coverage during your business hours",
  "Streamlined scheduling and operations",
  "Faster hiring and team management",
  "Reduced stress and better work-life balance",
  "Focus on growing your revenue"
];

const SolutionOverview = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Complete
            <span className="text-red-600"> Virtual Assistant Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Inova Local provides dedicated, trained virtual assistants who specialize in home service businesses. 
            They become an extension of your team, handling everything so you can focus on what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What You Get:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg">
                Start Your Free Trial Today
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-r from-red-600 to-amber-600 rounded-lg p-6 text-white mb-6">
                <h3 className="text-2xl font-bold mb-2">Before Virtual Assistant</h3>
                <div className="space-y-2 text-red-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Overwhelmed with admin tasks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Missed customer calls</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span>Scheduling nightmares</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-500 to-red-500 rounded-lg p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">After Virtual Assistant</h3>
                <div className="space-y-2 text-amber-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    <span>Focus on core business growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    <span>Never miss opportunities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                    <span>Build passive income streams</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
