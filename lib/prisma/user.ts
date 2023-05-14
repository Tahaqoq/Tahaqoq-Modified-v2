import prisma from ".";
import { hashPassword } from "../utils/helpers";

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) return;
    return user;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
export const register = async (data: any) => {
  const { email, password, name } = data;

  try {
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
        active: false,
        role: "user",
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return { error };
  }
};
