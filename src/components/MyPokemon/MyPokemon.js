import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../Slider/Slider";
import Header from "../Elements/Header";

const MyPokemon = (props) => {
    const [myPokes, setMyPokes] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [refresh, setRefresh]=useState(true)
    // const {myPokes} = props
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/users/pokes/`, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                setMyPokes(res.data);
                setLoaded(true);
            })
            .catch(err=>{
                console.log("catch error: "+err)
            })
    }, [refresh]);

    return (
        <div className="container-fluid" id="mypoke">
            <Header title="My Pokemon"/>
            {loaded && <Slider pokemon={myPokes} title="My Pokemon" divid="mypoke" setRefresh={setRefresh} refresh={refresh} subtract={true}/>}
        </div>
    );
};

export default MyPokemon;
