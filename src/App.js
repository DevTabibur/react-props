import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import './Card.css';

function App() {
  return (
    <div className="card__container">
      <Card
        imgSrc="https://i.pinimg.com/564x/bd/9b/e9/bd9be9cfc97ba73c66f51e927f2bfcc5.jpg"
        title="DARK"
        category="A Netflix Original Series"
        href="https://www.netflix.com/bd/title/80100172"
      />

      <Card
        imgSrc="https://i.pinimg.com/564x/2e/b6/9e/2eb69e110dca05dd800e48e72027a92e.jpg"
        title="Extra Curricular"
        category="A Netflix Original Series"
        href="https://www.netflix.com/bd/title/80990668"
      />

      <Card
        imgSrc="https://i.pinimg.com/originals/95/64/cc/9564cc5d91b06c8705bb95ea22b9e940.png"
        title="Stranger Things"
        category="A Netflix Original Series"
        href="https://www.netflix.com/bd/title/80057281"
      />
    </div>
  );
}

export default App;
