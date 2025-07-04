
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-amber-600 py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to Reclaim Your Time?
        </h2>
        <p className="text-xl text-red-100 mb-8 leading-relaxed">
          Join hundreds of cleaning business owners who've already transformed their operations. 
          Get started with a free consultation and see how much time you can save.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
            Get Your Free Consultation Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
            Schedule a Demo Call
          </Button>
        </div>

        <div className="text-center text-red-100">
          <p className="mb-2">✅ No setup fees • ✅ Cancel anytime • ✅ Dedicated support</p>
          <p className="text-sm">Over 500 cleaning businesses trust us with their operations</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
