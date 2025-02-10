"use client"

import Layout from "@/components/Layout"

export default function BoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
