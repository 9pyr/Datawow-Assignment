import React from "react"
import InventoryIcon from "@mui/icons-material/Inventory"
import CreateBlogButton from "@/components/CreateBlogButton"

const ICON_SIZE = 150

const Create = () => {
  return (
    <div className="m-auto">
      <div className="w-full mb-2">
        <InventoryIcon
          sx={{ width: ICON_SIZE, height: ICON_SIZE, color: "primary.dark" }}
        />
      </div>
      <CreateBlogButton />
    </div>
  )
}

export default Create
