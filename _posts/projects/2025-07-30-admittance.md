---
layout: project
permalink: /:title/
category: projects

meta:
  keywords: "Human Interaction, Control"

project:
  title: "Franka Emika Admittance Control"
  type: "Controls"
  url: "https://github.com/jrblom2/Franka-Emika-Admittance-Control"
  logo: "/assets/images/projects/admittance/shakin.gif"
  tech: "Controls, C++, Libfranka, Dynamics"
  year: "2025"
  order: 1

autovideos:
  - video:
    url: "/assets/videos/projects/admittance/light.mp4"

videos:
  - video:
    url: "/assets/videos/projects/admittance/fixed.mp4"

images:
  - image:
    url: "/assets/images/projects/admittance/admittance_controller.drawio.svg"
    alt: "System Diagram"

---
<span class="h2">Project</span>
<p> In systems where a human works closely with a robot, enabling the robot to respond to user input—rather than following fixed trajectories—can be a major advantage. Admittance control is one approach to this. Unlike impedance control, which allows physical movement of the robot, admittance control senses user-applied force and converts it into motion commands. Though the theory is well understood, real-world implementation (here on a Franka Emika Research Arm) involves nearly an endless amount of nuance
</p>
<span class="h2">Hardware</span>
<p> A Franka Emika robotic arm is used with an Axia80-M8 force/torque sensor mounted at the end-effector. A handle is attached to the sensor to allow user interaction. The sensor data is passed through a low-pass filter to reduce noise.  </p>
<img src="/assets/images/projects/admittance/sensor.jpg" alt="System Diagram">
<span class="h2">Method</span>
<p> The force/torque sensor provides the primary input. After compensating for gravity and transforming the measured wrench into the robot’s end-effector frame, this signal is passed to a virtual dynamics system.
</p>

<span class="h2"></span>
<p>
The system simulates a mass-damper model, using user-defined virtual mass and damping values to compute desired acceleration based on the input force. This accounts for how much the robot should move per Newton of input force.
</p>
<span class="h2"></span>
<p>
The resulting 6-DOF end-effector accelerations (X, Y, Z, Roll, Pitch, Yaw) are converted to joint accelerations via a weighted pseudoinverse of the robot’s Jacobian. These are then used in inverse dynamics to compute the required joint torques, which are applied as control commands. </p>