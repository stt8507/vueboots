<template>
  <div class="background">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <h1 style="color: white" class="display-1 text-bold">
            Man must explore, and this is exploration at its greatest
          </h1>
        </div>
      </div>
    </div>
  </div>
  <article class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <p>
            Never in all their history have men been able truly to conceive of
            the world as one: a single sphere, a globe, having the qualities of
            a globe, a round earth in which all the directions eventually meet,
            in which there is no center because every point, or none, is center
            — an equal earth which all men occupy as equals. The airman's earth,
            if free men make it, will be truly round: a globe in practice, not
            in theory.
          </p>
          <h2 class="section-heading">The Final Frontier</h2>
          <p>
            There can be no thought of finishing for ‘aiming for the stars.’
            Both figuratively and literally, it is a task to occupy the
            generations. And no matter how much progress one makes, there is
            always the thrill of just beginning.
          </p>
          <p>
            There can be no thought of finishing for ‘aiming for the stars.’
            Both figuratively and literally, it is a task to occupy the
            generations. And no matter how much progress one makes, there is
            always the thrill of just beginning.
          </p>
          <blockquote class="blockquote">
            The dreams of yesterday are the hopes of today and the reality of
            tomorrow. Science has not yet mastered prophecy. We predict too much
            for the next year and yet far too little for the next ten.
          </blockquote>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  </article>
</template> 

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  beforeUnmount() {
    document.body.style.backgroundImage = "";
  },
};
</script>

<style>
html {
  height: 100%;
}
.background {
  margin-bottom: 3rem;
  height: 100vh;
  width: 100%;
  background-image: url("../assets/about-bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 20px;
}
.section-heading {
  font-size: 2.25rem;
  font-weight: 700;
  margin-top: 3.75rem;
}
.blockquote {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
blockquote {
  font-style: italic;
  color: #6c757d;
}
h1 {
  display: block;
  font-size: 2.25em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
</style>