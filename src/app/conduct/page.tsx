"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CodeOfConduct() {
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#125636";
    return () => {
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-between gap-10 py-12 pt-0 md:flex-row md:gap-0 md:py-20">
        <div className="order-2 flex w-full flex-grow flex-col items-start justify-start gap-6 md:order-1">
          <Link href="/" className="-mb-2 text-white hover:underline">
            ← Go back
          </Link>
          
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl font-bold text-white md:text-4xl">
                Code of Conduct
              </h1>
              <p className="text-lg text-w-300 mt-2">
                British Columbia Youth Developer Collective
              </p>
            </div>

            <div className="flex flex-col gap-6 text-white">
              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">TL;DR</h2>
                <ul className="list-disc list-inside text-w-300 space-y-2 ml-4">
                    <li>Treat everyone with respect and kindness.</li>
                    <li>Be thoughtful in how you communicate.</li>
                    <li>Don&apos;t be destructive or inflammatory.</li>
                    <li>If you encounter an issue, please mail <a href="mailto:team@bcydc.ca">team@bcydc.ca</a></li>
                </ul>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">Why have a Code of Conduct?</h2>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">Where does the Code of Conduct apply?</h2>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">Hacker Values</h2>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">Unwelcome Behavior</h2>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">Enforcement</h2>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">Reporting Issues</h2>
              </section>

              <section className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold text-white">Acknowledgments</h2>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
