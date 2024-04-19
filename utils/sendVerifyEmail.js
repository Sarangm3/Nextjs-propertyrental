import { resend } from '@/config/resendEmail';
import VerificationEmail from '@/emails/verificationEmail';

export const sendVerifyEmail = async (email, username, verifyCode) => {
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'PropertyRento Verification Code',
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return {
      success: true,
      message: 'Verification email sent successfully.',
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: 'Failed to send verification email.' };
  }
};
