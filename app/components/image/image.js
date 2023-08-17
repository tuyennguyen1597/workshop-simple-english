const { ImageList } = require("@mui/material");
import ImageItem from "./image-item";

function Image(props) {
    const { images } = props
    return (
        <ImageList sx={{ height: 600 }} cols={1} gap={30}>
            {images.map((image) => (
                <ImageItem image={image}/>
            ))}
        </ImageList>
    )
}

export default Image;