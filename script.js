* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff9acb, #ffd1e8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
}

.card {
  background: #fff0f6;
  padding: 16px;
  border-radius: 20px;
  text-align: center;
  width: 92%;
  max-width: 360px;
}

.gif {
  width: 100%;
  height: auto;
  border-radius: 15px;
  margin-bottom: 12px;
  display: block;
}

h1 {
  color: #b30059;
  font-size: 1.4rem;
  margin: 10px 0 15px;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

button {
  width: 48%;
  padding: 12px 0;
  font-size: 1rem;
  border: none;
  border-radius: 25px;
}

#yesBtn {
  background: #ff4d88;
  color: white;
}

#noBtn {
  background: #ffe6ee;
  color: #b30059;
}

#message {
  margin-top: 18px;
  font-size: 1.05rem;
  color: #800040;
}
