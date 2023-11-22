import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsgs, LinkMsgs, MediaMsgs, ReplyMsgs, TextMsgs, Timeline } from './MsgTypes'

const Message = () => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((el) => {
                switch (el.type) {
                    case 'divider':
                        // Timeline
                       return  <Timeline el={el}/>
                    case 'msg':
                        switch (el.subtype) {
                            case 'img':
                                // img msg
                                return <MediaMsgs el={el}/>
                            case 'doc':
                                // doc msg
                                return <DocMsgs el={el}/>
                            case 'link':
                                // link msg
                                return <LinkMsgs el={el}/>
                            case 'reply':
                                // reply msg
                                return <ReplyMsgs el={el}/>                        
                            default:
                                // text msg
                                return <TextMsgs el={el}/>
                        }
                
                    default:
                        return <></>;
                }
            })}
        </Stack>
    </Box>
  )
}

export default Message
