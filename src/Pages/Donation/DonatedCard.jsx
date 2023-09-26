import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const DonatedCard = ({ item }) => {

    const { id, image, category, title, price, text_color, card_bg_color, category_bg_color } = item
    const navigate = useNavigate()
    const handleViewDetailsClick = () => {
        navigate(`/${id}`)
    }

    return (
        <div style={{ backgroundColor: `${card_bg_color}` }} className="relative flex flex-row gap-5 rounded-xl bg-clip-border shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-2">
                <h6 style={{ color: `${text_color}`, backgroundColor: `${category_bg_color}` }} className="mb-2 inline-block text-sm font-semibold py-2 px-3 rounded-md">
                    {category}
                </h6>
                <h4 className="mb-2 block text-xl font-semibold  ">
                    {title}
                </h4>
                <p style={{ color: `${text_color}` }} className="mb-2 block text-lg font-semibold ">
                    ${price}
                </p>
                <button onClick={handleViewDetailsClick} style={{ backgroundColor: `${text_color}` }}
                    className='px-3 py-2 rounded-md text-white font-semibold'
                    type="button"
                >
                    View Details
                </button>

            </div>
        </div>
    );
};

DonatedCard.propTypes = {
    item: PropTypes.object.isRequired
}

export default DonatedCard;