# little arcade

A cozy, responsive game shelf with 120 browser games across clicker, idle,
memory, reaction, and target categories. Favorites and game progress are saved
in the browser.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static web
server. No build step or dependencies are required.

## Custom domain

The `CNAME` file and workflow configure `classroomop.com` for GitHub Pages.
To publish:

1. Push this project to the `main` branch on GitHub.
2. In the repository, open **Settings → Pages** and set the build and deployment
   source to **GitHub Actions**.
3. If you own or control `classroomop.com`, open its DNS settings at your domain
   registrar. For the apex domain, add A records for GitHub Pages:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and
   `185.199.111.153`. Remove conflicting A records. DNS changes can take time
   to propagate.
4. In **Settings → Pages**, confirm `classroomop.com` is the custom domain and
   enable **Enforce HTTPS** when GitHub makes it available.

After setup, pushes to `main` deploy automatically. You can also start a
deployment from the repository's **Actions** tab. The domain must be registered
and under your control; a `CNAME` file alone cannot register a domain or change
its DNS. Until DNS is configured, the site can be reached at the GitHub Pages
URL shown in **Settings → Pages**.
