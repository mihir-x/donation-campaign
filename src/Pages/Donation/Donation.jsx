import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";


const Donation = () => {

    const [donated, setDonated] = useState([])
    const [isFound, setIsFound] = useState(false)

    useEffect(() =>{
        const storedDonatedItems = JSON.parse(localStorage.getItem('donations'))

        if(storedDonatedItems){
            setDonated(storedDonatedItems)
            setIsFound(true)
        }
    },[])
    console.log(donated)
    console.log(isFound)

    return (
        <div>
            {
                isFound ? <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2 md:mb-6 lg:mb-16 p-2">
                    {
                        donated.map(item => <DonatedCard key={item.key} item={item}></DonatedCard>)
                    }
                </div>
                : <p>no item here</p>
            }
        </div>
    );
};

export default Donation;