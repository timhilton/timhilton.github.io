import Layout from '../components/Layout';
import styled from 'styled-components';
import { useState } from 'react';

const textColor = (props) => props.theme.text;

const ContactContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    jutify-self: center;
    height: fit-content;
    padding: 3em 0;
    margin-top: -3em;
    width: 50vw;
    background-color: rgba(151, 151, 151, 0.7);
    pointer-events: auto;
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

    @media (max-width: 734px) {
        width: 100%;
        height: 70%;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
`

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 2.5em;
`
const Input = styled.input`
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    height: 3em;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`

const TextArea = styled.textarea`
    width: 100%;
    padding: 0.5em;
    font-size: 1em;
    height: 10em;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`

const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0.5em;
    display: flex;
    align-items: center;
    transition: 0.3s ease all;
    font-size: 1em;
    width: 100%;
    height: 3em;

    ${Input}:focus ~ &,
    ${Input}:valid ~ &,
    ${TextArea}:focus ~ &,
    ${TextArea}:valid ~ & {
        font-size: .9em;
        font-weight: 600;
        top: -2.75em;
        pointer-events: none;
        color: rgb(${(props) => props.theme.text});
    }
`

const SubmitButton = styled.button`
    font-size: 1.5em;
    width: max-content;
    border: none;
    border-radius: 50px;
    padding: 0.5em 1em;
    text-transform: uppercase;
    align-self: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    background-color: rgb(59, 232, 142);
    transition: 0.3s ease all;

    &:hover {
        background-color: rgb(59, 232, 142, 0.7);
    }
`

const SuccessMessage = styled.p`
    font-size: 1.5em;
    color: rgb(${(props) => props.theme.text});
`

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
  
    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...data })
          })
            .then(() => console.log("Success!"))
            .catch(error => console.log(error));

        e.preventDefault();
        setSubmitted(true);
    };
  
    return (
        <ContactContainer>
            {!submitted && 
            <Form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
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

  