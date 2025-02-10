import { Paper, Typography } from "@mui/material"
import clsx from "clsx"
import React from "react"
import NotebookIcon from "@/icons/Notebook"
import useResponsive from "@/hooks/useResponsive"

const Board = () => {
  const { isMobile } = useResponsive()
  return (
    <Paper
      sx={{
        bgcolor: "primary.300",
      }}
      className={clsx(
        "h-full flex justify-center items-center flex-col !rounded-bl-[36px]",
        {
          "!rounded-tl-[36px]": !isMobile,
          "!rounded-br-[36px]": isMobile,
          "!rounded-t-none": isMobile,
        }
      )}
    >
      <NotebookIcon />
      <Typography
        className="text-[#fff]"
        fontFamily="Castoro"
        fontStyle="italic"
        fontSize={28}
      >
        a Board
      </Typography>
    </Paper>
  )
}

export default Board
