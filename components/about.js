/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Styled, Box, Flex } from "theme-ui";
import { Circle, Donut } from "./figures/shapes";
import { down, upWide } from "../styles/animations";

const About = () => {

    return (
        <section data-name="about" sx={{ position: `relative`, py: 6 }}>
            <Container>
                <div sx={{ maxWidth: `760px` }}>
                    <Styled.h1 as="h2">Criterion</Styled.h1>
                    <Styled.p sx={{ my: 3 }}>
                        Scoring of anime (exclusive of their derivative or related works) is based on the <strong>personal</strong> assessment of impression, plot, characterization, meaning, and production value.
                    </Styled.p>
                    <ul>
                        <li>★10: Masterpiece / Especially meaningful</li>
                        <li>★9: Remarkable</li>
                        <li>★8: Excellent / Recommended</li>
                        <li>★7: Enjoyable</li>
                        <li>★6: Fair</li>
                        <li>★5: Poor</li>
                        <li>★4: Bad</li>
                        <li>★3: Very Bad</li>
                        <li>★2: Terrible</li>
                        <li>★1: SPAM</li>
                    </ul>
                </div>
            </Container>
            <Circle size={[`200px`, `200px`, `300px`]} color="red" top="-75px" right="-75px" />
            <Circle
                size={[`25px`, `25px`, `50px`]}
                color="gray"
                top="-25px"
                right={[`175px`, `175px`, `275px`]}
                sx={{ zIndex: 10 }}
            />
            <Circle
                size={[`15px`, `15px`, `25px`]}
                color="pink"
                top="50px"
                right={[`145px`, `145px`, `375px`]}
                sx={{ animation: `${upWide} 20s ease-in-out infinite alternate` }}
            />
            <Donut color="yellow" size="200px" top="-100px" width="30px" left="-50px" sx={{ opacity: 0.5 }} />
            <Donut
                color="blue"
                size="50px"
                top="-25px"
                width="8px"
                left="180px"
                sx={{ opacity: 0.5, animation: `${down} 10s ease-in-out infinite alternate` }}
            />
        </section>
    )
}

export default About
