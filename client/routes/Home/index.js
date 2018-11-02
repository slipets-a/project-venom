// Core
import React from 'react';
import styled from 'styled-components';

// Images
import bg from '../../../assets/images/bg.jpeg';

const Title = styled.h1`
    font-size: 1.5em;
    font-family: sans-serif;
    color: white;
    text-align: center;

    :hover {
        color: grey;
    }
`;

const Wrapper = styled.section`
    padding: 4em;
    background:papayawhip url('${bg}');
`;

function Home() {
    return (
        <Wrapper>
            <Title>Hello World!</Title>
        </Wrapper>
    );
}

export default Home;
