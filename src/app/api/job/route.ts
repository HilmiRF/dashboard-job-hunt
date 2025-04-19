import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

export async function POST(request: NextRequest) {
    const data = await request.json();

    const job = await prisma.job.create({
        data
    });

    return NextResponse.json(job);
}