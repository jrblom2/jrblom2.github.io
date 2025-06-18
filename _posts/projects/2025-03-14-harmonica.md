---
layout: project
permalink: /:title/
category: projects

meta:
  keywords: "C++, Mechatronics"

project:
  title: "The Harmonizer"
  type: "C++"
  url: "https://github.com/NU-MECH-ENG-495/project-jrblom2"
  logo: "/assets/images/projects/harmonica/Calibration.gif"
  tech: "C++, Arduino, CAD"
  year: "2025"
  order: 5

videos:
  - video:
    url: "/assets/videos/projects/harmonica/taps.mp4"
  - video:
    url: "/assets/videos/projects/harmonica/second.mp4"

---
<span class="h2">Project</span>
<p> Learning to play the harmonica can be extremely difficult. With the blowing and the drawing and the hands all at once, it can be just too much. This midi file harmonica parser aims to alleviate some of these issues by first parsing a piece of music in midi format and then giving you the instructions for what to play. It goes a step further, and even moves the harmonica for you in the appropriate manner meaning all you have to do to create beautiful music is either blow or draw as instructed.
</p>
<span class="h2">Method</span>
<p> A given piece of music is first parsed into the application from midi, files with one track work best for harmonica but multi-track pieces can be played one track at a time. Once parsed, the midi number for a note is mapped to the appropriate action on a C Major harmonica. This command is passed to the arduino controlling a stepper motor and either BLOW or DRAW is displayed to the user along with a note duration. </p>
<span class="h2"></span>
<table style="border-collapse: collapse; font-size: 15px;">
  <thead>
    <tr>
      <th style="border: 1px solid #000; padding: 2px;">Hole</th>
      <th style="border: 1px solid #000; padding: 2px;">Blow</th>
      <th style="border: 1px solid #000; padding: 2px;">MIDI</th>
      <th style="border: 1px solid #000; padding: 2px;">Draw</th>
      <th style="border: 1px solid #000; padding: 2px;">MIDI</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border: 1px solid #000; padding: 2px;">1</td><td style="border: 1px solid #000; padding: 2px;">C4</td><td style="border: 1px solid #000; padding: 2px;">60</td><td style="border: 1px solid #000; padding: 2px;">D4</td><td style="border: 1px solid #000; padding: 2px;">62</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">2</td><td style="border: 1px solid #000; padding: 2px;">E4</td><td style="border: 1px solid #000; padding: 2px;">64</td><td style="border: 1px solid #000; padding: 2px;">G4</td><td style="border: 1px solid #000; padding: 2px;">67</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">3</td><td style="border: 1px solid #000; padding: 2px;">G4</td><td style="border: 1px solid #000; padding: 2px;">67</td><td style="border: 1px solid #000; padding: 2px;">B4</td><td style="border: 1px solid #000; padding: 2px;">71</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">4</td><td style="border: 1px solid #000; padding: 2px;">C5</td><td style="border: 1px solid #000; padding: 2px;">72</td><td style="border: 1px solid #000; padding: 2px;">D5</td><td style="border: 1px solid #000; padding: 2px;">74</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">5</td><td style="border: 1px solid #000; padding: 2px;">E5</td><td style="border: 1px solid #000; padding: 2px;">76</td><td style="border: 1px solid #000; padding: 2px;">F5</td><td style="border: 1px solid #000; padding: 2px;">77</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">6</td><td style="border: 1px solid #000; padding: 2px;">G5</td><td style="border: 1px solid #000; padding: 2px;">79</td><td style="border: 1px solid #000; padding: 2px;">A5</td><td style="border: 1px solid #000; padding: 2px;">81</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">7</td><td style="border: 1px solid #000; padding: 2px;">C6</td><td style="border: 1px solid #000; padding: 2px;">84</td><td style="border: 1px solid #000; padding: 2px;">B5</td><td style="border: 1px solid #000; padding: 2px;">83</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">8</td><td style="border: 1px solid #000; padding: 2px;">E6</td><td style="border: 1px solid #000; padding: 2px;">88</td><td style="border: 1px solid #000; padding: 2px;">D6</td><td style="border: 1px solid #000; padding: 2px;">86</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">9</td><td style="border: 1px solid #000; padding: 2px;">G6</td><td style="border: 1px solid #000; padding: 2px;">91</td><td style="border: 1px solid #000; padding: 2px;">F6</td><td style="border: 1px solid #000; padding: 2px;">89</td></tr>
    <tr><td style="border: 1px solid #000; padding: 2px;">10</td><td style="border: 1px solid #000; padding: 2px;">C7</td><td style="border: 1px solid #000; padding: 2px;">96</td><td style="border: 1px solid #000; padding: 2px;">A6</td><td style="border: 1px solid #000; padding: 2px;">93</td></tr>
  </tbody>
</table>

<span class="h2"></span>
<p>
Once the arduino receives a movement command, it commands the stepper motor to move the corresponding number of steps based on the current position. The hardware setup uses a rack and pinion design for the harmonica mount and a TMC2209 motor controller for the stepper motor.
</p>