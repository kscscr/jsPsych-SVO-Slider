var jsPsychHtmlSliderSVOMulti = (function (jspsych) {
  'use strict';

  var _package = {
    name: "@jspsych/plugin-html-slider-svo-multi",
    version: "2.0.0",
    description: "a jspsych plugin for free response survey questions",
    type: "module",
    main: "dist/index.cjs",
    exports: {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    typings: "dist/index.d.ts",
    unpkg: "dist/index.browser.min.js",
    files: [
      "src",
      "dist"
    ],
    source: "src/index.ts",
    scripts: {
      test: "jest",
      "test:watch": "npm test -- --watch",
      tsc: "tsc",
      build: "rollup --config",
      "build:watch": "npm run build -- --watch"
    },
    repository: {
      type: "git",
      url: "git+https://github.com/jspsych/jsPsych.git",
      directory: "packages/plugin-html-slider-svo-multi"
    },
    author: "Josh de Leeuw",
    license: "MIT",
    bugs: {
      url: "https://github.com/jspsych/jsPsych/issues"
    },
    homepage: "https://www.jspsych.org/latest/plugins/html-slider-response",
    peerDependencies: {
      jspsych: ">=7.1.0"
    },
    devDependencies: {
      "@jspsych/config": "^3.0.0",
      "@jspsych/test-utils": "^1.2.0"
    }
  };

  const info = {
    name: "html-slider-svo-multi",
    version: _package.version,
    parameters: {
      stimulus_upper: {
        type: jspsych.ParameterType.HTML_STRING,
        default: '85, 85, 85, 85, 85, 85, 85, 85, 85'
      },
      stimulus_lower: {
        type: jspsych.ParameterType.HTML_STRING,
        default: '85, 85, 85, 85, 85, 85, 85, 85, 85'
      },
      questions: {
        type: jspsych.ParameterType.COMPLEX,
        array: true,
        nested: {
          stimulus_upper: {
            type: jspsych.ParameterType.HTML_STRING,
            default: '85, 85, 85, 85, 85, 85, 85, 85, 85'
          },
          stimulus_lower: {
            type: jspsych.ParameterType.HTML_STRING,
            array: true,
            default: '85, 85, 85, 85, 85, 85, 85, 85, 85'
          }
        }
      },
      label_upper: {
        type: jspsych.ParameterType.HTML_STRING,
        default: "You</br>receive",
        array: false
      },
      label_lower: {
        type: jspsych.ParameterType.HTML_STRING,
        default: "Other</br>receive",
        array: false
      },
      slider_width: {
        type: jspsych.ParameterType.INT,
        default: 500
      },
      // box_width: {
      //   type: jspsych.ParameterType.INT,
      //   default: 530
      // },
      button_label: {
        type: jspsych.ParameterType.STRING,
        default: "Continue",
        array: false
      },
      require_movement: {
        type: jspsych.ParameterType.BOOL,
        default: false
      },
      prompt: {
        type: jspsych.ParameterType.HTML_STRING,
        default: null
      },
      stimulus_duration: {
        type: jspsych.ParameterType.INT,
        default: null
      },
      trial_duration: {
        type: jspsych.ParameterType.INT,
        default: null
      },
      response_ends_trial: {
        type: jspsych.ParameterType.BOOL,
        default: true
      }
    },
    data: {
      rt: {
        type: jspsych.ParameterType.INT
      },
      response: {
        type: jspsych.ParameterType.INT
      },
      stimulus: {
        type: jspsych.ParameterType.HTML_STRING
      },
      slider_start: {
        type: jspsych.ParameterType.INT
      }
    }
  };
  class HtmlSliderResponsePlugin {
    constructor(jsPsych) {
      this.jsPsych = jsPsych;
    }
    static info = info;

    trial(display_element, trial) {
      var half_thumb_width = 7.5;
      // var tmp1 = '85, 85, 85, 85, 85, 85, 85, 85, 85';
      var tmp_ary1 = trial.stimulus_upper.split(',');
      // var tmp2 = '85, 76, 68, 59, 50, 41, 33, 24, 15';
      var tmp_ary2 = trial.stimulus_lower.split(',');
      
      var html = '<div id="jspsych-html-slider-response-wrapper" style="margin: 100px 0px;';
      html += 'width:' + trial.slider_width + 'px; ">';
      if (trial.prompt !== null) {
        html +=  '<div style="text-align: start";>' + trial.prompt + '</div>';
      }

      
      for (var i = 0; i < trial.questions.length; i++) {
        // var question = trial.questions[i];
        var tmp_ary1 = trial.questions[i].stimulus_upper;
        var tmp_ary2 = trial.questions[i].stimulus_lower;

        html += '<div id="jspsych-html-slider-response-stimulus">';
        html += '<div class="container">'
        html += '<div class="number-grid"> <div></div> <!-- ラベルのスペースを空ける --> <div class="number">1</div> <div class="number">2</div> <div class="number">3</div> <div class="number">4</div> <div class="number">5</div> <div class="number">6</div> <div class="number">7</div> <div class="number">8</div> <div class="number">9</div> </div>';
        html += '<div class="grid"><div class="label">'+ trial.label_upper +'</div> <div class="box">'+ tmp_ary1[0] +'</div> <div class="box">'+ tmp_ary1[1] +'</div> <div class="box">'+ tmp_ary1[2] +'</div> <div class="box">'+ tmp_ary1[3] +'</div> <div class="box">'+ tmp_ary1[4] +'</div> <div class="box">'+ tmp_ary1[5] +'</div> <div class="box">'+ tmp_ary1[6] +'</div> <div class="box">'+ tmp_ary1[7] +'</div> <div class="box">'+ tmp_ary1[8] +'</div></div>'
        html += '<div class="grid"><div></div><div class="slider-container"> <span class="slider-value" id="sliderValue'+ i +'">5</span>';
        html += '<input type="range" id="jspsych-html-slider-response-response-Q' + i + '" class="slider jspsych-slider value="'+ 5 + '" min="'+ 1 + '" max="'  + 9 +  '" step="' + 1 +'"></input> </div></div>';
        html += '<div class="grid"><div class="label">'+ trial.label_lower +'</div> <div class="box bottom-box">'+ tmp_ary2[0] +'</div> <div class="box bottom-box">'+ tmp_ary2[1] +'</div> <div class="box bottom-box">'+ tmp_ary2[2] +'</div> <div class="box bottom-box">'+ tmp_ary2[3] +'</div> <div class="box bottom-box">'+ tmp_ary2[4] +'</div> <div class="box bottom-box">'+ tmp_ary2[5] +'</div> <div class="box bottom-box">'+ tmp_ary2[6] +'</div> <div class="box bottom-box">'+ tmp_ary2[7] +'</div> <div class="box bottom-box">'+ tmp_ary2[8] +'</div></div>'
        html += "</div>"; // container
        html += "</div>"; //stimulus
        html += '<hr style="margin-bottom:1.5em; width:'+  trial.slider_width + 'px;"></hr>'
      }



      html += "</div>"; //wrapper

      html += '<button id="jspsych-html-slider-response-next" class="jspsych-btn" ' + (trial.require_movement ? "disabled" : "") + ">" + trial.button_label + "</button>";
      display_element.innerHTML = html;
      var response = {
        rt: null,
        response: null
      };
      
      // require movement check
      if (trial.require_movement) {
        var query_count = 0;
        const check_query_count = () => {
          query_count += 1;
          // console.log(trial.questions.length);
          console.log(query_count);
          if (query_count == trial.questions.length){
            enable_button()
          }
        };
        const enable_button = () => {
          display_element.querySelector(
            "#jspsych-html-slider-response-next"
          ).disabled = false;
        };
        
        const elements1 = document.querySelectorAll('[id^="jspsych-html-slider-response-response-Q"]');
        const sliderIds = Array.from(elements1).map(elements1 => elements1.id);

        // sliderIds.forEach(sliderId => {
        //   const slider = display_element.querySelector(`#${sliderId}`);
      
        //   if (slider) { 
        //       slider.addEventListener("mousedown", check_query_count, { once: true });
        //       slider.addEventListener("touchstart", check_query_count, { once: true });
        //       slider.addEventListener("change", check_query_count, { once: true });
        //   } else {
        //       console.warn(`Slider with ID ${sliderId} not found.`);
        //   }
        // });

        sliderIds.forEach(sliderId => {
          const slider = display_element.querySelector(`#${sliderId}`);
      
          if (slider) {
            const handleEventOnce = (event) => {
              check_query_count();
              // Remove all event listeners after the first event is triggered
              slider.removeEventListener("mousedown", handleEventOnce);
              slider.removeEventListener("touchstart", handleEventOnce);
              slider.removeEventListener("change", handleEventOnce);
            };
      
            // Attach all listeners to the same handler
            slider.addEventListener("mousedown", handleEventOnce);
            slider.addEventListener("touchstart", handleEventOnce);
            slider.addEventListener("change", handleEventOnce);
          } else {
            console.warn(`Slider with ID ${sliderId} not found.`);
          }
        });


      }

      const end_trial = () => {
        var trialdata = {
          rt: response.rt,
          stimulus: trial.stimulus,
          slider_start: trial.slider_start,
          response: response.response
        };
        this.jsPsych.finishTrial(trialdata);
      };
      
      // From here（slider number option）スライダーの数値を監視するコード
      const elements1 = document.querySelectorAll('[id^="jspsych-html-slider-response-response-Q"]');
      const sliderIds = Array.from(elements1).map(elements1 => elements1.id);
      const elements2 = document.querySelectorAll('[id^="sliderValue"]');
      const sliderValueIds = Array.from(elements2).map(elements2 => elements2.id);

      sliderIds.forEach((sliderId, index) => {
        const slider = document.getElementById(sliderId);
        const sliderValue = document.getElementById(sliderValueIds[index]);

        // initial value
        updateSliderValuePosition(slider, sliderValue, slider.value);

        slider.addEventListener('input', function() {
            sliderValue.textContent = this.value;
            updateSliderValuePosition(this, sliderValue, this.value);
        });

        // windows resize value
        window.addEventListener('resize', function() {
            updateSliderValuePosition(slider, sliderValue, slider.value);
        });
      });

      // 値表示の位置を更新する関数
      function updateSliderValuePosition(slider, sliderValue, value) {
        const sliderWidth = slider.offsetWidth;
        const min = parseInt(slider.min);
        const max = parseInt(slider.max);
        const percentage = (value - min) / (max - min);
        const valuePosition = percentage * sliderWidth;

        // 調整用
        sliderValue.style.left = `calc(${percentage * 100}% - 10px)`;
      }
      // here

      display_element.querySelector("#jspsych-html-slider-response-next").addEventListener("click", () => {
        var endTime = performance.now();
        response.rt = Math.round(endTime - startTime);

        // get response
        var choice_data = display_element.querySelectorAll(".jspsych-slider");
        choice_data = Array.from(choice_data).map(choice_data => choice_data.value);
        response.response = choice_data;

        if (trial.response_ends_trial) {
          end_trial();
        } else {
          display_element.querySelector(
            "#jspsych-html-slider-response-next"
          ).disabled = true;
        }
      });
      if (trial.stimulus_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(() => {
          display_element.querySelector(
            "#jspsych-html-slider-response-stimulus"
          ).style.visibility = "hidden";
        }, trial.stimulus_duration);
      }
      if (trial.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
      }
      var startTime = performance.now();
    }




    simulate(trial, simulation_mode, simulation_options, load_callback) {
      if (simulation_mode == "data-only") {
        load_callback();
        this.simulate_data_only(trial, simulation_options);
      }
      if (simulation_mode == "visual") {
        this.simulate_visual(trial, simulation_options, load_callback);
      }
    }
    create_simulation_data(trial, simulation_options) {
      const default_data = {
        stimulus: trial.stimulus,
        slider_start: trial.slider_start,
        response: this.jsPsych.randomization.randomInt(trial.min, trial.max),
        rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true)
      };
      const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
      this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
      return data;
    }
    simulate_data_only(trial, simulation_options) {
      const data = this.create_simulation_data(trial, simulation_options);
      this.jsPsych.finishTrial(data);
    }
    simulate_visual(trial, simulation_options, load_callback) {
      const data = this.create_simulation_data(trial, simulation_options);
      const display_element = this.jsPsych.getDisplayElement();
      this.trial(display_element, trial);
      load_callback();
      if (data.rt !== null) {
        const el = display_element.querySelector("input[type='range']");
        setTimeout(() => {
          this.jsPsych.pluginAPI.clickTarget(el);
          el.valueAsNumber = data.response;
        }, data.rt / 2);
        this.jsPsych.pluginAPI.clickTarget(display_element.querySelector("button"), data.rt);
      }
    }
  }

  return HtmlSliderResponsePlugin;

})(jsPsychModule);

