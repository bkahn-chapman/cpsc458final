// components/NHLStats.js

import Header from './header'
import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"

export default function GameScore({user}) {
    return (
        <div className="content-center bg-white w-screen h-screen">
            <Header user={user}></Header>
            <iframe src="https://public.tableau.com/views/GameScores_16398077546140/GameScores?:language=en-US&:display_count=n&:origin=viz_share_link&:showVizHome=no" width="99.99%" height="94%" className="align-center border-2 border-black">
            </iframe>
        </div>
    )
}
