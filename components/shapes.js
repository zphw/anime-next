/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";

const Circle = ({ size, color, top, left = ``, right = ``, className = `` }) => (
    <div
        sx={{
            position: `absolute`,
            height: size,
            width: size,
            variant: `gradients.${color}`,
            borderRadius: `full`,
            top,
            left,
            right,
            zIndex: -1,
        }}
        className={className}
    />
)

const Donut = ({ size, color, width, top, left = ``, right = ``, className = `` }) => (
    <div
        sx={{
            position: `absolute`,
            height: size,
            width: size,
            backgroundColor: `transparent`,
            border: (t) => t.colors[color][5],
            borderWidth: width,
            borderStyle: `solid`,
            borderRadius: `full`,
            top,
            left,
            right,
            zIndex: -1,
        }}
        className={className}
    />
)

export { Circle, Donut }
