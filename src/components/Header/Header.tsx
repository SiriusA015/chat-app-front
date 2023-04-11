import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Box, Toolbar } from '@mui/material';
import Avatar from '@material-ui/core/Avatar';
import { Logo } from './Logo';
import { DesktopMenu } from './DesktopMenu';
import { MobileMenu } from './MobileMenu';
import { ConnectWallet } from '../../pages/ConnectWallet/ConnectWallet'
import { useSelector } from 'react-redux';
import { getUser } from 'redux/User/reducer';

const pages = ['Products', 'Pricing', 'Blog'];

const Header: React.FC = () => {

  let location = useLocation();
  const user = useSelector(getUser)
  console.log(`created user: ${user.avatar}`)
  
  return (
    <AppBar position="static" style={{ paddingLeft:"20px", paddingRight:"20px", backgroundColor: "white", color: "rgb(0,0,0)" }}>

        <Toolbar disableGutters>
          <Logo />
          {
            location.pathname === "/" ?
              <>
                <MobileMenu pages={pages} />
                <DesktopMenu pages={pages} />
                <Box sx={{ flexGrow: 0 }}>
                  <ConnectWallet />
                </Box>
              </>
              :
              (
                location.pathname === "/account/create" ?
                  <>
                    <span style={{ height: "85px" }}></span>
                  </>
                  :
                  <>
                    <span style={{ height: "85px" }}></span>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>
                    <span style={{ fontSize: "18px", paddingRight: "10px" }}>{user.name}</span>
                    <div>
                      <Avatar alt="user" src={user.avatar} />
                    </div>
                  </>
              )
          }
        </Toolbar>
      
    </AppBar>
  );

}

export default Header;