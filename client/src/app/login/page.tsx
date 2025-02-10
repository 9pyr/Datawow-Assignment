"use client"
import React from "react"
import { Button, Grid2 } from "@mui/material"
import clsx from "clsx"
import Board from "./components/Board"
import useResponsive from "@/hooks/useResponsive"
import Input from "@/components/Form/Input"
import Form from "@/components/Form"
import { redirect } from "next/navigation"
import setCookie from "@/utils/setCookie"

export default function LoginPage() {
  const { isMobile } = useResponsive()

  return (
    <Form
      onSubmit={({ username }) => {
        setCookie("username", username)
        redirect("/feed")
      }}
    >
      <Grid2
        container
        columns={12}
        sx={{ height: "100vh", bgcolor: "primary.dark", display: "flex" }}
      >
        {isMobile && (
          <Grid2 size={12}>
            <Board />
          </Grid2>
        )}
        <Grid2
          container
          size={isMobile ? 12 : 6}
          className={clsx("flex justify-center items-center", {
            "h-full": !isMobile,
          })}
        >
          <Grid2 container flexDirection="column" rowGap="20px" size={8}>
            <Grid2 className="w-full flex justify-start mb-[20px]">
              <div className="text-[28px] h-full">Sign in</div>
            </Grid2>
            <Grid2>
              <Input name="username" placeholder="Username" required />
            </Grid2>
            <Grid2>
              <Button type="submit" fullWidth>
                Sign In
              </Button>
            </Grid2>
          </Grid2>
        </Grid2>
        {!isMobile && (
          <Grid2 size={6} className="h-full">
            <Board />
          </Grid2>
        )}
      </Grid2>
    </Form>
  )
}
