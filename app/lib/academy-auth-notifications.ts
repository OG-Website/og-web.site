import nodemailer from "nodemailer";

type AuthEvent = "login" | "registration";

interface AuthNotification {
  event: AuthEvent;
  email: string;
  userId: string;
  ipAddress: string;
  userAgent: string;
  occurredAt: Date;
}

export async function sendAcademyAuthNotification(
  notification: AuthNotification,
) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipient =
    process.env.ACADEMY_AUTH_NOTIFICATION_TO ||
    process.env.CONTACT_TO ||
    smtpUser;

  if (!smtpUser || !smtpPass || !recipient) {
    throw new Error("Academy authentication email is not configured.");
  }

  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const action = notification.event === "login" ? "logged in" : "registered";
  const occurredAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Europe/London",
  }).format(notification.occurredAt);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.privateemail.com",
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.sendMail({
    from: `OG Labs Beginner Code Centre <${smtpUser}>`,
    to: recipient,
    subject: `Code Central: ${notification.email} ${action}`,
    text: [
      `A learner ${action} to OG Labs Beginner Code Centre.`,
      "",
      `Account: ${notification.email}`,
      `User ID: ${notification.userId}`,
      `Time: ${occurredAt}`,
      `IP address: ${notification.ipAddress}`,
      `Browser/device: ${notification.userAgent}`,
    ].join("\n"),
  });
}

export async function sendAcademyMessageNotification(notification: {
  senderName: string;
  senderEmail: string;
  recipientName: string;
  recipientEmail: string;
  body: string;
}) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpUser || !smtpPass)
    throw new Error("Academy message email is not configured.");
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "mail.privateemail.com",
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
  });
  await transporter.sendMail({
    from: `OG Labs Beginner Code Centre <${smtpUser}>`,
    to: notification.recipientEmail,
    replyTo: notification.senderEmail,
    subject: `${notification.senderName} sent you a Code Centre message`,
    text: [
      `Hi ${notification.recipientName},`,
      "",
      `${notification.senderName} sent you a message:`,
      "",
      notification.body,
      "",
      "Open the private chat to reply:",
      "https://www.og-web.site/academy/dashboard",
    ].join("\n"),
  });
}
