import { Box } from '@mui/material'
import React from 'react'
import App from '../../App'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <Box>
        <App/>
        <Outlet/>
    </Box>
  )
}

export default Dashboard