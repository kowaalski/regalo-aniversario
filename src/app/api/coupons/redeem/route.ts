import { NextRequest, NextResponse } from "next/server";
import { redeemCoupon, unredeemCoupon } from "@/lib/queries";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const id = Number(body?.id);

  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: "id inválido" }, { status: 400 });
  }

  const coupon = redeemCoupon(id);

  if (!coupon) {
    return NextResponse.json({ error: "Cupón no encontrado" }, { status: 404 });
  }

  return NextResponse.json({ coupon });
}

export async function DELETE(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const id = Number(body?.id);

  if (!Number.isInteger(id)) {
    return NextResponse.json({ error: "id inválido" }, { status: 400 });
  }

  const coupon = unredeemCoupon(id);

  if (!coupon) {
    return NextResponse.json({ error: "Cupón no encontrado" }, { status: 404 });
  }

  return NextResponse.json({ coupon });
}
