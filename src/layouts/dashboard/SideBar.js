import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import React from 'react'
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import useSettings from '../../hooks/useSettings'
import AntSwitch from "../../components/AntSwitch";

const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const theme = useTheme(); 
    const {onToggleMode} = useSettings()

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
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: "12px",
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
                    onClick={() => setSelected(item.index)}
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
                onClick={() => setSelected(3)}
                sx={{ width: "max-content", color: theme.palette.mode === 'light' ? "black" : theme.palette.text.primary }}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <AntSwitch onChange={()=> onToggleMode()} defaultChecked />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Box>
  )
}

export default SideBar