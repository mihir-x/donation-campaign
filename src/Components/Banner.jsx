

const Banner = () => {
    return (
        <div className=" p-2 bg-[#fffffff2] h-[50vh] flex flex-col justify-center text-center space-y-2 md:space-y-4 lg:space-y-10">
            <div>
                <h1 className="text-xl md:text-3xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
            </div>
            <div>
                <form action="">
                    <input type="text" name="" id="" placeholder="Search Here..." className="border py-3 pl-5 border-[#DEDEDE] md:w-96" />
                    <input type="submit" value="Search" className="text-white bg-[#FF444A] px-5 py-3 font-semibold rounded-r-md" />
                </form>
            </div>
        </div>
    );
};

export default Banner;