import { useState } from "react";

/**
 * Custom hook to manage sidebar open/close state.
 */
export default function useSidebarToggle(initial = true) {
  const [sidebarOpen, setSidebarOpen] = useState(initial);
  const toggleSidebar = () => setSidebarOpen((open) => !open);
  return [sidebarOpen, setSidebarOpen, toggleSidebar];
}
