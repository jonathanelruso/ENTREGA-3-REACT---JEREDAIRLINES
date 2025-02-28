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
                        'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                }}
            />
            <CardContent sx={{ justifyContent: 'flex-end' }}>
                <Typography level="title-lg" textColor="#fff">
                    {props.title}
                </Typography>
                <Typography
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.300"
                >
                    {props.subtitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default HomeCard;