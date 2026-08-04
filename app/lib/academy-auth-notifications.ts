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
    from: `OG Labs Code Central <${smtpUser}>`,
    to: recipient,
    subject: `Code Central: ${notification.email} ${action}`,
    text: [
      `A learner ${action} to OG Labs Code Central.`,
      "",
      `Account: ${notification.email}`,
      `User ID: ${notification.userId}`,
      `Time: ${occurredAt}`,
      `IP address: ${notification.ipAddress}`,
      `Browser/device: ${notification.userAgent}`,
    ].join("\n"),
  });
}
