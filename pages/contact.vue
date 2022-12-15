<template>
  <body>
    <div class="container">
      <div class="contact-box">
        <div class="left"><img src="/images/logo-bw.svg" alt="" class="md:hidden"></div>
        <div class="right">
          <h2><em>Contact Us</em></h2>
          <input type="text" class="field" placeholder="Name" />
          <input type="email" class="field" placeholder="Email" />
          <input type="text" class="field" placeholder="Phone Number" />
          <textarea placeholder="Message" class="field"></textarea>
          <button class="btn">Send</button>
        </div>
      </div>
    </div>
</body>
</template>

<script setup></script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  margin: auto;
}
body { 
  height: 100vh;
  width: 100%;
  margin: 0;
  background: url("images/contact.jpg") no-repeat;
  background-size: cover;
  /* filter: blur(6px); */
  /* -webkit-filter: blur(6px); */
  /* transform: scale(1.1); */
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 100px;
  padding-bottom: 200px;
}
.container:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.content-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 19px 5px rgba(0,0,0,0.19);
}
/* .left {
	background: url("images/logo-bw.svg") no-repeat center;
	background-size: cover;
	height: 100%;
} */
.right {
  padding: 25px 40px;
}
h2 {
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
  font-size: 80px;
  font-weight: 600;
  z-index: 1;
  /* -webkit-text-stroke: 2px rgb(255, 255, 255); */
  color: transparent; 
  /* color: rgb(173, 231, 231); */
  color: #fff;
  text-shadow: 4px 4px 8px black;
  text-align: center;
}
h2:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 20%;
  transform: translateX(-50%);
  height: 8px;
  width: 56px;
  border-radius: 2px;
  background-color: #2e8dcc;
}
.field {
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  /* background-color: rgba(230, 230, 230, 0.6); */
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: .3s;
  opacity: 70%;
}
.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.field:focus {
  background-color: #fff;
  border: 2px solid rgba(30, 85, 250, 0.47);
}
.textarea {
  min-height: 150px;
}
.btn {
  width: 100%;
  padding: 1 1rem;
  font-size: 1.2rem;
  background-color: #2e8dcc;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  transition: .3s;
  border: 2px solid white
}
.btn:hover {
  background-color: rebeccapurple;
}

@media screen and (max-width: 880px){

  .contact-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
    max-width: 300px;
  }
  h2:after {
    display: none;
  }
}
</style>
