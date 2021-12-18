// components/NHLStats.js

import { useEffect, useState } from 'react'
import { supabase } from "../utils/supabaseClient.js"

export default function NHLStats({ user }) {

    /* Everything went as expected, show full app */
    return (
        <div className="bg-white min-w-screen center">
            <p1>Hello, {user.email}!</p1>
        </div>
    )
}
