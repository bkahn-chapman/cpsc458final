// components/NHLStats.js

import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"
import Link from 'next/link'

export default function Header({ user }) {
    var username = user.email.substr(0, user.email.indexOf('@'));
    /* Everything went as expected, show full app */
    return (
        <div className="flex justify-between px-5 py-2">
            <p1>Hello, {username}!</p1>
            <button>
                <Link href="../components/GameScore.js"><a>General Stats</a></Link>
            </button>
            <Link href="../components/GameScore.js"><a>Game Scores</a></Link>
            <Link href="../components/GameScore.js"><a>About</a></Link>
            <Link href="../components/GameScore.js"><a>Account Settings</a></Link>
            <button onClick={async () => {let { error } = await supabase.auth.signOut()}} className="text-black-300">
                Log Off
            </button>
        </div>
    )
}