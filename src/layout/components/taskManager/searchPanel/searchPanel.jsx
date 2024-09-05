import React, { useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import { useState } from "react";

const SearchWrap = styled.div`
width:980px;
height:50px;
border:1px solid #0af;
margin-left:10px;
border-radius:10px;
background-color:white;

`



function SearchPanel(){

    const [dataServer, setdata] = useState([]);

    useEffect(()=>{

        let url = 'http://127.0.0.1:8000/actor/'
        axios.get(url)
        .then(res =>{
          const  data = res.data.results;
          setdata(data)
        })

    },[]);
        return (
            <SearchWrap>
                <p>Actor</p>
                <div>
                    {dataServer.length > 0 ? (
                        dataServer.map((output) => {
                            return(
                                <div key={output.id}>
                                    <p>Id = {output.id}</p>
                                    <p>Name = {output.name}</p>
                                    <p>Age = {output.age}</p>
                                    <p>Description = {output.description}</p>
                                    <img src={output.image} alt={output.name} />
                                </div>
                            )
                        })
                    ) : (
                        <p>Данные отсутствуют</p>
                    )}
                </div>
            </SearchWrap>
        );
    }


export default SearchPanel;
