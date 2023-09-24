import { NavLink } from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            <div>
                <img src="./Logo.png" alt="" />
            </div>
            <div>
                <li className="font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li className="font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                </li>
                <li className="font-bold">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>
                </li>
            </div>
        </div>
    );
};

export default Navbar;