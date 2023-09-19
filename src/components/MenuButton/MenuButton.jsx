// import {Dropdown} from "@mui/base/Dropdown";
// import {useUserLoginContext} from "../../context/UserLoginContext";
// import {Link} from "react-router-dom";
// import {Menu} from "@mui/base/Menu";
// import {MenuButton} from "@mui/base/MenuButton";
// import {MenuItem, menuItemClasses} from "@mui/base/MenuItem";
// import {Typography} from "@mui/material";
// import {styled} from "@mui/system";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import PublicIcon from "@mui/icons-material/Public";
// import LogoutIcon from "@mui/icons-material/Logout";

// // Limpiar código

// const colorPalettes = {
//   blue: "#162938",
//   green: "#49726B",
//   skyBlue: "#D0E4E9",
//   skyBlueShadow: "#CEEBF2",
//   tealBlue: "#367588",
//   yellow: "#eab308",
//   indigo: "#6366f1",
// };

// export default function MenuIntroduction() {
//   const {logout} = useUserLoginContext();
//   const createHandleMenuClick = (menuItem) => {
//     return () => {
//       menuItem;
//     };
//   };

//   return (
//     <Dropdown>
//       <TriggerButton>My Account</TriggerButton>
//       <Menu slots={{listbox: StyledListbox}}>
//         <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
//           <Link className="allLinksMenu" to="/account">
//             <Typography
//               variant="body2"
//               color={colorPalettes.blue}
//               sx={{display: "flex", alignItems: "center", gap: 1}}
//             >
//               <ManageAccountsIcon
//                 fontSize="small"
//                 sx={{color: colorPalettes.blue}}
//               />
//               Account
//             </Typography>
//           </Link>
//         </StyledMenuItem>
//         <StyledMenuItem onClick={createHandleMenuClick("Language settings")}>
//           <Link className="allLinksMenu" to="/account">
//             <Typography
//               variant="body2"
//               color={colorPalettes.blue}
//               sx={{display: "flex", alignItems: "center", gap: 1}}
//             >
//               <PublicIcon fontSize="small" sx={{color: colorPalettes.blue}} />
//               Language settings
//             </Typography>
//           </Link>
//         </StyledMenuItem>
//         <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
//           <Link className="allLinksMenu" to="/account">
//             <Typography
//               onClick={logout}
//               variant="body2"
//               color={colorPalettes.blue}
//               sx={{display: "flex", alignItems: "center", gap: 1}}
//             >
//               <LogoutIcon fontSize="small" sx={{color: colorPalettes.blue}} />
//               Log out
//             </Typography>
//           </Link>
//         </StyledMenuItem>
//       </Menu>
//     </Dropdown>
//   );
// }

// const blue = {
//   100: "#DAECFF",
//   200: "#99CCF3",
//   400: "#3399FF",
//   500: "#007FFF",
//   600: "#0072E5",
//   900: "#003A75",
// };

// const grey = {
//   50: "#f6f8fa",
//   100: "#eaeef2",
//   200: "#d0d7de",
//   300: "#afb8c1",
//   400: "#8c959f",
//   500: "#6e7781",
//   600: "#57606a",
//   700: "#424a53",
//   800: "#32383f",
//   900: "#24292f",
// };

// const StyledListbox = styled("ul")(
//   ({theme}) => `
//   font-family: "Roboto","Helvetica","Arial",sans-serif;
//   font-size: 0.862rem;
//   box-sizing: border-box;
//   padding: 8px;
//   margin: 16px 16px;
//   min-width: 280px;
//   border-radius: 8px;
//   overflow: auto;
//   outline: 0px;
//   background: ${
//     theme.palette.mode === "dark" ? grey[900] : colorPalettes.skyBlue
//   };
//   border: 1px solid ${
//     theme.palette.mode === "dark" ? grey[700] : colorPalettes.blue
//   };
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

//   z-index: 1;
//   `
// );

// const StyledMenuItem = styled(MenuItem)(
//   ({theme}) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;
//   user-select: none;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${menuItemClasses.focusVisible} {
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }

//   &.${menuItemClasses.disabled} {
//     color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }

//   &:hover:not(.${menuItemClasses.disabled}) {
//     background-color: ${
//       theme.palette.mode === "dark" ? grey[800] : colorPalettes.skyBlueShadow
//     };
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }
//   `
// );

// const TriggerButton = styled(MenuButton)(
//   ({theme}) => `
//   font-family: "Roboto","Helvetica","Arial",sans-serif;
//   font-size: 0.862rem;
//   font-weight: 550;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   border-radius: 8px;
//   padding: 0px 8px;
//   line-height: 1;
//   background: ${
//     theme.palette.mode === "dark" ? grey[900] : colorPalettes.skyBlue
//   };

//   border: none;
//   color: ${theme.palette.mode === "dark" ? grey[300] : colorPalettes.blue};

//   transition-property: all;
//   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
//   transition-duration: 0.2s;

//   &:hover {
//     color: ${theme.palette.mode === "dark" ? grey[300] : colorPalettes.skyBlue};
//     background: ${
//       theme.palette.mode === "dark" ? grey[800] : colorPalettes.blue
//     };
//     border-color: ${
//       theme.palette.mode === "dark" ? grey[600] : colorPalettes.skyBlue
//     };
//   }

//   &:focus-visible {
//     border-color: ${blue[400]};
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
//   }
//   `
// );
