# Configuration du projet

Notre projet contient une API Hono avec uniquement un endpoint “Hello world”

La CI tourne sur la dernière version d’Ubuntu ( 22.04 ) et s'active dans certains cas à chaque pull request en direction de la branche `main` et également lors du push dans la branche `main` .

# Les étapes

## 1️⃣ Build

- Création de l’image Docker à partir du Dockerfile

# Livrable

- Une api Hono ( Hello world endpoint …. )
- Une pipeline CI

# Cycle de vie

A chaque push la `main`,  le build est exécuté
