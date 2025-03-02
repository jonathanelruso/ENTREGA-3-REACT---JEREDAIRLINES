import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import "../../HomeContent.css";

function HomeCard(props) {
    return (
        <Card className="card-item">
            <CardCover>
                <img
                    src={props.image}
                    srcSet={`${props.image} 2x`}
                    loading="lazy"
                    alt=""
                />
            </CardCover>
            <CardCover
                sx={{
                    background:
                        'linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.2), rgba(0,0,0,0) 300px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff" sx={{
                    fontSize: {
                        xs: '1rem', // Tamaño de fuente para pantallas pequeñas
                        sm: '1.18rem', // Tamaño de fuente para pantallas medianas
                        md: '1.2rem', // Tamaño de fuente para pantallas grandes
                        lg: '1.23rem', // Tamaño de fuente para pantallas extra grandes
                    },
                }}>
                    {props.title}
                </Typography>
                <Typography
                    startDecorator={<LocationOnRoundedIcon
                        sx={{
                            fontSize: {
                                xs: '1.05rem', 
                                sm: '1.25rem', 
                                md: '1.5rem', 
                                lg: '1.6rem', 
                            },
                        }} />}

                    textColor="neutral.300"
                    sx={{
                        fontSize: {
                            xs: '0.77rem', 
                            sm: '0.9rem', 
                            md: '1rem', 
                            lg: '1.1rem', 
                        },
                    }}
                >
                    {props.subtitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HomeCard;