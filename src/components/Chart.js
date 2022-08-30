import React , {useState , useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'

import axios from 'axios'



const Charts = () => {

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



    const data = {
        labels: name,
        datasets: [
            {
                data: Age,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                lineTension:0.4
            }
        ]
    };

   



    return (
        <div>
            <Line data={data} />
        </div>
    )
}

export default Charts
