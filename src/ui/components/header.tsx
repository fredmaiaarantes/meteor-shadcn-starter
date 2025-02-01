import React from 'react';

export function Header() {
  return (
    <header className="mb-8">
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
        Meteor + shadcn/ui Project
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-2">
        Create real-time apps with beautifully designed components
      </p>
    </header>
  );
} 