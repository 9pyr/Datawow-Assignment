"use client"

import { useContext } from "react"
import { ModalContext } from "./context"
import React, { useState } from "react"
import BaseModal from "./modal"
import { ModalStateProps } from "./types"
import { FieldValues } from "react-hook-form"

export const useModal = () => {
  return useContext(ModalContext)
}

export default function ModalProvider({ children }: React.PropsWithChildren) {
  const [isOpen, setOpen] = useState(false)
  const [props, setProps] = useState<ModalStateProps | undefined>()

  const handleOpen = (params: ModalStateProps) => {
    setProps(params)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (values: FieldValues) => {
    await props?.onSubmit?.(values)
    handleClose()
  }

  return (
    <ModalContext.Provider
      value={{
        openModal: handleOpen,
        closeModal: handleClose,
      }}
    >
      <>{children}</>
      <BaseModal
        isOpen={isOpen}
        title={props?.title || "Modal"}
        onSubmit={handleSubmit}
        onClose={handleClose}
        options={props?.options}
        defaultValues={props?.defaultValues}
        textConfirm={props?.textConfirm}
      >
        {props?.body}
      </BaseModal>
    </ModalContext.Provider>
  )
}
