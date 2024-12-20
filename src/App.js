import './App.css';
import UserCard from './components/UserCard.jsx'

function App() {

  const bg = {
    backgroundImage:
      "url('./bg-galaxy.jpg')",
    height: "100vh",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="h-screen flex items-center" style={bg}>
      <UserCard />
    </div>
  );
}

export default App;
