import './App.css';

let name= "Sanya";
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h2>Hello  {name}</h2>
      <p>Three scientists</p>
    </div>
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />

    {/* idhr hm img ko bhi close krre h  */}
    </> 

    
  );
}

export default App;
