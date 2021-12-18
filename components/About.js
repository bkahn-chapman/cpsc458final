// components/About.js

import Header from './header'
import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"

export default function About({user}) {
    return (
        // Did not have time to get to this function (writing up a bit about me with some pictures - very static)
        // especially since my program won't link to this page properly for some reason.
        <div className="content-center bg-white w-screen h-screen">
            <Header user={user}></Header>
            <iframe src="https://public.tableau.com/views/GameScores_16398077546140/GameScores?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no" width="99.99%" height="94%" className="align-center border-2 border-black">
            </iframe>
        </div>
    )
}