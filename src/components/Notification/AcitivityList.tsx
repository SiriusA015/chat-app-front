import { useAppSelector } from 'hooks';
import { styled, ListItemButton, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

const ActivityList: React.FC = () => {
    const tickets = useAppSelector((state) => state.ticketList.tickets);
    return (
        <>
            {
                tickets.map((ticket, index) => {
                    return (
                        <ListItemWrapper key={index} style={{ width: "100%" }} selected>
                            <ListItemAvatar>
                                <Avatar src={ticket.thumb} />
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
                                primary={ticket.title}
                                secondary={ticket.detail}
                            />
                        </ListItemWrapper>
                    );
                })
            }
        </>
    );
};

const ListItemWrapper = styled(ListItemButton)`
        &.MuiButtonBase-root {
            margin:  0;
        }
`;

export default ActivityList;
