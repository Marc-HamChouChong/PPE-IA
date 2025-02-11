# PPE-IA

🔹**Frontend**  
L'application frontend est déployée sur Vercel :  
https://ppe-ia.vercel.app/

🔹**Backend**  
Le backend n'est pas encore déployé et n'est donc pas exploitable pour l'instant.  
Il est nécessaire de l’exécuter en local pour tester l'API

## Prérequis

Ce projet doit être exécuté sous **Linux**.  
Assurez-vous d'avoir les outils suivants installés :
- **Python** (3.8+ recommandé)
- **Node.js** (16+ recommandé)
- **Linux** (Ubuntu, Debian, Arch, etc.)

_Ce projet est optimisé pour **Linux** et n'a pas été testé sur **Windows/MacOS**._  
_Si vous utilisez **Windows**, vous pouvez essayer d’exécuter le projet via **WSL**._

## Installation des dépendances

_Avant d'exécuter ces commandes, assurez-vous d'être à la racine du projet_

**Backend**

```bash
cd backend
python3 -m venv venv  # Créer un environnement virtuel
source venv/bin/activate  # Activer l'environnement
pip install -r requirements.txt  # Installer les dépendances
deactivate  # Désactiver l'environnement virtuel
cd ..
```

**Frontend**

```bash
cd frontend
npm install  # Installer les dépendances
cd ..
```

## Démarrer l'application

_Avant d'exécuter ces commandes, assurez-vous d'être à la racine du projet_

🔹Lancer le frontend et le backend simultanément
```bash
npm run start
```

🔹Lancer uniquement le backend
```bash
npm run backend
```

🔹Lancer uniquement le frontend
```bash
npm run frontend
```

## Accéder à l'application

Une fois l'application démarrée, vous pouvez accéder au frontend en ouvrant votre navigateur à l'adresse suivante :  
http://localhost:8000

Si l'application ne se charge pas :
- Vérifiez que le serveur backend est bien démarré.
- Assurez-vous que le frontend utilise bien le port 8000.