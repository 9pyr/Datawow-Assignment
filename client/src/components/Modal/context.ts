import { createContext } from "react"
import { ModalContextTypes } from "./types"

export const ModalContext = createContext<ModalContextTypes>({
  openModal: () => {},
  closeModal: () => {},
})
