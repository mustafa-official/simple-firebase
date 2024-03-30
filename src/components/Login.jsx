import { useState } from "react";
import app from "../firebase/firebase.init";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  //   console.log(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleTwitterSignIn = ()=>{
    signInWithPopup(auth, twitterProvider)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser);
    })
    .catch(error=>{
      console.log(error);
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {user ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <div>
          <button onClick={handleGoogleSignIn}>Sign in Google</button>
          <button onClick={handleGithubSignIn}>Sign in Github</button>
          <button onClick={handleTwitterSignIn}>Sign in Twitter</button>
        </div>
      )}
      {user && (
        <div>
          <h2>Name: {user.displayName}</h2>
          <p>Email: {user.email ? user.email : "Email not found"}</p>
          <img
            src={user.photoURL ? user.photoURL : "No picture added"}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export default Login;
