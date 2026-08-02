export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  outcome: string;
};

export type CourseModule = {
  number: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const courseModules: CourseModule[] = [
  {
    number: "01",
    title: "Start here: computers and code",
    description: "No assumed knowledge. Learn what computers, files, programs and code actually are before writing your first instructions.",
    lessons: [
      { id: "what-is-a-computer", title: "What a computer actually does", minutes: 18, summary: "Hardware, software, input, processing, storage and output in plain English.", outcome: "Identify the main parts of a computer and explain how a program becomes an action." },
      { id: "files-folders-paths", title: "Files, folders and paths", minutes: 24, summary: "Create, find and organise files without getting lost.", outcome: "Read Windows and Linux paths and safely create a course workspace." },
      { id: "first-terminal", title: "Your first terminal session", minutes: 25, summary: "Understand the prompt, commands, arguments and output before typing anything risky.", outcome: "Navigate folders and inspect files from a terminal." },
    ],
  },
  {
    number: "02",
    title: "Python from zero",
    description: "Build small security-themed programs while learning variables, decisions, loops, functions and errors.",
    lessons: [
      { id: "python-first-program", title: "Your first Python program", minutes: 30, summary: "Write, run and change a program one line at a time.", outcome: "Create a program that accepts and validates a username." },
      { id: "python-decisions", title: "Decisions and validation", minutes: 35, summary: "Use conditions to make a program respond safely to input.", outcome: "Build a password-strength teaching checker without storing passwords." },
      { id: "python-loops", title: "Loops, lists and log records", minutes: 40, summary: "Process repeated data and recognise useful patterns.", outcome: "Read a sample login log and count failed attempts." },
    ],
  },
  {
    number: "03",
    title: "Networks without the mystery",
    description: "Understand how devices communicate before using network tools: addresses, ports, protocols, DNS and routing.",
    lessons: [
      { id: "network-basics", title: "How two computers communicate", minutes: 35, summary: "Packets, switches, routers and the journey of a message.", outcome: "Draw and explain a small home or lab network." },
      { id: "ip-addresses", title: "IP addresses and CIDR", minutes: 45, summary: "Decode IPv4 addresses, masks, private ranges and CIDR notation.", outcome: "Identify a device address, network range and loopback address." },
      { id: "ports-protocols", title: "Ports, protocols and DNS", minutes: 40, summary: "Understand services before scanning or troubleshooting them.", outcome: "Explain TCP, UDP, DNS, HTTP and common service ports." },
    ],
  },
  {
    number: "04",
    title: "Linux and defensive tooling",
    description: "Use an isolated Linux workspace, inspect processes and permissions, and learn the evidence-first security workflow.",
    lessons: [
      { id: "linux-basics", title: "Linux from first login", minutes: 40, summary: "The filesystem, users, permissions and help commands.", outcome: "Work safely in a Linux terminal and explain each command used." },
      { id: "logs-processes", title: "Processes, services and logs", minutes: 45, summary: "See what is running and where systems record events.", outcome: "Find a process and interpret a supplied authentication log." },
      { id: "hashing-integrity", title: "Hashing and file integrity", minutes: 35, summary: "Use hashes to detect change without confusing hashing with encryption.", outcome: "Create and compare checksums for safe sample files." },
    ],
  },
  {
    number: "05",
    title: "Ethical security labs",
    description: "Move into isolated, deliberately vulnerable targets with clear scope, evidence and stop conditions.",
    lessons: [
      { id: "scope-rules", title: "Permission, scope and lab safety", minutes: 30, summary: "Know what you may test, where testing stops and how to record authorisation.", outcome: "Write a complete scope for an isolated practice lab." },
      { id: "nmap-lab", title: "Your first authorised Nmap lab", minutes: 50, summary: "Discover an isolated lab host and understand every target and option.", outcome: "Run a low-impact discovery exercise and explain the evidence." },
      { id: "web-lab", title: "Your first web security lab", minutes: 55, summary: "Use browser developer tools against a deliberately vulnerable local application.", outcome: "Record one safe finding with impact and remediation." },
    ],
  },
  {
    number: "06",
    title: "Build your first security project",
    description: "Combine coding, networking and evidence into a portfolio project you can explain rather than merely demonstrate.",
    lessons: [
      { id: "project-plan", title: "Choose and plan the project", minutes: 30, summary: "Turn a security problem into small, testable requirements.", outcome: "Create a project brief, threat assumptions and acceptance tests." },
      { id: "log-analyser", title: "Build a Python log analyser", minutes: 75, summary: "Develop a defensive tool in guided stages with tests.", outcome: "Produce a working analyser for supplied safe sample logs." },
      { id: "report-present", title: "Test, report and present", minutes: 45, summary: "Prove what works, state limitations and communicate findings clearly.", outcome: "Publish a portfolio-ready project report and demonstration." },
    ],
  },
];

export const allLessons = courseModules.flatMap((module) =>
  module.lessons.map((lesson) => ({ ...lesson, moduleNumber: module.number, moduleTitle: module.title })),
);

export function getLesson(id: string) {
  return allLessons.find((lesson) => lesson.id === id);
}
