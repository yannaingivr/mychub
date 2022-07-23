import { useState, useEffect } from 'react'
import CoinDetails from '../../components/CoinDetails'
import Header from '../../components/Header'

const Price = () => {
  const [coinName, setCoinName] = useState<string | null>('')
  const [coinSymbol, setCoinSymbol] = useState<string | null>('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)

    setCoinName(urlParams.get('coin'))
    setPrice(Number(urlParams.get('price')).toLocaleString())
    setCoinSymbol(urlParams.get('symbol'))
  }

  return (
    <div>
      <Header />
      <CoinDetails coinName={coinName} price={price} coinSymbol={coinSymbol} />
    </div>
  )
}

export default Price
