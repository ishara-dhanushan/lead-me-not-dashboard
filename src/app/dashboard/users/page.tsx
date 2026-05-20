// src/app/dashboard/users/page.tsx
import type { Metadata } from "next";
import UsersWorkspace from "./components/UsersWorkspace";
import { managedUsers } from "./users-data";

export const metadata: Metadata = {
  title: "Users | LeadMeNot Admin",
  description: "Manage LeadMeNot users, devices, partners, and activity.",
};

export default function UsersPage() {
  return <UsersWorkspace users={managedUsers} />;
}
