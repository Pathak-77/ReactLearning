/*import React, { useState } from "react";

const Booking = (props)=> {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");

    const book = (e) =>{
        e.preventDefault();
        props.SubmitForm(e);
    }

    const handleChange =(e) =>{
        setDate(e);
        props.dispatch(e);
    } 
    return(
        <header>
            <section>
                <form 
                    method="post" 
                    onSubmit={book}>
                        
                       <fieldset>
                            <div>
                                <label htmlFor="book-date">
                                    Dates
                                </label>
                                <input 
                                    id="book-date"
                                    value={date}
                                    onChange={(e) => handleChange(e.target.value)}
                                    type="date"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="book-time">
                                    Time
                                </label>
                                <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                    <option value="">Choose your timing</option>
                                    {
                                        props.availableTimes.availableTime.map(availabletimes => {
                                            return ( <option key= {availabletimes}>{availabletimes}
                                            </option>)
                                        })
                                    }
                                </select>
                            </div>

                            <div>
                                <label htmlFor="book-guests">
                                    No of people
                                </label>
                                <input 
                                    id="book-guests"
                                    min={1}
                                    value={guests}
                                    onChange={(e) => setGuests(e.target.value)}
                                    type="date"
                                    required
                                />
                            </div>

                            <div className="btnReceive">
                                <input
                                    aria-label="On Click"
                                    type="submit" 
                                    value={"RESERVE"}
                                />
                            </div>
                        </fieldset> 
                </form>
            </section>
        </header>
    );
};

export default Booking;*/