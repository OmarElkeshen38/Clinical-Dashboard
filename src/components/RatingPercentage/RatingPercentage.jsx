import { Box, CircularProgress, Typography } from "@mui/material"
import './RatingPercentage.css'
const RatingPercentage = ({ percentage, opacity, title, color, size }) => {

    return (
        <>
            <Box sx={{
                position: 'relative',
                width: `${size}rem`,
                height: `${size}rem`,
                borderRadius: "50%",
                bgcolor: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                opacity: opacity,
                gap: '.5rem',
                "&::before": {
                    width: `${size + 1}rem`,
                    height: `${size + 1}rem`,
                    bgcolor: "transparent",
                    borderRadius: "50%"
                }

            }} className="circular-progress">
                <Typography variant="h5" sx={{
                    color: "#FFF",
                    fontFamily: "poppins",
                    fontSize: "1.413rem",
                    fontWeight: 400,
                    lineHeight: "1.413rem",
                    letterSpacing: "0.02206rem"
                }}>{`${percentage}%`}
                </Typography>
                <Typography variant="h6" sx={{
                    color: "#FFF",
                    fontFamily: "poppins",
                    fontSize: ".75rem",
                    fontWeight: 400,
                    lineHeight: " 0.52988rem",
                    letterSpacing: "0.02206rem"
                }}>{title}
                </Typography>
                <CircularProgress thickness={.7} size={`${size + 1}rem`} variant="determinate" value={percentage} sx={{
                    position: 'absolute',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: `${size + 1}rem`,
                    height: `${size + 1}rem`,
                    color: color

                }} />
            </Box>
        </>



    )
}

export default RatingPercentage
