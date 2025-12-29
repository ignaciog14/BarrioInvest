# BarrioInvest

Protocolo de inversión comunitaria basado en Capped RBF sobre Stellar y Soroban. Impulsamos emprendedores en LATAM mediante financiamiento justo y flexible en USDC, donde el éxito del emprendedor genera prosperidad compartida en su barrio.

## Estructura del Proyecto

```
BarrioInvest/
├── contracts/          # Smart Contracts Soroban (Rust)
│   ├── src/           # Lógica de repago y Capped RBF
│   ├── Cargo.toml     # Configuración Rust
│   └── Soroban.toml   # Configuración Stellar Testnet
│
└── frontend/          # Interfaz React
    ├── src/           # Componentes de inversión en USDC
    ├── package.json   # Dependencias (Stellar SDK + Freighter)
    └── vite.config.js # Configuración Vite
```

## Tecnologías

### Smart Contracts (/contracts)
- **Soroban**: Smart contracts en Stellar
- **Rust**: Lenguaje de programación
- **Capped RBF**: Lógica de Revenue-Based Financing con techo

### Frontend (/frontend)
- **React**: Framework UI
- **Stellar SDK**: Interacción con blockchain
- **Freighter**: Wallet para Stellar
- **USDC**: Token de inversión en Stellar Testnet
- **Vite**: Build tool

## Configuración

### Smart Contracts

```bash
cd contracts
cargo build --target wasm32-unknown-unknown --release
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Stellar Testnet

Este proyecto está configurado para usar Stellar Testnet:
- RPC URL: `https://soroban-testnet.stellar.org`
- Network Passphrase: `Test SDF Network ; September 2015`

## Estado del Proyecto

🚧 **En Desarrollo** - Scaffolding inicial completado

### Completado
- ✅ Estructura de directorios
- ✅ Configuración de Smart Contracts (Soroban/Rust)
- ✅ Configuración de Frontend (React + Stellar SDK)
- ✅ Archivos de configuración (Cargo.toml, Soroban.toml, package.json)

### Por Implementar
- ⏳ Lógica de negocio de Smart Contracts (Capped RBF)
- ⏳ Interfaz de inversión completa
- ⏳ Integración Freighter Wallet
- ⏳ Funcionalidad de inversión en USDC
- ⏳ Sistema de repago

## Licencia

Ver archivo [LICENSE](LICENSE) para más detalles.
