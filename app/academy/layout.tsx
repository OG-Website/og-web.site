import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "OG Labs Code Central",
    template: "%s | OG Labs Code Central",
  },
  description:
    "Beginner cybersecurity coding lessons, guided practice and learner progress from OG Labs.",
  applicationName: "OG Labs Code Central",
};

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
