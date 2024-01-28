import { Box, Typography, useTheme } from "@mui/material"
import ButtonDownloadPage from "../Buttons/ButtonDownloadPage.jsx"
import AnalyticsDropDownBtn from "../Buttons/AnalyticsDropDownBtn/AnalyticsDropDownBtn.jsx"
import MonthlySalesReport from "../Charts/MonthlySalesReport/MonthlySalesReport.jsx"

const CustomerGrowth = () => {
    const theme = useTheme()
    return (
        <Box component="div" >
            <Box component="div" sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <Typography variant="h4"
                    sx={{
                        color: theme.palette.secondary.text,
                        fontFamily: "poppins",
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "120%"
                    }}
                >
                    Monthly Sales Report
                </Typography>
                <AnalyticsDropDownBtn btnTitle="Current Year"/>
            </Box>
            <MonthlySalesReport />
     </Box>
      
    )
}

export default CustomerGrowth
