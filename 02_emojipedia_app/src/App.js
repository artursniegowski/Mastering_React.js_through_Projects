import './App.css';
import Header from './components/Header';
import EmojiItem from './components/EmojiItem';
import emojisData from './emojisData';

let createEmojiCard = (emojiElement, index) => {
  return (
    <EmojiItem  
      key={emojiElement.id}
      emoji={emojiElement.emoji}
      title={emojiElement.name}
      descritpion={emojiElement.meaning}
      />
  );
}

function App() {
  return (
    <div>
      <Header title={"emojipedia"} />
      <dl className="dictionary">
        {emojisData.map(createEmojiCard)}
      </dl>
    </div>
  );
}

export default App;





