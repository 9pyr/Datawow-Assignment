import { Button, Grid2 } from "@mui/material"
import React from "react"
import { useFormContext } from "react-hook-form"
import CommentInput from "../CommentInput"

const DesktopCommentInput = () => {
  const { setValue } = useFormContext()

  return (
    <Grid2 container rowGap="10px">
      <Grid2 size={12}>
        <CommentInput />
      </Grid2>
      <Grid2 container size={12} columnGap="12px" justifyContent="flex-end">
        <Button
          type="button"
          variant="outlined"
          onClick={() => {
            setValue("message", "")
          }}
        >
          Cancel
        </Button>
        <Button type="submit">Post</Button>
      </Grid2>
    </Grid2>
  )
}

export default DesktopCommentInput
