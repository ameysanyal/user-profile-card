import React, { useEffect, useState } from "react";

const ProfileCard = () => {

    const [userData, setUserData] = useState()

    const fetchData = async () => {
        const response = await fetch("https://randomuser.me/api/?page=1&results=1&seed=abc");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUserData(data.results)
        console.log(data.results[0].name.first)
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        userData && (
            <div className="max-w-xl mx-auto shadow-lg p-6 flex items-center space-x-6 bg-white/15 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-white">
                {/* Image Section */}
                <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                    <img
                        src={userData[0].picture.large}
                        alt={`${userData[0].name.first} ${userData[0].name.last}`}
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Details Section */}
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-between items-center space-x-2">
                        <p className="text-white font-semibold text-xl">{userData[0].name.first}</p>
                        <p className="text-white font-semibold text-xl">{userData[0].name.last}</p>
                    </div>
                    <div>
                        <p className="text-white capitalize text-md">{userData[0].gender}</p>
                    </div>
                    <div>
                        <p className="text-white text-md">{userData[0].phone}</p>
                    </div>
                </div>
            </div>
        )

    );
};

export default ProfileCard;
