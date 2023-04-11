import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Avatar, List, ListItemButton, ListItemAvatar, ListItemText, styled } from '@mui/material';
import { useNavigate } from 'react-router';

const ListItemWrapper = styled(ListItemButton)(
  ({ theme }) => `
    &.MuiButtonBase-root {
      margin: ${theme.spacing(1)} 0;
    }
  `
);

export const WalletModal = (props: any) => {

  const navigate = useNavigate();
  const { selectedValue, onClose, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  const walletItem = [
    {
      img: '',
      name: 'MetaMask'
    },
    {
      img: '',
      name: 'Coinbase Wallet'
    },
    {
      img: '',
      name: 'Zengo'
    },
    {
      img: '',
      name: 'Exodus'
    },
    {
      img: '',
      name: 'Trust Wallet'
    },
    {
      img: '',
      name: 'Coinomi'
    },
    {
      img: '',
      name: 'Wallet Connect'
    }
  ];
  const onSelect = async (wallet: any) => {
    console.log(wallet)
    return (
      navigate('/account/create')
    )
  }

  return (
    <>
      <Dialog onClose={handleClose} open={open} fullWidth>
        <div style={{ padding: "10px" }}>
          <DialogTitle style={{ marginBottom: "20px" }}><span style={{ fontSize: "40px" }}>Connect Wallet</span> <IconButton aria-label="delete" size="medium" style={{ float: "right" }} onClick={() => { handleClose() }}>
            <CloseIcon fontSize="inherit" />
          </IconButton></DialogTitle>
          <List component="div">
            {walletItem.map((wallet) => (
              <ListItemWrapper key={wallet.name} style={{ display: "inline-block", width: "280px" }} onClick={() => { onSelect(wallet); }}>
                <ListItemAvatar style={{ display: "inline-block" }}>
                  <Avatar src={wallet.img} />
                </ListItemAvatar>
                <ListItemText
                  style={{ display: "inline-block" }}
                  sx={{
                    mr: 1
                  }}
                  primaryTypographyProps={{
                    color: 'textPrimary',
                    variant: 'h5',
                    noWrap: true
                  }}
                  primary={wallet.name}
                />
              </ListItemWrapper>
            ))}
          </List>
        </div>
      </Dialog>
    </>
  );
}
WalletModal.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};