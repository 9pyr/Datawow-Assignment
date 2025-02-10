import React from "react"
import { IconButton } from "@mui/material"
import { useModal } from "@/components/Modal"
import EditIcon from "@/icons/Edit"
import FormPost from "../FormPost"
import { FieldValues, SubmitHandler } from "react-hook-form"

interface EditProps {
  onUpdate: SubmitHandler<FieldValues>
  defaultValues: FieldValues
}

const Edit = ({ onUpdate, defaultValues }: EditProps) => {
  const { openModal } = useModal()

  return (
    <IconButton
      size="small"
      onClick={() => {
        openModal({
          title: "Edit Post",
          body: <FormPost />,
          onSubmit: onUpdate,
          defaultValues,
          textConfirm: "Confirm",
        })
      }}
    >
      <EditIcon />
    </IconButton>
  )
}

export default Edit
