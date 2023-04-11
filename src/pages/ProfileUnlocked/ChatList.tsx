import { Box, Avatar, Typography, Card, styled, Divider } from '@mui/material';
import IconButton from '@material-ui/core/IconButton';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { formatDistance, format, subDays, subHours } from 'date-fns';
import ScheduleTwoToneIcon from '@mui/icons-material/ScheduleTwoTone';
import { AppCtx } from 'App';
import { useState, useEffect, useContext, useRef } from 'react';

import BottomContent from './BottomContent'
import Scrollbar from '../../components/Scrollbar';
import { useAppSelector } from 'hooks';
import { getUser } from 'redux/User/reducer';

const ChatList = (props: { friend: any }) => {

    const user = useAppSelector(getUser)
    console.log(`userid at chatList: ${user.userId}`)
    const appContext = useContext(AppCtx)
    const onClose = () => {
        appContext?.setTab('activity')
    }

    const [messages, setMessages] = useState(Array());

    return (
        <>
            <Scrollbar>
                <Box p={3}>
                    <IconButton style={{ float: "right" }} onClick={onClose}> <CancelPresentationIcon /></IconButton>
                    <DividerWrapper />
                    <br />
                    <DividerWrapper>
                        {format(subDays(new Date(), 0), 'MMMM dd yyyy')}
                    </DividerWrapper>
                    {messages.map((message, index) => (
                        <>
                            <Box
                                key={index}
                                display="flex"
                                alignItems="flex-start"
                                justifyContent={message.userName === user.name ? "flex-end" : "flex-start"}
                                py={3}
                            >
                                {
                                    message.userName === user.name ?
                                        <>
                                            <Box
                                                display="flex"
                                                alignItems="flex-end"
                                                flexDirection="column"
                                                justifyContent="flex-end"
                                                mr={2}
                                            >
                                                <CardWrapperPrimary>
                                                    {message.msg}
                                                </CardWrapperPrimary>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        pt: 1,
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <ScheduleTwoToneIcon
                                                        sx={{
                                                            mr: 0.5
                                                        }}
                                                        fontSize="small"
                                                    />
                                                    {formatDistance(subHours(new Date(), 0), new Date(), {
                                                        addSuffix: true
                                                    })}
                                                </Typography>
                                            </Box>
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    width: 50,
                                                    height: 50
                                                }}
                                                alt={user.name}
                                                src={user.avatar}
                                            />
                                        </> :
                                        <>
                                            <Avatar
                                                variant="rounded"
                                                sx={{
                                                    width: 50,
                                                    height: 50
                                                }}
                                                alt="Zain Baptista"
                                                src={props.friend.img}
                                            />
                                            <Box
                                                display="flex"
                                                alignItems="flex-start"
                                                flexDirection="column"
                                                justifyContent="flex-start"
                                                ml={2}
                                            >
                                                <CardWrapperSecondary>
                                                    {message.msg}
                                                </CardWrapperSecondary>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{
                                                        pt: 1,
                                                        display: 'flex',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <ScheduleTwoToneIcon
                                                        sx={{
                                                            mr: 0.5
                                                        }}
                                                        fontSize="small"
                                                    />
                                                    {formatDistance(subHours(new Date(), 0), new Date(), {
                                                        addSuffix: true
                                                    })}
                                                </Typography>
                                            </Box>
                                        </>
                                }
                            </Box>
                        </>
                    ))}
                </Box>
            </Scrollbar>
            <BottomContent />
        </>
    );
}
const DividerWrapper = styled(Divider)`
        .MuiDivider-wrapper {
          border-radius: 1em;
          text-transform: none;
          background: #f2f5f9;
          font-size: 20px;
          color: rgb(0,0,0);
        }
  `;
const CardWrapperPrimary = styled(Card)`
        background: #5569ff;
        color: white;
        padding: 10px;
        border-radius: 10px;
        border-top-right-radius: 10px;
        max-width: 380px;
        display: inline-flex;
  `;
const CardWrapperSecondary = styled(Card)`
        background: rgba(0, 100, 100, 0.1);
        color: black;
        padding: 10px;
        border-radius: 1em;
        border-top-left-radius: '1em';
        max-width: 380px;
        display: inline-flex;
  `;
export default ChatList;