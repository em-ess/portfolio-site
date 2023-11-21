import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2023 Michelle Song Dev. All rights reserved.
      </small>
      <p className="text-xs">
        <span>
          Website built with React & Next.js (App Router & Server Actions),
          TypeScript, Tailwind CSS, Framer Motion, React Email & Resend & Toast,
          Vercel hosted.{" "}
        </span>
      </p>
    </footer>
  );
}
