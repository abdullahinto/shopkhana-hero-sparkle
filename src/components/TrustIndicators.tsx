
const TrustIndicators = () => {
  const trustFeatures = [
    { icon: "🚚", title: "COD Available", subtitle: "Cash on Delivery" },
    { icon: "↩️", title: "Easy Return", subtitle: "7 Days Return Policy" },
    { icon: "🔒", title: "Secure Checkout", subtitle: "100% Safe Payment" },
    { icon: "⚡", title: "Fast Delivery", subtitle: "Same Day in Karachi" },
  ];

  const paymentMethods = [
    { name: "Visa", logo: "💳" },
    { name: "JazzCash", logo: "📱" },
    { name: "EasyPaisa", logo: "💰" },
    { name: "Bank Transfer", logo: "🏦" },
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-4 lg:p-6 mb-8 lg:mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Trust Features */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-4">Why Shop With Us</h3>
          <div className="grid grid-cols-2 gap-4">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <div>
                  <p className="font-semibold text-sm">{feature.title}</p>
                  <p className="text-xs text-gray-600">{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-poppins font-semibold text-lg mb-4">Accepted Payments</h3>
          <div className="grid grid-cols-2 gap-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-3 border">
                <span className="text-2xl">{method.logo}</span>
                <span className="font-medium text-sm">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustIndicators;
