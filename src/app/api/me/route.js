import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Supatkon Pundontong",
    studentId: "650610812",
  });
};
