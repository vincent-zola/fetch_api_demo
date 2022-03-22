import React, {useState} from 'react'
import TripList from './components/TripList'

const App = () => {
  const [showTrips, setShowTrips] = useState(true)
  return (
    <div>
      <button onClick={()=>{setShowTrips(!showTrips)}} >Hide Trips</button>
      {showTrips && <TripList/>}
    </div>
  )
}

export default App