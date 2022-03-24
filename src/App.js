import { AuthProvider } from "./context/AuthContext";
import RouterHandle from "./components/RouterHandle";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


function App() {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
        <RouterHandle></RouterHandle>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
