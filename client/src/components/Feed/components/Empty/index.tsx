import React from "react"
import InventoryIcon from "@mui/icons-material/Inventory"
import { Typography } from "@mui/material"

const ICON_SIZE = 150

const Empty = () => {
  return (
    <div className="m-auto">
      <div className="w-full">
        <InventoryIcon
          sx={{ width: ICON_SIZE, height: ICON_SIZE, color: "primary.dark" }}
        />
      </div>
      <Typography
        className="text-center text-base !font-bold"
        color="primary.dark"
      >
        Empty
      </Typography>
    </div>
  )
}

export default Empty
