import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

import axios from 'axios'



const Round = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:4000/users");
        setUser(result.data);
    };

    var Age = users.map((item) => {
        return item.Age;
    });
    var name = users.map((item) => {
        return item.name;
    });


    function rand(min, max) {
        return parseInt(Math.random() * (max - min + 1), 10) + min;
    }

    function get_random_color() {
        var h = rand(1, 360); // color hue between 1 and 360
        var s = rand(30, 100); // saturation 30-100%
        var l = rand(30, 70); // lightness 30-70%
        return "hsl(" + h + "," + s + "%," + l + "%)";
    }



    const data = {
        labels: name,
        datasets: [
            {
                data: Age,
                lables: name,
                fill: true,
                backgroundColor: [get_random_color(), get_random_color(), get_random_color(), get_random_color(), get_random_color(), get_random_color(), get_random_color()],
                borderColor: [get_random_color(), get_random_color(), get_random_color(), get_random_color(), get_random_color(), get_random_color(), get_random_color()],
                lineTension: 0.4
            }

        ],

    };






    return (
        <div>
            <Pie data={data}
                options={{
                    legend: { display: true, position: "right" },

                    datalabels: {
                        display: true,
                        color: "white",
                        zIndex :"9999"
                    },
                    tooltips: {
                        backgroundColor: "#5a6e7f",
                    },
                }}
            />
        </div>
    )
}

export default Round
