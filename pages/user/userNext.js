import React from 'react'

import Userlayout from "../../layouts/Userlayout";

var QRCode = require('qrcode.react');

export default function userNext({user}) {
    console.log(user);
    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                            <div className="flex-auto px-10 lg:px-10 py-10 mx-auto">
                                {/* <QRCode value={user.id} size={300} fgColor="#1A202C" bgColor="#E2E8F0" /> */}
                            </div>
                        </div>
                        <div className="flex flex-wrap mt-6 relative">
                            <div className="w-full text-center text-gray-300 ">
                                    <p>Your one code for everything </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

userNext.layout = Userlayout;