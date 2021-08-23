import React from "react";

const Contact = () => {
	const [message, setMessage] = useState(null)
  const [inputField, setInputfield] = useState(null)
  const [formError, setError] = useState(false)
  const transitions = useTransition(formError &&
    !(message && inputField), null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })
  return (
		<div></div>
	)
};

export default Contact;
