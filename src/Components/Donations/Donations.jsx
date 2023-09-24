import PropTypes from 'prop-types'
import DonationCard from '../DonationCard/DonationCard';

const Donations = ({donations}) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-2 md:my-6 lg:mt-10 lg:mb-20 p-2'>
            {
                donations?.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

Donations.propTypes = {
    donations: PropTypes.array.isRequired
}

export default Donations;