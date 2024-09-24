<template>
  <q-layout view="lHh lpr lFf">
    <div
      v-bind:class="{
        main: $q.platform.is.desktop,
        mobile_main: $q.platform.is.ipad || $q.platform.is.mobile,
      }"
      class="full-height"
      style="background-color: rgba(0, 0, 0, 0.7)"
    >
      <q-header class="q-py-sm" style="background-color: rgba(0, 0, 0, 0.7)">
        <q-toolbar class="text-h4">
          <q-space></q-space>
          <q-tabs v-model="selected_tab" shrink>
            <q-tab
              :style="[
                selected_tab == 't_0' ? { backgroundColor: 'green' } : {},
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_about_us')"
              style="width: 120px; min-height: auto !important; color: white"
              label="About us"
            />
            <q-tab
              :style="[
                selected_tab == 't_1' ? { backgroundColor: 'green' } : {},
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_features')"
              style="width: 120px; min-height: auto !important; color: white"
              label="Features"
            />
            <q-tab
              :style="[
                selected_tab == 't_2' ? { backgroundColor: 'green' } : {},
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_pricing')"
              style="width: 120px; min-height: auto !important; color: white"
              label="Pricing"
            />
            <q-tab
              :style="[
                selected_tab == 't_3' ? { backgroundColor: 'green' } : {},
              ]"
              class="q-mr-sm q-py-xs custom_tab"
              @click="scrollToElement('id_contactus')"
              style="width: 120px; min-height: auto !important; color: white"
              label="Contact us"
            />
            <q-btn
              color="white"
              text-color="black"
              style="border: 2px solid green"
              label="Free trial"
              glossy
              href="dashboard"
            />
          </q-tabs>
        </q-toolbar>
      </q-header>
      <section>
        <div
          class="full-height full-width flex flex-center text-center"
          style="
            background-color: rgba(0, 0, 0, 0.68) !important;
            z-index: 0;
            height: 100vh !important;
          "
        >
          <div class="">
            <div class="text-h6 text-grey-5">INVENTORY PLUS</div>
            <div
              class="text-h2 text-grey-5 q-py-sm q-my-md"
              style="
                border-top: 3px solid #000000;
                border-bottom: 3px solid #000000;
              "
            >
              Streamline Your Business with InventoryPlus
            </div>
            <div class="text-h6" style="color: #000000">
              STOCK CONTROL | LEAD GENERATION | SUPPLIERS QUEQUE
            </div>
            <div
              style="color: #1495de !important"
              class="text-h4 q-mt-md text-grey-2 my-font"
            ></div>
          </div>
        </div>
      </section>
    </div>

    <div style="background-color: #33495e">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-xs-12 col-sm-12">
          <div style="background-color: rgba(0, 0, 0, 0.68) !important">
            <div>
              <img
                src="/Images/Logo.jpg"
                style="height: 500px"
                class="q-ml-sm"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12 q-px-md q-pt-sm">
          <div
            class="text-h4 text-center text-grey-5 q-py-xs q-my-xs"
            style="
              border-top: 3px solid #bdbdbd;
              border-bottom: 3px solid #bdbdbd;
            "
            id="id_about_us"
          >
            What is Inventory Plus?
          </div>
          <h5 class="q-my-none text-caption" style="color: #20ffff">
            Inventory Plus is your one-stop solution for streamlined inventory
            management. Our intuitive software empowers businesses of all sizes
            to efficiently track, manage, and optimize their stock levels.

            <br />
            <br />
            Key Features:
            <br />
            Comprehensive Stock Management: Real-time inventory tracking
            Automated stock alerts and notifications
            <br />
            Robust Supplier Management: Centralized supplier database Purchased
            products tracking Supplier performance analysis
            <br />
            User-Friendly Interface: Intuitive dashboard for easy navigation
            Customizable reporting and analytics Role-based access controls
            <br />
            Efficient Client Management: Customer information database Sales
            order processing Customer order history and analysis
            <br />
            <br />
            Why Choose Us?
            <br />
            Enhanced Efficiency: Streamline your inventory processes and reduce
            manual errors. <br />
            Improved Accuracy: Maintain accurate stock levels and prevent
            stockouts or overstocking.<br />
            Data-Driven Decisions: Make informed decisions based on real-time
            inventory data and analytics.<br />
            Scalability: Our software grows with your business, accommodating
            your evolving needs.<br />
            Excellent Support: Our dedicated team provides expert assistance and
            support.<br />
            Join the countless businesses that have streamlined their operations
            with Inventory Plus
            <br />
            <br />
            Link: <a href="https://inventapi.netlify.app/dashboard" style="color: white">App Link</a>
          </h5>
        </div>
      </div>
    </div>
    <div style="background-color: #2b5873" id="id_projects">
      <div class="row q-px-xl">
        <div
          class="text-h4 text-center text-white q-py-sm q-my-md full-width"
          style="
            border-top: 3px solid #bdbdbd;
            border-bottom: 3px solid #bdbdbd;
          "
          id="id_features"
        >
          FEATURES OVERVIEW
        </div>

        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <img
            src="/Images/Image 2024-09-11 at 12.54.42 PM.jpeg"
            style="height: 500px"
            class="q-ml-sm"
            alt=""
          />
        </div>

        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >
          <img
            src="/Images/Image 2024-09-24 at 3.31.32 AM.jpg"
            style="height: 500px"
            class="q-ml-sm"
            alt=""
          />
        </div>
      </div>
    </div>

  <div style="background-color: #2b5873" id="id_projects">
      <div class="row q-px-xl">
        <div
          class="text-h4 text-center text-white q-py-sm q-my-md full-width"
          style="
            border-top: 3px solid #bdbdbd;
            border-bottom: 3px solid #bdbdbd;
          "
          id="id_features"
        >
          DEMO
        </div>

        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        >

          <video
            style="height: 500px"
            class="q-ml-sm"
            alt="application demo"
            controls>
            <source src="/Images/demo.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>


    <div style="background-color: #14104e" id="id_sponsors">
      <div class="row row q-px-xl">
        <div
          class="col-md-12 col-md-12 col-xs-12 col-sm-12 q-mb-xl flex flex-center"
        ></div>
      </div>
    </div>

    <section id="id_sketches">
      <div style="background-color: #206b73; z-index: 0" class="content">
        <div class="row row q-px-xl">
          <div
            class="text-h4 text-center text-white q-py-sm q-my-md full-width"
            style="
              border-top: 3px solid #bdbdbd;
              border-bottom: 3px solid #bdbdbd;
            "
          >
            CONTACT US
          </div>
        </div>
      </div>
      <canvas id="canvas2" style="height: 100%; width: 100%"></canvas>
    </section>

    <div class="text-caption text-grey-9">
      <q-card-section class="q-py-xs">
        <div class="text-h5 q-mt-sm q-mb-xs">
          Name: Noella Jarega
          <br>
          Github:<a class="project_link" style="text-decoration: none;color: #eb4f71;"
          href="https://github.com/Noella-68?tab=repositories" target="_blank">link </a>
          <br>
          Linkedin: <a class="project_link" style="text-decoration: none;color: #eb4f71 ;"
                       href="https://www.linkedin.com/in/noella-jarega-a308261b9/" target="_blank" >Link </a>
          <br>
          <br>
          Name: Aime RUKUNDO
          <br>
          Github: <a class="project_link" style="text-decoration: none;color: #eb4f71;"
                     href="https://github.com/radsungura" target="_blank">Link</a> <br>
          Linkedin: <a class="project_link" style="text-decoration: none;color: #eb4f71;" href="https://www.linkedin.com/in/aimeruk/">Link</a>
        </div>


      </q-card-section>
    </div>




    <div id="contact_us">
      <div style="background-color: rgba(0, 0, 0, 0.68) !important">
        <form action="https://formspree.io/mpzydoze" method="POST">
          <div class="row text-center flex flex-center q-py-lg">
            <div
              class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none"
            >
              <q-input
                required
                v-model="name"
                name="name"
                bg-color="white"
                outlined
                label="Your Name *"
              >
                <template v-slot:append>
                  <q-icon name="list" style="color: green" />
                </template>
              </q-input>
              <q-input
                type="email"
                required
                v-model="email"
                name="_replyto"
                bg-color="white"
                outlined
                label="Your Email *"
              >
                <template v-slot:append>
                  <q-icon name="email" style="color: green" />
                </template>
              </q-input>
            </div>
            <div
              class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none"
            >
              <q-input
                required
                v-model="message"
                name="message"
                class=""
                type="textarea"
                bg-color="white"
                outlined
                label="Your Message *"
              >
                <template v-slot:append>
                  <q-icon name="comment" style="color: green" />
                </template>
              </q-input>
            </div>
          </div>
          <div class="row flex flex-center text-center q-pb-xl q-mt-md">
            <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12">
              <q-btn
                type="submit"
                size="lg"
                style="background: green; color: white"
                label="Send Message"
              />
            </div>
          </div>
        </form>
      </div>
    </div>

    <q-toolbar
      class="flex flex-center text-white"
      style="background-color: #1c1b21; border-top: 2px solid green"
      id="id_contact_me"
    >
      <div class="q-pa-sm q-gutter-sm">
        <q-btn
          target="_blank"
          style="border: 2px solid green"
          round
          type="a"
          href="#"
          glossy
          icon=""
        />
        <q-btn
          target="_blank"
          style="border: 2px solid green"
          round
          type="a"
          href="#"
          glossy
          icon="fab fa-github"
        />
        <q-btn
          style="border: 2px solid green"
          round
          type="a"
          href="#"
          glossy
          icon="email"
        />
        <q-btn
          target="_blank"
          style="border: 2px solid green"
          round
          type="a"
          href="#"
          glossy
          icon="fas fa-heart"
        />
        <q-btn
          target="_blank"
          style="border: 2px solid green"
          round
          type="a"
          href="#"
          glossy
          icon="fab fa-stack-overflow"
        />
      </div>
    </q-toolbar>
  </q-layout>
</template>

<script setup>
import { scroll } from "quasar";
import { ref, onMounted } from "vue";

const { getScrollTarget, setScrollPosition } = scroll;
const name = ref("");
const email = ref("");
const message = ref("");
const selected_tab = ref("t_0");

const scrollToElement = (id) => {
  let el = document.getElementById(id);
  const target = getScrollTarget(el);
  const offset = el.offsetTop - 65;
  const duration = 800;
  setScrollPosition(target, offset, duration);
};
onMounted(() => {
  let canvas2Settings = {
    target: "canvas2",
    max: "120",
    animate: true,
    props: ["circle", "square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126],
    ],
    clock: "20",
  };
  let canvas2 = new ConfettiGenerator(canvas2Settings);
  canvas2.render();
});
</script>

<style>
.main {
  background: url(https://images.unsplash.com/photo-1516617217372-ca29bc8c4001?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh !important;
}

.mobile_main {
  background: url(https://images.unsplash.com/photo-1516617217372-ca29bc8c4001?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh !important;
}

.my-card {
  width: 100%;
  max-width: 800px;
  border: none;
  border-radius: 0px;
}

.sponsor-card {
  width: 100%;
  max-width: 240px;
  border: none;
  border-radius: 6px;
}

.project_link:hover {
  text-decoration: underline !important;
}

.sketch_desktop {
  width: 450px;
  height: 620px;
  border: 20px solid #30313b;
}

.sketch_mobile {
  width: 100%;
  height: 100% !important;
  border: 20px solid #30313b;
}

#contact_us {
  background: url(https://images.unsplash.com/photo-1516617217372-ca29bc8c4001?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
  background-size: cover;
  background-position: 50%;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.custom_tab {
  width: 130px;
}

body {
  overflow-x: hidden;
}

section {
  position: relative;
}

section > * {
  z-index: 9;
  position: relative;
  top: 0;
}

section > canvas {
  z-index: 1;
  position: absolute;
  left: 0;
}
</style>
