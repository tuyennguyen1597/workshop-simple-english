import { Container, Grid } from "@mui/material"
import classes from "../styles/home.module.css"
import { Fragment } from "react"
import Image from "./components/image/image"
import Section from "./components/section/section-title"


export default function Home() {
	const imageList = [
		'/eng1.jpg',
		'/eng2.jpg',
		'/eng3.jpg'
	]
	return (
		<Fragment>
			<Container className={classes.container}>
				<Section/>
				<Grid container spacing={3} >
					<Grid item xs={7}>
						<img className="main-image" src="/eng-main.jpg" alt="English image"></img>
						<div>
							<h3 className="heading-tertiar">Lorem Ipsum</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum tempor erat ac blandit. Morbi id diam a lacus mattis dictum. Etiam vel rhoncus turpis. Donec mollis interdum risus non pretium. Suspendisse at bibendum odio, eu tincidunt enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet orci massa. Ut id elit lobortis quam rutrum dictum.
							</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rutrum tempor erat ac blandit. Morbi id diam a lacus mattis dictum. Etiam vel rhoncus turpis. Donec mollis interdum risus non pretium. Suspendisse at bibendum odio, eu tincidunt enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sit amet orci massa. Ut id elit lobortis quam rutrum dictum.</p>
						</div>
					</Grid>
					<Grid item xs={5}>
						<Image images={imageList} />
					</Grid>
				</Grid>
			</Container>
		</Fragment>


	)
}
