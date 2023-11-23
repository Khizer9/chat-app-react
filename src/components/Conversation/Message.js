import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsgs, LinkMsgs, MediaMsgs, ReplyMsgs, TextMsgs, Timeline } from './MsgTypes'

const Message = ({menu}) => {
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
                                return <MediaMsgs el={el} menu={menu}/>
                            case 'doc':
                                // doc msg
                                return <DocMsgs el={el} menu={menu}/>
                            case 'link':
                                // link msg
                                return <LinkMsgs el={el} menu={menu}/>
                            case 'reply':
                                // reply msg
                                return <ReplyMsgs el={el} menu={menu}/>                        
                            default:
                                // text msg
                                return <TextMsgs el={el} menu={menu}/>
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
