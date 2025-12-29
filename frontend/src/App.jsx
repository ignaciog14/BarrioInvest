import { useState } from 'react'
import './App.css'

// TODO: Import Stellar SDK and Freighter API when implementing
// import * as StellarSdk from '@stellar/stellar-sdk'
// import { isConnected, requestAccess, getPublicKey } from '@stellar/freighter-api'

function App() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [publicKey, setPublicKey] = useState('')

  const connectWallet = async () => {
    // TODO: Implement Freighter wallet connection
    console.log('Connect wallet functionality to be implemented')
  }

  const investInCampaign = async () => {
    // TODO: Implement USDC investment logic
    console.log('Investment functionality to be implemented')
  }

  return (
    <>
      <div className="container">
        <h1>BarrioInvest</h1>
        <p className="subtitle">
          Inversión comunitaria con Capped RBF en Stellar
        </p>

        <div className="card">
          <h2>Conectar Billetera</h2>
          {!walletConnected ? (
            <button onClick={connectWallet}>
              Conectar Freighter Wallet
            </button>
          ) : (
            <div>
              <p>✓ Billetera conectada</p>
              <p className="wallet-address">{publicKey}</p>
            </div>
          )}
        </div>

        <div className="card">
          <h2>Campañas de Inversión</h2>
          <p>Lista de campañas disponibles para invertir con USDC</p>
          {/* TODO: Render campaign list from smart contract */}
        </div>

        <div className="card">
          <h2>Invertir en USDC</h2>
          <p>Selecciona una campaña e invierte usando USDC en Stellar Testnet</p>
          <button onClick={investInCampaign} disabled={!walletConnected}>
            Invertir
          </button>
          {/* TODO: Add investment form with amount input */}
        </div>

        <div className="info">
          <p>
            <strong>Stellar Testnet</strong> - Configuración de prueba
          </p>
        </div>
      </div>
    </>
  )
}

export default App
