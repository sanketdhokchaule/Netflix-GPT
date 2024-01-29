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
- Bugfix: signup user displayName and profile picture update
- Bugfix: if the user is not logged in redirect/browse to login page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values tp the constants.js file
- Register TMDB API & create an app and get access token
- get Data from TMDB now playing movies list API
- custome hook for now playing movies
- create movie slice
- update store with movies data
- planning for main container and secondary container
- fetch data for trailer video
- update the store with trailer video data
- embedded the youtube video and make it autoplay and mute
- tailwind classes to make main container look awesome
- Build secondary component
- Build movie list and cart
- TMDB image CDN URL
- Made the browse page amazing with tailwind CSS
- usePopularMovies Custom hook
- GPT search feature
- GPT Search bar
- Multi-language feature 
- Integrate GPT APIs


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