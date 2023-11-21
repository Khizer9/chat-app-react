import React from 'react'
import { Box, IconButton, InputAdornment, Stack, TextField} from '@mui/material'
import { styled, useTheme } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley} from 'phosphor-react';
import Header from './Header';
import Footer from './Footer';





const Conversation = () => {
  const theme = useTheme()
  return (
    <Stack height='100%' maxHeight='100vh' width='auto'>
      {/* chat header */}
       <Header />
      {/* msgg */}
        <Box width='100%' sx={{flexGrow:1}}>

        </Box>
      {/* chat footer */}
      <Footer />
    </Stack>
  )
}

export default Conversation
