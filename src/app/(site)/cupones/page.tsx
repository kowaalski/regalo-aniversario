import { SectionHeader } from "@/components/SectionHeader";
import { CouponCard } from "@/components/CouponCard";
import { Reveal } from "@/components/Reveal";
import { getCoupons } from "@/lib/queries";

export default function CouponsPage() {
  const coupons = getCoupons();

  return (
    <div>
      <SectionHeader
        eyebrow="Para canjear cuando quieras"
        title="Cupones"
        description="Sin caducidad. Solo pídelos."
        tone="salvia"
      />

      <div className="mx-auto grid max-w-3xl gap-5 px-4 pb-24 sm:px-6">
        {coupons.map((coupon, index) => (
          <Reveal key={coupon.id} delay={index * 60}>
            <CouponCard coupon={coupon} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
