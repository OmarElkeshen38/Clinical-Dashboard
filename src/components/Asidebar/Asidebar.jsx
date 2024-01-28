import { useState } from "react";
import logo from "../../assets/logo.svg";
import logout from "../../assets/logout.svg"
import { pages } from "../../constants";
import './Asidebar.css'

import {
    Drawer,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useTheme,
    Box,
} from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const Asidebar = ({ drawerWidth }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerClose = () => {
        setOpen(false);
    };

    let location = useLocation();
    const navigate = useNavigate();
    return (
        <Drawer

            sx={{
                display: { xs: 'none', lg: 'block' },
                "& .MuiDrawer-paper": {
                    flexDirection: "column",
                    justifyContent: "space-between",
                    border: "none",
                    width: `${drawerWidth}px`,
                    p: "48px 0",
                    boxSizing: "border-box",
                    bgcolor: theme.palette.background.main
                },
            }}
            variant="permanent"
            anchor="left"
            open={open}
            onClose={handleDrawerClose}
            className="drawer"
        >
            <Box
                component="div"
                sx={{ display: "flex", flexDirection: "column", gap: "64px" }}
            >
                <Box component="div" sx={{ display: "flex", pl: "24px", gap: "16px" }}>
                    <img width={53.499} height={63.53} src={logo} alt="logo" />
                    <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{
                            color: theme.palette.secondary.text,
                            fontFamily: "poppins",
                            fontWeight: 700,
                            fontSize: "24px",
                        }}>
                            PillMate
                        </Typography>
                        <Typography sx={{
                            color: theme.palette.primary.text,
                            fontFamily: "poppins",
                            fontSize: "16px",
                            fontWeight: 600
                        }}>
                            Admin Board
                        </Typography>
                    </Box>
                </Box>

                <List>
                    {pages.map((page) => (
                        <ListItem
                            disablePadding
                            sx={{
                                "& .MuiButtonBase-root": {
                                    gap: "10px",
                                    padding: "24px 54px 24px 32px",
                                },
                                "& .MuiListItemIcon-root": {
                                    minWidth: 0,
                                },
                                color: theme.palette.primary.text,
                                background:
                                    location.pathname === `${page.path}`
                                        ? "linear-gradient(270deg, #0BA996 0.11%, #109384 39.64%, #224A46 99.9%)"
                                        : "",
                                borderLeft: location.pathname === `${page.path}` ? `4px solid ${theme.palette.primary.text}` : ''
                            }}
                            key={page.id}
                            onClick={() => {
                                navigate(page.path);
                            }}
                        >
                            <ListItemButton sx={{ m: 0, p: 0 }}>
                                <ListItemIcon sx={{
                                    '& svg g path': { fill: location.pathname === page.path ? "blue" : '' }
                                }}><img src={page.icon}></img></ListItemIcon>
                                <ListItemText primary={page.name}
                                    sx={{
                                        '& .MuiTypography-root': {
                                            fontFamily: 'poppins',
                                            fontSize: '20px',
                                            fontWeight: 500,
                                            letterSpacing: '0.32px',
                                            background: location.pathname === page.path ? "linear-gradient(180deg, #DAFFF5 0%, #90FFE2 100%)" : "",
                                            backgroundClip: location.pathname === page.path? "text" : "",
                                            WebkitTextFillColor: location.pathname === page.path? "transparent": ""
                                        }
                                    }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

            </Box>
            <Box
                component="div"
                sx={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    fontFamily: "inter",
                    ml: "32px"
                }}
            >
                <IconButton aria-label="logout" sx={{ p: 0, m: 0 }}>
                    <img src={logout} alt="logout" />
                </IconButton>
                <Typography
                    variant="body1"
                    sx={{
                        fontFamily: "poppins",
                        fontWeight: "500",
                        fontSize: "18px",
                        leadingTrim: "both",
                        letterSpacing: "0.288px",
                        color: theme.palette.primary.text,
                        cursor: "pointer",
                    }}
                >
                    Log Out
                </Typography>
            </Box>
        </Drawer >
    );
};

export default Asidebar;
