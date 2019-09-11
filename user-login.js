$(document).ready(() => {

            /**
             * Steps so far...
             * Create signup.html and signup.js
             * 
             * Link signup.js to signup.html
             * 
             * Create form in signup.html to receive data from user
             * 
             * Setup JQuery in signup.html
             * 
             * Use JQuery in signup.js to access user data from the form
             * 
             * Setup firebase in signup.html
             * 
             * Add firebase auth and firestore SDK's to signup.html
             * 
             * Copy and paste function for signing up 
             * users from firebase documentation into signup.js
             * 
             * Add .then statement to firebase signup function
             * 
             * Test Signup
             * 
             * Go to login documentation url
             * Copy and paste function for signing up
             * users from firebase documentation into signup.js
             * 
             * Test Login
             * 
             */


            // Starting
            console.log("Started")

            // Checking if firebase is working
            console.log(firebase)

            // Action performed when the submit button is clicked
            $('#signUpBtn').click(() => {

                // Value in the first name field
                let userFirstName = $('#firstName').val();
                let userLastName = $('#lastName').val()
                let userEmail = $('#email').val()
                let password1 = $('#password1').val()
                let password2 = $('#password2').val()

                //Checking if the values entered are being received
                console.log("First Name=>", userFirstName)
                console.log("Last Name=>", userLastName)
                console.log("Email=>", userEmail)
                console.log("password1 =>", password1)
                console.log("password2 =>", password2)


                // Saving a user to firebase firestore;
                firebase.auth().createUserWithEmailAndPassword(userEmail, password1)
                    .then(res => {
                        //Helps us get feedback from firebase
                        console.log(res)
                    })
                    .catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode == 'auth/weak-password') {
                            alert('The password is too weak.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        // [END_EXCLUDE]
                    });





            })

            //Login process

            // URL for login documentation => https://github.com/firebase/quickstart-js/blob/0cc551be1a374267d5d756a054341bc948e307d4/auth/email-password.html#L60-L73
            $('#loginBtn').click(() => {

                let loginEmail = $("#loginEmail").val();
                let loginPassword = $("#loginPassword").val();

                let verifiedLoginEmail;
                let verifiedLoginPassword;

                //Checking if correct values are received
                !loginEmail ? alert("Please enter an email address") : verifiedLoginEmail = loginEmail;
                !loginPassword ? alert("Please enter an email address") : verifiedLoginPassword = loginPassword;


                if (loginEmail && loginPassword) {

                    firebase.auth().signInWithEmailAndPassword(verifiedLoginEmail, verifiedLoginPassword)
                        .then(res => {
                            console.log(res)
                        })
                        .catch((error) => {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            // [START_EXCLUDE]
                            if (errorCode === 'auth/wrong-password') {
                                alert('Wrong password.');
                            } else {
                                alert(errorMessage);
                            }
                            console.log(error);
                            document.getElementById('quickstart-sign-in').disabled = false;
                            // [END_EXCLUDE]
                        });

                }




            })