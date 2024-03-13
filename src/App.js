import './App.css';
import Messenger from './component/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider'
function App() {
 console.log("process>>",process.env)
  const clientId="396817077892-badnfn9n4ilirl2uik1vfg8n64ovg17b.apps.googleusercontent.com";
  
  return (
      <GoogleOAuthProvider clientId={clientId}>
          <AccountProvider>
            <Messenger/>
          </AccountProvider>
      </GoogleOAuthProvider>
  );
}

export default App;
