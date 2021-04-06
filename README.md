## Address Book Front End

### Back End 
The back end for this app can be found [here](https://github.com/jdcarey128/address-book-backend)

### Project setup
```
npm install
```

### Run locally on port 8080
```zsh
npm run serve

# this will use the local backend server on http://127.0.0.1:5000/ 
# make sure the backend server is running (see instructions on backend)
```

### Project Highlights
1. First functioning front end app that I've built from scratch 
1. First time I have worked with Vue 
1. State management with Vuex  
1. Simple form validation disables/enables submit  
1. [Firebase](https://firebase.google.com) is used for user authentication 
1. Contacts are organized by last name in the Home side navigation bar. The current contact count is displayed for each tab. Clicking the tab will display all contacts for that category. Clicking 'Contacts' will display all user contacts alphabetically by last name.
1. Click on the displayed user contact cards to update contacts

### Future Additions
1. Add testing
1. Modularize store components
1. Standardize and DRY out CSS styling
1. Implement more robust error handling
1. Add cookies to maintain state upon refresh 
1. Add editable user profile 
1. Add tooltips for page elements

### Known issues 
1. Currently, if the page is refreshed then the global state is reset, and the user information is no longer accessible. To re-access this information, simply logout, then log back in (this is why the logout link is constantly displayed).
1. You can only use the same login credentials for either development or production. You will be able to log in in using the same credentials with both, but you will only be able to access user data from the database in the environment you used for initial setup.
1. All testing has been done manually
