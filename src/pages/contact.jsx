import styled, { css } from 'styled-components';
import { useState } from 'react';

const ContactContainer = styled.section`
    align-items: center;
    align-self: center;
    background-color: rgba(151, 151, 151, 0.7);
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    display: flex;
    height: fit-content;
    justify-content: center;
    margin-top: -3em;
    padding: 3em;
    pointer-events: auto;
    width: 100%;

    @media (max-width: 734px) {
        height: 70%;
        margin-top: -7em;
        padding-bottom: 5em;
        padding-top: 6em;
        width: 100%;
    }
`;

const Form = styled.form`
    display: grid;
    gap: 2.5em;
    grid-template-rows: auto;
    justify-items: center;
    width: 100%;
`;

const inputStyles = {
    border: 'none',
    borderRadius: '5px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
    fontSize: '1em',
    padding: '0.5em',
    width: '100%',
};

const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

const inputOutlineMixin = css`
	&:focus,
	&:valid {
		outline: 2px solid rgb(59, 232, 142);
	}
`;

const Input = styled.input`
	${inputStyles}
	height: 3em;

	${inputOutlineMixin}

	&[name='email'][value]:not([value='']):invalid,
    &[name='email'][value='']:invalid:focus {
        outline: 2px solid rgb(255, 0, 0);
    }
`;

const TextArea = styled.textarea`
	${inputStyles}
	font-family: inherit;
	height: 10em;

	${inputOutlineMixin}
`;

const Label = styled.label`
    align-items: center;
    display: flex;
    font-size: 1em;
    height: 3em;
    left: 0.5em;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: 0.3s ease all;
    width: 100%;

    ${Input}:focus ~ &,
    ${Input}:valid ~ &,
    ${Input}[value]:not([value='']) ~ &,
    ${TextArea}:focus ~ &,
    ${TextArea}:valid ~ & {
        color: rgb(${(props) => props.theme.text});
        font-size: 0.9em;
        font-weight: 600;
        top: -2.75em;
    }

    ${Input}[name='email'][value]:not([value='']):invalid ~ & {
        color: rgb(255, 0, 0);
    }
`;

const SubmitButton = styled.button`
    align-self: center;
    background-color: rgb(59, 232, 142);
    border: none;
    border-radius: 50px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    color: rgb(246, 246, 246);
    font-size: 1.5em;
    font-weight: inherit;
    padding: 0.5em 1em;
    text-shadow: 0 0 7px rgba(25, 25, 25, 0.4);
    text-transform: uppercase;
    transition: 0.3s ease all;
    width: max-content;

    &:hover {
        background-color: rgb(59, 232, 142, 0.7);
    }

    @media (max-width: 734px) {
        margin-top: -1em;
    }
}`;

const SuccessMessage = styled.p`
    color: rgb(${(props) => props.theme.text});
    font-size: 1.5em;
`;

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
  
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
          })
            .then(() => console.log("Success!"))
            .catch(error => console.log(error));
        
        setSubmitted(true);
    };
  
    return (
        <ContactContainer>
            {!submitted && 
            <Form 
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <InputContainer> 
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="name">Name</Label>
            </InputContainer>

            <InputContainer>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="email">Email</Label>
            </InputContainer>
            <InputContainer>
                <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <Label htmlFor="subject">Subject</Label>
            </InputContainer>

            <InputContainer>
                <TextArea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></TextArea>
                <Label htmlFor="message">Message</Label>
            </InputContainer>

            <SubmitButton type="submit">Let&#39;s Talk</SubmitButton>
            </Form>
}
            {submitted && <SuccessMessage>Thank you for your message! I look forward to speaking with you!</SuccessMessage>}
        </ContactContainer>
    );
}

  