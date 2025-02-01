import React from 'react';
import { Links } from './links/links';
import { Toaster } from "@/components/toaster";

export function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container p-4 md:p-8">
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
          Meteor + shadcn/ui Project
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-2">
          Create real-time apps with beautifully designed components
        </p>
        <Links />
        <Toaster />
      </div>
    </div>
  );
}

