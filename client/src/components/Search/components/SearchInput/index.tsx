import { SearchProps } from "@/components/Search"
import SearchIcon from "@mui/icons-material/Search"
import { InputAdornment, TextField, TextFieldProps } from "@mui/material"

const SearchInput = ({
  onBlur,
  searchValue,
  setSearch,
}: SearchProps & Pick<TextFieldProps, "onBlur">) => {
  return (
    <TextField
      value={searchValue?.q}
      onChange={(e) => {
        setSearch({ ...searchValue, q: e.target.value })
      }}
      onBlur={onBlur}
      placeholder="Search"
      slotProps={{
        input: {
          sx: { bgcolor: "transparent" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      fullWidth
    />
  )
}

export default SearchInput
