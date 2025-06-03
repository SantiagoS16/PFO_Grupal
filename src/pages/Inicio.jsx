import React from "react";
import styled from "styled-components";

function Inicio() {

    const Div = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    return(
            <Div>
                <h1>Bienvenido!</h1>
            </Div>
    );
}

export default Inicio;