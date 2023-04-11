import { useEffect, useContext } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { useAppDispatch, useAppSelector } from 'hooks';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { getTicketListAsync } from 'redux/Message/reducer';
import { Box, styled, Tabs, Tab } from '@mui/material';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ActivityList from './AcitivityList';
import MessageList from './MessageList';
import { AppCtx } from 'App';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Notification: React.FC = () => {

  const open = useAppSelector((state) => state.ticketList.loading);
  const dispatch = useAppDispatch();

  const classes = useStyles();
  useEffect(() => {
    dispatch(getTicketListAsync());
  }, []);

  const tabs = [
    { value: 'activity', label: 'Activity' },
    { value: 'message', label: 'Message' },
  ];
  const appContext = useContext(AppCtx);

  const handleTabsChange = (event: React.SyntheticEvent, value: any): void => {
    appContext?.setTab(value)
  };
  return (
    <Card style={{ marginTop: "5px" }}>
      <CardBody>
        <CardTitle>
          <div style={{ padding: "10px 50px" }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <div>Current balance</div>
                <h4>1,000$LURV</h4>
                <p>$500,00 USD</p>
              </Grid>
              <Grid item xs={6} style={{ paddingTop: "40px" }}>
                <Button size="medium" variant="outlined" color="primary" style={{ height: "40px", float: "right" }}>Buy $LURV</Button>
              </Grid>
            </Grid>
          </div>
        </CardTitle>
        <TabsContainerWrapper>
          <Tabs
            onChange={handleTabsChange}
            value={appContext?.currentTab}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </TabsContainerWrapper>
        <Box mt={2}>
          <Backdrop className={classes.backdrop} open={open}>
            <CircularProgress color="inherit" />
          </Backdrop>
          {appContext?.currentTab === 'activity' && (
            <ActivityList />
          )}
          {appContext?.currentTab === 'message' && (
            <MessageList />
          )}
        </Box>
      </CardBody>
    </Card>
  );
};

const TabsContainerWrapper = styled(Box)`
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            border: 0;
        }

        .MuiTab-root {
            &.MuiButtonBase-root {
                padding: 0;
     

                .MuiTouchRipple-root {
                    display: none;
                }
            }

            &.Mui-selected:hover,
            &.Mui-selected {
            
            }
        }
  `;

export default Notification;
