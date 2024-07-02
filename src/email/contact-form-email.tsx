import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{`You've got a new message from your portfolio site!`}</Preview>
      <Tailwind>
        <Body className="bg-gray-50 text-gray-900">
          <Container className="max-w-2xl mx-auto p-8">
            <Section className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-indigo-600 p-6">
                <Heading className="text-3xl font-bold text-white mb-2">
                  New Message Alert
                </Heading>
                <Text className="text-indigo-200">
                  {`You've received a new message from your portfolio's contact form.`}
                </Text>
              </div>
              <div className="p-6">
                <Text className="text-lg mb-4 text-gray-700">
                  <span className="font-semibold">Message:</span> {message}
                </Text>
                <Hr className="my-6 border-gray-200" />
                <Text className="text-lg text-gray-700">
                  <span className="font-semibold">{`Sender's Email:`}</span> {senderEmail}
                </Text>
                <Hr className="my-6 border-gray-200" />
                <Text className="text-sm text-gray-500">
                  Please do not reply directly to this email. If you wish to contact the sender, use the email provided above.
                </Text>
                <div className="mt-8">
                  <Link href="https://www.linkedin.com/in/sheikh-ubaid/" className="text-indigo-600 hover:text-indigo-800 font-medium">
                    Visit your portfolio
                  </Link>
                </div>
              </div>
              <div className="bg-gray-100 p-6 text-center">
                <Text className="text-xs text-gray-500">
                  &copy; {new Date().getFullYear()} Sheikh Ubaid Ullah. All rights reserved.
                </Text>
              </div>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
