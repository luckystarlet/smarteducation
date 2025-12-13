import React, { useState } from 'react';
import { Copy, Check, CreditCard, Smartphone, Building2, ExternalLink } from 'lucide-react';

const AnimatedPage = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

const DonatePage = () => {
  const [copiedField, setCopiedField] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('');
  const [showMpesaInstructions, setShowMpesaInstructions] = useState(false);

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

  const presetAmounts = [1000, 2500, 5000, 10000];

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const handleMpesaDonation = () => {
    setShowMpesaInstructions(true);
    setSelectedMethod('mpesa');
  };

  const handlePayPalDonation = () => {
    const amount = customAmount || donationAmount;
    if (!amount) {
      alert('Please select or enter a donation amount');
      return;
    }
    // PayPal.me link format
    const paypalUrl = `https://www.paypal.com/paypalme/starletlucky71/${amount}KES`;
    window.open(paypalUrl, '_blank');
  };

  const handleBankTransfer = () => {
    setSelectedMethod('bank');
    alert('Bank details are displayed below. Please complete your transfer and email us the receipt at starletlucky71@gmail.com');
  };

  const getSelectedAmount = () => customAmount || donationAmount;

  return (
    <AnimatedPage>
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-800">Support Our Mission</h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Your contribution, no matter the size, makes a world of difference. Together, we can provide the tools and inspiration students need to build a brighter future for themselves and their community.
          </p>

          <div className="max-w-4xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Track Our Collective Impact</h2>
            <p className="text-gray-600 mb-8">See how donations like yours are making a difference in real-time.</p>
           
            <div className="space-y-6 mb-12 text-left">
              {impactGoals.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-end mb-1">
                    <span className="font-medium text-gray-700">{item.title}</span>
                    <span className="text-sm font-bold text-blue-700">{item.current} / {item.goal}</span>
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
              <div className="bg-blue-50 p-4 rounded-lg flex flex-col justify-center">
                <p><span className="font-bold text-lg block text-blue-800">Ksh 1,000</span> provides a term's supply of sanitary pads for two girls.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex flex-col justify-center">
                <p><span className="font-bold text-lg block text-blue-800">Ksh 2,500</span> supplies school materials for a student for one year.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg flex flex-col justify-center">
                <p><span className="font-bold text-lg block text-blue-800">Ksh 5,000</span> sponsors a student's participation in mentorship workshops.</p>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Select Donation Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {presetAmounts.map(amount => (
                  <button
                    key={amount}
                    onClick={() => {
                      setDonationAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-lg font-semibold transition ${
                      donationAmount === amount && !customAmount
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-400'
                    }`}
                  >
                    Ksh {amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="relative">
                <span className="absolute left-3 top-3 text-gray-500 font-semibold">Ksh</span>
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setDonationAmount('');
                  }}
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                />
              </div>
              {getSelectedAmount() && (
                <p className="mt-3 text-sm text-green-600 font-semibold">
                  Selected amount: Ksh {Number(getSelectedAmount()).toLocaleString()}
                </p>
              )}
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-4">Choose Your Payment Method</h3>
            <div className="space-y-6">
              {/* M-Pesa */}
              <div className={`border-2 p-6 rounded-lg transition ${
                selectedMethod === 'mpesa' ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <Smartphone className="text-green-600" size={24} />
                  <h4 className="font-bold text-lg text-green-600">M-Pesa</h4>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Phone Number</p>
                      <p className="font-mono font-semibold">+254742180636</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('+254742180636', 'mpesa-phone')}
                      className="p-2 hover:bg-gray-100 rounded transition"
                    >
                      {copiedField === 'mpesa-phone' ? (
                        <Check className="text-green-600" size={20} />
                      ) : (
                        <Copy className="text-gray-600" size={20} />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <div>
                      <p className="text-sm text-gray-600">M-Pesa Name</p>
                      <p className="font-mono font-semibold">Lucky Kitonyi</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('Lucky Kitonyi', 'mpesa-name')}
                      className="p-2 hover:bg-gray-100 rounded transition"
                    >
                      {copiedField === 'mpesa-name' ? (
                        <Check className="text-green-600" size={20} />
                      ) : (
                        <Copy className="text-gray-600" size={20} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleMpesaDonation}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition flex items-center justify-center gap-2"
                >
                  <Smartphone size={20} />
                  Donate via M-Pesa
                </button>

                {showMpesaInstructions && (
                  <div className="mt-4 p-4 bg-green-100 rounded-lg text-left">
                    <p className="font-semibold text-green-800 mb-2">Instructions:</p>
                    <ol className="text-sm text-green-900 space-y-1 list-decimal list-inside">
                      <li>Go to M-Pesa menu on your phone</li>
                      <li>Select "Send Money"</li>
                      <li>Enter number: <strong>+254742180636</strong></li>
                      <li>Enter amount: <strong>Ksh {getSelectedAmount() || '___'}</strong></li>
                      <li>Confirm the transaction</li>
                      <li>You'll receive a confirmation SMS</li>
                    </ol>
                  </div>
                )}
              </div>

              {/* Bank Transfer */}
              <div className={`border-2 p-6 rounded-lg transition ${
                selectedMethod === 'bank' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="text-blue-600" size={24} />
                  <h4 className="font-bold text-lg text-blue-600">Bank Transfer</h4>
                </div>

                <div className="space-y-2 mb-4 text-left">
                  <div className="bg-white p-3 rounded">
                    <p className="text-sm text-gray-600">Bank Name</p>
                    <p className="font-semibold">Kenya Commercial Bank</p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <p className="text-sm text-gray-600">Account Name</p>
                    <p className="font-semibold">Smart Education</p>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded">
                    <div>
                      <p className="text-sm text-gray-600">Account Number</p>
                      <p className="font-mono font-semibold">1341552934</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard('1341552934', 'bank-account')}
                      className="p-2 hover:bg-gray-100 rounded transition"
                    >
                      {copiedField === 'bank-account' ? (
                        <Check className="text-green-600" size={20} />
                      ) : (
                        <Copy className="text-gray-600" size={20} />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleBankTransfer}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2"
                >
                  <Building2 size={20} />
                  View Bank Details
                </button>
              </div>

              {/* PayPal Card Payment */}
              <div className="border-2 border-gray-200 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CreditCard className="text-purple-600" size={24} />
                  <h4 className="font-bold text-lg text-purple-600">Credit/Debit Card (PayPal)</h4>
                </div>

                <div className="mb-4 p-3 bg-purple-50 rounded text-left">
                  <p className="text-sm text-purple-900">
                    <strong>PayPal Email:</strong> starletlucky71@gmail.com
                  </p>
                </div>

                <button
                  onClick={handlePayPalDonation}
                  disabled={!getSelectedAmount()}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ExternalLink size={20} />
                  Pay Securely via PayPal
                </button>
                <p className="text-xs text-gray-500 mt-2">Secure payment processing through PayPal</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg text-left">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> After completing your donation, please email your receipt to{' '}
                <a href="mailto:starletlucky71@gmail.com" className="text-blue-600 hover:underline">
                  starletlucky71@gmail.com
                </a>{' '}
                so we can acknowledge your contribution and send you a thank you message.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default DonatePage;
