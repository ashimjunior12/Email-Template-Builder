import * as React from 'react';
import {
  Html,
  Body,
  Markdown,
  Heading,
  Button,
  Container,
  Hr,
  Section,
  Text,
  Img,
} from '@react-email/components';

type Props = {
  email: string;
  username: string;
  title: string;
  styles: React.CSSProperties;
  preview: boolean;
  html: string;
};




const Welcome = ({
  email,
  username,
  title, 
  styles,
  preview,
  html
}: Props) => {
  return (
    <>
      {preview && (
        <Html>
          <Body className='border'>
            <Container style={{ padding: styles.padding }}>
              <Heading
                as='h1'
                style={{
                  fontFamily: 'sans-serif',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                <span className='flex justify-center flex-col items-center'>
                  Welcome to our email service
                  <Img
                    src='https://static.vecteezy.com/system/resources/previews/008/214/517/non_2x/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg'
                    width='100'
                    height='100'
                  />
                </span>
              </Heading>{' '}
              <Hr />
              <Section>
                <Text
                  style={{
                    background: styles.backgroundColor,
                    color: styles.color,
                    padding: styles.padding,
                  }}
                >
                  <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
                    Subject: {title}
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    Dear <span style={{ fontWeight: 'bold' }}>{username}</span>,
                  </span>
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    I hope this message finds you well. I am writing to send you
                    an simple email.
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    Please find the details below:
                  </span>
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    <span style={{ fontWeight: 'bold' }}>Email:</span> {email}
                  </span>
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    <span style={{ fontWeight: 'bold' }}>Title:</span> {title}
                  </span>
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    <span style={{ fontWeight: 'bold' }}>HTML: </span>{' '}
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    Should you require any further information or clarification,
                    please do not hesitate to reach out. Thank you for your time
                    and consideration.
                  </span>
                  <br />
                  <br />
                  <span style={{ fontSize: '16px' }}>
                    Best regards, <br />
                    <span style={{ fontWeight: 'bold' }}>{username}</span>
                  </span>
                </Text>
                <Markdown
                  markdownContainerStyles={{
                    padding: '4px',
                  }}
                >
                  {html}
                </Markdown>
              </Section>
              <Button
                href='#'
                style={{
                  background: 'green',
                  border: '4px solid green',
                  padding: '5px',
                  outline: 'none',
                  color: 'white',
                  fontSize: '0.875rem', 
                  borderRadius: '0.5rem', 
                  fontWeight: '500', 
                  marginRight: '0.5rem', 
                  marginBottom: '0.5rem',
                }}
              >
                Click me
              </Button> 
            </Container>
          </Body>
        </Html>
      )}
    </>
  );
};

export default Welcome;
