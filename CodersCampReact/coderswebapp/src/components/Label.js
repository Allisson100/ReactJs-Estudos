import { memo } from "react"

function Label ({ text }) {
    return (
        <label>{text}</label>
    )
}

export default memo(Label)