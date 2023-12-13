import { connectDB } from "@/libs/mongooseDb";
import { User } from "@/models/userModels";
import bcrypt from "bcrypt";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, username, name, password } = await req.json();
    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 12);
    const candidate = await User.findOne({
      email,
    });

    if (candidate) {
      return NextResponse.json("Bu ulanyjy öň hasaba alyndy", { status: 404 });
    }
    const user = new User({
      email,
      username,
      name,
      hashedPassword,
    });
    await user.save();
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}
