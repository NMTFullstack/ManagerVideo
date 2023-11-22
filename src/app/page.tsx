"use client";

import HomePage from "./dashboard";
import LayoutDashboard from "./dashboard/layout";

export default function HomePageRoot() {
  return (
    <LayoutDashboard>
      <HomePage />
    </LayoutDashboard>
  );
}
