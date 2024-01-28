import { Box, Typography } from "@mui/material"
import RatingPercentage from "../RatingPercentage/RatingPercentage.jsx"

const Rating = () => {
    return (
        <Box component="div">
            <Box component="div">
                <Typography variant="h4" sx={{
                    fontFamily: "poppins",
                    fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "23.968px",
                    letterSpacing: "0.545px",
                    color: "#141D21"
                }}>
                    Your Rating
                </Typography>
                <Typography variant="p" sx={{
                    fontFamily: "poppins",
                    fontWeight: 400,
                    fontSize: "13.073px",
                    lineHeight: "23.968px",
                    letterSpacing: "0.545px",
                    color: "#000000",
                    opacity: .5
                }}>
                    Lorem ipsum dolor sit amet, consectetur
                </Typography>
                <Box component="div" sx={{
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    mt: "3rem"
                }}>
                    <RatingPercentage title="Medicines" percentage={85} color="#6463D6" opacity={.8} size={7.065}/>
                    <RatingPercentage title="Skin Care" percentage={85} color="#F99C30" opacity={.9} size={11.48894}/>
                    <RatingPercentage title="Packaging" percentage={92} color="#2FBFDE" opacity={.9} size={8.33113}/>
                </Box>
                
            </Box>
        </Box>
    )
}

export default Rating
