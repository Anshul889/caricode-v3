import React, { useState } from "react";
import Border from "../Border/Border";
import { Container, Heading2 } from "./style";
import { useTransition, animated } from 'react-spring'
import { Button } from "../Button/Button";

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
		<Container>
			<Heading2>Send us a message</Heading2>
			<Border></Border>
			<form
        id="contact"
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        autocomplete="on"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="former">
          <label id="name" onSelect={() => setInputfield(true)}>
            <div className="formitem">Name</div>
            <input type="text" name="name" autocomplete="on"/>
          </label>
          <label onSelect={() => setInputfield(true)}>
            <div className="formitem">Email</div>
            <input type="email" name="email" autocomplete="on"/>
          </label>
          <label className="textdiv" onSelect={() => setMessage(true)}>
            <div className="formitem">Message</div>
            <textarea className="contactformarea" name="message"></textarea>
          </label>
        </div>
        {message && inputField ? (
          <Button type="submit">Send</Button>
        ) : (
          <Button onMouseOver={() => setError(true)} style={{ opacity: '0.5' }}>
            Send
          </Button>
        )}
    {transitions.map(
            ({ item, key, props }) =>
              item && (
                <animated.span key={key} style={{...props, color: 'red', marginLeft: '7px'}}>
                  Form is Incomplete
                </animated.span>
              )
          )}
      </form>
		</Container>
	)
};

export default Contact;
