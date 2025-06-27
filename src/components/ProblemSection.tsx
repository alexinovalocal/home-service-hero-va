
import { Calendar, Phone, Users, UserCheck, Headphones } from "lucide-react";

const problems = [
  {
    icon: Calendar,
    title: "Scheduling Chaos",
    problem: "Spending hours every day juggling client schedules, rescheduling appointments, and coordinating with your cleaning team.",
    solution: "Inova Local's experienced virtual assistants take complete control of your scheduling operations. They work seamlessly with popular scheduling software like ServiceTitan, Housecall Pro, and Jobber, handling all appointment setting, automated reminders, and last-minute changes while keeping your entire team synchronized.",
  },
  {
    icon: Phone,
    title: "Last-Minute Changes",
    problem: "Constant interruptions from clients calling to reschedule, cancel, or change service details at the last minute.",
    solution: "Our VAs handle these disruptions professionally and efficiently, managing all client change requests, updating schedules instantly across all platforms, and coordinating with your cleaning teams without you ever being interrupted during important business activities.",
  },
  {
    icon: Users,
    title: "Calling Cleaners",
    problem: "Playing phone tag with your cleaning staff about schedules, job details, and last-minute updates.",
    solution: "Inova Local's virtual assistants understand cleaner workflows and maintain direct, professional communication with your cleaning teams. They handle all coordination, updates, and job-specific details, ensuring seamless information flow between office and field operations.",
  },
  {
    icon: UserCheck,
    title: "Vetting Candidates",
    problem: "Hours spent screening resumes, conducting interviews, and checking references for new cleaning staff.",
    solution: "Our VAs handle the entire hiring process from posting compelling job descriptions to conducting initial screenings and checking references. They present you with only the most qualified candidates ready for final interviews, saving you countless hours of recruitment work.",
  },
  {
    icon: Headphones,
    title: "Customer Calls",
    problem: "Being constantly available for customer inquiries, quotes, complaints, and general questions.",
    solution: "Inova Local's customer service specialists answer all incoming calls professionally, handle customer inquiries with industry expertise, schedule estimates, manage complaints with proven resolution techniques, and nurture customer relationships that lead to repeat business and referrals.",
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The 5 Biggest Time Wasters
            <span className="text-red-600"> Killing Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every cleaning business owner faces these same productivity killers. Here's how Inova Local fixes it.
          </p>
        </div>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 p-4 rounded-xl">
                    <problem.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {problem.problem}
                    </p>
                  </div>
                </div>
                <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-600">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">How Inova Local's VAs Help:</h4>
                  <p className="text-amber-700 leading-relaxed">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
