import { ImageListItem } from "@mui/material";
import classes from "../../../styles/home.module.css"

function ImageItem(props) {
    const { image } = props;
    return (
        <ImageListItem key={image}>
            <img className={classes.featureImage} src={image}/>
        </ImageListItem>
    )
}

export default ImageItem