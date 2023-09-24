import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const { id, image, title, category, category_bg_color, card_bg_color, text_color } = donation

    const navigate = useNavigate()
    const handleClickOnCard = () => {
        navigate(`/donation/${id}`)
    }

    return (
        <div onClick={handleClickOnCard} className="cursor-pointer card bg-base-100 shadow-xl space-y-2" style={{backgroundColor:`${card_bg_color}`}}>
            <figure className=' h-2/3'><img src={image} alt="Shoes" className='h-full w-full' /></figure>
            <div className='p-2 space-y-1'>
                <p className='px-3 py-1 inline-flex rounded-lg font-medium text-sm' style={{backgroundColor:`${category_bg_color}`, color:`${text_color}`}}>{category}</p>
                <h2 style={{color:`${text_color}`}} className="text-base font-bold">{title}</h2>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DonationCard;