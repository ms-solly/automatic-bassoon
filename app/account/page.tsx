"use client"
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import AccountForm from './account-form'

interface User {
  id: string
  fullname: string
  username: string
  avatar_url: string
  website: string
}

export default function Account() {
  const [user, setUser] = useState<User | null>(null)  // Make sure the state can handle both User and null

  useEffect(() => {
    const supabase = createClient()

    async function getUser() {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)  // No more TypeScript error because user can be User or null
    }

    getUser()
  }, [])

  return user ? <AccountForm user={user} /> : <p>Loading...</p>
}
