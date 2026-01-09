import Hero from '@components/sections/Hero';
import ValueProp from '@components/sections/ValueProp';
import Proof from '@components/sections/Proof';
import CTA from '@components/sections/CTA';
import type { PageProps } from '@/types';

export default function HomePage({ onOpenContact }: PageProps) {
  return (
    <>
      <Hero onOpenContact={onOpenContact} />
      <ValueProp />
      <Proof />
      <CTA onOpenContact={onOpenContact} />
    </>
  );
}
