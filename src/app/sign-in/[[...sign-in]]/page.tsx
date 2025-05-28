'use client'
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 p-4 sm:p-8 md:p-12 lg:p-16 text-center overflow-hidden">
      {/* 🎨 Background Graphics */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radial Gradient Glows */}
        <div className="absolute -top-64 -left-64 w-[800px] h-[800px] bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 rounded-full opacity-20 blur-[250px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-300 via-blue-400 to-purple-500 rounded-full opacity-20 blur-[200px]" />

        {/* Animated Wave */}
        <svg className="absolute bottom-0 w-full opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="0.3" d="M0,192L48,192C96,192,192,192,288,197.3C384,203,480,213,576,208C672,203,768,181,864,160C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>

        {/* Floating Particles */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 5 + 2}
              fill="#3b82f6"
              opacity="0.3"
            >
              <animate
                attributeName="cy"
                values={`${Math.random() * 1000};${Math.random() * 1000}`}
                dur="20s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>

        {/* Multiple Rotating Hexagons */}
        {[{ top: '20', left: '20', size: 40 }, { top: '40', right: '10', size: 30 }, { bottom: '20', left: '40', size: 50 }, { bottom: '30', right: '30', size: 35 }].map((hex, i) => (
          <svg key={i} className={`absolute ${hex.top ? `top-${hex.top}` : ''} ${hex.bottom ? `bottom-${hex.bottom}` : ''} ${hex.left ? `left-${hex.left}` : ''} ${hex.right ? `right-${hex.right}` : ''} w-${hex.size} h-${hex.size} opacity-20`} viewBox="0 0 100 100" fill="none">
            <path
              d="M50 10 L80 30 L80 70 L50 90 L20 70 L20 30 Z"
              fill="url(#hexGradient)"
            />
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur={`${20 + i * 5}s`} repeatCount="indefinite" />
          </svg>
        ))}
      </div>

      {/* 🌟 Sign-In Card */}
      <div className="relative z-10 max-w-md w-full bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/logo2.png" // Update with your actual logo path
            alt="GitHubAI Logo"
            width={100}
            height={100}
            className="rounded-full shadow-md"
          />
        </div>
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h1>
        <p className="text-sm text-gray-600 mb-6">Sign in to continue to GitHubAI</p>

        {/* Clerk SignIn */}
        <SignIn
          appearance={{
            elements: {
              formButtonPrimary: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold',
              card: 'shadow-none border-none',
            },
          }}
        />
      </div>
    </main>
  )
}
