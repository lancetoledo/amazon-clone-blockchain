import React, { useState, useContext} from 'react'
import { AmazonContext } from '../context/AmazonContext'
import Card from './Card'
const Cards = () => {

    const {assets} = useContext(AmazonContext)

    const styles = {
        container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
        title: `text-xl font-bolder mb-[20px] mt-[30px] ml-[30px]`,
        cards: `flex items-center flex-wrap gap-[80px]`,
    }
  return (
    <div className={styles.container}>
        <div className={styles.title}>New Release</div>
        <div className={styles.cards}>
            {assets.map((item)=> {
               return <Card key={item.id} item = {item.attributes}/>
            })}
        </div>
    </div>
  )
}

export default Cards