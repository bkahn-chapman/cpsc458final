// components/NHLStats.js

import Header from '../components/header'
import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"

export default function NHLStats({user}) {
    return (
        <div className="flex grow bg-white min-w-screen center">
            <Header user={user}></Header>
            <iframe src="https://public.tableau.com/views/GameScore_16398022617310/Sheet1?:language=en-US&:retry=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no" width="500" height="500"></iframe>
        </div>
    )
}
