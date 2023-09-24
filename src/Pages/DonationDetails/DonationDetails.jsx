import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const params = useParams()

    const allDonation = useLoaderData()
    const [clickedDonation, setClickedDonation] = useState({})

    useEffect(() => {
        setClickedDonation(allDonation.find(donation => donation.id == params.id))
    }, [allDonation, params.id])

    const { image, price, title, description } = clickedDonation

    return (
        <div className="relative flex h-screen flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                <img
                    src={image}
                    alt="ui/ux review check"
                    className="w-full h-full"
                />
            </div>
            <div className="p-6">
                <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h4>
                <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
                   {description}
                </p>
            </div>
            
        </div>
    );
};

export default DonationDetails;