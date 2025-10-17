# Auto App Builder

An automated Node.js service that:
- Receives JSON build requests
- Verifies a secret
- Builds and deploys apps dynamically
- Reports to an evaluation endpoint

## 🚀 Deployment Flow
- On every push to `main`, GitHub Actions:
  1. Builds Docker image
  2. Pushes to Docker Hub
  3. Deploys to Fly.io

## 🔑 Required Secrets
Add these to your GitHub repository settings → **Settings → Secrets → Actions**:
- `DOCKERHUB_TOKEN` — your Docker Hub access token
- `FLY_API_TOKEN` — your Fly.io deployment token
