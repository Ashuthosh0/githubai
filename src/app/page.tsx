'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 p-4 sm:p-8 md:p-12 lg:p-16 text-center overflow-hidden">
      {/* Cutting-Edge Background Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radial Gradient Glow */}
        <div className="absolute -top-64 -left-64 w-[800px] h-[800px] bg-gradient-to-r from-purple-400 via-blue-500 to-pink-500 rounded-full opacity-20 blur-[250px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-300 via-blue-400 to-purple-500 rounded-full opacity-20 blur-[200px]" />

        {/* SVG Waves */}
        <svg className="absolute bottom-0 w-full opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="0.3" d="M0,192L48,192C96,192,192,192,288,197.3C384,203,480,213,576,208C672,203,768,181,864,160C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>

        {/* Particle Grid */}
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

        {/* Rotating Hexagon */}
        <svg className="absolute top-20 left-20 w-40 h-40 opacity-20" viewBox="0 0 100 100" fill="none">
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
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="30s" repeatCount="indefinite" />
        </svg>
      </div>

      {/* Logo with 3D Hover */}
      <div className="relative mb-6 transform transition-transform duration-500 hover:scale-110 hover:-translate-y-2 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-20 blur-md rounded-full" />
        <Image 
          src='/logo2.png' 
          alt="GitHubAI Logo" 
          width={160} 
          height={160} 
          className="relative rounded-full shadow-2xl border-2 border-blue-100"
          priority
        />
      </div>

      {/* Hero Content */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 animate-fade-in z-10">
        Welcome to GitHubAI
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-md sm:max-w-lg md:max-w-2xl mx-auto mb-8 leading-relaxed z-10">
        Your intelligent assistant for managing projects and meetings with ease. Streamline your workflow with cutting-edge AI.
      </p>

      <Link href="/dashboard" passHref>
        <Button 
          className="mt-4 px-8 py-4 text-base sm:text-lg lg:text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 z-10"
          size="lg" 
          variant="default"
        >
          Go to Dashboard
        </Button>
      </Link>
    </main>
  )
}
