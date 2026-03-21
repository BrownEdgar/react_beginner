
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';

function Contact() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  if (isLoading) {
    return <Navigate to="/" />
  }
  return <div>
    <h1>Contact</h1>
    <p>This is the contact page</p>
    <Link to="/">go to home page</Link>
  </div>;
}


export default Contact;
