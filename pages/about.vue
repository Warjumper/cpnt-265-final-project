<template>
  <div class="hero">
    <div class="content block">
      <h1 class="h1"><em>About</em></h1>

      <p class="about">
        <strong
          ><em><span style="color: cyan">RIDDLE ONE:</span></em></strong
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque
        amet nobis? Placeat, maxime commodi alias asperiores optio nam sit,
        quidem numquam praesentium velit ut nobis deleniti, odit cupiditate
        debitis.<br /><br />
      </p>

      <p class="about">
        <strong
          ><em><span style="color: cyan">RIDDLE TWO:</span></em></strong
        >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        delectus in omnis cumque ullam suscipit beatae vero soluta quisquam
        temporibus accusantium. Eaque necessitatibus consequuntur laudantium
        debitis aspernatur beatae eligendi et.<br /><br />
      </p>

      <p class="about">
        <strong
          ><em><span style="color: cyan">RIDDLE THREE:</span></em></strong
        >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
        reprehenderit sunt consectetur explicabo porro perferendis non, harum
        animi. Tenetur et quos, ullam harum corporis dolorem accusantium natus
        at. Iure, magnam!
      </p>
    </div>
    <!-- NEEDS VIDEO REUPLOAD smaller size for GH -->
    <video autoplay loop muted playsinline="" class="back-video">
      <source src="/video/UR-Banner.mp4" type="video/mp4" />
    </video>
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

}
/* text */
.content {
  text-align: left;
 
}
.content h1 {
  font-size: 80px;
  color: rgb(173, 231, 231);
  font-weight: 600;
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
  /* -webkit-filter: blur(6px); */
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
