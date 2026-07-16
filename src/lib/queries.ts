import {
  MILESTONES,
  REASONS,
  COUPONS_SEED,
  SONGS,
  type Milestone,
  type Reason,
  type Song,
} from "@/lib/data";

export type { Milestone, Reason, Song };

export type Coupon = {
  id: number;
  title: string;
  description: string;
  redeemed_at: string | null;
};

// Todo el contenido fijo vive en src/lib/data.ts. Lo único que cambia en
// tiempo de ejecución (cupones canjeados) se guarda aquí en memoria del
// proceso: no hay base de datos ni fichero en disco, así que se reinicia si
// reinicias el servidor. En globalThis para que sobreviva a los recargas de
// módulos de Next.js en desarrollo.
declare global {
  var __regaloCoupons: Coupon[] | undefined;
}

const coupons: Coupon[] =
  globalThis.__regaloCoupons ??
  COUPONS_SEED.map((c) => ({ ...c, redeemed_at: null }));

if (process.env.NODE_ENV !== "production") {
  globalThis.__regaloCoupons = coupons;
}

export function getMilestones(): Milestone[] {
  return MILESTONES;
}

export function getReasons(): Reason[] {
  return REASONS;
}

export function getCoupons(): Coupon[] {
  return coupons;
}

export function redeemCoupon(id: number): Coupon | null {
  const coupon = coupons.find((c) => c.id === id);
  if (!coupon) return null;
  if (!coupon.redeemed_at) {
    coupon.redeemed_at = new Date().toISOString();
  }
  return coupon;
}

export function unredeemCoupon(id: number): Coupon | null {
  const coupon = coupons.find((c) => c.id === id);
  if (!coupon) return null;
  coupon.redeemed_at = null;
  return coupon;
}

export function getSongs(): Song[] {
  return SONGS;
}
