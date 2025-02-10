"use client"

import React from "react"
import useResponsive from "@/hooks/useResponsive"
import MobileSearch from "./components/MobileSearch"
import DesktopSearch from "./components/DasktopSearch"
import { SearchValueModel } from "./types"

export interface SearchProps {
  searchValue?: SearchValueModel
  setSearch: React.Dispatch<React.SetStateAction<SearchValueModel | undefined>>
}

const Search = (props: SearchProps) => {
  const { isMobile } = useResponsive()

  return isMobile ? <MobileSearch {...props} /> : <DesktopSearch {...props} />
}

export default Search
