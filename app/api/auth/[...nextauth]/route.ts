import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "@/lib/prisma/user";
import { comparePasswords } from "@/lib/utils/helpers";
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        const { email, password } = credentials;
        try {
          const user: any = await getUserByEmail(email);
          if (!user) return null;
          const passwordMatch = await comparePasswords(password, user.password);
          if (passwordMatch) {
            return user;
          } else {
            console.log("no match pass");
            return null;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },

  callbacks: {
    signIn({ user, account, profile, email, credentials }: any) {
      if (!user.active) return false;
      return true;
    },
    async jwt({ token, account, profile, user }: any) {
      if (user) {
        token.active = user.active;
        token.role = user.role;
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token, user }: any) {
      session.user.active = token.active;
      return session;
    },
  },

  // pages: {
  //   signIn: "/auth/signin",
  // },
  theme: {
    colorScheme: "auto",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
