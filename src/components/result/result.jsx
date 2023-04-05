import axios from "axios";
import './result.css';
import React, { useEffect, useState } from "react";
import Header from "../header/header";

const Result=()=>{

    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/getWeight').then((response)=>{
            setData(response.data.reverse());
        })
    },[])
    // const db_date = data.createdAt.split("-");
    // const day = db_date[2];
    // const date = `${day[0]}${day[1]}/${db_date[1]}/${db_date[0]}`;

    const getWeightStatus = (weight,unit) => {
        // console.log(data.unit)
            let idealWeightRange;
            let weightValue = parseFloat(weight);
            if(unit === "lb"){
                idealWeightRange=[100,127]
                // weightValue *= 0.45;
                if (weightValue < idealWeightRange[0]) {
                    return "underweight";
                  } else if (weightValue >= idealWeightRange[0] && weightValue <= idealWeightRange[1]) {
                    return "ideal";
                  } else if (weightValue > idealWeightRange[1] && weightValue <= 140) {
                    return "slight-overweight";
                  } else if (weightValue < idealWeightRange[0] && weightValue >= 80) {
                    return "slight-underweight";
                  } else {
                    return "overweight";
                  }
            }
            else{
                idealWeightRange=[60,70]
                if (weightValue < idealWeightRange[0]) {
                    return "underweight";
                  } else if (weightValue >= idealWeightRange[0] && weightValue <= idealWeightRange[1]) {
                    return "ideal";
                  } else if (weightValue > idealWeightRange[1] && weightValue <= 75) {
                    return "slight-overweight";
                  } else if (weightValue < idealWeightRange[0] && weightValue >= 50) {
                    return "slight-underweight";
                  } else {
                    return "overweight";
                  }
            }

           
        }
        // else{
        //     const idealWeightRange = [60, 70];
        //     const weightValue = parseFloat(weight);
        //     weightValue *= 0.45359237
        //     if (weightValue < idealWeightRange[0]) {
        //         return "underweight";
        //       } else if (weightValue >= idealWeightRange[0] && weightValue <= idealWeightRange[1]) {
        //         return "ideal";
        //       } else if (weightValue > idealWeightRange[1] && weightValue <= 75) {
        //         return "slight-overweight";
        //       } else if (weightValue < idealWeightRange[0] && weightValue >= 50) {
        //         return "slight-underweight";
        //       } else {
        //         return "overweight";
        //       }
            
        // }
       
    
    return(
        <>
            <Header/>
            <h2>Weight Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Current Weight</th>
                        <th>Ideal Weight</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item,index)=>(
                        <tr key={index}>
                            <td>{new Date(item.createdAt).toLocaleDateString('en-GB')}</td>
                            <td className={getWeightStatus(item.weight,item.unit)}>{item.weight}{" "}{item.unit}</td>
                            <td>60-70</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Result;