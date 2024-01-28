import { Box, Typography } from "@mui/material"
import CustomerChart from "../CustomerChart/CustomerChart.jsx"

const CustomerSatisfaction = () => {
    return (
        <Box component="div">
            <Typography variant="h4" sx={{
                fontFamily: 'poppins',
                fontSize: "1.25rem",
                fontWeight: 600,
                lineHeight: "2rem"
            }}>
                Customer Satisfaction
            </Typography>
            <Box component="div">
                <CustomerChart />
            </Box>
        </Box>
    )
}

export default CustomerSatisfaction

