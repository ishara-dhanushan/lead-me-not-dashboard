// src/app/dashboard/users/components/UsersTable.tsx
import { motion } from "framer-motion";
import { MoreHorizontal, Search, UserRound } from "lucide-react";
import type { ManagedUser } from "@/types/users";

type UsersTableProps = {
  users: ManagedUser[];
  selectedUserId: string | null;
  onSelectUser: (user: ManagedUser) => void;
};

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

export default function UsersTable({
  users,
  selectedUserId,
  onSelectUser,
}: UsersTableProps) {
  return (
    <section className="overflow-hidden rounded-2xl border border-lmn-border bg-white">
      <div className="flex flex-col gap-4 border-b border-lmn-border px-5 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-base font-semibold text-lmn-text">
            Managed users
          </h2>
          <p className="mt-1 text-sm text-lmn-muted">
            Click a row to open the user context panel.
          </p>
        </div>

        <div className="flex h-10 w-full items-center gap-3 rounded-full border border-lmn-border bg-lmn-bg-soft px-4 lg:w-[320px]">
          <Search className="h-4 w-4 text-lmn-muted-soft" />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-transparent text-sm text-lmn-text outline-none placeholder:text-lmn-muted-soft"
          />
        </div>
      </div>

      <div className="hidden grid-cols-[1.35fr_1fr_0.9fr_0.8fr_0.9fr_0.4fr] border-b border-lmn-border bg-lmn-bg-soft px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-lmn-muted xl:grid">
        <span>User</span>
        <span>Organization</span>
        <span>Partner</span>
        <span>Status</span>
        <span>Risk</span>
        <span />
      </div>

      <div className="divide-y divide-lmn-border">
        {users.map((user) => {
          const isSelected = selectedUserId === user.id;

          return (
            <motion.button
              key={user.id}
              type="button"
              whileHover={{ x: 4, backgroundColor: "#f7f9ff" }}
              whileTap={{ scale: 0.995 }}
              onClick={() => onSelectUser(user)}
              className={`grid w-full gap-4 px-5 py-4 text-left transition xl:grid-cols-[1.35fr_1fr_0.9fr_0.8fr_0.9fr_0.4fr] xl:items-center ${
                isSelected
                  ? "bg-lmn-bg-soft"
                  : "hover:bg-lmn-bg-soft"
              }`}
            >
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lmn-bg text-lmn-primary">
                  <UserRound className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-lmn-text">
                    {user.name}
                  </p>
                  <p className="mt-1 truncate text-xs text-lmn-muted">
                    {user.email}
                  </p>
                </div>
              </div>

              <TableText label="Organization" value={user.organization} />
              <TableText label="Partner" value={user.assignedPartner} />

              <span
                className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                  statusStyles[user.status]
                }`}
              >
                {user.status}
              </span>

              <span
                className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                  riskStyles[user.riskLevel]
                }`}
              >
                {user.riskLevel} risk
              </span>

              <MoreHorizontal className="hidden h-5 w-5 justify-self-end text-lmn-muted-soft xl:block" />
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

function TableText({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-lmn-muted xl:hidden">
        {label}
      </p>
      <p className="mt-1 truncate text-sm text-lmn-muted xl:mt-0">{value}</p>
    </div>
  );
}
