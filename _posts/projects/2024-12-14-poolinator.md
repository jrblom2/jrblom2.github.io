---
layout: project
permalink: /:title/
category: projects

meta:
  keywords: "Motion Planning, Control"

project:
  title: "The Poolinator"
  type: "ROS2"
  url: "https://github.com/ME495-EmbeddedSystems/finalproject-jrblom2"
  logo: "/assets/images/projects/poolinator/SuperCutSquare.gif"
  tech: "ROS2, Python, MoveIt, OpenCV"
  year: "2024"

images:
  - image:
    url: "/assets/images/projects/poolinator/Equipment.jpg"
    alt: "Cues, balls, and table used for the poolinator"
  - image:
    url: "/assets/images/projects/poolinator/TeamPhoto.jpg"
    alt: "A great team"

autovideos:
  - video:
    url: "/assets/videos/projects/poolinator/PoolSuperCut.mp4"

videos:
  - video:
    url: "/assets/videos/projects/poolinator/SideBySide.mp4"

---
<span class="h2">Project</span>
<p> The goal of this project was to use a Franka Emika robot arm to play a simplified version of pool. Our core goal was to have the robot identify the location of the red cue ball, the target blue balls, and the pool table. Then it would make intelligent shots until all target balls were pocketed. Once a game was over, it would sink the cue ball in a target pocket and return to its startup position.
</p>
<span class="h2">Method</span>
<p> On startup, we use an april tag attached to the end effector of the robot arm to orient the camera relative to the robot. Once this is done we use another tag attached to the pool table to find the locations of the pockets, and an Intel RealSense D435 camera to find the location of all the balls using classic computer vision. </p>
<span class="h2"></span>
<p>
At this point, the game begins and the robot calculates a shot based on the angle between the cue ball, a target ball, and a pocket within 45 degrees beyond it. One of the biggest challenges in this project was computing the appropriate offsets and orientations to command to the robot for a given shot. Locating the balls with enough accuracy to make precise shots was also more difficult than expected.  If at any point the cue ball is pocketed, the robot will ask for it to be reset before continuing.
</p>
<span class="h2">Role</span>
<p> I was primarily responsible for setting up the model of all the items in the task space relative to the robot arm. I also designed the motion plans for striking the cue ball, as well as wrote the control loop that would play through an entire game.
</p>
<span class="h2">Amazing Group Members</span>
<p> An Nguyen, Caroline Terryn, Catherine Maglione, Logan Boswell
</p>