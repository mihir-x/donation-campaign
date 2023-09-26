import PropTypes from 'prop-types'


const Banner = ({ handleSearch }) => {


    return (
        <div className=" bg-[url('https://i.ibb.co/qmhrpkw/donation.jpg')] bg-cover bg-[#fffffff2] bg-blend-overlay h-[50vh] flex flex-col justify-center text-center">
            <div className=' space-y-2 md:space-y-4 lg:space-y-10 w-full h-full flex flex-col justify-center text-center'>
                <div>
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <input type="text" name="search" id="" placeholder="Search Here..." className="border py-3 pl-5 border-[#DEDEDE] md:w-96" />
                        <input type="submit" value="Search" className="text-white bg-[#FF444A] px-5 py-3 font-semibold rounded-r-md" />
                    </form>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default Banner;