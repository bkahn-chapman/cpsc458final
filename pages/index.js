import Head from 'next/head'
import NHLStats from '../components/NHLStats'
import { useState } from 'react'
import { Auth } from '@supabase/ui'
import { supabase } from "../utils/supabaseClient.js"

export default function Home() {
  // gets the logged in user from Auth.UserContextProvider
  // if no user is logged in, user will be null
  // if a user is logged in, user will be an object with user info
  const { user } = Auth.useUser()

  return (
    <div className="bg-white min-h-screen min-w-screen">
      <Head>
        <title>NHL Stats</title>
        <link rel="icon" href="/sticks.ico" />
      </Head>

      <main>
        {
          // display app if user is logged in, otherwise show login module
          user ? (
            <div>
              <NHLStats user={user} />
              <button onClick={async () => {
                  let { error } = await supabase.auth.signOut()
                }} 
                className="text-black-300">
                  Log Off
              </button>
            </div>
          ) : (
            <div className="bg-white">
              <Auth supabaseClient={supabase} socialLayout="horizontal" socialButtonSize="xlarge"/>
            </div> 
          )       
        }
      </main>
    </div>
  )
}
