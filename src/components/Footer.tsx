
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CleanVA Solutions</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Specialized virtual assistant services for home service businesses. 
              We help cleaning companies reclaim their time and grow their revenue.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 CleanVA Solutions. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Scheduling Management</li>
              <li>Customer Service</li>
              <li>Staff Coordination</li>
              <li>Hiring & Recruitment</li>
              <li>Administrative Support</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@cleanvasolutions.com</p>
              <p>📞 (555) 123-CLEAN</p>
              <p>🕒 Mon-Fri: 8AM-6PM EST</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>Ready to transform your cleaning business? Get started today with our free consultation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
