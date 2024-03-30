/*
---------------INITIAL FIREBASE SETUP---------------

1. visit console.firebase.google.com
2. Create project (skip google analytics)
3. Register app (create config)
4. Install firebase: npm install firebase
5. Add config file to project
6. DANGER: Do not publish or make firebase config to public by pushing those to github
---------------INTEGRATION---------------
7. Visit: Go to docs > Build > Authentication > Web > Get started
8. Export app from the firebase.init.js file: export default app
9. Login.jsx: import getAuth from firebase/auth
10. Create const auth = getAuth(app)
---------------PROVIDER SETUP---------------
11. Import GoogleAuthProvider and create a provider
12. Use signInWithPopup(auth, provider)
13. Activate sign In method Like (google, facebook, github)
14. [vite]: change url 127.0.0.1 to localhost 
---------------MORE AUTH PROVIDER---------------
1. Activate the auth provider (create app, provider redirect url, client id, client secret)
*/ 