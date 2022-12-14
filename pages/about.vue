<template>
  <div class="hero">
    <div class="content">
      <h1 class=""><em>About</em></h1>
      <p class="about">
        <strong><em>RIDDLE ONE:</em></strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque
        amet nobis? Placeat, maxime commodi alias asperiores optio nam sit,
        quidem numquam praesentium velit ut nobis deleniti, odit cupiditate
        debitis.<br><br>
      </p>
      <p class="about">
        <strong><em>RIDDLE TWO:</em></strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        delectus in omnis cumque ullam suscipit beatae vero soluta quisquam
        temporibus accusantium. Eaque necessitatibus consequuntur laudantium
        debitis aspernatur beatae eligendi et.<br><br>
      </p>
      <p class="about">
        <strong><em>RIDDLE THREE:</em></strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
        reprehenderit sunt consectetur explicabo porro perferendis non, harum
        animi. Tenetur et quos, ullam harum corporis dolorem accusantium natus
        at. Iure, magnam!
      </p>
    </div>

  </div>
</template>

<script setup></script>

<style scoped>
.hero {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(12, 3, 51, 0.3), rgba(12, 3, 51, 0.3));
  position: relative;
  padding: 0 5%;
  display: flex;
  /* align-items: center;
  justify-content: center; */
}

/* text */
.content {
  text-align: left;
  /* text-shadow: 2px 2px 2px black; */
}
.content h1 {
  font-size: 100px;
  color: rgb(173, 231, 231);
  font-weight: 600;
  transition: 0.5s;
  z-index: 1;
  -webkit-text-stroke: 2px rgb(255, 255, 255);
  color: transparent;
}
.about {
  display: block;
  max-width: 40ch;
  color: rgb(248, 248, 248);
  text-shadow: 2px 2px 2px black;
  font-size: larger;
}
.about:hover {
  cursor: default;
  /* filter: blur(2px); */
  -webkit-filter: blur(10px);
}

/* video */
.back-video {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 90%;
  background-color: rgb(0, 0, 0);
  -webkit-filter: blur(6px);
}

/* media queries */
@media (min-aspect-ratio: 16/9) {
  .back-video {
    width: 100%;
    height: auto;
  }
}
@media (max-aspect-ratio: 16/9) {
  .back-video {
    width: auto;
    height: 100%;
  }
}
</style>
