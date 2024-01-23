# Netflix-GPT
- create react app
- configured tailwindcss
- header
- Routing of app
- login form
- Signup form
- Form validation
- useRef hook
- firebase setup for backend
- To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool). (npm install -g firebase-tools)
- You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.
    - Sign in to Google
    - command ==> firebase login
    - Initiate your project. Run this command from your app's root directory:

    - command ==> firebase init
    - When you're ready, deploy your web app
    - Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public"). 
    - Then, run this command from your app's root directory

    - command ==> firebase deploy
    - After deploying, view your app at netflix-gpt-59.web.app
- Deploying our app to production
- Create signup user account
- Implement sign in user api
- Created redux store with userSlice
- Implemented sign out
- Update profile
- Fetch from TMDB movie



# Features
- Home page
    - login/sign up
    - redirect to browse page
- Browse (after authentication)
    - header
    - main movie
        - tailer in background
        - title and description
        - movie suggestion
            - movies list

- NetflixGPT
    - search bar
    - movie suggestions