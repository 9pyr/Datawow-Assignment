import React, { useEffect } from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import useResponsive from "@/hooks/useResponsive"
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { ModalStateProps } from "./types"
import clsx from "clsx"

interface ModalProps {
  title: string
  isOpen: boolean
  onSubmit: SubmitHandler<FieldValues>
  onClose: () => void
  options: ModalStateProps["options"]
  defaultValues?: FieldValues
  textConfirm?: string
}

const Modal = ({
  title,
  isOpen,
  onSubmit,
  onClose,
  children,
  defaultValues,
  textConfirm = "Post",
  options,
}: React.PropsWithChildren<ModalProps>) => {
  const isDelete = options?.type === "delete"

  const methods = useForm()

  const { isMobile } = useResponsive()

  const handleClose = () => {
    onClose()
    methods.reset({})
  }

  useEffect(() => {
    methods.reset(defaultValues)
  }, [defaultValues])

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((...args) => {
            onSubmit?.(...args)
            methods.reset({})
          })}
        >
          <DialogTitle>{title}</DialogTitle>
          {!isDelete && (
            <IconButton
              onClick={handleClose}
              sx={(theme) => ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
          )}
          <DialogContent className="!pt-0">
            <DialogContentText className="py-2 !text-sm !text-[#5B5B5B]">
              {children}
            </DialogContentText>
          </DialogContent>
          <DialogActions
            className={clsx("!px-[24px] !pb-[20px]", {
              "max-md:flex-col": !isDelete,
              "max-md:flex-col-reverse": isDelete,
            })}
            disableSpacing={isMobile}
          >
            <Button
              type="button"
              variant="outlined"
              className="max-sm:!my-[10px]"
              onClick={handleClose}
              sx={isDelete ? { borderColor: "#DADADA", color: "#5B5B5B" } : {}}
              fullWidth
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color={isDelete ? "error" : "primary"}
              fullWidth
            >
              {isDelete ? "Delete" : textConfirm}
            </Button>
          </DialogActions>
        </form>
      </FormProvider>
    </Dialog>
  )
}

export default Modal
