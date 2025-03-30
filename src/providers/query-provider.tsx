"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

// i did not use QueryProvider because I did not use React Query at all.
// the reason why i did not use React Query is that i did not use api calls to store data
// its just a component that if we were to use react query, we would use it like this
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
