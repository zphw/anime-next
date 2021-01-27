import { Global } from "@emotion/core";
import { Styled, Box } from "theme-ui";
import Meta from "./meta";
import Header from "./header";
import BackToTop from "./back-to-top";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";

const Layout = ({ children, className = ``}) => {
    return (
        <>
            <Global
                styles={(theme) => ({
                    "*": {
                        boxSizing: `inherit`,
                    },
                    "::selection": {
                        backgroundColor: theme.colors.text,
                        color: theme.colors.background,
                    },
                    "#__next": {
                        position: `relative`,
                        overflowX: `hidden`,
                    },
                    a: {
                        transition: `all 0.3s ease-in-out`,
                        textDecoration: `none`,
                        outline: `none`,
                    },
                })}
            />
            <Meta />
            <Header />
            <Box as="main" className={className}>
                {children}
            </Box>
            <BackToTop />
            <Box as="footer" variant="layout.footer">
                &copy; {new Date().getFullYear()} zph
                <br />

            </Box>
        </>
    )
}

export default Layout
