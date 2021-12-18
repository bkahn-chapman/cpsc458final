// components/header.js

import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"
import Link from 'next/link'

export default function Header({ user }) {
    var username = user.email.substr(0, user.email.indexOf('@'));
    return (
        <div className="flex justify-between px-5 py-2">
            <p1>Hello, {username}!</p1>
            {/* tried to div around the three middle links but they didn't justify properly */}
            {/* no clue why but none of these links work properly. tried to put them in a, tried to put the pages in different folders, tried every possible PATH combo */}
            {/* this is the reason why I couldn't get more functionality in, spent literal hours trying to figure out how to fix this but to no avail */}
            <Link href="./NHLStats.js">NHL Stats</Link>
            <Link href="./GameScore.js">Game Scores</Link>
            {/* tried to add a legitimate about page but for some reason these href links won't work infuriatingly */}
            {/* <Link href="./About.js">Game Scores</Link> */}
            {/* used my about page from the first week to at least have some functionality */}
            <a href="https://bkahn-cpsc458-1.netlify.app/" target="_blank">About the Creator</a>
            <button onClick={async () => {let { error } = await supabase.auth.signOut()}} className="text-black-300">
                Log Off
            </button>
        </div>
    )
}