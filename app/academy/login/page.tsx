import { Suspense } from "react";
import LoginForm from "./login-form";
import AcademyBrand from "../academy-brand";

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#070909] px-4 py-10 text-white">
      <div className="w-full max-w-md">
        <div className="flex justify-center">
          <AcademyBrand large />
        </div>
        <section className="mt-8 border border-white/12 bg-[#0b1420] p-6 md:p-8">
          <div className="text-sm font-bold uppercase tracking-[0.25em] text-[#20d9ff]">
            OG Labs Code Central
          </div>
          <h1 className="display-face mt-3 text-3xl uppercase">
            Learner portal
          </h1>
          <p className="mb-7 mt-3 leading-7 text-zinc-400">
            Your lessons, coding exercises and progress in one place.
          </p>
          <Suspense>
            <LoginForm />
          </Suspense>
        </section>
      </div>
    </main>
  );
}
