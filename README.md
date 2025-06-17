# NextBlog API Express Rest

Ce projet est une API minimaliste en Node.js utilisant Express et une base de données MySQL.

## Prérequis

- **Node.js** (version conseillée: >= 18)
- **npm** (installé avec Node.js)
- **MySQL** (un serveur et une base de données accessibles)

## Installation

Clonez ce dépôt puis installez les dépendances :

```bash
npm install
```

## Lancement du serveur

Le script `npm start` démarre l'API avec `nodemon` sur le port 3000 :

```bash
npm start
```

Vous devriez voir dans la console :

```
Serveur en cours d'exécution sur http://localhost:3000
```

## Configuration de la base de données

La connexion MySQL est définie dans `utiles/db.js`. Vous pouvez configurer les paramètres via les variables d'environnement suivantes :

- `DB_HOST` : hôte MySQL (par défaut `localhost`)
- `DB_USER` : utilisateur MySQL (par défaut `root`)
- `DB_PASSWORD` : mot de passe MySQL (par défaut vide)
- `DB_NAME` : nom de la base (par défaut `node.js`)

Définissez-les dans votre environnement ou via un fichier `.env` en utilisant `dotenv` si vous le souhaitez.

## Fonctionnement

Les différentes routes de l'API sont définies dans `app.js` et appellent les fonctions de `utiles/db.js` pour accéder à la base de données. Quelques exemples :

- `GET /members` : liste tous les membres
- `GET /articles` : liste les articles
- `GET /articles/:id` : affiche un article par son identifiant

Cette base de code peut servir de point de départ pour développer une API plus complète.

