'use client'

import { useUser } from '@clerk/nextjs';
import React from 'react'
import CreatePage from '../create/page';
import useProject from '@/hooks/use-project';


const DashboardPage = () => {
    const { project } = useProject();

  return (
    <div>
      <h1>{project?.name}</h1>
    </div>
  )
}

export default DashboardPage