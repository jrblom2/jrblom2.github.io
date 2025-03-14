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
<p>
Once the arduino receives a movement command, it commands the stepper motor to move the corresponding number of steps based on the current position. The hardware setup uses a rack and pinion design for the harmonica mount and a TMC2209 motor controller for the stepper motor.
</p>