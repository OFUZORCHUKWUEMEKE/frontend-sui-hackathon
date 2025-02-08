"use client"

import Image from "next/image";
import { ChevronRight, MessageSquare, Shield, Zap, CheckCircle, Menu, Clock, Database, Bell, DollarSign } from 'lucide-react';

import React from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 font-['Satoshi']">
      <div className=" max-w-[1240px] mx-auto">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <span className="text-white text-xl font-bold cursor-pointer">Fourier</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {/* <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a> */}
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Discord
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-slate-300 hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                  <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
                  {/* <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a> */}
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                    Add to Discord
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-32 pb-16" id="features">
          <div className="text-center">
            <h1 className="text-5xl font-bold md:leading-none leading-[55px] text-white mb-6">
              Simplify stablecoin payments using AI-powered automation.
              {/* Your All-in-One Crypto Payment Assistant */}
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Create custom payment forms with natural language, accept payments via links and QR codes, and track transactions in real time—no coding or setup required.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Add to Discord <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div  className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700" id="features">
              <DollarSign className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Seamless Stablecoin Payments
              </h3>
              <p className="text-slate-300">
                Accept USDC and other stablecoins with ease through secure payment links and QR codes, making transactions fast and frictionless.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <Database className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                AI-Powered Payment Form Creation
              </h3>
              <p className="text-slate-300">
                Generate custom payment forms effortlessly using natural language. No manual setup—just describe what you need, and the bot does the rest.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <Zap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">
                Sui-Powered Speed
              </h3>
              <p className="text-slate-300">
                Built on Sui blockchain for lightning-fast, low-cost transactions with enterprise-grade security and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Fourier?
          </h2>
          <div className="max-w-2xl mx-auto">
            {[
              "Eliminate manual payment tracking with automated collection and verification",
              "Create and deploy payment forms in seconds through natural conversation",
              "Process transactions quickly and cheaply on the Sui blockchain",
              "Collect customer data and payments in one seamless flow",
              "Get real-time payment tracking and instant notifications"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-slate-800 rounded-xl p-8 text-center max-w-3xl mx-auto border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Payment Collection?
            </h2>
            <p className="text-slate-300 mb-6">
              Join the future of crypto payments. Start collecting payments through simple Discord conversations today.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Add to Discord
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
