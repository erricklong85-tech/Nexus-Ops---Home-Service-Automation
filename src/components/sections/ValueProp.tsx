import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import Card from '@components/common/Card';

export default function ValueProp() {
  return (
    <section id="solution" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            The Digital Plumber for <br />
            <span className="text-gray-500">Your Business Logic.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            You don&apos;t need another lead source. You need to fix the pipes. We install the
            infrastructure that turns interest into cash flow automatically.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            icon={<Zap className="w-6 h-6 text-yellow-400" />}
            title="Speed-to-Lead Protocol"
            description="Respond to inquiries in under 60 seconds, 24/7. Stop losing jobs to the 'next guy' on the Google list just because you were on a roof."
          />
          <Card
            icon={<TrendingUp className="w-6 h-6 text-brand-400" />}
            title="Reputation on Autopilot"
            description="Turn happy customers into 5-star Google reviews automatically. Build the trust moat that makes you the obvious choice in your city."
          />
          <Card
            icon={<ShieldCheck className="w-6 h-6 text-green-400" />}
            title="Admin Liberation"
            description="Automate estimates, invoicing, and scheduling. Reclaim 15+ hours a week so you can focus on high-value work or actually seeing your family."
          />
        </div>
      </div>
    </section>
  );
}
