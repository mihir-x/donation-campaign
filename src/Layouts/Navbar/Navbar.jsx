import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-5 items-center p-2 my-2 md:my-5 lg:my-10">
            <div>
                <img src="./Logo.png" alt="" />
            </div>
            <ul className="list-none text-lg flex gap-7">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;