import React from "react";

import styled from "styled-components";

const SearchWrap = styled.div`
width:980px;
height:50px;
border:1px solid #0af;
margin-left:10px;
border-radius:10px;
background-color:white;

`
function SearchPanel(){


    return(
    <SearchWrap>
        <p>Text</p>
    </SearchWrap>
    )
}

export default SearchPanel;