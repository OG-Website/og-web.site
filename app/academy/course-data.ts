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
  code?: string;
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
        title: "Write your first cybersecurity program",
        minutes: 35,
        summary: "Write and run a real Python security report in your browser.",
        outcome:
          "Run Python code, change variables and make a program flag repeated failed logins.",
        steps: [
          {
            title: "Run your first code",
            explanation: [
              "The editor below contains a complete Python program. Python is a programming language: a structured way to give a computer instructions.",
              "Press Run Python. The program will execute inside this browser and its result will appear in the Output box. You cannot damage the computer with this exercise.",
            ],
            terms: [
              {
                term: "Python",
                meaning: "A programming language designed to be readable.",
              },
              {
                term: "Code",
                meaning: "Instructions written in a programming language.",
              },
              {
                term: "Output",
                meaning: "Information a program produces when it runs.",
              },
            ],
            code: 'print("OG Labs security check")\nprint("Status: learning Python")',
            task: "Run the program. In Practice notes, copy the two output lines exactly as they appear.",
          },
          {
            title: "Change a string variable",
            explanation: [
              'A variable is a named place where a program keeps a value. The line username = "Hunter" stores the text Hunter under the name username.',
              "Text inside quotation marks is called a string. print(username) reads the stored value and sends it to the Output box.",
            ],
            terms: [
              {
                term: "Variable",
                meaning: "A name that refers to a value used by a program.",
              },
              {
                term: "String",
                meaning: "Text data written inside quotation marks.",
              },
            ],
            code: 'username = "Hunter"\nprint("User being checked:")\nprint(username)',
            task: "Run the code once. Change Hunter to your own first name, keep the quotation marks, and run it again. Record what changed in the output.",
          },
          {
            title: "Store a number",
            explanation: [
              "Programs can store numbers without quotation marks. failed_logins = 3 stores the number 3 so the program can compare or calculate with it.",
              "The comma in print lets us display text and a variable on the same output line.",
            ],
            terms: [
              {
                term: "Integer",
                meaning: "A whole number, such as 0, 3 or 100.",
              },
              {
                term: "Login",
                meaning:
                  "The process of proving who you are before accessing an account.",
              },
            ],
            code: 'username = "Hunter"\nfailed_logins = 3\nprint("User:", username)\nprint("Failed logins:", failed_logins)',
            task: "Run the code. Change failed_logins to 1, then to 5. Record both outputs and explain which line you changed.",
          },
          {
            title: "Make a security decision",
            explanation: [
              "An if statement lets a program make a decision. The condition failed_logins >= 3 asks whether the value is greater than or equal to 3.",
              "Python uses indentation to show which instruction belongs to each result. The four spaces before print are part of the code.",
            ],
            terms: [
              {
                term: "Condition",
                meaning: "A question that has a True or False answer.",
              },
              {
                term: "if",
                meaning:
                  "Python keyword that runs code when a condition is True.",
              },
              {
                term: "else",
                meaning:
                  "Python keyword that runs an alternative when the condition is False.",
              },
            ],
            code: 'failed_logins = 3\n\nif failed_logins >= 3:\n    print("Alert: review this account")\nelse:\n    print("No alert")',
            task: "Run the program with 3 failed logins. Then change the value to 2 and run it again. Explain why the output changed.",
          },
          {
            title: "Build the mini challenge",
            explanation: [
              "This small defensive program combines everything from the lesson. It stores a username, counts failed logins and displays an alert when the count reaches the chosen limit.",
              "Run it first. Then personalise the safe sample values. Never enter a real password into a learning exercise.",
            ],
            code: 'username = "training-user"\nfailed_logins = 4\nalert_limit = 3\n\nprint("OG Labs login review")\nprint("User:", username)\nprint("Failed logins:", failed_logins)\n\nif failed_logins >= alert_limit:\n    print("ALERT: investigate repeated failures")\nelse:\n    print("Result: below the alert limit")',
            task: "Change the username to a made-up name. Test failed_logins with 0, 2, 3 and 5. Record which values trigger the alert, then explain what >= means.",
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
