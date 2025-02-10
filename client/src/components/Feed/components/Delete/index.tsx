import React from "react"
import { IconButton } from "@mui/material"
import { useModal } from "@/components/Modal"
import DeleteIcon from "@/icons/Delete"
import { FieldValues, SubmitHandler } from "react-hook-form"

interface DeleteProps {
  onDelete: SubmitHandler<FieldValues>
}

const Delete = ({ onDelete }: DeleteProps) => {
  const { openModal } = useModal()

  return (
    <IconButton
      size="small"
      onClick={() => {
        openModal({
          title: "Please confirm if you wish to delete the post",
          body: (
            <>
              Are you sure you want to delete the post? Once deleted, it cannot
              be recovered.
            </>
          ),
          options: {
            type: "delete",
          },
          onSubmit: onDelete,
        })
      }}
    >
      <DeleteIcon />
    </IconButton>
  )
}

export default Delete
