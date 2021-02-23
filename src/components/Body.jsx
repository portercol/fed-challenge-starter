// Import React and Card component
import React from "react";
import Workout from './pages/WorkoutCards'

// Create function and then return what we want to display on the page
function Body() {
    return (
        <div className="container">
            <div className="row justify-content-around">
                <Workout />
            </div>
        </div>
    )
};

// Export Body out of Body.jsx
export default Body;