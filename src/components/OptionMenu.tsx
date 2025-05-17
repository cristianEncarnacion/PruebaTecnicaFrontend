import {Link} from 'react-router-dom'
import { Popover, IconButton, Divider, Button, Typography } from '@mui/material'
import type { SxProps } from '@mui/material'
import { DotsVertical } from '@untitled-ui/icons-react'
import { useState } from 'react'
import type { IconApp } from '../types/Icon'


interface IOptionLink {
  type: 'link'
  label: string
  href: string
  disabled?: boolean
  icon?: IconApp
  removeMargin?: boolean
}

interface IOptionButton {
  type: 'button'
  label: string
  disabled?: boolean
  icon?: IconApp
  removeMargin?: boolean
  onClick: () => void
}

interface IOptionDivider {
  type: 'divider'
}

interface Props {
  iconColor?: string
  options?: (Omit<IOptionLink, 'removeMargin'> | Omit<IOptionButton, 'removeMargin'> | IOptionDivider)[]
  disabled?: boolean
  icon?: IconApp
  sx?: SxProps
}

export function OptionsMenu(props: Props) {
  const {
    options = [],
    disabled = false,
    icon: Icon = DotsVertical,
    iconColor,
    sx
  } = props

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton

        disabled={disabled}
        onClick={handleClick}
        sx={{
          height: "40px",
          maxWidth: "fit-content",
          ...sx
        }}
      >
        <Icon
          color={iconColor}
        />
      </IconButton>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        sx={{
          "& .MuiPaper-root": {
            boxShadow: "2px 10px 14px 0px #00000005",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "12px 16px",
            gap: "8px",
            borderRadius: "8px",
            border: "1px solid var(--neutral-gray-4, #EDF0F5)",
            userSelect: "none",
            marginTop: "40px",
          }
        }}
      >
        {options.map((option, index) => {
          if (option.type === 'link') {
            return (
              <OptionLink
                key={index}
                handler={handleClose}
                {...option}
              />
            )
          }

          if (option.type === 'button') {
            return (
              <OptionButton
                key={index}
                {...option}
                onClick={() => {
                  handleClose()
                  option.onClick()
                }}
              />
            )
          }

          if (option.type === 'divider') {
            return (
              <Divider
                key={index}
                sx={{
                  marginBottom: options.length - 1 === index ? "0px" : "8px",
                }}
              />
            )
          }
        })}
      </Popover>
    </>
  )
}


function OptionLink(props: IOptionLink & { handler: () => void }) {
  const {
    label,
    href,
    disabled = false,
    icon: Icon = () => null,
    handler
  } = props

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handler()
    if (disabled) {
      e.preventDefault()
    }
  }


  return (
    <Link
      className='hoverOpacityEffect boxHoverElement'
      to={href}
      onClick={handleClick}
      style={{
        textDecoration: "none",
        width: "100%",
        minWidth: "fit-content",
        color: "var(--label) !important",
        padding: "12px 16px",
        fontSize: "16px",
        display: "flex",
        gap: "16px",
        borderRadius: "6px",
        height: "44px",
        marginLeft: "-3px",
      }}
    >
      <Icon color={"gray"} width={20} height={20} />
      <Typography
        fontSize={16}
        sx={{
          opacity: disabled ? 0.5 : 1,
          color: "var(--label) !important",
        }}
      >
        {label}
      </Typography>
    </Link>
  )
}

function OptionButton(props: IOptionButton) {
  const {
    label,
    disabled = false,
    onClick,
    icon: Icon = () => null,
  } = props

  return (
    <Button
      className='hoverOpacityEffect boxHoverElement'
      disabled={disabled}
      startIcon={<Icon color={
        disabled ? "var(--neutral-gray-4, #EDF0F5)" : "var(--label)"
      } width={20} height={20} />}
      onClick={onClick}
      sx={{
        padding: "12px 16px",
        gap: "8px",
        color: "var(--neutral-gray-8, #2D3748)",
        textAlign: "left",
        justifyContent: "flex-start",
        width: "100%",
        height: "44px",
        borderRadius: "6px",
      }}
    >

      <Typography
        fontSize={16}
        sx={{
          opacity: disabled ? 0.5 : 1,

        }}
      >
        {label}
      </Typography>
    </Button>
  )
}


