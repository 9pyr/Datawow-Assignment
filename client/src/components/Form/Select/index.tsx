import {
  FormHelperText,
  Button,
  Menu,
  Typography,
  ListItemIcon,
  MenuItem,
} from "@mui/material"
import React, { useMemo, useState } from "react"
import { useController } from "react-hook-form"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import CheckIcon from "@mui/icons-material/Check"
import useResponsive from "@/hooks/useResponsive"
import { reduce } from "lodash"

interface SelectProps {
  name: string
  label: string
  options: { label: string; value: string }[]
  required?: boolean
}

const Select = ({ name, label, options, required }: SelectProps) => {
  const { isMobile } = useResponsive()

  const { field, fieldState } = useController({
    name,
    rules: {
      required: required ? "This is required." : false,
    },
  })

  const { onChange } = field

  const mapLabel = useMemo(
    (): Record<string, string> =>
      reduce(
        options,
        (prev, curr) => ({ ...prev, [curr.value]: curr.label }),
        {}
      ),
    [options]
  )

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        fullWidth={isMobile}
      >
        {mapLabel[field.value] || label}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map(({ label, value }) => {
          const selected = value === field.value
          return (
            <MenuItem
              key={`${label}:${value}`}
              onClick={() => {
                onChange(value)
                handleClose()
              }}
              sx={{ minWidth: "300px" }}
              selected={selected}
            >
              <Typography className="w-full">{label}</Typography>
              {selected && (
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
              )}
            </MenuItem>
          )
        })}
      </Menu>
      <FormHelperText
        className="!mt-[4px] !mx-[14px]"
        error={!!fieldState.error}
      >
        {fieldState.error ? fieldState.error.message : null}
      </FormHelperText>
    </div>
  )
}

export default Select
