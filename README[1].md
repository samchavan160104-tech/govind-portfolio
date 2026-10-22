# Govind Chavan — Futuristic AI Portfolio

A responsive portfolio website built with HTML, CSS, and vanilla JavaScript. No framework or paid software is required.

## 1. Open in VS Code (Windows 10)

1. Download and extract `futuristic_ai_portfolio.zip`.
2. Open VS Code.
3. Choose **File → Open Folder** and select the extracted `futuristic_ai_portfolio` folder.
4. Open `index.html`.
5. To preview it, double-click `index.html` in File Explorer, or install the free **Live Server** extension in VS Code, then right-click `index.html` and choose **Open with Live Server**.

## 2. Personalize before publishing

### Contact details
Open `script.js` and replace:
- `YOUR_EMAIL@example.com`
- `https://www.linkedin.com/in/YOUR-LINKEDIN/`
- `https://github.com/YOUR-GITHUB/`

Use your real profile URLs. Do not publish placeholders.

### Profile photo
Open the site and click **+ Add your photo** to preview a photo on your device. This preview is local and does not upload the image. For the photo to appear for every website visitor, copy your chosen photo into `assets/` (for example, `assets/govind.jpg`) and change this line in `index.html`:
`<img id="profilePhoto" src="assets/profile-placeholder.svg" ...>`
to:
`<img id="profilePhoto" src="assets/govind.jpg" ...>`
Use a professional photo you are comfortable sharing publicly.

### Project links and proof
The project cards are presentation cards, not live chatbot demos. Before publishing, update the copy to match what you have actually built. Add verified GitHub repository or demo links when ready. Do not claim a working integration unless you have tested it.

## 3. Free deployment with GitHub Pages

1. Create/sign in to a GitHub account.
2. Create a **public** repository named `govind-portfolio` (or another name).
3. Upload all files and the `assets` folder from this project. Keep `index.html` in the repository root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then click **Save**.
7. Wait for GitHub Pages to publish. The site URL appears in the Pages section, usually in the form `https://YOUR-USERNAME.github.io/govind-portfolio/`.

GitHub may take a few minutes to publish. A public repository makes your source files public, so only upload content you are happy to share.

## 4. Free deployment alternative: Netlify

Sign in to Netlify and use its manual deploy/drop option to deploy the extracted site folder, if that option is available in your account. Follow Netlify's current instructions. You do not need to buy a domain; the free site subdomain is enough to start.

## Folder structure

- `index.html` — page content
- `style.css` — visual design and responsive layout
- `script.js` — mobile navigation, photo preview, contact links
- `assets/profile-placeholder.svg` — replace with your own photo before publishing

## Before sharing the website

- [ ] Replace email, LinkedIn, and GitHub placeholders.
- [ ] Add your actual profile photo.
- [ ] Test every link on mobile and desktop.
- [ ] Add working demo/repository links only after testing.
- [ ] Check spelling and make sure all project claims are accurate.
