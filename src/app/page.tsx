"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

export default function PricingPage() {
  const [pageViews, setPageViews] = useState(100);
  const [isYearly, setIsYearly] = useState(false);

  const calculatePrice = (views: number) => {
    if (views < 100) return 8;
    if (views >= 100 && views < 500) return 12;
    if (views >= 500 && views < 1000) return 24;
    if (views === 1000) return 36;
    return 16;
  };

  const basePrice = calculatePrice(pageViews);
  const price = isYearly ? basePrice * 0.75 : basePrice;

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl md:text-4xl font-bold text-gray-900 mb-2"
          >
            Simple, traffic-based pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-400"
          >
            Sign up for our 30-day trial. No credit card required.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.span
              key={pageViews}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 font-semibold"
            >
              {pageViews}K PAGEVIEWS
            </motion.span>
            <div className="text-right mt-4 md:mt-0">
              <motion.span
                key={price}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-5xl font-bold text-gray-900"
              >
                ${price.toFixed(2)}
              </motion.span>
              <span className="text-gray-400 ml-2">/ month</span>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Slider
              defaultValue={[100]}
              max={1000}
              step={10}
              onValueChange={(value) => setPageViews(value[0])}
              className="mb-8"
            />
          </motion.div>

          <div className="flex items-center justify-end mb-8">
            <span className="text-gray-600 text-sm md:text-base mr-4">Monthly Billing</span>
            <motion.div whileTap={{ scale: 0.9 }}>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            </motion.div>
            <span className="text-gray-600 ml-4">Yearly Billing</span>
            <AnimatePresence>
              {isYearly && (
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="ml-2 text-sm md:text-base bg-red-100 text-red-800 px-2 py-1 rounded-full"
                >
                  25% <span className="hidden md:inline-block">discount</span>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <hr className="mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <ul className="space-y-2 mb-4 md:mb-0">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center text-gray-600"
              >
                <CheckIcon className="mr-2" /> Unlimited websites
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center text-gray-600"
              >
                <CheckIcon className="mr-2" /> 100% data ownership
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center text-gray-600"
              >
                <CheckIcon className="mr-2" /> Email reports
              </motion.li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2a3b5b] text-white px-6 py-3 rounded-full font-medium transition-colors hover:bg-[#3b4c6c]"
            >
              Start my trial
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-green-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}