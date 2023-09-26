import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";


const DonationDetails = () => {
    const params = useParams()

    const allDonation = useLoaderData()
    const [clickedDonation, setClickedDonation] = useState({})

    useEffect(() => {
        setClickedDonation(allDonation.find(donation => donation.id == params.id))
    }, [allDonation, params.id])

    const { image, price, title, description, text_color } = clickedDonation

    const handleDonate = () => {
        const donationArray = []
        const storedDonation = JSON.parse(localStorage.getItem('donations'))

        if (!storedDonation) {
            donationArray.push(clickedDonation)
            localStorage.setItem('donations', JSON.stringify(donationArray))
            swal("Good job!", "You have donated successfully!", "success")
        }
        else {
            const isExists = storedDonation.find(donation => donation.id == params.id)

            if (!isExists) {
                donationArray.push(...storedDonation, clickedDonation)
                localStorage.setItem('donations', JSON.stringify(donationArray))
                swal("Good job!", "You have donated successfully!", "success")
            }
            else{
                swal("Alert!", "You have already donated!", "error")
            }
        }
    }

    return (
        <div className="max-w-screen-lg mx-auto md:h-screen relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-2 md:mb-6 lg:mb-14">
            <div className="relative m-0 md:h-[60%] rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                <img
                    src={image}
                    alt="ui/ux review check"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 h-[25%] md:h-[20%] bg-black w-full opacity-50">

                </div>
                <button onClick={handleDonate} style={{ backgroundColor: `${text_color}` }} className="absolute bottom-1 left-1 md:bottom-5 md:left-5 text-white font-semibold px-2 md:px-5 py1 md:py-2 rounded-md">Donate ${price}</button>
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <p className="mt-3 block font-sans text-sm md:text-xl font-normal leading-relaxed text-gray-700 antialiased">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default DonationDetails;