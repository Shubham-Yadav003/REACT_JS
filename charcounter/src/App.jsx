import React, {useState} from 'react';
import './counter.css';

function App() {

  const [text, setText] = useState('');
  const [characterCnt , setCharacterCnt] = useState(0);
  const [sentenceCnt , setSentenceCnt] = useState(0);

  const handleTextChange =(e)=>{
    const inputText = e.target.value
    setText(inputText);

    // calculate character
    const characters = inputText.replace(/\s+/g, ''); // remove spaces
    setCharacterCnt(characters.length);

    // calculate sentence
    const sentences = inputText.trim().split(/[.!?](\s|$)/).filter(sentence=> sentence.trim().length > 0)
    setSentenceCnt(sentences.length);
  }

  const handleDelete = ()=>{
    setText('');
    setCharacterCnt(0);
    setSentenceCnt(0);
  }
  return (
    <div className='container'>
      <div className="container_middle">
        <div className='right'>
          <textarea
          value={text}
          onChange={handleTextChange}
            className='text_input'
            placeholder='Type here...'
            rows="6"
          />
          <div className='button_div'>
            <button className='button-65' onClick={handleDelete}>Delete</button>
          </div>
        </div>

        <div className='left'>
          <div className='container_middle_para'>
            <h1>Result</h1>
          </div>


          <div className='flex-container'>
            <div>
              <p>
                <strong>Characters:</strong> {characterCnt}
              </p>
            </div>


            <div>
              <p>
                <strong>Sentence:</strong> {sentenceCnt}
              </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;