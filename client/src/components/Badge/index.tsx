import { Chip, Typography } from "@mui/material"
import React from "react"

const Badge = ({ children }: React.PropsWithChildren) => {
  return (
    <Chip
      label={
        <Typography fontSize={12} sx={{ color: "#4A4A4A" }}>
          {children}
        </Typography>
      }
      size="small"
    />
  )
}

export default Badge
