import Head from 'next/head'
import GameScore from '../components/GameScore.js'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import { Auth } from '@supabase/ui'
import { supabase } from "../utils/supabaseClient.js"

export default function Home() {
  // gets the logged in user from Auth.UserContextProvider
  // if no user is logged in, user will be null
  // if a user is logged in, user will be an object with user info
  const { user } = Auth.useUser()

  return (
    <div className="flex grow font-mono items-center justify-center bg-white min-h-screen min-w-screen">
      <Head>
        <title>NHL Stats</title>
        <link rel="icon" href="/sticks.ico" />
      </Head>
      
      <main>
        {
          // display app if user is logged in, otherwise show login module
          user ? (
            <div>
              {/* displays the GameScore Tableau */}
              <GameScore user={user} />
            </div>
          ) : (
            // log-on page
            <div className="p-5 text-center text-4xl font-semibold">
              <p1>Benjamin Kahn's NHL Analytics</p1>
              <Auth supabaseClient={supabase} socialLayout="horizontal" socialButtonSize="xlarge"/>
            </div> 
          )       
        }
      </main>
    </div>
  )
}
