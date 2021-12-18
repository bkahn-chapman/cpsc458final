import { supabase } from "../utils/supabaseClient.js"
import { Auth } from '@supabase/ui'
import Link from 'next/link'
import showGeneral from './index.js'
import showGS from './index.js'
import showAbout from './index.js'


export default function Header() {
    const { user } = Auth.useUser();
    var username = user.email.substr(0, user.email.indexOf('@'));
    /* Everything went as expected, show full app */
    return (
        <div className="flex justify-between px-5 py-2 border-b-2 border-black m-b-2">
            <p1>Hello, {username}!</p1>
            <button>
                NHL Stats
            </button>
            <button>
                Game Scores
            </button>
            <button>
                About
            </button>
            <button onClick={async () => {let { error } = await supabase.auth.signOut()}} className="text-black-300">
                Log Off
            </button>
        </div>
    )
}