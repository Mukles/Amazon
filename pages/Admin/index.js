import React from 'react'
import Header from '../../Components/Admin/Header'
import Head from 'next/head'
import Sidebar from '../../Components/Admin/Sidebar'
import  StaticCard from '../../Components/Admin/StaticCard'
import SocialTraffic from '../../Components/Admin/SocialTraffic'
import RecentActivites from '../../Components/Admin/RecentActivites'
import TaskSummeries from '../../Components/Admin/TaskSummeries'
import ClientTable from '../../Components/Admin/ClientTable'
import ContactForm from '../../Components/Admin/ContactForm'
import ExResoures from '../../Components/Admin/ExResoures'

export default function index() {
  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
     <Header />
     <Sidebar />
     <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <StaticCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        <SocialTraffic />
        <RecentActivites />
      </div>
      <TaskSummeries />
        <ClientTable />
        <ContactForm />
        <ExResoures />
     </div>
    </div>
  )
}
