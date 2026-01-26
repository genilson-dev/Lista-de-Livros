import { hash } from "bcryptjs";
import { bankPrisma } from "../../prisma/index.js";
import { CreateUserRequest } from "../../interfaces/CreateUserRequest.js";
import jwt from "jsonwebtoken";

class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) {
    if (!email) {
      throw new Error("Email is required");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    const emailAlreadyExists = await bankPrisma.user.findUnique({
      where: { email },
    });

    if (emailAlreadyExists) {
      throw new Error("Email already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await bankPrisma.user.create({
      data: {
        name,
        email,
        password: passwordHash,
      },
    });

    // 🔐 GERA O TOKEN AQUI
    const secret = process.env.JWT_SECRET;

    if (!secret) {
      throw new Error("JWT secret not configured");
    }

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      secret,
      {
        subject: user.id,
        expiresIn: "10d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token,
    };
  }
}

export { CreateUserService };
