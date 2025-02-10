import { Box, BoxProps } from "@mui/material"
import React from "react"

const Container = ({
  children,
  ...props
}: React.PropsWithChildren<BoxProps>) => {
  return (
    <Box {...props} className="flex flex-col items-center min-h-screen">
      <Box className="flex flex-col flex-1 w-full max-w-[900px] py-[32px] px-4">
        {children}
      </Box>
    </Box>
  )
}

export default Container
