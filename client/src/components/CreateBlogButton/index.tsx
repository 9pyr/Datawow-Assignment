"use client"

import React from "react"
import useCreatePost from "@/core/hooks/useCreatePost"
import { PostModel } from "@/app/(board)/feed/types"
import { useModal } from "../Modal"
import FormPost from "@/components/Feed/components/FormPost"
import { Button } from "@mui/material"
import getCookie from "@/utils/getCookie"
import { redirect } from "next/navigation"
import { isEmpty } from "lodash"

const CreateBlogButton = () => {
  const username = getCookie("username")

  const { mutateAsync } = useCreatePost()

  const { openModal } = useModal()

  return (
    <Button
      variant="contained"
      onClick={() => {
        if (isEmpty(username)) {
          redirect("/login")
        } else {
          openModal({
            title: "Create Post",
            body: <FormPost />,
            onSubmit: async (values) => {
              await mutateAsync(values as PostModel)
            },
          })
        }
      }}
      fullWidth
    >
      Create +
    </Button>
  )
}

export default CreateBlogButton
