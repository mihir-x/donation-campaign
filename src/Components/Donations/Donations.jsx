import PropTypes from 'prop-types'
import DonationCard from '../DonationCard/DonationCard';
import { useEffect, useState } from 'react';

const Donations = ({ searchedKey, donations }) => {

    const [searchedDonation, setSearchedDonation] = useState(donations)

    useEffect(() => {
        if (searchedKey === '') {
            setSearchedDonation(donations)
        }
        //  if(searchedKey !== 'Water' || searchedKey !== 'Education' || searchedKey !== 'Food' || searchedKey !== 'Healthcare'){
        //     setSearchedDonation(donations)
        // }
        else {
            const finder = donations.filter(don => don.category === searchedKey)
            if (finder) {
                setSearchedDonation(finder)
            }
            // else{
            //     setSearchedDonation(donations)
            // }
        }
    }, [searchedKey, donations])

    console.log(searchedKey)

    return (
        <div className='mt-4 text-center'>
            {
                searchedDonation.length > 0 ? <div className=' text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 md:my-6 lg:mt-10 lg:mb-20 p-2'>
                    {
                        searchedDonation?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div> : <h1 className='font-bold text-3xl'>No Items Found <br /> <span className='text-xl font-medium'>Make sure you have entered the search key exactly as the category name with no space or anything</span></h1>
            }
        </div>
    );
};

Donations.propTypes = {
    searchedKey: PropTypes.string.isRequired,
    donations: PropTypes.array.isRequired
}

export default Donations;