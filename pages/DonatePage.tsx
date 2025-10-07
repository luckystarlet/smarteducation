
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const DonatePage: React.FC = () => {
  // Placeholder data for progress bars
  const impactGoals = [
    {
      title: 'Girls Supported with Sanitary Pads',
      current: 350,
      goal: 500,
      description: "Goal: Provide a year's supply for 500 girls.",
      color: 'bg-pink-500',
    },
    {
      title: 'Students Equipped with School Supplies',
      current: 120,
      goal: 200,
      description: 'Goal: Equip 200 students for the entire school year.',
      color: 'bg-yellow-500',
    },
    {
      title: 'Mentorship Workshops Funded',
      current: 18,
      goal: 25,
      description: 'Goal: Fund 25 workshops this semester.',
      color: 'bg-green-500',
    },
  ];

  return (
    <AnimatedPage>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-bright-blue-800">Support Our Mission</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Your contribution, no matter the size, makes a world of difference. Together, we can provide the tools and inspiration students need to build a brighter future for themselves and their community.
          </p>

          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-bright-blue-700 mb-2">Track Our Collective Impact</h2>
            <p className="text-gray-600 mb-8">See how donations like yours are making a difference in real-time.</p>
            
            <div className="space-y-6 mb-12 text-left">
              {impactGoals.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-medium text-gray-700">{item.title}</span>
                    <span className="text-sm font-bold text-bright-blue-700">{item.current} / {item.goal}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`${item.color} h-4 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${(item.current / item.goal) * 100}%` }}
                    ></div>
                  </div>
                   <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Contribution Matters</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center mb-10">
                <div className="bg-bright-blue-50 p-4 rounded-lg flex flex-col justify-center">
                    <p><span className="font-bold text-lg block text-bright-blue-800">Ksh 1,000</span> provides a term's supply of sanitary pads for two girls.</p>
                </div>
                <div className="bg-bright-blue-50 p-4 rounded-lg flex flex-col justify-center">
                    <p><span className="font-bold text-lg block text-bright-blue-800">Ksh 2,500</span> supplies school materials for a student for one year.</p>
                </div>
                <div className="bg-bright-blue-50 p-4 rounded-lg flex flex-col justify-center">
                    <p><span className="font-bold text-lg block text-bright-blue-800">Ksh 5,000</span> sponsors a student's participation in mentorship workshops.</p>
                </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">Choose Your Payment Method</h3>
            <div className="space-y-6">
              {/* M-Pesa Placeholder */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-green-600 mb-2">M-Pesa</h4>
                <p>Paybill: <span className="font-mono bg-gray-100 p-1 rounded">XXXXXX</span></p>
                <p>Account No: <span className="font-mono bg-gray-100 p-1 rounded">DONATE</span></p>
                <p className="text-sm mt-2 text-gray-500">[Integration Placeholder]</p>
              </div>

              {/* Bank Transfer Placeholder */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-blue-600 mb-2">Bank Transfer</h4>
                <p>Bank Name: <span className="font-mono">Kenya Commercial Bank</span></p>
                <p>Account Name: <span className="font-mono">Smart Education</span></p>
                <p>Account Number: <span className="font-mono bg-gray-100 p-1 rounded">+254742180636</span></p>
                <p className="text-sm mt-2 text-gray-500">[Integration Placeholder]</p>
              </div>

              {/* Credit Card Placeholder */}
              <div className="border border-gray-200 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-purple-600 mb-2">Credit/Debit Card</h4>
                <button className="w-full bg-bright-blue-600 text-white py-3 rounded-lg font-bold hover:bg-bright-blue-700 transition">
                  Pay Securely via Card
                </button>
                <p className="text-sm mt-2 text-gray-500">[Stripe/PayPal Integration Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default DonatePage;
