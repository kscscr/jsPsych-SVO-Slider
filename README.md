# jsPsych Plugin for SVO Slider Measure (Murphy et al., 2011)

日本語版は[こちら](https://github.com/kscscr/jsPsych-SVO-Slider/blob/main/README_ja.md)

## About this program
The "plugin-html-slider-svo-multi.js" is a plugin for implementing the SVO Slider Measure (Murphy et al., 2011) in jsPsych. This program was developed based on the plugin-html-slider-response.js.

### Demo
[https://experiment.kscscr.com/Demo/SVO/jspsych-html-slider-SVO-Multi.html](https://experiment.kscscr.com/Demo/SVO/jspsych-html-slider-SVO-Multi.html)

### Usage Example
![SVO Slider Experiment](pic/image_svo.png "SVO Slider Experiment")
As shown in the image, participants can respond to the SVO Slider using an actual slider.

![SVO Slider Result](pic/image_result.png "SVO Slider Result")
The response data is stored in an array format under response.

## How to Use
### File Placement
Place the following two files in the "dist" folder:
- Plugin: plugin-html-slider-svo-multi.js
- CSS: svo.css

## How to Run the Program
Add the following lines to the <head> tag of your HTML file:

For example
```
<script src="dist/plugin-html-slider-svo-multi.js"></script>
<link rel="stylesheet" href="dist/svo.css">
```

Experiment Procedure
- questions: Assign arrays of 9 elements each to stimulus_upper and stimulus_lower.
- require_movement: Ensures that participants must move the slider before proceeding to the next screen.
- prompt: The question text to display.
- slider_width: Adjustable up to a maximum of 500px.
- label_upper / label_lower: Labels for the top and bottom of the slider.

Example configuration:
```
var trial = {
      type: jsPsychHtmlSliderSVOMulti,
      questions: [
        {
          stimulus_upper: [85, 85, 85, 85, 85, 85, 85, 85, 85], 
          stimulus_lower: [85, 76, 68, 59, 50, 41, 33, 24, 15]
        }, 
        {
          stimulus_upper: [85, 87, 89, 91, 93, 94, 96, 98, 100], 
          stimulus_lower: [15, 19, 24, 28, 33, 37, 41, 46, 50]
        },
        {
          stimulus_upper: [50, 54, 59, 63, 68, 72, 76, 81, 85], 
          stimulus_lower: [100, 98, 96, 94, 93, 91, 89, 87, 85]
        }, 

        {
          stimulus_upper: [50, 54, 59, 63, 68, 72, 76, 81, 85], 
          stimulus_lower: [100, 89, 79, 68, 58, 47, 36, 26, 15]
        },
        {
          stimulus_upper: [100, 94, 88, 81, 75, 69, 63, 56, 50], 
          stimulus_lower: [50, 56, 63, 69, 75, 81, 88, 94, 100]
        }, 
        {
          stimulus_upper: [100, 98, 96, 94, 93, 91, 89, 87, 85], 
          stimulus_lower: [50, 54, 59, 63, 68, 72, 76, 81, 85]
        },
      ],
      require_movement: true,
      label_upper: "You</br>receive", 
      label_lower: "Other</br>receive", 
      slider_width: 500,
      prompt: '<p>You will allocate resources between yourself and others. </br>Please select the option that best matches your preference.</p>'
};
```

- questions: The points displayed at the top and bottom. Create stimulus_upper and stimulus_lower and provide an array of 9 numbers.
- require_movement: Ensures the "Next" button cannot be clicked unless the slider has been moved at least once.
- label_upper (or label_lower): The labels displayed at the top (or bottom).
- button_label: Allows customization of the text on the "Next" button.
- prompt: The instructional text displayed at the very top.

Response data will be saved in an array format, similar to plugins like survey-multi-choice.

## Disclaimer and Contact Information
We are not responsible for any damages or disadvantages arising from the use of this program. Please use it at your own risk.

If you discover any bugs, we would appreciate it if you could report them using the contact details below

- X(Twitter): [@kscscr](https://x.com/kscscr)
- Email：ks1760osakasg[at]gmail.com

## Citation
Murphy, R. O., Ackermann, K. A., & Handgraaf, M. J. (2011). Measuring social value orientation. Judgment and Decision making, 6(8), 771-781.

## Lisence

The MIT License (MIT)

Copyright (c) 2014-2022 Joshua R. de Leeuw

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
