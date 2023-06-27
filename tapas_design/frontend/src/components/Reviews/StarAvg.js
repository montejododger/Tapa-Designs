import React from "react";
import StarDisplay from "./StarDisplay";

const AverageStarRating = ({ ratings }) => {
    const averageRating = ratings.reduce((total, num) => total + num, 0) / ratings.length;

    return <StarDisplay rating={Math.round(averageRating)} />;
};

export default AverageStarRating;