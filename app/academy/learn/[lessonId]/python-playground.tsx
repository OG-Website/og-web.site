"use client";

import { Play, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";

type PyodideRuntime = {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (options: { batched: (text: string) => void }) => void;
  setStderr: (options: { batched: (text: string) => void }) => void;
};

declare global {
  interface Window {
    loadPyodide?: (options: { indexURL: string }) => Promise<PyodideRuntime>;
    academyPyodide?: Promise<PyodideRuntime>;
  }
}

const PYODIDE_ROOT = "https://cdn.jsdelivr.net/pyodide/v314.0.3/full/";

function loadRuntime() {
  if (window.academyPyodide) return window.academyPyodide;
  window.academyPyodide = new Promise<PyodideRuntime>((resolve, reject) => {
    const start = async () => {
      if (!window.loadPyodide) throw new Error("Python engine did not load.");
      resolve(await window.loadPyodide({ indexURL: PYODIDE_ROOT }));
    };
    if (window.loadPyodide) {
      start().catch(reject);
      return;
    }
    const script = document.createElement("script");
    script.src = `${PYODIDE_ROOT}pyodide.js`;
    script.async = true;
    script.onload = () => start().catch(reject);
    script.onerror = () =>
      reject(new Error("Python engine could not be downloaded."));
    document.head.appendChild(script);
  });
  return window.academyPyodide;
}

export default function PythonPlayground({
  starterCode,
}: {
  starterCode: string;
}) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState(
    "Press Run Python to see the program output.",
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    setCode(starterCode);
    setOutput("Press Run Python to see the program output.");
  }, [starterCode]);

  async function run() {
    setRunning(true);
    setOutput("Loading the Python engine...");
    const lines: string[] = [];
    try {
      const runtime = await loadRuntime();
      runtime.setStdout({ batched: (text) => lines.push(text) });
      runtime.setStderr({ batched: (text) => lines.push(text) });
      setOutput("Running...");
      await runtime.runPythonAsync(code);
      setOutput(lines.join("\n") || "Program finished without printed output.");
    } catch (error) {
      setOutput(
        error instanceof Error ? error.message : "The program could not run.",
      );
    } finally {
      setRunning(false);
    }
  }

  return (
    <section className="mt-8 border border-[#8cff41]/35 bg-[#080b0a]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#8cff41]">
            Python editor
          </div>
          <div className="mt-1 text-xs text-zinc-500">
            Runs locally in this browser
          </div>
        </div>
        <button
          type="button"
          onClick={() => setCode(starterCode)}
          className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-zinc-300"
          aria-label="Reset starter code"
          title="Reset starter code"
        >
          <RotateCcw size={16} />
        </button>
      </div>
      <label className="block">
        <span className="sr-only">Python code</span>
        <textarea
          value={code}
          onChange={(event) => setCode(event.target.value)}
          spellCheck={false}
          className="min-h-56 w-full resize-y bg-[#050706] p-5 font-mono text-sm leading-7 text-white outline-none focus:bg-black"
        />
      </label>
      <div className="grid border-t border-white/10 md:grid-cols-[auto_1fr]">
        <button
          type="button"
          onClick={run}
          disabled={running}
          className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#8cff41] px-6 font-black text-black disabled:opacity-60"
        >
          <Play size={17} fill="currentColor" />{" "}
          {running ? "Running..." : "Run Python"}
        </button>
        <div className="min-w-0 p-4">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Output
          </div>
          <pre className="mt-2 whitespace-pre-wrap break-words font-mono text-sm leading-6 text-cyan-200">
            {output}
          </pre>
        </div>
      </div>
    </section>
  );
}
