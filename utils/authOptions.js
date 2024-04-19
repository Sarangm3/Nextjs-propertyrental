import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '@/config/database';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Email or Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await User.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error('No user found with this email');
          }
          if (!user.isVerified) {
            throw new Error('Please verify your account before logging in');
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error('Incorrect password');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token._id = user._id?.toString(); // Convert ObjectId to string
        token.username = user.username;
      }
      if (account?.provider !== 'credentials') {
        const user = await User.findOne({ email: token.email });
        token._id = user._id?.toString();
        token.username = user.username;
      }
      return token;
    },
    //Invoked on successful sign in
    async signIn({ profile }) {
      //Only for google auth if user
      //first time signIn store data in database
      //1. Connect to database
      if (profile) {
        await connectDB();

        //2. Check if user exists
        const userExists = await User.findOne({
          email: profile.email,
        });
        // 3. If not, then add user to database
        if (!userExists) {
          // Truncate user name if too long
          const username = profile.name.slice(0, 20);

          await User.create({
            email: profile.email,
            username,
            image: profile.picture,
            isVerified: true,
          });
        }
      }

      //4. Return true to allow sign in
      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token._id;
        session.user.name = token.username;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  secret: process.env.NEXTAUTH_SECRET,
};
