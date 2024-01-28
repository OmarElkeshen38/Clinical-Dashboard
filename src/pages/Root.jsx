import Asidebar from "../components/Asidebar/Asidebar";
import Navbar from '../components/Navbar/Navbar'
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1246AC",
            text: "#224A46"
        },
        secondary: {
            main: "#EAF1FF",
            text: "#141D21"

        },
        background: {
            main: "#8BC4B5"
        }
    },
});

const Root = () => {
    const drawerWidth = 324;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box component="div" sx={{width: "100%"}}>
                <Navbar drawerWidth={drawerWidth} />
                <Asidebar drawerWidth={drawerWidth}/>
                <Box
                    component="main"
                    sx={{

                        ml: { xs: '1rem', lg: `${drawerWidth + 30}px` },

                        mt: "2rem",
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Root;