import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import moment from 'moment'
import { AmazonContext } from '../context/AmazonContext'

const Transaction = ({item}) => {
    console.log(item)
  return (
    <>
    {item.map((asset, index)=> {
        return (<h1>{asset.name}</h1>)
    })}
    </>
  )
}

export default Transaction