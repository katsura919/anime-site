"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Sword, Users, Trophy, Flame } from "lucide-react";

const stats = [
  {
    icon: Sword,
    value: "26",
    label: "Episodes",
    color: "#C8102E",
  },
  {
    icon: Users,
    value: "9",
    label: "Hashira",
    color: "#00C9A7",
  },
  {
    icon: Trophy,
    value: "100+",
    label: "Awards",
    color: "#D4AF37",
  },
  {
    icon: Flame,
    value: "∞",
    label: "Breathing Styles",
    color: "#FF6B35",
  },
];

export function StatsSection() {
  return (
    <section className="py-24 bg-linear-to-b from-black to-[#1A0B2E] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card className="p-8 text-center group hover:bg-white/10">
                  <motion.div
                    className="mb-4 inline-flex"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={48} style={{ color: stat.color }} />
                  </motion.div>
                  <h3
                    className="text-5xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </h3>
                  <p className="text-[#B0BEC5] text-lg uppercase tracking-wider">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
