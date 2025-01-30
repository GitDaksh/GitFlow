'use client'

import { useUser } from '@clerk/nextjs';
import React from 'react'
import CreatePage from '../ create/page';


const DashboardPage = () => {
    const { user } = useUser();

  return (
    <div className='flex items-center justify-center h-full'>
      <CreatePage />
    </div>
  )
}

export default DashboardPage