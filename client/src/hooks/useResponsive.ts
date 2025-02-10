import { useMediaQuery } from "@mui/material"

import theme from "@/styles/theme"

const useResponsive = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const isLaptop = useMediaQuery(theme.breakpoints.down("lg"))

  const isTablet = useMediaQuery(theme.breakpoints.down("md"))

  return { isMobile, isLaptop, isTablet }
}

export default useResponsive
