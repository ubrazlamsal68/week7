import React, { useState } from 'react';
import Happy from './Happy.png'; // Assuming this image exists
import Like from './Like.png';  // Assuming this image exists
import Sad from './Sad.png';    // Assuming this image exists

function EmojiTextInput() {
  const [text, setText] = useState("");
  const [emoji, setEmoji] = useState(Happy); // Default emoji is Happy

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setText(value);

    // Change the emoji based on the input value
    if (value === "happy") {
      setEmoji(Happy);
    } else if (value === "like") {
      setEmoji(Like);
    } else if (value === "sad") {
      setEmoji(Sad);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type 'Happy', 'Like', or 'Sad'"
      />
      <label>
        <img src={emoji} alt="emoji" />
      </label>
    </div>
  );
}

export default EmojiTextInput;
