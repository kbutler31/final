
import axios from 'axios';
import { useState } from 'react';








const URL_ENDPOINT = "http://localhost:3500/Flights"
  const [flights, setFlights] = useState([]);
  
  
  const [updatedFlight, setUpdatedFlight] = useState([]);
      const [updatedFlightNumber, setUpdatedFlightNumber] = useState('');
      const [updatdeDestination, setUpdatedDestination] = useState('');
      const [updatedDeparture, setUpdatedDeparture] = useState('');
      const [updatdeDepartureTime, setUpdatedDepartureTime] = useState('');
  
      const [flightNumber, setFlightNumber] = useState("");
      const [Destination, setDestination] = useState("");
      const [Departure, setDeparture] = useState("");
      const [DepartureTime, setDepartureTime] = useState("");
  
      function postFlight(){}
      

  function updateFlight(){
        <>
        <div className="App">
            <>
            <form>
                <h3>Post new flight form</h3>
                <label>flightNumber</label>
                <input onChange={(e) => setFlightNumber(e.target.value)}></input>
                <label>Destination</label>
                <input onChange={(e) => setDestination(e.target.value)}></input>
                <label>Departure</label>
                <input onChange={(e) => setDeparture(e.target.value)}></input>
                <label>Departure Time</label>
                <input onChange={(e) => setDepartureTime(e.target.value)}></input>
                <button onClick={(e) => postFlight(e)}>Submit</button>
            </form>
            </>
        </div>
          

      {flights.map((flight, index) => {
        return (
          <div key={index}>
              <div className="user">
                  <div>Flight Number: {flight.flightNumber}</div><br></br>
                  <div>Destination: {flight.destination}</div><br></br>
                  <div>Departure: {flight.departure}</div><br></br>
                  <div>Departure Time: {flight.departureTime}</div><br></br>
                  {/* <button onClick={() => deleteUser(flight.id)}>Delete</button> */}
              </div>
              <form>
                  <h3>Update flight form</h3>
                  <label>flight Number</label>
                  <input onChange={(e) => setUpdatedFlightNumber(e.target.value)}></input>
                  <label>departure</label>
                  <input onChange={(e) => setUpdatedDeparture(e.target.value)}></input>
                  <label>destination</label>
                  <input onChange={(e) => setUpdatedDestination(e.target.value)}></input>
                  <label>departure Time</label>
                  <input onChange={(e) => setUpdatedDepartureTime(e.target.value)}></input>
                  <button onClick={(e) => updateFlight(e)}>Submit</button>
              </form>
          </div>
        )
      })}
    </> 
  )
}

const fetchPut = async (id) => {
  try {
      let response = await fetch(URL_ENDPOINT + "/" + id, {
          method: 'PUT',
          headers: {
              'Content-Type': 'Flights/json'
          },
          body: JSON.stringify('flightNumber,destination,departure,departureTime') 
             });
      let data = await response.json();
      console.log(data); // Do something with the data here!
  } catch (error) {
      console.error('Error:', error);

  }
}
export default fetchPut;