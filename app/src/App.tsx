import React from 'react';
import Header from './components/Header'
import LoginForm from './components/LoginForm'

function App() {

  const handleSubmit = (values: any) => {
  console.log('Form values:', values);
  }
  return (
    <div className="App">
  
    <div>
      <LoginForm onSubmit={handleSubmit}/>
    </div>
    </div>
  );
}

export default App;
