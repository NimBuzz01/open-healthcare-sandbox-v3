import React, { useState } from "react";
import sendFeedback, { FeedbackRequest } from "../../utils/FeedbackAPI";

interface FeedbackFormProps {
  onSubmit: () => void;
}

const FeedbackForm = ({ onSubmit }: FeedbackFormProps) => {
  const [feedback, setFeedback] = useState<FeedbackRequest>({
    name: "",
    registration: "",
    ease: 0,
    overall: 0,
    improvement: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await sendFeedback({
      request: feedback,
      onSuccess: onSubmit,
      onError: (error) => console.log(error),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={feedback.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="registration"
        value={feedback.registration}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="ease"
        value={feedback.ease}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="overall"
        value={feedback.overall}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="improvement"
        value={feedback.improvement}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
