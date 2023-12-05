@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Lato:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(#f3f0f8, #d6d2db);
  color: #e5d9f1;
  min-height: 100vh;
}

section {
  margin: 1rem auto;
  max-width: 30rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #030a1b;
}

.button {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  font-family: 'Lato', sans-serif;
  text-decoration: none;
  cursor: pointer;
  border-radius: 2px;
}

.icon-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.button-icon {
  width: 1rem;
  height: 1rem;
}

.filled-button {
  background: linear-gradient(#7fa1f7, #6085e4);
  color: #030a1b;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.filled-button:hover {
  background: linear-gradient(#89a9fb, #6890f6);
}

.filled-button:disabled {
  background: #a3a9b7;
  color: #3a445c;
  box-shadow: none;
  cursor: not-allowed;
}

.outline-button {
  border: 1px solid #2658d6;
  color: #2658d6;
}

.outline-button:hover {
  background: #cbd8fc;
}

.text-button {
  color: #2658d6;
}

.text-button:hover {
  background: #cbd8fc;
}
