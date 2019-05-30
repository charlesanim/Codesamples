Thrive Quiz Lottie.vue

<template>
  <b-container fluid id="myLottie">
    <lottie
      v-show="index2 === 1"
      :options="options[0]"
      :height="300"
      v-on:animCreated="handleAnimation1"
    />
    <lottie
      v-show="index2 === 2"
      :options="options[1]"
      :height="300"
      v-on:animCreated="handleAnimation2"
    />
    <lottie
      v-show="index2 === 3"
      :options="options[2]"
      :height="300"
      v-on:animCreated="handleAnimation3"
    />
    <lottie
      v-show="index2 === 4"
      :options="options[3]"
      :height="300"
      v-on:animCreated="handleAnimation4"
    />
    <lottie
      v-show="index2 === 5"
      :options="options[4]"
      :height="300"
      v-on:animCreated="handleAnimation5"
    />
    <lottie
      v-show="index2 === 6"
      :options="options[5]"
      :height="300"
      v-on:animCreated="handleAnimation6"
    />
    <lottie
      v-show="index2 === 7"
      :options="options[6]"
      :height="300"
      v-on:animCreated="handleAnimation7"
    />
    <lottie
      v-show="index2 === 8"
      :options="options[7]"
      :height="300"
      v-on:animCreated="handleAnimation8"
    />
    <lottie
      v-show="index2 === 9"
      :options="options[8]"
      :height="300"
      v-on:animCreated="handleAnimation9"
    />
    <lottie
      v-show="index2 === 10"
      :options="options[9]"
      :height="300"
      v-on:animCreated="handleAnimation10"
    />

    <b-container>
      <input
        class="mySlider"
        autocomplete="off"
        type="range"
        value="valor"
        min="0"
        max="3"
        step="1"
        v-on:change="onSpeedChange"
        v-model="animationSpeed"
      >
      
      <label class="choicesMobile">
        <b-row style="margin-top:-15px;">
          <b-col id="range-option">|</b-col>
          <b-col id="spacer"></b-col>
          <b-col id="range-option">|</b-col>
          <b-col id="spacer"></b-col>
          <b-col id="range-option">|</b-col>
          <b-col id="spacer"></b-col>
          <b-col id="range-option">|</b-col>
        </b-row>
        {{value[animationSpeed]}}
      </label>
    </b-container>

    <b-container fluid class="choicesDesktop">
      <b-row>
        <b-col v-on:click="animationChange('0')" id="range-option">
          <p class="pulse left">Not at all true</p>
        </b-col>

        <b-col id="spacer"></b-col>

        <b-col v-on:click="animationChange('1')" id="range-option">
          <p class="pulse text-left">Slightly true</p>
        </b-col>

        <b-col id="spacer"></b-col>

        <b-col v-on:click="animationChange('2')" id="range-option">
          <p class="pulse text-right">Often true</p>
        </b-col>
        <b-col id="spacer"></b-col>

        <b-col v-on:click="animationChange('3')" id="range-option">
          <p class="pulse right">Very true</p>
        </b-col>
      </b-row>
    </b-container>

    <b-row v-if="index2 <= 1">
      <b-col v-if="index2 <= 1">
        <p
          v-if="index2 <= 1"
          class="text-center hint"
          style="font-style: italic; font-size: 14px;"
        >To select your answer, click the text or drag the button along the slider</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-if="index2 >= 2">
        <button
          style="background-color: #0082c4;"
          type="button"
          v-if="index2 >= 2"
          v-on:click="onPrev"
          class="btn btn-lg btn-primary"
        >Previous</button>
      </b-col>

      <b-col>
        <button
          style="background-color: #0082c4;"
          type="button"
          v-on:click="onNext"
          class="btn btn-lg btn-primary"
        >Next</button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Lottie from "vue-lottie";
import * as animation1 from "../assets/q1.json";
import * as animation2 from "../assets/q2.json";
import * as animation3 from "../assets/q3.json";
import * as animation4 from "../assets/q4.json";
import * as animation5 from "../assets/q5.json";
import * as animation6 from "../assets/q6.json";
import * as animation7 from "../assets/q7.json";
import * as animation8 from "../assets/q8.json";
import * as animation9 from "../assets/q9.json";
import * as animation10 from "../assets/q10.json";

export default {
  name: "myLottie",
  components: {
    lottie: Lottie
  },
  props: ["valor", "index"],
  // props
  data: function() {
    return {
      value: ["Not at all true", "Slightly true", "Often true", "Very true"],
      answers: [],
      options: [
        { animationData: animation1.default },
        { animationData: animation2.default },
        { animationData: animation3.default },
        { animationData: animation4.default },
        { animationData: animation5.default },
        { animationData: animation6.default },
        { animationData: animation7.default },
        { animationData: animation8.default },
        { animationData: animation9.default },
        { animationData: animation10.default }
      ],
      animationSpeed: this.valor, // speed of animation
      index2: this.index
    };
  },
  watch: {
    valor: {
      handler(newVal, oldVal) {
        // watch it
        console.log(this.valor);
        console.log("Prop changed: ", newVal, " | was: ", oldVal);
      }
    }
  },
  methods: {
    /**
     *  first animation
     *
     */

    handleAnimation1: function(anim1) {
      this.anim1 = anim1;
      console.log(this.anim1);
      this.onSpeedChange();
    },

    handleAnimation2: function(anim2) {
      this.anim2 = anim2;
      console.log(this.anim2);
      this.anim2.playSegments([0, 89, true]);
    },
    handleAnimation3: function(anim3) {
      this.anim3 = anim3;
      console.log(this.anim3);
      this.anim3.playSegments([0, 89, true]);
    },

    handleAnimation4: function(anim4) {
      this.anim4 = anim4;
      console.log(this.anim4);
      this.anim4.playSegments([0, 89, true]);
    },
    handleAnimation5: function(anim5) {
      this.anim5 = anim5;
      console.log(this.anim5);
      this.anim5.playSegments([0, 89, true]);
    },

    handleAnimation6: function(anim6) {
      this.anim6 = anim6;
      console.log(this.anim6);
      this.anim6.playSegments([0, 89, true]);
    },
    handleAnimation7: function(anim7) {
      this.anim7 = anim7;
      console.log(this.anim7);
      this.anim7.playSegments([0, 89, true]);
    },

    handleAnimation8: function(anim8) {
      this.anim8 = anim8;
      console.log(this.anim8);
      this.anim8.playSegments([0, 89, true]);
    },
    handleAnimation9: function(anim9) {
      this.anim9 = anim9;
      console.log(this.anim9);
      this.anim9.playSegments([0, 89, true]);
    },
    handleAnimation10: function(anim10) {
      this.anim10 = anim10;
      console.log(this.anim10);
      this.anim10.playSegments([0, 89, true]);
    },

    /**
     *
     * This method provides the change of the question and also keeps track of the answer
     * state onNext
     */
    onNext: function() {
      var next = true;
      this.index2++;
      this.answers = JSON.parse(localStorage.getItem("answers"));
      console.log(this.answers, this.index2);
      if (this.index2 < 10) {
        this.animationSpeed = String(this.answers[this.index2 - 1].answer - 1);
        this.valor = String(this.answers[this.index2 - 1].answer - 1);
        // if the animation variable is 0 the first segment is executed
        if (this.animationSpeed === "0") {
          console.log("0");
          this.anim1.playSegments([0, 89, true]);
          this.anim2.playSegments([0, 89, true]);
          this.anim3.playSegments([0, 89, true]);
          this.anim4.playSegments([0, 89, true]);
          this.anim5.playSegments([0, 89, true]);
          this.anim6.playSegments([0, 89, true]);
          this.anim7.playSegments([0, 89, true]);
          this.anim8.playSegments([0, 89, true]);
          this.anim9.playSegments([0, 89, true]);
          this.anim10.playSegments([0, 89, true]);
        }

        // if the animation variable is 1 the second segment is executed
        if (this.animationSpeed === "1") {
          this.anim1.playSegments([90, 179, true]);
          this.anim2.playSegments([90, 179, true]);
          this.anim3.playSegments([90, 179, true]);
          this.anim4.playSegments([90, 179, true]);
          this.anim5.playSegments([90, 179, true]);
          this.anim6.playSegments([90, 179, true]);
          this.anim7.playSegments([90, 179, true]);
          this.anim8.playSegments([90, 179, true]);
          this.anim9.playSegments([90, 179, true]);
          this.anim10.playSegments([90, 179, true]);
        }
        // if the animation variable is 3 the third segment is executed
        if (this.animationSpeed === "2") {
          this.anim1.playSegments([180, 269, true]);
          this.anim2.playSegments([180, 269, true]);
          this.anim3.playSegments([180, 269, true]);
          this.anim4.playSegments([180, 269, true]);
          this.anim5.playSegments([180, 269, true]);
          this.anim6.playSegments([180, 269, true]);
          this.anim7.playSegments([180, 269, true]);
          this.anim8.playSegments([180, 269, true]);
          this.anim9.playSegments([180, 269, true]);
          this.anim10.playSegments([180, 269, true]);
        }

        // if the animation variable is 3 the four segment is executed
        if (this.animationSpeed === "3") {
          this.anim1.playSegments([270, 359, true]);
          this.anim2.playSegments([270, 359, true]);
          this.anim3.playSegments([270, 359, true]);
          this.anim4.playSegments([270, 359, true]);
          this.anim5.playSegments([270, 359, true]);
          this.anim6.playSegments([270, 359, true]);
          this.anim7.playSegments([270, 359, true]);
          this.anim8.playSegments([270, 359, true]);
          this.anim9.playSegments([270, 359, true]);
          this.anim10.playSegments([270, 359, true]);
        }
      }
      this.$emit("next", next);
    },

    /**
     *
     * This method provides the change of the question
     */
    onPrev: function() {
      var prev = true;
      this.index2--;
      this.answers = JSON.parse(localStorage.getItem("answers"));
      console.log(this.answers, this.index2);
      this.animationSpeed = String(this.answers[this.index2 - 1].answer - 1);
      this.valor = String(this.answers[this.index2 - 1].answer - 1);
      // if the animation variable is 0 the first segment is executed
      if (this.animationSpeed === "0") {
        console.log("0");
        this.anim1.playSegments([0, 89, true]);
        this.anim2.playSegments([0, 89, true]);
        this.anim3.playSegments([0, 89, true]);
        this.anim4.playSegments([0, 89, true]);
        this.anim5.playSegments([0, 89, true]);
        this.anim6.playSegments([0, 89, true]);
        this.anim7.playSegments([0, 89, true]);
        this.anim8.playSegments([0, 89, true]);
        this.anim9.playSegments([0, 89, true]);
        this.anim10.playSegments([0, 89, true]);
      }

      // if the animation variable is 1 the second segment is executed
      if (this.animationSpeed === "1") {
        this.anim1.playSegments([90, 179, true]);
        this.anim2.playSegments([90, 179, true]);
        this.anim3.playSegments([90, 179, true]);
        this.anim4.playSegments([90, 179, true]);
        this.anim5.playSegments([90, 179, true]);
        this.anim6.playSegments([90, 179, true]);
        this.anim7.playSegments([90, 179, true]);
        this.anim8.playSegments([90, 179, true]);
        this.anim9.playSegments([90, 179, true]);
        this.anim10.playSegments([90, 179, true]);
      }
      // if the animation variable is 3 the third segment is executed
      if (this.animationSpeed === "2") {
        this.anim1.playSegments([180, 269, true]);
        this.anim2.playSegments([180, 269, true]);
        this.anim3.playSegments([180, 269, true]);
        this.anim4.playSegments([180, 269, true]);
        this.anim5.playSegments([180, 269, true]);
        this.anim6.playSegments([180, 269, true]);
        this.anim7.playSegments([180, 269, true]);
        this.anim8.playSegments([180, 269, true]);
        this.anim9.playSegments([180, 269, true]);
        this.anim10.playSegments([180, 269, true]);
      }

      // if the animation variable is 3 the four segment is executed
      if (this.animationSpeed === "3") {
        this.anim1.playSegments([270, 359, true]);
        this.anim2.playSegments([270, 359, true]);
        this.anim3.playSegments([270, 359, true]);
        this.anim4.playSegments([270, 359, true]);
        this.anim5.playSegments([270, 359, true]);
        this.anim6.playSegments([270, 359, true]);
        this.anim7.playSegments([270, 359, true]);
        this.anim8.playSegments([270, 359, true]);
        this.anim9.playSegments([270, 359, true]);
        this.anim10.playSegments([270, 359, true]);
      }

      this.$emit("prev", prev);
    },

    /**
     *
     *  Clickable answer choices
     */
    animationChange: function(index) {
      this.animationSpeed = index;
      this.valor = index;
      this.onSpeedChange();
    },

    /**
     *
     * This method is responsible for changing the value of the slider
     */
    onSpeedChange: function() {
      var answer = this.animationSpeed;
      console.log(this.animationSpeed);
      // if the animation variable is 0 the first segment is executed
      if (this.animationSpeed === "0") {
        console.log("0");
        this.anim1.playSegments([0, 89, true]);
        this.anim2.playSegments([0, 89, true]);
        this.anim3.playSegments([0, 89, true]);
        this.anim4.playSegments([0, 89, true]);
        this.anim5.playSegments([0, 89, true]);
        this.anim6.playSegments([0, 89, true]);
        this.anim7.playSegments([0, 89, true]);
        this.anim8.playSegments([0, 89, true]);
        this.anim9.playSegments([0, 89, true]);
        this.anim10.playSegments([0, 89, true]);
      }

      // if the animation variable is 1 the second segment is executed
      if (this.animationSpeed === "1") {
        this.anim1.playSegments([90, 179, true]);
        this.anim2.playSegments([90, 179, true]);
        this.anim3.playSegments([90, 179, true]);
        this.anim4.playSegments([90, 179, true]);
        this.anim5.playSegments([90, 179, true]);
        this.anim6.playSegments([90, 179, true]);
        this.anim7.playSegments([90, 179, true]);
        this.anim8.playSegments([90, 179, true]);
        this.anim9.playSegments([90, 179, true]);
        this.anim10.playSegments([90, 179, true]);
      }
      // if the animation variable is 3 the third segment is executed
      if (this.animationSpeed === "2") {
        this.anim1.playSegments([180, 269, true]);
        this.anim2.playSegments([180, 269, true]);
        this.anim3.playSegments([180, 269, true]);
        this.anim4.playSegments([180, 269, true]);
        this.anim5.playSegments([180, 269, true]);
        this.anim6.playSegments([180, 269, true]);
        this.anim7.playSegments([180, 269, true]);
        this.anim8.playSegments([180, 269, true]);
        this.anim9.playSegments([180, 269, true]);
        this.anim10.playSegments([180, 269, true]);
      }

      // if the animation variable is 3 the four segment is executed
      if (this.animationSpeed === "3") {
        this.anim1.playSegments([270, 359, true]);
        this.anim2.playSegments([270, 359, true]);
        this.anim3.playSegments([270, 359, true]);
        this.anim4.playSegments([270, 359, true]);
        this.anim5.playSegments([270, 359, true]);
        this.anim6.playSegments([270, 359, true]);
        this.anim7.playSegments([270, 359, true]);
        this.anim8.playSegments([270, 359, true]);
        this.anim9.playSegments([270, 359, true]);
        this.anim10.playSegments([270, 359, true]);
      }

      // the answer is issued so that it is stored in the localstore
      this.$emit("answer", answer);
    }
  }
};
</script>
<style scoped>
.pulse:hover {
  color: #0082c4;
  cursor: pointer;
  font-weight: bold;
}

.pulse:visited {
  color: #0082c4;
}

.pulse {
  font-size: 14px;
  font-weight: bold;
}

input[type="range"].mySlider {
  -webkit-appearance: none;
  width: 100%;
  margin: 9.45px 0;
}
input[type="range"].mySlider:focus {
  outline: none;
}

@media screen and (-ms-high-contrast: active),
  screen and (-ms-high-contrast: none) {
  #range-option {
    margin: -20px 0 10px 0 !important;
  }
  input[type="range"].mySlider {
    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }
  input[type="range"].mySlider::-ms-thumb {
    width: 20px !important;
    height: 20px !important;
    border: 0;
    border-radius: 50%;
    background: #004986;
    cursor: pointer;
  }
  input[type="range"].mySlider::-ms-thumb:hover {
    background: #188ccc;
    width: 20px;
    height: 20px;
  }
  input[type="range"].mySlider:active::-ms-thumb {
    background: #188ccc;
    width: 20px;
    height: 20px;
  }

  input[type="range"].mySlider:disabled::-ms-thumb {
    background: #f7f8f9;
    width: 20px;
    height: 20px;
  }

  input[type="range"].mySlider::-ms-track {
    /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
    background: transparent;

    /*leave room for the larger thumb to overflow with a transparent border */
    border-color: transparent;
    border-width: 6px 0;

    /*remove default tick marks*/
    color: transparent;
  }
  input[type="range"].mySlider::-ms-fill-lower {
    background: #188ccc;
    border-radius: 10px;
  }
  input[type="range"].mySlider::-ms-fill-upper {
    background: #188ccc;
    border-radius: 10px;
  }
  input[type="range"].mySlider:focus::-ms-fill-lower {
    background: #188ccc;
  }
  input[type="range"].mySlider:focus::-ms-fill-upper {
    background: #188ccc;
  }
}

input[type="range"].mySlider::-webkit-slider-runnable-track {
  width: 100%;
  height: 7.1px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 127, 214, 0.78),
    0px 0px 1px rgba(0, 127, 214, 0.78);
  background: rgba(0, 112, 188, 0.78);
  border-radius: 0px;
  border: 0.2px solid rgba(0, 127, 214, 0.78);
}
input[type="range"].mySlider::-webkit-slider-thumb {
  box-shadow: 0.9px 0.9px 1px rgba(0, 127, 214, 0.78), 0px 0px 0.9px #00004b;
  border: 1.8px solid rgba(0, 127, 214, 0.78);
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #00426d;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -9.65px;
  transition: 0.3s ease-in-out;
}
input[type="range"].mySlider:focus::-webkit-slider-runnable-track {
  background: rgba(0, 127, 214, 0.78);
}
input[type="range"].mySlider::-moz-range-track {
  width: 100%;
  height: 7.1px;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0, 127, 214, 0.78),
    0px 0px 1px rgba(0, 127, 214, 0.78);
  background: rgba(0, 112, 188, 0.78);
  border-radius: 0px;
  border: 0.2px solid rgba(0, 127, 214, 0.78);
}
input[type="range"].mySlider::-moz-range-thumb {
  box-shadow: 0.9px 0.9px 1px rgba(0, 127, 214, 0.78), 0px 0px 0.9px #00004b;
  border: 1.8px solid rgba(0, 127, 214, 0.78);
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #00426d;
  cursor: pointer;
  transition: 0.3s ease-in-out;
}
/*
input[type="range"].mySlider::-ms-track {
  width: 100%;
  height: 7.1px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}

  input[type="range"].mySlider::-ms-fill-lower {
  background: rgba(0, 97, 163, 0.78);
  border: 0.2px solid rgba(0, 127, 214, 0.78);
  border-radius: 0px;
  box-shadow: 1px 1px 1px rgba(0, 127, 214, 0.78);
}
input[type="range"].mySlider::-ms-fill-upper {
  background: rgba(0, 112, 188, 0.78);
  border: 0.2px solid rgba(0, 127, 214, 0.78);
  border-radius: 0px;
  box-shadow: 1px 1px 1px rgba(0, 127, 214, 0.78),
    0px 0px 1px rgba(0, 127, 214, 0.78);
}
input[type="range"].mySlider::-ms-thumb {
  box-shadow: 0.9px 0.9px 1px rgba(0, 127, 214, 0.78), 0px 0px 0.9px #00004b;
  border: 1.8px solid rgba(0, 127, 214, 0.78);
  height: 26px;
  width: 26px;
  border-radius: 15px;
  background: #42b983;
  cursor: pointer;
  height: 7.1px;
}
input[type="range"].mySlider:focus::-ms-fill-lower {
  background: rgba(0, 112, 188, 0.78);
}
input[type="range"].mySlider:focus::-ms-fill-upper {
  background: rgba(0, 127, 214, 0.78);
}
*/
input[type="range"].mySlider:active::-webkit-slider-thumb {
  transform: scale(1.2);
}
input[type="range"].mySlider:active::-moz-range-thumb {
  transform: scale(1.2);
}
input[type="range"].mySlider:active::-ms-thumb {
  transform: scale(1.2);
}
ul li {
  list-style-type: none;
  display: inline;
}

.btn-primary {
  background-color: #0082c4 !important;
  min-width: 100px;
  margin: 0 10px 10px 10px;
}

#range-option {
  font-size: 14px;
  line-height: 18px;
  margin: 10px 0;
  font-weight: bold;
}

label.choicesMobile {
  font-weight: bold;
}

.left {
  text-align: left;
}
.right {
  text-align: right;
}
/* Media Queries */
@media only screen and (max-width: 600px) {
  .choicesDesktop {
    display: none;
  }
  .choicesMobile,
  #mobile-tics {
    display: block;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .choicesDesktop {
    display: none;
  }
  .choicesMobile,
  #mobile-tics {
    display: block;
  }
}

/* Medium devices (landscape tablets, 768px and up ) */
@media only screen and (min-width: 768px) {
  .choicesDesktop {
    display: block;
  }

  .choicesMobile,
  #mobile-tics {
    display: none;
  }
}

/* Large devices (laptops/desktops, 992px and up ) */
@media only screen and (min-width: 992px) {
  .choicesDesktop {
    display: block;
  }
  .choicesMobile,
  #mobile-tics {
    display: none;
  }
}

/* Extra Large devices (large laptops/desktops, 1200px and up ) */
@media only screen and (min-width: 1200px) {
  .choicesDesktop {
    display: block;
  }
  .choicesMobile,
  #mobile-tics {
    display: none;
  }
}

/*  /*iPhone 6/7/8pluses* /Media Query */
@media only screen and (min-device-width: 411px) and (max-device-width: 736px) and (orientation: portrait) {
  .choicesDesktop {
    display: none !important;
  }
}

input[type="range"].mySlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #004986;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-in-out;
  transition: background 0.15s ease-in-out;
}
input[type="range"].mySlider::-webkit-slider-thumb:hover {
  background: #188ccc;
}
input[type="range"].mySlider:active::-webkit-slider-thumb {
  background: #188ccc;
}

input[type="range"].mySlider:disabled::-webkit-slider-thumb {
  background: #f7f8f9;
}

input[type="range"].mySlider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border: 0;
  border-radius: 50%;
  background: #004986;
  cursor: pointer;
  -webkit-transition: background 0.15s ease-in-out;
  transition: background 0.15s ease-in-out;
}
input[type="range"].mySlider::-moz-range-thumb:hover {
  background: #188ccc;
}
input[type="range"].mySlider:active::-moz-range-thumb {
  background: #188ccc;
}

input[type="range"].mySlider:disabled::-moz-range-thumb {
  background: #f7f8f9;
}
</style>
