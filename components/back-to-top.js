/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Flex, Box} from "theme-ui";

export default function BackToTop() {

    return (
        <button className="cd-top text-replace js-cd-top"
        sx={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            display: 'inline-block',
            height: '60px',
            width: '60px',
            boxShadow: `0 0 10px rgb(0 0 0 / 5%)`,
            background: `url('./top-arrow.svg') no-repeat center 50%;`,
            backgroundColor: `light`,
            "&:hover": {
                outline: `none`,
                borderColor: `dark`,
                backgroundColor: `dark`,
            },
            "&:focus": {
                outline: `none`,
            },
            transition: `opacity .3s,visibility .3s,background-color .3s`,
            textIndent: `100%`,
            color: `transparent`,
            overflow: `hidden`
        }}
        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>Top</button>
    )
}
