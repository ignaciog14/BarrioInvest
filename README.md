# 🏦 BarrioInvest

**Protocolo de inversión comunitaria basado en Capped RBF sobre Stellar y Soroban. Impulsamos emprendedores en LATAM mediante financiamiento justo y flexible en USDC, donde el éxito del emprendedor genera prosperidad compartida en su barrio.**

*"Convertir cada barrio de Latinoamérica en su propio motor financiero, donde el éxito de un emprendedor sea la riqueza de su comunidad."*

---

## 📂 Estructura del Proyecto

```text
BarrioInvest/
├── contracts/          # Smart Contracts Soroban (Rust)
│   ├── src/           # Lógica de repago y Capped RBF
│   ├── Cargo.toml     # Configuración Rust
│   └── Soroban.toml   # Configuración Stellar Testnet
└── frontend/          # Interfaz React
    ├── src/           # Componentes de inversión en USDC
    ├── package.json   # Dependencias (Stellar SDK + Freighter)
    └── vite.config.js # Configuración Vite
```

## 📊 El Problema: Inflexibilidad Financiera
El modelo de crédito tradicional en LATAM no está diseñado para la realidad de los barrios:
* **Riesgo de Liquidez**: Las cuotas fijas bancarias no se adaptan a la volatilidad de ingresos de un pequeño negocio.
* **Exclusión Bancaria**: Los bancos tradicionales no realizan préstamos a PyMEs y negocios pequeños debido a la falta de colaterales físicos, dejándolos fuera del sistema.
* **Desvalorización del Ahorro**: El ahorro de las personas del barrio se diluye por la inflación, perdiendo su poder adquisitivo en lugar de impulsar el desarrollo local.

## ⚙️ Mecánica del Protocolo
BarrioInvest opera bajo un modelo de **Capped RBF**, automatizando la confianza mediante código:

### 1. Tokenización del Capital (Investment Phase)
El emprendedor define una meta de fondeo en **USDC** y un multiplicador de retorno (ej. 1.2x). Los inversores aportan liquidez al contrato de **Escrow en Soroban**, recibiendo a cambio un derecho sobre los ingresos futuros del negocio.

### 2. Algoritmo de Repago Variable (The Flow)
A diferencia de un préstamo, el repago es un **porcentaje de las ventas (Revenue Share)**.
* **Escenario de ventas bajas**: El pago se reduce proporcionalmente, protegiendo la operatividad del negocio. La inversión nunca se pierde; el retorno simplemente se completa de forma más lenta de lo planificado originalmente.
* **Escenario de ventas altas**: El negocio termina su compromiso más rápido, mejorando su reputación financiera dentro del protocolo.

### 3. Ejecución del "Cap" (Smart Contract Termination)
El Smart Contract mantiene un contador de pagos acumulados. Una vez que el total de pagos alcanza el **Tope (1.2x - 1.5x)**, el contrato se liquida automáticamente, devolviendo el 100% de los ingresos futuros al emprendedor.

---

## 🛠️ Configuración Técnica

### Smart Contracts (`/contracts`)
```bash
cd contracts
cargo build --target wasm32-unknown-unknown --release
```

### Frontend (/frontend)

```bash
cd frontend
npm install
npm run dev
```

## Stellar Testnet

Este proyecto está configurado para usar Stellar Testnet:
- RPC URL: `https://soroban-testnet.stellar.org`
- Network Passphrase: `Test SDF Network ; September 2015`



## 🌍 Visión de Impacto Social
BarrioInvest construye **resiliencia comunitaria**. Al permitir que el capital del barrio financie a los emprendedores cercanos, creamos un ciclo virtuoso de ayuda mutua donde el crecimiento de uno impulsa el bienestar de todos.

---
**Hackathon Submission**: Ideatón Fin de Año - Powered by Stellar Chile
**Track**: 1 - Producto (Ideación y Diseño)
**Fecha de Entrega**: 31 de Diciembre, 2025
