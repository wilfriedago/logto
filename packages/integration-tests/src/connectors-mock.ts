export const facebookConnectorId = 'facebook-universal';
export const facebookConnectorTarget = 'facebook';
export const facebookConnectorConfig = {
  clientId: 'application_foo',
  clientSecret: 'secret_bar',
};

export const aliyunSmsConnectorId = 'aliyun-short-message-service';
export const aliyunSmsConnectorConfig = {
  accessKeyId: 'access-key-id-value',
  accessKeySecret: 'access-key-secret-value',
  signName: 'sign-name-value',
  templates: [
    {
      usageType: 'SignIn',
      templateCode: 'template-code-value',
    },
    {
      usageType: 'Register',
      templateCode: 'template-code-value',
    },
    {
      usageType: 'Test',
      templateCode: 'template-code-value',
    },
  ],
};

export const twilioSmsConnectorId = 'twilio-short-message-service';
export const twilioSmsConnectorConfig = {
  accountSID: 'account-sid-value',
  authToken: 'auth-token-value',
  fromMessagingServiceSID: 'from-messaging-service-sid-value',
  templates: [
    {
      content: 'This is for sign-in purposes only. Your passcode is {{code}}.',
      usageType: 'SignIn',
    },
    {
      content: 'This is for registering purposes only. Your passcode is {{code}}.',
      usageType: 'Register',
    },
    {
      content: 'This is for testing purposes only. Your passcode is {{code}}.',
      usageType: 'Test',
    },
  ],
};

export const aliyunEmailConnectorId = 'aliyun-direct-mail';
export const aliyunEmailConnectorConfig = {
  accessKeyId: 'your-access-key-id-value',
  accessKeySecret: 'your-access-key-secret-value',
  accountName: 'noreply@logto.io',
  fromAlias: 'from-alias-value',
  templates: [
    {
      subject: 'register-template-subject-value',
      content: 'Logto: Your passcode is {{code}}. (regitser template)',
      usageType: 'Register',
    },
    {
      subject: 'sign-in-template-subject-value',
      content: 'Logto: Your passcode is {{code}}. (sign-in template)',
      usageType: 'SignIn',
    },
    {
      subject: 'test-template-subject-value',
      content: 'Logto: Your passcode is {{code}}. (test template)',
      usageType: 'Test',
    },
  ],
};

export const sendgridEmailConnectorId = 'sendgrid-email-service';
export const sendgridEmailConnectorConfig = {
  apiKey: 'api-key-value',
  fromEmail: 'noreply@logto.test.io',
  fromName: 'from-name-value',
  templates: [
    {
      usageType: 'SignIn',
      type: 'text/plain',
      subject: 'Logto SignIn Template',
      content: 'This is for sign-in purposes only. Your passcode is {{code}}.',
    },
    {
      usageType: 'Register',
      type: 'text/plain',
      subject: 'Logto Register Template',
      content: 'This is for registering purposes only. Your passcode is {{code}}.',
    },
    {
      usageType: 'Test',
      type: 'text/plain',
      subject: 'Logto Test Template',
      content: 'This is for testing purposes only. Your passcode is {{code}}.',
    },
  ],
};

export const mockSmsConnectorId = 'mock-short-message-service';
export const mockSmsConnectorConfig = {
  accountSID: 'account-sid-value',
  authToken: 'auth-token-value',
  fromMessagingServiceSID: 'from-messaging-service-sid-value',
  templates: [
    {
      content: 'This is for sign-in purposes only. Your passcode is {{code}}.',
      usageType: 'SignIn',
    },
    {
      content: 'This is for registering purposes only. Your passcode is {{code}}.',
      usageType: 'Register',
    },
    {
      content: 'This is for testing purposes only. Your passcode is {{code}}.',
      usageType: 'Test',
    },
  ],
};

export const mockEmailConnectorId = 'mock-email-service';
export const mockEmailConnectorConfig = {
  apiKey: 'api-key-value',
  fromEmail: 'noreply@logto.test.io',
  fromName: 'from-name-value',
  templates: [
    {
      usageType: 'SignIn',
      type: 'text/plain',
      subject: 'Logto SignIn Template',
      content: 'This is for sign-in purposes only. Your passcode is {{code}}.',
    },
    {
      usageType: 'Register',
      type: 'text/plain',
      subject: 'Logto Register Template',
      content: 'This is for registering purposes only. Your passcode is {{code}}.',
    },
    {
      usageType: 'Test',
      type: 'text/plain',
      subject: 'Logto Test Template',
      content: 'This is for testing purposes only. Your passcode is {{code}}.',
    },
  ],
};
