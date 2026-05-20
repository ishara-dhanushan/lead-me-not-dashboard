// src/app/dashboard/users/components/UsersWorkspace.tsx
"use client";

import { AlertTriangle, CheckCircle2, Laptop, Users } from "lucide-react";
import { useDashboardContextPanel } from "@/app/dashboard/components/DashboardContextPanel";
import type { ManagedUser } from "@/types/users";
import UserContextDetails from "./UserContextDetails";
import UsersTable from "./UsersTable";

type UsersWorkspaceProps = {
  users: ManagedUser[];
};

export default function UsersWorkspace({ users }: UsersWorkspaceProps) {
  const { openContextPanel } = useDashboardContextPanel();

  function handleOpenUser(user: ManagedUser) {
    openContextPanel({
      title: user.name,
      subtitle: user.email,
      content: <UserContextDetails user={user} />,
    });
  }

  return (
    <div className="min-h-full space-y-6 bg-lmn-bg-soft px-5 py-6 sm:px-7 lg:px-8">
      <section className="flex flex-col justify-between gap-4 border-b border-lmn-border pb-5 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-medium text-lmn-muted">User management</p>
          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-lmn-text">
            Users
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-lmn-muted">
            Review LeadMeNot users, assigned partners, devices, monitoring
            status, and recent accountability activity.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SummaryCard label="Total users" value="48,291" icon={Users} />
        <SummaryCard
          label="Active accounts"
          value="31,804"
          icon={CheckCircle2}
        />
        <SummaryCard label="Devices monitored" value="62,410" icon={Laptop} />
        <SummaryCard label="Review queue" value="18" icon={AlertTriangle} />
      </section>

      <UsersTable users={users} onSelectUser={handleOpenUser} />
    </div>
  );
}

function SummaryCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: typeof Users;
}) {
  return (
    <article className="rounded-2xl border border-lmn-border bg-white p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-lmn-muted">{label}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-lmn-bg text-lmn-primary">
          <Icon className="h-4 w-4" />
        </span>
      </div>

      <p className="mt-4 text-2xl font-semibold tracking-tight text-lmn-text">
        {value}
      </p>
    </article>
  );
}
