
import { useState } from 'react';
import Button from '@mui/material/Button';
import { WalletModal } from './WalletModal';

export const ConnectWallet = () => {

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value: any) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>Connect Wallet</Button>
      <WalletModal
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  )
}