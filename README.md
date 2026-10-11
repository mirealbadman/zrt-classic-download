# Zombie Road Trip — Classic Test 8 Download Page

A self-contained, responsive download site for a personally tested or properly licensed release of Classic Test 8. Site visuals are new SVG/CSS illustration, not game screenshots. No frameworks, analytics, cookies, server, or build pipeline.

## Included files

- `index.html` — landing page
- `assets/style.css` — responsive styles
- `assets/cover.svg` + `assets/favicon.svg` — original artwork and icon
- `assets/app.js` — checksum copy action and download link configuration
- `assets/download-config.js` — one-place APK URL configuration
- `assets/Zombie-Road-Trip-Classic-Test8.apk` — bundled only in the complete package
- `.nojekyll` — tells GitHub Pages to serve the static site directly

## Preview / local copy

Open `index.html` in a browser. In the **complete** package, all three Download buttons refer to the `assets/` APK in the same folder, and the 61.7 MiB APK downloads locally. The complete package is intended for private/local distribution and testing, not automatic public redistribution.

## Publishing with GitHub Pages + Releases (recommended)

**Rights first:** Zombie Road Trip is a commercial third-party game. Only publicly distribute the APK if you have permission or another valid legal basis to redistribute the game's bundled binaries and copyrighted assets. Publishing compatibility source/patches instead of a bundled commercial APK is a safer public alternative.

1. Create a GitHub repository (for example `zrt-classic-download`) under your account.
2. Upload the small **Website-Only** package's *contents* to the repository root, not the ZIP itself. The website-only package omits the commercial APK.
3. If you have distribution rights, in GitHub **Releases** choose **Draft a new release**, create tag `classic-test8-v24`, and attach `Zombie-Road-Trip-Classic-Test8.apk`. Mark it as a **pre-release** because physical testing of the final input guard is incomplete, then publish the release.
4. Edit `assets/download-config.js` and set the exact uploaded release asset URL, replacing `USERNAME` and `REPOSITORY`. Example:

       window.ZRT_APK_URL = 'https://github.com/USERNAME/REPOSITORY/releases/download/classic-test8-v24/Zombie-Road-Trip-Classic-Test8.apk';

   To disable downloads until you have rights and a working release, the website-only version is initially set to `SET_RELEASE_URL_HERE` and the buttons are disabled.
5. Open GitHub repository **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**. Pages will show the public website URL, generally `https://USERNAME.github.io/REPOSITORY/`.
6. On that website, click the download button and verify the download is actually the correct 64,666,083-byte APK and that its SHA-256 matches the hash displayed.

The website-only package can be deployed anywhere capable of serving static HTML, CSS and JavaScript. It does not require GitHub specifically. GitHub release assets are convenient for a binary this size; browser upload limits for files in repositories may be smaller than this APK.

## Checksum and release identification

- Filename: `Zombie-Road-Trip-Classic-Test8.apk`
- Package: `com.zrt.compat`
- Internal version: `1.0-zrt-classic-test8-polish` / version code 24
- File size: `64,666,083` bytes (61.67 MiB)
- SHA-256: `a343f3b46a82075de11eb7b1c3fec08e2556b98a3bf7d0b289d1f629294dda8b`
- Build last audited: October 9, 2026

Do not uninstall your existing compatible/same-signer build before upgrading; that may remove progress. No connected Android device was available for a full final v24 hardware/controller smoke test.

## Credits / rights

Original game ownership and credits remain with their respective rights holders. Compatibility/controller work was prepared for **TrippySatori**. No affiliation or endorsement is implied. Do not publish the bundled commercial game without the necessary rights.
