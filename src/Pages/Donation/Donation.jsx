import { useEffect, useState } from "react";
import DonatedCard from "./DonatedCard";


const Donation = () => {

    const [donated, setDonated] = useState([])
    const [isFound, setIsFound] = useState(false)
    const [isSeeAllClicked, setIsSeeAllClicked] = useState(false)

    useEffect(() => {
        const storedDonatedItems = JSON.parse(localStorage.getItem('donations'))

        if (storedDonatedItems) {
            setDonated(storedDonatedItems)
            setIsFound(true)
        }
    }, [])
    console.log(isSeeAllClicked);

    return (
        <div>
            {
                isFound ? <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-2 md:mb-6 lg:mb-10 p-2">
                        {
                            isSeeAllClicked ? donated.map(item => <DonatedCard key={item.key} item={item}></DonatedCard>): donated.slice(0,4).map(item => <DonatedCard key={item.key} item={item}></DonatedCard>)
                        }
                    </div>
                    <div className=" flex justify-center mb-5 md:mb-10">
                        {
                            (donated.length > 4 && isSeeAllClicked === false) ? <button onClick={() => setIsSeeAllClicked(true)} className="py-2 px-3 font-semibold text-white bg-[#009444] rounded-md">See All</button> : ''
                        }
                    </div>
                </div>
                    : <div className="h-screen md:h-[50vh] flex justify-center items-center"><p>no item here</p></div>
            }
        </div >
    );
};

export default Donation;