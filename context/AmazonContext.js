import { createContext, useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'

export const AmazonContext = createContext()

export const AmazonProvider = ({children}) => {
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

    useEffect(async ()=> {
        if(!isWeb3Enabled){
            await enableWeb3()
            console.log("web3 enabled")
        }

        if(isAuthenticated) {
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

    },[isAuthenticated,isWeb3Enabled,authenticate,currentAccount,setUsername, username, user])

    const handleSetUsername = () => {
        if(user) {
            if(nickname) {
                user.set('nickname', nickname)
                user.save()
                setNickname('')
            } else {
                console.log('Cant set empty nickname')
            }
        } else {
            console.log('No user')
        }
    }

    const connectWallet = async () => {
        await enableWeb3()
        await authenticate()
      }

    return (
        <AmazonContext.Provider
         value = {{
             isAuthenticated,
             nickname,
             setNickname,
             username,
             handleSetUsername,
             connectWallet
         }}
        >
            {children}
        </AmazonContext.Provider>
    )
}