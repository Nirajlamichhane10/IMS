import * as React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {Button,} from "@material-ui/core";

 

// import User_Appbar from "./appbar";

import { styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


//appbar 


import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SellIcon from '@mui/icons-material/Sell';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import StoreIcon from '@mui/icons-material/Store';


//css 

const drawerWidth = 240;

const  Styles={
  root: {
      display: "flex",
  },

  appbar:{
    display: "flex",
    justifyContent :"space-around",
    

  },
  //for all icon text
  icond: {
    margin: "0px 0px 0px 25px",   

 
  },

// for all icon
  icont:{
    height:"4vw",
    color:"#4c00b0",
    transform: "scale(1)",
    cursor: "pointer",
    

  },
 // for 3 dots
 dot:{
 margin: "0px 0px 0px 10px", 
 color:"red",

 },
  lims: {},

//appbar css



// grocery 
grocery:{
margin:"0px 0px 0px 500px",


},
// table
table:{
  // margin:"80% 0% 0% 150%",
  width:"850px",
  margin:"50px 10px 10px 400px",
  height:"400px",
  boxShadow: "15px 15px 8px lightblue",

  

},
cards:{

  borderRadius:"20px",
  width:"220px",
  textAlign:"center",
  margin:"110px 30px 50px 400px",
  boxShadow: "15px 15px 8px lightblue",
 


},
cards1:{

  borderRadius:"20px",
  width:"220px",
  textAlign:"center",
  margin:"-190px 30px 50px 700px",
  boxShadow: "15px 15px 8px lightblue",
 


},
cards2:{

  borderRadius:"20px",
  width:"220px",
  textAlign:"center",
  margin:"-190px 30px 50px 1000px",
  boxShadow: "15px 15px 8px lightblue",
 


},
dasdboardback:{
  color:"#D9E5D6",
},



};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
  
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu 
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <Link to="/profile"style={{ textDecoration: 'none' }}>
      <MenuItem onClick={handleMenuClose}>Logout </MenuItem>
      </Link> */}
      <MenuItem onClick={handleMenuClose}>
      <Button
      
								variant="contained"
								color="secondary"
								onClick={() => {
									localStorage.removeItem("token");
									window.location.reload(true);
								}}
							>
								Logout
							</Button>
              </MenuItem>
    </Menu>


  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu 
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem onClick={handleProfileMenuOpen} style={Styles.profile}>
        <IconButton 
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
 
    </Menu>
  );



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <div style={Styles.root}> 
    <style>{`@media print {.no-show{display: none;}}`}</style>
        <div className="no-show">
    <Box >
      <CssBaseline />

    
     
     <AppBar position="fixed" open={open} >
     < div styles={Styles.appbar}>
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  style={Styles.grocery}>
            WELCOME TO GROCERY MANAGEMENT SYSTEM 
          </Typography>
         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
           
              <AccountCircle />
              <MenuItem >  Niraj
              </MenuItem> 
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
        </div>
      </AppBar>
    {renderMobileMenu}
      {renderMenu}
     
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        
        <div className='style={Styles.dot}'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
           </div>
        </DrawerHeader>

      


        {/* <div className="top">
            <span style={Styles.drawer}>Grocery Admin</span>
            </div> */}
            <div className="divi">
        <Divider />
        
        <Divider />
        </div>
        <List>
                <ListItem component={Link} to ={"/"} onClick={handleDrawerClose} style={Styles.icont}>
                    <DashboardIcon/>
                    <ListItemText>
                    <Typography> 
                    <span style={Styles.icond}>
                               Dashboard
                               </span>
                            </Typography>
                      </ListItemText>
                </ListItem>
                
                <ListItem component={Link} to ={"/addItem"} onClick={handleDrawerClose} style={Styles.icont}>
                    <AddIcon/>
                    <ListItemText>
                    <Typography>
                    <span style={Styles.icond}>
                               Add Item
                               </span>
                            </Typography>
                      </ListItemText>
                </ListItem>

                <ListItem component={Link} to ={"/purchaseItem"} onClick={handleDrawerClose} style={Styles.icont}>
                    <LocalGroceryStoreIcon/>
                    <ListItemText>
                    <Typography >
                    <span style={Styles.icond}>
                               Purchase Item
                               </span>
                            </Typography>
                    </ListItemText>
                </ListItem>

                <ListItem component={Link} to ={"/myStock"} onClick={handleDrawerClose} style={Styles.icont}>
                    <StoreIcon/>
                    <ListItemText>
                    <Typography >
                    <span  style={Styles.icond}>
                              My Stock 
                               </span>
                            </Typography>
                      </ListItemText>
                </ListItem>

                <ListItem  component={Link} to ={"/sellItem"} onClick={handleDrawerClose} style={Styles.icont}>
                    <SellIcon/>
                    <ListItemText>
                    <Typography >
                    <span  style={Styles.icond}>
                               Sell Item
                               </span>
                            </Typography>
                     </ListItemText>
                    </ListItem>
                <ListItem  component={Link} to ={"/addSuppliers"} onClick={handleDrawerClose} style={Styles.icont}>
                    <AddBoxIcon/>
                    <ListItemText>
                    <Typography >
                    <span  style={Styles.icond}>
                               Add Suppliers
                               </span>
                            </Typography>
                     </ListItemText>
                </ListItem >
                <ListItem component={Link} to ={"/addCustomers"} onClick={handleDrawerClose} style={Styles.icont}>
                     <ManageAccountsIcon/>
                    <ListItemText>
                    <Typography >
                    <span style={Styles.icond}>
                               Add Customers
                               </span>
                            </Typography>
                    </ListItemText>
                    </ListItem>
                
                <ListItem component={Link} to ={"/supplierTableInvoice"} onClick={handleDrawerClose} style={Styles.icont}>
                    <PermContactCalendarIcon/>
                    <ListItemText>
                    <Typography >
                    <span style={Styles.icond}>
                              Suppliers Statement
                               </span>
                            </Typography>
                      </ListItemText>
                </ListItem>

                <ListItem component={Link} to ={"/customerTableInvoice"} onClick={handleDrawerClose} style={Styles.icont}>
                    <RecentActorsIcon/>
                    <ListItemText>
                    <Typography >
                    <span style={Styles.icond}>
                              Customers Statement
                               </span>
                            </Typography>
                      </ListItemText> 
                 </ListItem> 

            
            
            
  
      
 
        </List>
        
      </Drawer>
     
    </Box>
    </div>
    </div>
  );
}