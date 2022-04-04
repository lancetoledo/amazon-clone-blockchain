import { createContext, useState, useEffect } from 'react'
import { useMoralis, useMoralisQuery } from 'react-moralis'

export const AmazonContext = createContext()

export const AmazonProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('')
    const [formattedAccount, setFormattedAccount] = useState('')
    const [username, setUsername] = useState('')
    const [nickname, setNickname] = useState('')

    const {
        authenticate,
        isAuthenticated,
        enableWeb3,
        Moralis,
        user,
        isWeb3Enabled,
      } = useMoralis()

      useEffect(async () => {
        if (!isWeb3Enabled) {
          await enableWeb3()
          console.log("its enable")
        }
        // await listenToUpdates()
    
        if (isAuthenticated) {
        //   await getBalance()
        console.log("HELLO")
          const currentUsername = await user?.get('nickname')
          setUsername(currentUsername)
          const account = await user?.get('ethAddress')
          setCurrentAccount(account)
          const formatAccount = account.slice(0, 5) + '...' + account.slice(-5)
          setFormattedAccount(formatAccount)
        } else {
          setCurrentAccount('')
          setFormattedAccount('')
        }
      }, [
        isWeb3Enabled,
        isAuthenticated,
        authenticate,
        currentAccount,
        setUsername,
        user,
        username,
      ])
    
      const handleSetUsername = () => {
        if (user) {
          if (nickname) {
            user.set('nickname', nickname)
            user.save()
            setNickname('')
          } else {
            console.log("Can't set empty nickname")
          }
        } else {
          console.log('No user')
        }
      }

    return (
        <AmazonContext.Provider
          value={{
              isAuthenticated,
              formattedAccount,
              currentAccount,
              nickname,
              setNickname,
              username,
              setUsername,
              handleSetUsername,

          }}
        >
          {children}
        </AmazonContext.Provider>
      )
}