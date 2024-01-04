import { useState } from 'react';

export default function SignUpForm( {setToken} ) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState(null);

  async function handleSubmit (event) {
    event.preventDefault();

      try {
        const response = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify( {
              username: {username},
              password: {password},
            }),
         }
        )
        const data = await response.json();
        setToken(data.token);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {
        error && <p>{error}</p>
      }
      <form method='POST' onSubmit={handleSubmit}>
        <label>
          Username: {''}
          <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} required>
          </input>
        </label>
        <label>
          Password: {''}
          <input 
            type='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} required>
          </input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}