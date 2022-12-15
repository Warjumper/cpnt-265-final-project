<script>
//parallax testing 

// const text = document.getElementById("text");

// window.addEventListener("scroll", function() {
//   const value = window.scrollY;
//   text.style.marginBottom = value * 0.25 + "px";
//   });

export default {
  methods: {
    handleScroll() {
      console.log(window.scrollY);
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div class="">
    <section>
      <img
        class="2xl:opacity-90"
        src="images/neon-mountain.jpg"
        id="neonmtn"
        alt="background mountains"
      />
      <img
        class="hidden 2xl:flex"
        src="images/frontmtn1.svg"
        id="frontmtn1"
        alt="foreground mountains"
      />
      <img
        class="hidden 2xl:flex"
        src="images/frontmtn2.svg"
        id="frontmtn2"
        alt="foreground mountains"
      />
      <h2 id="text"><em>Unseen Riches</em></h2>
      <a href="#sec" id="btn">Explore</a>
    </section>
    <div class="sec bg-gradient-to-r from-blue-900 to-purple-900" id="sec">
      <h2>Enter the Hypogeum</h2>
      <p>
        Cross the threshold, thither unto the Cthonian chanting, matched only by
        infernal drums, beating, pulsing, driving all who enter to a
        <em>frenzied lust for opulent depravity.</em> <br /><br /><strong
          >Cahf ah nafl mglw'nafh hh' ahor syha'h ah'legeth, ng llll or'azath
          syha'hnahh n'ghftephai n'gha ahornah ah'mglw'nafh.</strong
        ><br /><br />Ehyenah ahor ahnyth ehyee uh'eogg, llll either h' ephaihate
        ehye ng love mgahehyee, ngnah h' ephaiah devoted l' ehye ng despise
        mgahehyee. Ymg' ahorna ahnyth r'luhhor ng <strong>money.</strong>
      </p>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}
</style>
<style scoped>
body {
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(#2b1055, #7597de);
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
header .logo {
  display: inline-block;
  vertical-align: top;
  width: 100px;
  height: 100px;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  list-style: none;
  margin-left: 20px;
}
header ul li a {
  text-decoration: none;
  padding: 6px 15px;
  color: #fff;
  border-radius: 20px;
}
header ul li a:hover,
header ul li a.active {
  background: #fff;
  color: #2b1055;
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
section::before {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to top, #1c0522, #000000);
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  object-fit: cover;
  pointer-events: none;
}
section img#neonmtn {
  height: 100vh;
  width: 100%;
}
section img#frontmtn1 {
  opacity: 90%;
  z-index: 10;
  margin-top: 480px;
  margin-left: 400px;
  width: 100%;
  height: 80%;
}
section img#frontmtn2 {
  z-index: 10;
  margin-top: 480px;
  width: 100%;
  height: auto;
  object-position: -340px;
}
#text {
  position: absolute;
  color: #cffafe;
  -webkit-text-stroke: 2px #0ea5e9;
  text-shadow: 4px 4px 8px black;
  white-space: nowrap;
  font-size: 7.5vw;
  z-index: 200;
}
#btn {
  text-decoration: none;
  display: inline-block;
  padding: 8px 30px;
  margin-top: 8px;
  border-radius: 40px;
  background: #cffafe;
  color: #2b1055;
  font-size: 1.5em;
  z-index: 200;
  transform: translateY(100px);
}
#btn:hover {
  background: black;
  color: #cffafe;
  cursor: pointer;
}
.sec {
  position: relative;
  padding: 100px;
  /* background: linear-gradient(to right, #001147, #4f0073); */
}
.sec h2 {
  font-size: 3.5em;
  margin-bottom: 10px;
  color: #fff;
}
.sec p {
  font-size: 1em;
  color: #fff;
}
@media screen and (max-width: 600px) {
  #text {
    font-size: 60px;
    color: white;
    -webkit-text-stroke: black;
  }
  .sec h2 {
    font-size: 24px;
    text-align: left;
  }
  .sec p {
    font-size: 16px;
    text-align: left;
  }
}
</style>
