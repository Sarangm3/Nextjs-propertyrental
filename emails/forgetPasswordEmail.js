import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Link,
} from '@react-email/components';

export default function VerificationEmail({ username, forgetPassword }) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Forget Password</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>
        Here&apos;s your Forget Password Link: <Link>{forgetPassword}</Link>
      </Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
          <Text>
            Please use the following forgetPassword link to complete your Login:
          </Text>
        </Row>
        <Row>
          <Link>{forgetPassword}</Link>
        </Row>
        <Row>
          <Text>
            If you did not request this link, please ignore this email.
          </Text>
        </Row>
      </Section>
    </Html>
  );
}
