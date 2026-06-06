# PlayBeat Frontend — Vercel Deploy

This folder contains the static frontend for PlayBeat. To deploy to Vercel as a separate project:

1. In Vercel, click "Import Project" → "Import Git Repository" and select this repository.
2. When prompted, set the Project Root to `frontend` so Vercel serves the files from this folder.
3. No build command is required — this is a static site. Vercel will serve `index.html` by default.
4. Add an Environment Variable in Vercel for the Production environment:

   - `API_URL` = `https://playbeatremotecheck.vercel.app` (or your backend URL)

5. Deploy. The site will be available at `https://<your-vercel-project>.vercel.app`.

Notes
- If you want the admin UI (currently `admin.html` in the repo root) to be available from the frontend, copy `admin.html` into this `frontend/` folder before deploying or update rewrite rules accordingly.
- You can edit `vercel.json` here to add more route mappings or custom headers.
