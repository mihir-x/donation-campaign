import PropTypes from 'prop-types'
import DonationCard from '../DonationCard/DonationCard';

const Donations = ({donations}) => {
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2 md:mt-6 lg:mt-10'>
            {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

Donations.propTypes = {
    donations: PropTypes.array.isRequired
}

export default Donations;