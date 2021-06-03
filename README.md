// Enters site
// Makes account
// login or create
// Get a token
// fills out profile (with photo)
// login
// fill in form w/image


# LOGIN

a user can see a login form
a user can enter account details
a user's token is saved to local storage
a user is taken to the homepage whrn verified

# Re-Auth

a user can be logged on with a JWT from local storage
a user's account details are stored in local storage


// Check for login status
// if not logged in, check for token validate.
// if no token, login form.

- Context API for sharing functionality (MAYBE redux)
- auth helper functions (Utilities HOOKS)

1- check for token at login
2- check for user @ homepage
    - if bad token, login
