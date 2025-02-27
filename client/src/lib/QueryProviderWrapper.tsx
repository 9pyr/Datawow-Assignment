"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React from "react"

export const queryClient = new QueryClient()

const QueryProviderWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProviderWrapper
