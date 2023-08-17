const { Container } = require("@mui/material");

function Section() {
    return (
        <Container className="header-section">
            <h1 className="heading-primary">
                Workshop
            </h1>
            <p className="heading-text">Cras nunc ex, interdum sit amet ultrices at, pellentesque cursus diam. Vivamus nec nisi et erat vestibulum suscipit</p>
        </Container>
    )
}

export default Section;