import { useState } from "react";

const Question = ({ question, answer, link, linkText }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="container">
      <div className={`question ${isActive ? 'active' : ''}`} onClick={handleClick}>
        {question}
      </div>
      <div className={`answercont ${isActive ? 'active' : ''}`}>
        <div className="answer">
          {answer}
          <br /><br />
          <a href={link}>{linkText}</a>
        </div>
      </div>
    </div>
  );
};

export default Question;
