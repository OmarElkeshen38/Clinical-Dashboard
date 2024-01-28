import { Box, Paper, useTheme, InputBase, Typography, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
import notifications from "../../assets/notifications.svg"
import edit from "../../assets/edit.svg"
const Navbar = ({ drawerWidth }) => {
    const theme = useTheme()
    return (
        <Box component="nav" sx={{
            pl: { xs: '1rem', lg: `${drawerWidth + 40}px` },
            pr: { md: '30px', xl: '0px' },
            display: "flex",
            alignItems: 'center',
            minHeight: '8.0625rem',
            justifyContent: "space-between",
            bgcolor: theme.palette.background.main,

        }}>
            <Box component="div" sx={{
                mr: "10rem",
                color: theme.palette.primary.text,
                fontFamily: "poppins"
            }}>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: "32px",

                }}>Good Morning</Typography>
                <Typography sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                }}>A preview of your business</Typography>
            </Box>
            <Box component="div" sx={{
                display: "flex",
                mr: "2rem",
                alignItems: "center",
                
            }}>
                <Paper
                    component="form"
                    sx={{
                        p: "9px 13px",
                        width: "318px",
                        mr: "1.3rem",
                        display: "flex",
                        alignItems: "center",
                        gap: '8px',
                        flex: "1 0 0",
                        borderRadius: '16px',
                        bgcolor: "#DAFFF5",
                        '& .MuiSvgIcon-root': {
                            fontSize: "2rem",
                            color: '#464950'
                        }
                    }}
                >
                    <InputBase
                        sx={{
                            ml: '2px', flex: 1, "& input::placeholder": {
                                fontSize: "20px",
                                color: '#464950'
                            },

                        }}
                        placeholder="Search"
                        inputProps={{ "aria-label": "search" }}
                    />

                    <Search sx={{ color: "#224A46" }} />

                </Paper>
                <IconButton aria-label="notifications" sx={{
                    p: "10px 9.8px 9.802px 10px",
                    bgcolor: "#DAFFF5",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    mr: "1.3rem"
                }} >
                    <img src={notifications} alt="notifications" />
                </IconButton>
                
                    <Box sx={{
                        width: "1.5px",
                        height: "78px",
                        bgcolor: "rgba(245, 245, 245, 0.62)", 
                        mr: "18px"
                    }}></Box>
                    <IconButton aria-label="edit" sx={{
                        "& .MuiTouchRipple-root": {
                            display: "none"
                        },
                        "&:hover": {
                            bgcolor: "transparent"
                        }
                    }}>
                        <img src={edit} alt="edit" width={24} height={24 } />
                    </IconButton>
                    <Typography variant="body1">
                        Edit
                    </Typography>
            
            </Box>
        </Box>
    )
}

export default Navbar
