import { ReactNode } from "react"
import { FieldValues, SubmitHandler } from "react-hook-form"

export interface ModalStateProps {
  title: string
  body: ReactNode
  onSubmit?: SubmitHandler<FieldValues>
  defaultValues?: FieldValues
  textConfirm?: string
  options?: {
    type: "primary" | "delete"
  }
}

export interface ModalContextTypes {
  openModal: (params: ModalStateProps) => void
  closeModal: () => void
}
