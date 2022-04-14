import React, { useContext } from 'react'
import { AmazonContext } from '../context/AmazonContext'
import Cards from './Cards'
import Header from './Header'

const styles = {
    container: `h-full w-full flex flex-col mt-[50px] pr-[50px] overflow-hidden`,
    recentTitle: `text-2xl font-bold text-center mb0[20px] text-center mt-[40px]`,
    recentTransactionsList: `flex flex-col`,
    transactionCard: `flex justify-between mb-[20px] p-[30px] bg-[#42667e] text-white rounded-xl shadow-xl font-bold gap-[20px] text-xl`
}

const Main = () => {
  return (
    <div className={styles.container}>
        <Header />
        {/* <Featured /> */}
        <Cards />
    </div>
  )
}

export default Main