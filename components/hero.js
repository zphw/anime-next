/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Flex, Styled } from "theme-ui";
// import { Circle, Donut } from "./shapes";
// import CircleGrid from "./figures/circle-grid";
import Curved from "./figures/curved";
// import { down, up } from "../styles/animations";
import Table from "./table";

const Hero = () => {

    return (
        <div>
            <Container as="section" data-name="hero" sx={{ mt: [3, 4], padding: '1em' }}>
                <Flex sx={{ justifyContent: `space-between` }}>
                    <Box className="w-full lg:w-9/12">
                        <Table />
                    </Box>
                </Flex>
            </Container>
            {/*<div data-name="shapes">
                <Circle
                    size="210px"
                    color="orange"
                    top="170px"
                    left={[`-185px`, `-185px`, `-185px`, `-120px`]}
                    sx={{ display: [`none`, `none`, `none`, `block`] }}
                />
                <Circle size="35px" color="blue" top={[`165px`, `130px`]} left={[`-5px`, `40px`]} />
                <Circle size="120px" color="pink" top="620px" right={[`-80px`, `50px`, `90px`]} />
                <Circle
                    size="40px"
                    color="green"
                    top="750px"
                    right={[`30px`, `210px`, `250px`]}
                    sx={{ animation: `${up} 6s ease-in-out infinite alternate` }}
                />
                <Donut
                    size="30px"
                    color="green"
                    width="5px"
                    top="465px"
                    left={[`-15px`, `-5px`, `-5px`, `20px`]}
                    sx={{ display: [`none`, `none`, `none`, `block`] }}
                />
                <Donut
                    size={[`130px`, `130px`, `230px`]}
                    color="purple"
                    width={[`20px`, `20px`, `50px`]}
                    top={[`700px`, `668px`]}
                    left={[`-75px`, `-75px`, `-102px`]}
                    sx={{ animation: `${down} 10s ease-in-out infinite alternate` }}
                />
                <CircleGrid color="indigo" size={175} top="220px" right={[`-180px`, `-120px`, `-120px`, `-70px`]} />
            </div>*/}
            <Curved sx={{ transform: `matrix(1, 0, 0, -1, 0, 0)`, position: `relative`, top: `-1px` }} />
        </div>
    )
}

export default Hero
