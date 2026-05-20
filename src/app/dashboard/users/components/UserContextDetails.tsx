// src/app/dashboard/users/components/UserContextDetails.tsx
import { motion } from "framer-motion";
import {
  Activity,
  Clock3,
  Laptop,
  Mail,
  Smartphone,
  UserRound,
} from "lucide-react";
import type { ManagedUser, UserDevice, UserTriggerEvent } from "@/types/users";

const statusStyles = {
  Active: "bg-emerald-50 text-emerald-700",
  Review: "bg-amber-50 text-amber-700",
  Paused: "bg-slate-100 text-slate-600",
};

const riskStyles = {
  Low: "bg-emerald-50 text-emerald-700",
  Medium: "bg-amber-50 text-amber-700",
  High: "bg-rose-50 text-rose-700",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
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

export default function UserContextDetails({ user }: { user: ManagedUser }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      <motion.section
        variants={itemVariants}
        className="rounded-2xl border border-lmn-border bg-white p-5 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lmn-bg text-lmn-primary">
          <UserRound className="h-8 w-8" />
        </div>

        <h3 className="mt-4 text-base font-semibold text-lmn-text">
          {user.name}
        </h3>

        <p className="mt-1 flex items-center justify-center gap-2 text-sm text-lmn-muted">
          <Mail className="h-4 w-4" />
          {user.email}
        </p>

        <div className="mt-4 flex justify-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[user.status]}`}
          >
            {user.status}
          </span>
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ${riskStyles[user.riskLevel]}`}
          >
            {user.riskLevel} risk
          </span>
        </div>
      </motion.section>

      <motion.div variants={itemVariants}>
        <ContextSection title="Profile summary">
          <DetailRow label="Subscription" value={user.plan} />
          <DetailRow label="Organization" value={user.organization} />
          <DetailRow label="Assigned partner" value={user.assignedPartner} />
          <DetailRow label="Last active" value={user.lastActive} />
        </ContextSection>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-3">
        <MiniMetric label="Devices" value={String(user.devicesCount)} />
        <MiniMetric label="Triggers" value={String(user.triggersThisWeek)} />
        <MiniMetric label="Streak" value={user.recoveryStreak} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <ContextSection title="Rule configuration">
          <p className="text-sm leading-6 text-lmn-muted">{user.ruleSummary}</p>
        </ContextSection>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ContextSection title="Devices">
          <div className="space-y-3">
            {user.devices.map((device) => (
              <DeviceCard key={device.id} device={device} />
            ))}
          </div>
        </ContextSection>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ContextSection title="Trigger history">
          {user.triggerHistory.length > 0 ? (
            <div className="space-y-3">
              {user.triggerHistory.map((event) => (
                <TriggerEventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-lmn-muted">
              No trigger events recorded for this user.
            </p>
          )}
        </ContextSection>
      </motion.div>
    </motion.div>
  );
}

function ContextSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-lmn-border bg-white p-5">
      <h4 className="mb-4 text-sm font-semibold text-lmn-text">{title}</h4>
      {children}
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-lmn-border-soft py-2 last:border-0">
      <span className="text-sm text-lmn-muted">{label}</span>
      <span className="text-right text-sm font-semibold text-lmn-text">
        {value}
      </span>
    </div>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-lmn-border bg-white p-4 text-center">
      <p className="text-lg font-semibold text-lmn-text">{value}</p>
      <p className="mt-1 text-xs text-lmn-muted">{label}</p>
    </div>
  );
}

function DeviceCard({ device }: { device: UserDevice }) {
  const DeviceIcon =
    device.type === "iPhone" || device.type === "Android" ? Smartphone : Laptop;

  return (
    <div className="rounded-xl border border-lmn-border-soft bg-lmn-bg-soft p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lmn-primary">
          <DeviceIcon className="h-4 w-4" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-lmn-text">{device.type}</p>
          <p className="mt-1 text-xs text-lmn-muted">
            {device.os} · v{device.appVersion}
          </p>

          <div className="mt-3 space-y-2 text-xs text-lmn-muted">
            <p>Status: {device.status}</p>
            <p>Last active: {device.lastActive}</p>
            <p>Last sync: {device.lastSync}</p>
            <p>
              Monitoring: {device.monitoringEnabled ? "Enabled" : "Disabled"}
            </p>
            <p>Safe Wall: {device.safeWallEnabled ? "Enabled" : "Disabled"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TriggerEventCard({ event }: { event: UserTriggerEvent }) {
  return (
    <div className="rounded-xl border border-lmn-border-soft bg-lmn-bg-soft p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lmn-primary">
            <Activity className="h-4 w-4" />
          </span>

          <div>
            <p className="text-sm font-semibold text-lmn-text">{event.type}</p>
            <p className="mt-1 text-xs leading-5 text-lmn-muted">
              {event.summary}
            </p>
          </div>
        </div>

        <span
          className={`shrink-0 rounded-full px-2 py-1 text-xs font-semibold bg-rose-50 text-rose-700`}
        >
          {event.severity}
        </span>
      </div>

      <p className="mt-3 flex items-center gap-2 text-xs text-lmn-muted">
        <Clock3 className="h-3.5 w-3.5" />
        {event.time}
      </p>
    </div>
  );
}
