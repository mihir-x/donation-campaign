import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col-reverse md:flex-row justify-center items-center p-2">
            <div className="text-center">
                <h1 className=" text-2xl md:text-5xl lg:text-7xl font-bold">404</h1>
                
                <h2 className="text-lg md:text-2xl font-semibold">Ooops! You made a wrong turn</h2>
                <Link to={-1}><button className="p-2 bg-blue-600 rounded-md font-bold text-white mt-4">Go Back</button></Link>
            </div>
            <figure>
                    <img src="./404.png" alt="" className="h-full" />
                </figure>

        </div>
    );
};

export default ErrorPage;