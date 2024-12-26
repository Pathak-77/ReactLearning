/*import React, { useReducer } from "react";
import {Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from "./Header"
import Reserve from "./Reserve"

const Main = () => {
    const seedRandom = function(seed){
        var m = 2**35 -31;
        var a =131514;
        var s = seed % m;
        return function(){
            return (s = s *a % m) /m;
        }
    }


    const fetchApi = function(date){
        let result =[];
        let random = seedRandom(date.getDate());
        for (let i = 15; i < 24; i++) {
            if(random() < 0.5){
                result.push(i+ ':00')
            }

            if(random() > 0.5){
                result.push(i+ ':30')
            }
        }
        return result;

    }

    const submitApi = function(formData){
        return true;
    }
    
    const initialState = {availableTimes: fetchApi(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes : fetchApi(new Date())}
    }

    const navigate = useNavigate;
    function SubmitForm (formData){
        if(submitApi(formData)){
            navigate("/confirmed");
        }
    }
    return (
        <main>
            <Router>
                <Routes>
                <Route path="/" element = {<Header/>}></Route>
                <Route path="/Reserve" element = {<Reserve availableTimes={state} dispatch = {dispatch} SubmitForm={SubmitForm}/>}></Route>
            </Routes>
            </Router>
            
        </main>
    );
};

export default Main;*/