import TestimonialCard from '@components/common/TestimonialCard';

export default function Proof() {
  const clients = [
    'Apex Roofing',
    'Miller Electric',
    'City Plumbing',
    'Green Scapes',
    'Iron HVAC',
    'Summit Builders',
  ];

  return (
    <section id="results" className="py-24 border-t border-white/5 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold text-brand-400 uppercase tracking-widest mb-3">
            Proven Results
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">Trusted by 50+ Contractors</h2>
        </div>

        {/* Marquee */}
        <div className="relative flex overflow-hidden group mb-24">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent" />

          <div className="animate-marquee whitespace-nowrap flex items-center gap-20 py-4">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-2xl font-bold text-gray-700 font-mono uppercase">
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <TestimonialCard
            quote="Before Nexus, I was answering calls at dinner and losing leads if I didn't. Now, the system books appointments while I sleep. We added $40k/mo in revenue in the first 90 days."
            author="Jake Thompson"
            role="Owner, Thompson HVAC"
            metric="+42% Revenue"
          />
          <TestimonialCard
            quote="I tried 3 different marketing agencies. They all sent leads, but I couldn't handle the follow-up. Nexus didn't just bring leads; they built the machine that closes them."
            author="Sarah Jenkins"
            role="Founder, Jenkins & Sons Plumbing"
            metric="15hrs/wk Saved"
          />
        </div>
      </div>
    </section>
  );
}
