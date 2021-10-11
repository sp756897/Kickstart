import React from "react"
import Menu from "./Header"
import { Container } from "semantic-ui-react"

const layout = (props)=>{
    return(
        <Container>
            <Menu/>
            {props.children}
        </Container>
    )
}

export default layout
