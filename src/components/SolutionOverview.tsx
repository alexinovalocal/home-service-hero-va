
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, TrendingUp } from "lucide-react";

const benefits = [
  "Immediate 20+ hour weekly time savings",
  "Professional customer service 24/7",
  "Streamlined scheduling and operations",
  "Faster hiring and team management",
  "Reduced stress and better work-life balance",
  "Focus on growing your revenue"
];

const stats = [
  { number: "500+", label: "Cleaning Businesses Served" },
  { number: "89%", label: "Client Retention Rate" },
  { number: "24hrs", label: "Average Setup Time" },
  { number: "$50K+", label: "Average Annual Revenue Increase" }
];

const SolutionOverview = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Complete
            <span className="text-orange-600"> Virtual Assistant Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide dedicated, trained virtual assistants who specialize in home service businesses. 
            They become an extension of your team, handling everything so you can focus on what matters most.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What You Get:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg">
                Start Your Free Trial Today
              </Button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 animate-scale-in">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 animate-fade-in">
          <div className="flex items-start gap-4">
            <Star className="h-8 w-8 text-yellow-600 mt-1" />
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Real Results from Real Clients</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <blockquote className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-700 mb-4 italic">
                    "I got my life back! My VA handles all my scheduling and customer calls. 
                    I've grown from 2 to 8 cleaners in just 6 months because I can finally focus on the business."
                  </p>
                  <div className="font-semibold text-gray-900">- Sarah M., Miami Cleaning Co.</div>
                </blockquote>
                <blockquote className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-700 mb-4 italic">
                    "The hiring process used to take me weeks. Now my VA finds and vets candidates in days. 
                    It's like having a full HR department for a fraction of the cost."
                  </p>
                  <div className="font-semibold text-gray-900">- Mike R., Spotless Solutions</div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
