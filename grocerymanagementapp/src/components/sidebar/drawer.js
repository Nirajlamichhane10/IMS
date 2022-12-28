// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';


// import DashboardIcon from '@mui/icons-material/Dashboard';
// import AddIcon from '@mui/icons-material/Add';
// import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
// import SellIcon from '@mui/icons-material/Sell';
// import AddBoxIcon from '@mui/icons-material/AddBox';
// import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
// import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
      
          
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//         { open ? 
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton> : 
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           }
           
//         </DrawerHeader>
//         <div className="top">
//             <span className="logo">Grocery Admin</span>
//             </div>
//             <div className="divi">
//         <Divider />
        
//         <Divider />
//         </div>
//         <List>
//                 <ListItem>
//                     <DashboardIcon/>
//                     <ListItemText>Dashboard</ListItemText>
//                 </ListItem>
//                 <ListItem>
//                     <AddIcon/>
//                     <ListItemText>Add Item</ListItemText>
//                 </ListItem>
//                 <ListItem>
//                     <LocalGroceryStoreIcon/>
//                     <ListItemText>Purchase Item</ListItemText>
//                 </ListItem>
//                 <ListItem>
//                     <SellIcon/>
//                     <ListItemText>Sell Item</ListItemText>
//                     </ListItem>
//                 <ListItem>
//                     <AddBoxIcon/>
//                     <ListItemText>Add Suppliers</ListItemText>
//                 </ListItem>
//                 <ListItem>
//                      <ManageAccountsIcon/>
//                     <ListItemText>Suppliers List</ListItemText>
//                     </ListItem>
//                 <ListItem>
//                     <PermContactCalendarIcon/>
//                     <ListItemText>Customer List</ListItemText>
//                 </ListItem>
            
  
//         <div className="bottom">color options</div>


 
//         </List>
//       </Drawer>
//     </Box>
//   );
// }