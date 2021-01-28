/** @jsxRuntime classic */
/** @jsx jsx */
import {Box, Container, jsx} from "theme-ui";
import Curved from "./icons/curved";
import Table from "./table";

const Main = () => {

    return (
        <section data-name="main">
            <div sx={{ backgroundColor: `backgroundThemes`, mt: [3, 4] }}>
                <Container sx={{ py: 4, padding: '.75em' }}>
                    <Box sx={{ mt: [2, 3] }} className="w-full lg:w-9/12">
                        <Table />
                    </Box>
                </Container>
            </div>
            <Curved sx={{ transform: `matrix(1, 0, 0, -1, 0, 0)`, position: `relative`, top: `-1px` }} />
        </section>
    )
}

export default Main
