---
title: "Prima ta tranzacție"
slug: "first-transaction"
module: "intro"
excerpt: "Învață să trimiți prima tranzacție EGLD pe testnet în siguranță."
position: 3
quiz:
  questions:
    - id: q1
      text: "Ce verifici înainte de a trimite o tranzacție?"
      choices: ["Doar suma", "Adresa destinatarului și suma", "Doar taxa de gas", "Culoarea portofelului"]
      correct: 1
    - id: q2
      text: "Ce se întâmplă cu taxa de gas după tranzacție?"
      choices: ["Se returnează", "Se arde (burn)", "Merge la validatori", "Rămâne în portofel"]
      correct: 2
---

# Prima ta tranzacție

Acum că ai portofelul xPortal configurat cu testnet EGLD, să facem prima tranzacție!

## Pregătire

### Verificări preliminare:
- ✅ xPortal instalat și configurat
- ✅ Testnet mode activat
- ✅ Testnet EGLD în portofel (din faucet)
- ✅ Adresa destinatar pregătită

## Pasul 1: Inițierea tranzacției

1. **Deschide xPortal** și selectează "Send"
2. **Introdu adresa destinatar** - poți scana QR sau tasta manual
3. **Setează suma** - începe cu 0.1 testnet EGLD
4. **Verifică taxa de gas** - afișată automat

⚠️ **Dublu-check**: Adresa destinatar este corectă?

## Pasul 2: Confirmarea tranzacției

### Informațiile afișate:
- **To**: Adresa destinatarului
- **Amount**: Suma trimisă
- **Gas fee**: Taxa de procesare
- **Total**: Suma + Taxa

### Confirmarea:
1. Verifică toate detaliile
2. Apasă "Confirm"
3. Introdu PIN-ul sau folosește biometrics
4. Așteaptă confirmarea

## Pasul 3: Monitorizarea tranzacției

### În xPortal:
- Tranzacția apare în istoric
- Status: Pending → Success
- Detalii: Hash, block, timestamp

### În MultiversX Explorer:
1. Copiază hash-ul tranzacției
2. Mergi pe testnet-explorer.multiversx.com
3. Caută hash-ul pentru detalii complete

## Anatomia unei tranzacții

### Componente:
- **Sender**: Adresa ta (from)
- **Receiver**: Adresa destinatar (to)
- **Value**: Suma trimisă în EGLD
- **Gas limit**: Limita de gas pentru tranzacție
- **Gas price**: Prețul per unitate de gas
- **Nonce**: Numărul tranzacției din contul tău

### Calculul taxei:
```
Taxa = Gas used × Gas price
```

## Tipuri de tranzacții

### Tranzacții simple:
- Transfer EGLD între portofe
- Taxa: ~0.0005 EGLD
- Timp: 6 secunde

### Tranzacții smart contract:
- Interacțiuni cu contracte
- Taxa: variabilă (0.001-0.01 EGLD)
- Timp: 6 secunde

## Troubleshooting

### Probleme comune:
1. **"Insufficient funds"** - Nu ai destui EGLD pentru sumă + taxă
2. **"Invalid address"** - Adresa destinatar este greșită
3. **"Transaction failed"** - Problemă la smart contract

### Soluții:
- Verifică balanța înainte de trimitere
- Dublu-check adresa destinatar
- Pentru contracte, verifică parametrii

## Best practices

### Pentru siguranță:
- Începe cu sume mici pe testnet
- Verifică întotdeauna adresa destinatar
- Folosește address book pentru adrese frecvente
- Nu grăbi - verifică de două ori

### Pentru eficiență:
- Grupează tranzacțiile mici
- Monitorizează taxele în perioadele aglomerate
- Folosește gas price optimal

🎯 **Următorul pas**: Învață să interacționezi cu smart contracts și să participi la DeFi!