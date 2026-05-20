// src/app/dashboard/components/DashboardWorkspace.tsx
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import MainOverview from "@/app/dashboard/components/MainOverview";
import MetricCards from "@/app/dashboard/components/MetricCards";
import { useContainerWidth } from "@/hooks/useContainerWidth";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function DashboardWorkspace() {
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(
    null
  );

  const dateLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date()),
    []
  );

  const { ref: contentRef, width: contentWidth } = useContainerWidth();

  return (
    <motion.div
      ref={contentRef as any}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-full space-y-6 bg-lmn-bg-soft px-5 py-6 sm:px-7 lg:px-8"
    >
      <motion.section
        variants={itemVariants}
        className="flex flex-col justify-between gap-3 border-b border-lmn-border pb-5 sm:flex-row sm:items-end"
      >
        <div>
          <p className="text-sm font-medium text-lmn-muted">Super Admin</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-lmn-text">
            Platform overview
          </h1>
        </div>

        <p className="text-sm text-lmn-muted">{dateLabel}</p>
      </motion.section>

      <motion.div variants={itemVariants}>
        <MetricCards containerWidth={contentWidth} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <MainOverview
          selectedActivityId={selectedActivityId}
          onSelectActivity={setSelectedActivityId}
        />
      </motion.div>
    </motion.div>
  );
}
