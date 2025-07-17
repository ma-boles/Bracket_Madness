import Link from "next/link";
import { HomeIcon, TrophyIcon } from "@heroicons/react/24/outline";
import LogoutButton from "@/app/auth/components/LogoutButton";


export default function UserMenu({ currentUser, handleLogIn, setShowModal, setUserMenuOpen }) {

    if (!currentUser) {
        return (
            <button
                disabled
                className="hidden md:block w-24 p-2 mx-1 h-10 bg-green-600 cursor-pointer hover:bg-white hover:text-black transition duration-300 rounded-md"
                onClick={handleLogIn}
            >
                Log In
            </button>
        )
    }

    return (
        <>
            <div className="absolute right-0 top-13 mt-2 p-1 w-48 bg-black/70 rounded-md shadow-lg py-1 z-50"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                >
                <Link href="/Dashboard">
                    <button
                        disabled
                        className="flex items-center w-full h-10 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md"
                        role="menuitem"
                        onClick={() => setUserMenuOpen(false)}
                    >
                    <div className="mx-4">
                        <HomeIcon className="w-6 h-6 text-white" /> 
                    </div>

                        Dashboard
                    </button>
                </Link>

                <button
                    disabled
                    onClick={() => {
                    setShowModal(true);
                    setUserMenuOpen(false);
                    }}
                    className="flex items-center  w-full h-10 my-1 border border-transparent hover:border-blue-600 hover:bg-blue-600/30 cursor-pointer rounded-md"
                    role="menuitem"
                >
                <div className="mx-4">
                    <TrophyIcon className="w-6 h-6 text-white" /> 
                </div>

                    Leaderboard
                </button>

                    <LogoutButton />
            </div>

        </>
    )
}