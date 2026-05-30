# Bokningssystem

Ett fullstack bokningssystem byggt med React, Node.js/Express och PostgreSQL.

## Funktioner

- Visa tillgängliga tjänster med pris och tid
- Boka en tjänst med namn, email och datum
- Adminpanel för att se alla bokningar och status

## Teknikstack

| Del      | Teknik                    |
| -------- | ------------------------- |
| Frontend | React, Vite, Tailwind CSS |
| Backend  | Node.js, Express          |
| Databas  | PostgreSQL                |

## Kom igång

### Krav

- Node.js
- PostgreSQL

### Installation

1. Klona repot

```bash
git clone https://github.com/ditt-användarnamn/bookingsystem.git
cd bookingsystem
```

2. Installera backend

```bash
cd server
npm install
```

3. Installera frontend

```bash
cd client
npm install
```

4. Skapa `.env` i `server/`

```
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=ditt_lösenord
DB_NAME=bokningssystem
```

5. Skapa databasen och tabellerna

```bash
cd server
node db/seed.js
```

6. Starta backend

```bash
cd server
node server.js
```

7. Starta frontend

```bash
cd client
npm run dev
```

Öppna `http://localhost:5173`

## Sidor

| Sida        | URL    |
| ----------- | ------ |
| Startsida   | /      |
| Boka tjänst | /boka  |
| Adminpanel  | /admin |

## Skärmdumpar

## Skapad av

Minai Karlsson — YH-student inom frontendutveckling
