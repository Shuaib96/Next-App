// services/auth.service.ts
import { UserRepo } from "../lib/db/user.repo";

export const AuthService = {
  async login(email: string, password: string) {
    const user = await UserRepo.findByEmail(email);

    if (!user) throw new Error("User not found");

    // password check example
    if (user.password !== password) {
      throw new Error("Invalid credentials");
    }

    return user;
  }
};
