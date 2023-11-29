import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React from 'react'
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import useSettings from '../../hooks/useSettings'
import AntSwitch from "../../components/AntSwitch";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const theme = useTheme(); 
    const {onToggleMode} = useSettings()
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const getPath = (index) => {
      switch (index) {
        case 0:
          return '/app'
        case 1:
          return '/group'
          
        case 2:
          return '/call'
          
        case 3:
          return '/settings'
      
        default:
          break;
      }
    }

    const getMenuPath = (index) => {
      switch (index) {
        case 0:
          return '/profile'
        case 1:
          return '/settings'
        case 2:
          // update token 
          return '/auth/login'
          
      
        default:
          break;
      }
    }

  return (
    <Box
        p={3}
        sx={{
          direction:'row',
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,25)",
          width: "100px",
          height: "100%",
        }}
      >
        <Stack direction="column" height='85%' alignItems="center" spacing={3} justifyContent='space-between'>
          <Stack alignItems='center' spacing={4}>
            <Box
              onClick={() => navigate('/app')}
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: "12px",
                cursor: 'pointer'
              }}
            >
              <img src={Logo} alt="Logo" />
            </Box>

            <Stack
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
              spacing={3}
            >
              {Nav_Buttons.map((item) =>
                item.index === selected ? (
                  <Box
                    sx={{ backgroundColor: theme.palette.primary.main }}
                    borderRadius="12px"
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "white" }}
                      key={item.index}
                    >
                      {item.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(item.index)
                      navigate(getPath(item.index))
                    }}
                    sx={{ width: "max-content", color: theme.palette.mode === 'light' ? "black" : theme.palette.text.primary}}
                    key={item.index}
                  >
                    {item.icon}
                  </IconButton>
                )
              )}
            </Stack>

            <Divider sx={{ width: "48px" }} />

            {selected === 3 ? (
              <Box
                sx={{ backgroundColor: theme.palette.primary.main }}
                borderRadius="12px"
              >
                <IconButton sx={{ width: "max-content", color: "white" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => {
                  setSelected(3)
                  navigate(getPath(3))
                }}
                sx={{ width: "max-content", color: theme.palette.mode === 'light' ? "black" : theme.palette.text.primary }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <AntSwitch onChange={()=> onToggleMode()} defaultChecked />
          <Avatar id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick} src={faker.image.avatar()} />

          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical:'bottom',
          horizontal:'right'
        }}
        transformOrigin={{
          vertical:'bottom',
          horizontal:'left'
        }}
      >
        <Stack spacing={1} px={1}>
            {Profile_Menu.map((el, idx) => (
                <MenuItem onClick={() => {
                  handleClick();
                }}>
                  <Stack onClick={() => {
                    navigate(getMenuPath(idx))
                  }} sx={{width:100}} direction='row' alignItems='center' justifyContent='space-between'>
                    <span>{el.title}</span>
                    {el.icon}
                  </Stack>
                  </MenuItem>
            ))}
        </Stack>
      </Menu>
        </Stack>
      </Box>
  )
}

export default SideBar
