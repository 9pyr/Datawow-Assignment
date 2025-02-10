import { TextField, TextFieldProps } from "@mui/material"
import React from "react"
import { useController } from "react-hook-form"

interface InputProps extends Omit<TextFieldProps, "required"> {
  name: string
  required?: boolean
}

const Input = ({ name, required, ...props }: InputProps) => {
  const { field, fieldState } = useController({
    name,
    rules: {
      required: required ? "This is required." : false,
    },
  })

  return (
    <TextField
      {...props}
      {...field}
      value={field.value || ""}
      id={name}
      fullWidth
      error={!!fieldState.error}
      helperText={fieldState.error ? fieldState.error.message : null}
      size="small"
    />
  )
}

export default Input
