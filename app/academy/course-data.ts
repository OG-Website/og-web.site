export type Lesson = {
  id: string;
  title: string;
  minutes: number;
  summary: string;
  outcome: string;
  steps?: LessonStep[];
};

export type LessonStep = {
  title: string;
  explanation: string[];
  terms?: { term: string; meaning: string }[];
  example?: string;
  task: string;
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
    description:
      "No assumed knowledge. Learn what computers, files, programs and code actually are before writing your first instructions.",
    lessons: [
      {
        id: "what-is-a-computer",
        title: "What a computer actually does",
        minutes: 25,
        summary:
          "Learn what a computer is and follow information from input to output.",
        outcome:
          "Identify hardware and software, then explain input, processing, storage and output using an everyday example.",
        steps: [
          {
            title: "What is a computer?",
            explanation: [
              "A computer is an electronic machine that follows instructions. It receives information, works with that information and produces a result.",
              "A laptop is a computer, but so are a smartphone, games console, smart television and many car systems. They look different, but they all follow instructions and work with data.",
            ],
            terms: [
              {
                term: "Instruction",
                meaning: "A single action that tells a computer what to do.",
              },
              {
                term: "Data",
                meaning:
                  "Information a computer can receive, store or process, such as text, numbers, pictures or sound.",
              },
            ],
            example:
              "When you use a calculator app, pressing 2 + 3 gives the computer data and an instruction. The app follows its programmed rules and displays 5.",
            task: "Name two computers you have used today. For each one, write one job it performed for you.",
          },
          {
            title: "Input, processing and output",
            explanation: [
              "Input is information sent into a computer. Processing is the work the computer performs. Output is the result it gives back.",
              "This is often shortened to IPO: Input, Processing, Output. IPO is a useful way to explain what any program is doing.",
            ],
            terms: [
              {
                term: "Input",
                meaning:
                  "Information entering a computer, such as a key press, mouse click, voice command or camera image.",
              },
              {
                term: "Processing",
                meaning:
                  "The computer following instructions to calculate, compare, change or move data.",
              },
              {
                term: "Output",
                meaning:
                  "The result produced, such as text on a screen, sound from a speaker or a printed page.",
              },
            ],
            example:
              "You type the letter H (input). The word processor identifies the key and updates the document (processing). H appears on the screen (output).",
            task: "Explain the input, processing and output when you unlock a phone using a PIN. Write one short sentence for each stage.",
          },
          {
            title: "Storage keeps data for later",
            explanation: [
              "Output is not always saved. Storage keeps data so it can be used again after an app closes or a computer restarts.",
              "Files can be stored on an internal drive, USB drive, memory card or an online cloud service. Saving a file copies its data to a chosen storage location.",
            ],
            terms: [
              {
                term: "Storage",
                meaning: "A place where data is kept for later use.",
              },
              {
                term: "File",
                meaning:
                  "A named collection of stored data, such as a document, photograph or program.",
              },
            ],
            example:
              "A photograph shown on screen is output. When the photograph is saved to the phone and remains after a restart, it is stored data.",
            task: "Find one file on your device. Write its name, what kind of data it contains and where you think it is stored. Do not include private information.",
          },
          {
            title: "Hardware and software work together",
            explanation: [
              "Hardware means the physical parts you can touch. Examples include a keyboard, screen, processor, memory and storage drive.",
              "Software means the instructions and programs that run on the hardware. Windows, a web browser and a game are software. Software tells the hardware which operations to perform.",
            ],
            terms: [
              {
                term: "Hardware",
                meaning: "The physical electronic parts of a computer.",
              },
              {
                term: "Software",
                meaning:
                  "Programs and instructions that tell computer hardware what to do.",
              },
              {
                term: "Program",
                meaning:
                  "An organised set of instructions written to perform a task.",
              },
            ],
            example:
              "The keyboard is hardware. A word processor is software. The software receives key presses from the keyboard and tells the screen which letters to display.",
            task: "List three hardware items and three software items on the device you are using. Explain one way a hardware item and software program work together.",
          },
          {
            title: "Check what you understand",
            explanation: [
              "You do not need to memorise a definition word for word. You need to recognise each part and explain it using an example.",
              "Answer the questions below without looking back first. Then review earlier steps and correct anything you missed.",
            ],
            task: "Answer all four questions: 1. What is the difference between hardware and software? 2. What does IPO stand for? 3. Is clicking a mouse input, processing or output? 4. Why is storage different from output?",
          },
        ],
      },
      {
        id: "files-folders-paths",
        title: "Files, folders and paths",
        minutes: 24,
        summary: "Create, find and organise files without getting lost.",
        outcome:
          "Read Windows and Linux paths and safely create a course workspace.",
      },
      {
        id: "first-terminal",
        title: "Your first terminal session",
        minutes: 25,
        summary:
          "Understand the prompt, commands, arguments and output before typing anything risky.",
        outcome: "Navigate folders and inspect files from a terminal.",
      },
    ],
  },
  {
    number: "02",
    title: "Python from zero",
    description:
      "Build small security-themed programs while learning variables, decisions, loops, functions and errors.",
    lessons: [
      {
        id: "python-first-program",
        title: "Your first Python program",
        minutes: 30,
        summary: "Write, run and change a program one line at a time.",
        outcome: "Create a program that accepts and validates a username.",
      },
      {
        id: "python-decisions",
        title: "Decisions and validation",
        minutes: 35,
        summary: "Use conditions to make a program respond safely to input.",
        outcome:
          "Build a password-strength teaching checker without storing passwords.",
      },
      {
        id: "python-loops",
        title: "Loops, lists and log records",
        minutes: 40,
        summary: "Process repeated data and recognise useful patterns.",
        outcome: "Read a sample login log and count failed attempts.",
      },
    ],
  },
  {
    number: "03",
    title: "Networks without the mystery",
    description:
      "Understand how devices communicate before using network tools: addresses, ports, protocols, DNS and routing.",
    lessons: [
      {
        id: "network-basics",
        title: "How two computers communicate",
        minutes: 35,
        summary: "Packets, switches, routers and the journey of a message.",
        outcome: "Draw and explain a small home or lab network.",
      },
      {
        id: "ip-addresses",
        title: "IP addresses and CIDR",
        minutes: 45,
        summary:
          "Decode IPv4 addresses, masks, private ranges and CIDR notation.",
        outcome:
          "Identify a device address, network range and loopback address.",
      },
      {
        id: "ports-protocols",
        title: "Ports, protocols and DNS",
        minutes: 40,
        summary: "Understand services before scanning or troubleshooting them.",
        outcome: "Explain TCP, UDP, DNS, HTTP and common service ports.",
      },
    ],
  },
  {
    number: "04",
    title: "Linux and defensive tooling",
    description:
      "Use an isolated Linux workspace, inspect processes and permissions, and learn the evidence-first security workflow.",
    lessons: [
      {
        id: "linux-basics",
        title: "Linux from first login",
        minutes: 40,
        summary: "The filesystem, users, permissions and help commands.",
        outcome:
          "Work safely in a Linux terminal and explain each command used.",
      },
      {
        id: "logs-processes",
        title: "Processes, services and logs",
        minutes: 45,
        summary: "See what is running and where systems record events.",
        outcome: "Find a process and interpret a supplied authentication log.",
      },
      {
        id: "hashing-integrity",
        title: "Hashing and file integrity",
        minutes: 35,
        summary:
          "Use hashes to detect change without confusing hashing with encryption.",
        outcome: "Create and compare checksums for safe sample files.",
      },
    ],
  },
  {
    number: "05",
    title: "Ethical security labs",
    description:
      "Move into isolated, deliberately vulnerable targets with clear scope, evidence and stop conditions.",
    lessons: [
      {
        id: "scope-rules",
        title: "Permission, scope and lab safety",
        minutes: 30,
        summary:
          "Know what you may test, where testing stops and how to record authorisation.",
        outcome: "Write a complete scope for an isolated practice lab.",
      },
      {
        id: "nmap-lab",
        title: "Your first authorised Nmap lab",
        minutes: 50,
        summary:
          "Discover an isolated lab host and understand every target and option.",
        outcome:
          "Run a low-impact discovery exercise and explain the evidence.",
      },
      {
        id: "web-lab",
        title: "Your first web security lab",
        minutes: 55,
        summary:
          "Use browser developer tools against a deliberately vulnerable local application.",
        outcome: "Record one safe finding with impact and remediation.",
      },
    ],
  },
  {
    number: "06",
    title: "Build your first security project",
    description:
      "Combine coding, networking and evidence into a portfolio project you can explain rather than merely demonstrate.",
    lessons: [
      {
        id: "project-plan",
        title: "Choose and plan the project",
        minutes: 30,
        summary: "Turn a security problem into small, testable requirements.",
        outcome:
          "Create a project brief, threat assumptions and acceptance tests.",
      },
      {
        id: "log-analyser",
        title: "Build a Python log analyser",
        minutes: 75,
        summary: "Develop a defensive tool in guided stages with tests.",
        outcome: "Produce a working analyser for supplied safe sample logs.",
      },
      {
        id: "report-present",
        title: "Test, report and present",
        minutes: 45,
        summary:
          "Prove what works, state limitations and communicate findings clearly.",
        outcome: "Publish a portfolio-ready project report and demonstration.",
      },
    ],
  },
];

export const allLessons = courseModules.flatMap((module) =>
  module.lessons.map((lesson) => ({
    ...lesson,
    moduleNumber: module.number,
    moduleTitle: module.title,
  })),
);

export function getLesson(id: string) {
  return allLessons.find((lesson) => lesson.id === id);
}
