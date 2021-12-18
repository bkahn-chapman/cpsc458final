// components/NHLStats.js

import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"

export default function NHLStats({ user }) {
    var username = user.email.substr(0, user.email.indexOf('@'));
    /* Everything went as expected, show full app */
    return (
        <div className="bg-white min-w-screen center">
            <p1>Hello, {username}!</p1>
            <iframe src="https://public.tableau.com/views/GameScore_16398022617310/Sheet1?:language=en-US&:retry=yes&:display_count=n&:origin=viz_share_link&:showVizHome=no" width="1900
            vw" height="850vh"></iframe>
        </div>
    )
}
