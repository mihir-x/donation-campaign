import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Donations from "../../Components/Donations/Donations";
import { useState } from "react";


const Home = () => {

    const donations = useLoaderData()

    const [searchedKey, setSearchedKey] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchedKey(e.target.search.value)
    }


    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <div className="max-w-screen-lg mx-auto">
                <Donations searchedKey={searchedKey} donations={donations}></Donations>
            </div>
        </div>
    );
};

export default Home;