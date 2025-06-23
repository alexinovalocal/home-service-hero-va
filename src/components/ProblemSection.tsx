
import { Calendar, Phone, Users, UserCheck, Headphones } from "lucide-react";

const problems = [
  {
    icon: Calendar,
    title: "Scheduling Chaos",
    problem: "Spending hours every day juggling client schedules, rescheduling appointments, and coordinating with your cleaning team.",
    solution: "Our VAs handle all scheduling, send automated reminders, and manage your calendar so it runs like clockwork.",
    timeWasted: "8-12 hours/week"
  },
  {
    icon: Phone,
    title: "Last-Minute Changes",
    problem: "Constant interruptions from clients calling to reschedule, cancel, or change service details at the last minute.",
    solution: "Your VA manages all changes professionally, updates schedules instantly, and keeps everyone informed.",
    timeWasted: "6-10 hours/week"
  },
  {
    icon: Users,
    title: "Calling Cleaners",
    problem: "Playing phone tag with your cleaning staff about schedules, job details, and last-minute updates.",
    solution: "We maintain direct communication with your team, handling all coordination and updates seamlessly.",
    timeWasted: "5-8 hours/week"
  },
  {
    icon: UserCheck,
    title: "Vetting Candidates",
    problem: "Hours spent screening resumes, conducting interviews, and checking references for new cleaning staff.",
    solution: "Our experienced VAs handle the entire hiring process, from posting jobs to final candidate selection.",
    timeWasted: "10-15 hours/week"
  },
  {
    icon: Headphones,
    title: "Customer Calls",
    problem: "Being constantly available for customer inquiries, quotes, complaints, and general questions.",
    solution: "Professional VAs answer all calls, handle inquiries, schedule estimates, and manage customer relationships.",
    timeWasted: "12-20 hours/week"
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
            Every cleaning business owner faces these same productivity killers. Here's how much time you're losing and how we fix it.
          </p>
        </div>

        <div className="space-y-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="flex items-start gap-6">
                  <div className="bg-red-100 p-4 rounded-xl">
                    <problem.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{problem.title}</h3>
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {problem.timeWasted}
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                      {problem.problem}
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h4 className="text-lg font-semibold text-green-800 mb-3">How Our VAs Help:</h4>
                  <p className="text-green-700 leading-relaxed">
                    {problem.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white animate-fade-in">
          <h3 className="text-3xl font-bold mb-4">That's 41-65 Hours Per Week!</h3>
          <p className="text-xl text-red-100 mb-6">
            You're spending more time on admin work than actually running your cleaning business.
          </p>
          <p className="text-2xl font-bold">
            What if you could get all that time back?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
