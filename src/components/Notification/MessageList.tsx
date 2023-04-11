
import { useAppSelector } from 'hooks';
import { styled, ListItemButton, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

const MessageList: React.FC = () => {

    const messages = useAppSelector((state) => state.ticketList.message);
    return (
        <>
            {messages.map((message, index) => {
                return (
                    <ListItemWrapper key={index} style={{ width: "100%" }} selected>
                        <ListItemAvatar>
                            <Avatar src={message.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            sx={{
                                mr: 1
                            }}
                            primaryTypographyProps={{
                                color: 'textPrimary',
                                variant: 'h5',
                                noWrap: true
                            }}
                            secondaryTypographyProps={{
                                color: 'textSecondary',
                                noWrap: true
                            }}
                            primary={message.name}
                            secondary={message.content}
                        />
                        <b>{message.count}</b>
                    </ListItemWrapper>
                );
            })}
        </>
    );
};

const ListItemWrapper = styled(ListItemButton)`
        &.MuiButtonBase-root {
            margin:  0;
        }
`;

export default MessageList;
