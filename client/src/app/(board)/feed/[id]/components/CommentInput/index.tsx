import React from "react"
import Input from "@/components/Form/Input"

const CommentInput = () => {
  return (
    <Input
      name="message"
      placeholder="What’s on your mind..."
      multiline
      minRows={4}
      sx={{
        bgcolor: "transparent",
      }}
      defaultValue=""
    />
  )
}

export default CommentInput
