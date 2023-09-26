
import { useEffect, useState } from "react";
import { Cell, Legend, Pie, PieChart } from "recharts";


const Statistics = () => {

    const [myDonation, setMyDonation] = useState(0)

    useEffect(() =>{
        const storedDonation = JSON.parse(localStorage.getItem('donations'))
        if(storedDonation){
            setMyDonation(storedDonation.length)
        }

    },[])

    const data = [
        {
            name: 'Total Donation',
            value: 12- myDonation
        },
        {name: 'my Donation', value: myDonation}
    ]
    const colors = ['#FF444A', '#00C49F']

    const customLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
        const x = cx + radius * Math.cos(-midAngle * (Math.PI/180))
        const y = cy + radius * Math.sin(-midAngle * (Math.PI/180)) 
        return (
            <text x={x} y={y} fill="white" textAnchor="middle">
                {`${(percent*100).toFixed(1)} %`}
            </text>
        ) 
    }

    return (
        <div className="h-screen md:h-[70vh] flex justify-center items-center">
            <PieChart width={300} height={300}>
                <Pie data={data} dataKey='value' labelLine={false} label={customLabel}>
                    {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index]}></Cell>)
                    }
                </Pie>
                <Legend></Legend>
            </PieChart>
        </div>
    );
};

export default Statistics;