"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & CEO",
    image: "/demo.jpg",
    description: "Visionary leader with 15+ years in digital marketing",
    bio: "John founded the company with a vision to transform how brands connect with their audiences. With over 15 years of experience in digital marketing and brand strategy, he has helped numerous Fortune 500 companies achieve unprecedented growth. His expertise lies in identifying market opportunities and building scalable marketing frameworks that deliver measurable results.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Co-Founder & CMO",
    image: "/demo.jpg",
    description: "Creative strategist passionate about brand storytelling",
    bio: "Jane brings a unique blend of creativity and analytical thinking to the team. As Co-Founder and Chief Marketing Officer, she oversees all creative initiatives and brand strategies. With a background in advertising and content marketing, Jane has crafted campaigns that have reached millions and created lasting impressions. Her passion for storytelling drives every project to new heights.",
  },
];

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Meet the <span className="text-orange-600">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The talented people behind our success
          </p>
        </motion.div>

        {/* Team Cards Grid - 2 members centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-8 h-full border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300">
                {/* Background Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-500/10 transition-all duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Image */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-neutral-700 shadow-lg"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Info */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold">{member.name}</h3>
                      <p className="text-orange-600 font-medium">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {member.description}
                      </p>
                    </div>

                    {/* Click indicator */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="text-xs text-muted-foreground mt-4 flex items-center gap-1"
                    >
                      <span>Click to learn more</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Content */}
                <div className="overflow-y-auto max-h-[90vh] p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Image */}
                    <motion.div
                      layoutId={`image-${selectedMember.id}`}
                      className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl"
                    >
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Info */}
                    <div className="space-y-2">
                      <motion.h3
                        layoutId={`name-${selectedMember.id}`}
                        className="text-3xl font-bold"
                      >
                        {selectedMember.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`role-${selectedMember.id}`}
                        className="text-xl text-orange-600 font-medium"
                      >
                        {selectedMember.role}
                      </motion.p>
                    </div>

                    {/* Bio */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-left space-y-4"
                    >
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
