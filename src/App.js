import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { setActiveUser, setUserLogout, selectUserEmail, selectUserName } from './redux/userSlice';
import { auth, provider } from './firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



function App() {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        dispatch(setActiveUser({
          userName: result.user.displayName,
          userEmail: result.user.email
        }))
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      })
  }



  const handleSignOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserLogout()) // this sets the user states to null hence the user is now logged out !
    }).catch(err => alert(err.message))
  }

  return (
    <div className="App">
      {userName ?
        <>
          <h1>Welcome {userName}</h1>
          <button onClick={() => {
            handleSignOut()
          }}>Sign Out</button>
        </>
        :
        <>
          <h1>Welcome</h1>
          <button onClick={handleSignIn}>Sign In</button>
        </>
      }

    </div>
  );
}

export default App;
