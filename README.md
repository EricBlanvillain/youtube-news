# YouTube News

Une application web qui récupère et résume automatiquement les transcriptions des vidéos YouTube de Lex Fridman.

## Configuration

1. Clonez le repository
```bash
git clone https://github.com/EricBlanvillain/youtube-news.git
cd youtube-news
```

2. Installez les dépendances
```bash
npm install
```

3. Configurez les variables d'environnement
- Copiez `.env.example` vers `.env`
- Ajoutez votre clé API YouTube dans le fichier `.env`

4. Démarrez l'application
```bash
npm run dev
```

## API Endpoints

- `GET /api/latest-video` : Récupère la dernière vidéo de Lex Fridman avec sa transcription