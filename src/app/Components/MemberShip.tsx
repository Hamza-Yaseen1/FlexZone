<<<<<<< HEAD
import { Card } from "antd";

function MemberShip() {
  return (
   <>
         <h1 className="text-3xl p-5 font-bold text-center">MemberShip Plan</h1>
    <Card title="Card title" bordered={false} style={{ width: 300 }} className="bg-gray-200">
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
   </>
  );
}
export default MemberShip;
=======
interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
}

const PricingCard = ({ title, price, features, highlight }: PricingCardProps) => {
    return (
        <div
            className={`pricing-card h-96 rounded-lg p-6 text-center w-full md:w-1/3 border transition-transform transform hover:scale-105 ${
                highlight
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl'
                    : 'bg-white shadow-lg border-gray-300'
            }`}
        >
            <h3
                className={`text-2xl font-bold mb-4 ${
                    highlight ? 'text-white' : 'text-gray-800'
                }`}
            >
                {title}
            </h3>
            <p
                className={`text-3xl font-extrabold mb-4 ${
                    highlight ? 'text-white' : 'text-orange-600'
                }`}
            >
                {price}
            </p>
            <ul className="mb-6 space-y-2 text-gray-600">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className={`${
                            highlight ? 'text-gray-100' : 'text-gray-700'
                        }`}
                    >
                        {feature}
                    </li>
                ))}
            </ul>
            <button
                className={`py-3 px-6 rounded-lg font-medium transition-all hover:scale-105 ${
                    highlight
                        ? 'bg-white text-orange-600 hover:bg-gray-100'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                aria-label={`Sign up for ${title}`}
            >
                Sign Up
            </button>
        </div>
    );
};

const MemberShip = () => {
    const plans = [
        {
            title: 'Basic Plan',
            price: '$19.99/month',
            features: ['Access to gym', 'Free fitness classes', '1 personal training session'],
        },
        {
            title: 'Standard Plan',
            price: '$29.99/month',
            features: ['Access to gym', 'Free fitness classes', '5 personal training sessions', 'Access to sauna'],
            highlight: true,
        },
        {
            title: 'Premium Plan',
            price: '$49.99/month',
            features: [
                'Access to gym',
                'Free fitness classes',
                'Unlimited personal training sessions',
                'Access to sauna and pool',
            ],
        },
    ];

    return (
        <div className="pricing-container flex flex-col md:flex-row justify-center items-center gap-8 p-8 bg-gray-50">
            {plans.map((plan, index) => (
                <PricingCard
                    key={index}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                    highlight={plan.highlight}
                />
            ))}
        </div>
    );
};

export default MemberShip;
>>>>>>> 4fe4a8e (Offer Section)
