import prisma from "../prisma";

export const UserRepo = {
  findByEmail(email: string) {
    return prisma.userdata.findUnique({ where: { email } });
  }
};