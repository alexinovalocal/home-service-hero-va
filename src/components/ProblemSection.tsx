
import { Calendar, Phone, Users, UserCheck, Headphones } from "lucide-react";

const problems = [
  {
    icon: Calendar,
    title: "Scheduling Chaos",
    problem: "Spending hours every day juggling client schedules, rescheduling appointments, and coordinating with your cleaning team.",
    solution: "Our experienced virtual assistants, backed by over 30 years of home cleaning industry expertise, take complete control of your scheduling operations. They work seamlessly with popular scheduling software like ServiceTitan, Housecall Pro, and Jobber, or can adapt to your preferred system. Unlike hiring a full-time office assistant, you only pay for the hours you actually need - making it incredibly cost-effective. Your VA will handle all appointment setting, send automated reminders, manage last-minute changes, and keep your entire team synchronized, ensuring your calendar runs like clockwork while you focus on growing your business.",
    timeWasted: "8-12 hours/week"
  },
  {
    icon: Phone,
    title: "Last-Minute Changes",
    problem: "Constant interruptions from clients calling to reschedule, cancel, or change service details at the last minute.",
    solution: "With decades of experience in the home services industry, our VAs understand the unpredictable nature of residential cleaning. They're trained to handle these disruptions professionally and efficiently, working with whatever communication tools you prefer - from simple phone systems to advanced CRM platforms. Because you only pay for actual usage rather than a full-time salary, it's an affordable solution that pays for itself. Your VA will manage all client change requests, update schedules instantly across all platforms, coordinate with your cleaning teams, and ensure everyone stays informed without you ever being interrupted during your important business activities.",
    timeWasted: "6-10 hours/week"
  },
  {
    icon: Users,
    title: "Calling Cleaners",
    problem: "Playing phone tag with your cleaning staff about schedules, job details, and last-minute updates.",
    solution: "Our virtual assistants bring 30+ years of home cleaning industry knowledge to your team communications. They understand cleaner workflows, common challenges, and effective communication strategies that work specifically for cleaning businesses. Whether you use WhatsApp, Slack, or traditional phone calls, they adapt to your existing systems without requiring expensive software upgrades. Since you only pay for the time they spend on your account, it's far more cost-effective than hiring in-house staff. They maintain direct, professional communication with your cleaning teams, handle all coordination and updates, relay job-specific details, and ensure seamless information flow between office and field operations.",
    timeWasted: "5-8 hours/week"
  },
  {
    icon: UserCheck,
    title: "Vetting Candidates",
    problem: "Hours spent screening resumes, conducting interviews, and checking references for new cleaning staff.",
    solution: "Leveraging three decades of home services recruitment experience, our VAs understand exactly what makes a great cleaning professional. They know which red flags to watch for, what questions reveal true work ethic, and how to identify candidates who will thrive in residential cleaning environments. They work with all major job boards and can integrate with your existing HR software, or handle everything through simple email and phone systems. At a fraction of the cost of a full-time HR person - since you only pay for actual recruiting time - they handle the entire hiring process from posting compelling job descriptions to conducting initial screenings, checking references, and presenting you with only the most qualified candidates ready for final interviews.",
    timeWasted: "10-15 hours/week"
  },
  {
    icon: Headphones,
    title: "Customer Calls",
    problem: "Being constantly available for customer inquiries, quotes, complaints, and general questions.",
    solution: "Our customer service specialists combine 30+ years of home cleaning industry experience with professional phone handling skills that convert more prospects into paying customers. They understand cleaning terminology, common customer concerns, and pricing strategies that work in your local market. Compatible with any phone system - from basic landlines to advanced VoIP setups - they integrate seamlessly without requiring expensive equipment. Since you pay only for answered calls and active customer service time, it's incredibly affordable compared to hiring full-time reception staff. They answer all incoming calls professionally, handle customer inquiries with industry expertise, schedule estimates using your preferred booking system, manage complaints with proven resolution techniques, and nurture customer relationships that lead to repeat business and referrals.",
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
              <div className="grid lg:grid-cols-2 gap-8 items-start">
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
                <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-600">
                  <h4 className="text-lg font-semibold text-amber-800 mb-3">How Our VAs Help:</h4>
                  <p className="text-amber-700 leading-relaxed">
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
