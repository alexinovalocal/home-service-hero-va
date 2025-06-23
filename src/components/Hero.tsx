
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-red-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Stop Drowning in 
              <span className="text-red-600"> Admin Tasks</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get back to growing your cleaning business while Inova Local's expert virtual assistants handle scheduling, customer calls, hiring, and all the time-consuming tasks that keep you from what you do best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                Get Your Free VA Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-4 text-lg">
                See How It Works
              </Button>
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-amber-600" />
                <span>Save 20+ hours/week</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span>500+ cleaning businesses served</span>
              </div>
            </div>
          </div>
          <div className="text-center animate-scale-in">
            <div className="text-4xl lg:text-5xl font-bold text-red-600 mb-4">
              Ready to Transform Your Business?
            </div>
            <p className="text-xl text-gray-600">
              Join hundreds of cleaning business owners who've already transformed their operations with Inova Local.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
