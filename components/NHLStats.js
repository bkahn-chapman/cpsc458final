// components/NHLStats.js

import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"

export default function NHLStats({ user }) {

    var username = user.email.substr(0, user.email.indexOf('@'));
    /* Everything went as expected, show full app */
    return (
        <div className="bg-white min-w-screen center">
            <p1>Hello, {username}!</p1>
        </div>
    )
}
