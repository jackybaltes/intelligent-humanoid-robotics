(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[238],{1234:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/assignment1",function(){return t(5792)}])},5792:function(e,n,t){"use strict";t.r(n);var o=t(5893),s=t(1151);function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",ol:"ol",li:"li",p:"p",img:"img",h3:"h3",ul:"ul",strong:"strong",a:"a"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Marble Game - Assignment 1"}),"\n",(0,o.jsx)(n.h1,{children:"Deadline: 14th November 2022 - 23:59"}),"\n",(0,o.jsx)(n.h2,{children:"Updates"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Deadline was changed to 14th November 2022 - 23:59"}),"\n",(0,o.jsx)(n.li,{children:"The implementation of CMACS have been delayed to the 2nd assignment."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"The goal of this assignment is to demonstrate your ability to control\r\nthe position and orientation of the hip of your leg."}),"\n",(0,o.jsx)(n.p,{children:"You will demonstrate the control using a marble game."}),"\n",(0,o.jsx)(n.h2,{children:"Challenge 1: Open-Loop Control of the Two-Dimensional Marble Game"}),"\n",(0,o.jsx)(n.p,{children:"In this challenge, we will first demonstrate the ability to control the movement\r\nof the hip."}),"\n",(0,o.jsx)(n.p,{children:"After constructing your leg assembly, add a two dimensional maze at the hip\r\nof your robot. The size of the maze should be 11cm by 15cm. The goal is to roll\r\na golf or table tennis ball from the Start position to the Goal position."}),"\n",(0,o.jsx)(n.p,{children:"The walls of your maze should be about 1cm tall. For a greater challenge, you\r\ncan lower the height of the walls, especially the external walls. Then you have\r\nto carefully control the speed of the ball, since it will otherwise jump out of\r\nthe maze."}),"\n",(0,o.jsx)("div",{style:{textAlign:"center",width:"40%"},children:(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"./leg_assembly.svg",alt:"leg"})})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"./maze1.svg",alt:"maze1"})})})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"Possible leg assembly with the maze attached"})}),(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"Two dimensional marble maze"})})]})]})})}),"\n",(0,o.jsx)(n.h3,{children:"Servo Control"}),"\n",(0,o.jsx)(n.p,{children:"First implement a program on the Raspberry PI to demonstrate control\r\nof the four RC servos."}),"\n",(0,o.jsx)(n.p,{children:"Identify the maximum angles and home positions of your servos."}),"\n",(0,o.jsx)(n.p,{children:"Make sure that you keep your leg assembly light, so that you can move the\r\nhip given the RC servos."}),"\n",(0,o.jsx)(n.h3,{children:"Remote Control"}),"\n",(0,o.jsx)(n.p,{children:"Implement an application on the Raspberry PI to control the leg that\r\nyou constructed."}),"\n",(0,o.jsx)(n.p,{children:"Your application should be able to:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"change the angles of each of the four servos"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"control the position and orientation of the hip of your leg"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can use a combination of keyboard, mouse, touchscreen, or joystick to control\r\nyour leg."}),"\n",(0,o.jsx)(n.p,{children:"Use manual control to move the ball from the Start position to the Goal position."}),"\n",(0,o.jsx)(n.h3,{children:"Camera Feedback"}),"\n",(0,o.jsx)(n.p,{children:"Mount the camera of the Raspberry PI so that you can watch your leg assembly\r\nand the ball."}),"\n",(0,o.jsx)(n.p,{children:"Implement a program for the camera. I suggest a simple blob/color detector\r\nto estimate the position of the ball and angle of the hip of your leg."}),"\n",(0,o.jsx)(n.h3,{children:"PID Control"}),"\n",(0,o.jsx)(n.p,{children:"Implement and tune a PID controller to try and balance the ball on the track, so that\r\nit holds its position near the center of the playing field."}),"\n",(0,o.jsx)(n.h2,{children:"Challenge 2: Closed Loop Control of the One-Dimensional Marble Game"}),"\n",(0,o.jsx)(n.p,{children:"In this part of the challenge, we will simplify the maze to a single rail,\r\nwhich runs from the front to the back of your maze."}),"\n",(0,o.jsx)("div",{style:{textAlign:"center",width:"40%"},children:(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsx)("tr",{children:(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"./maze2.svg",alt:"maze2"})})})}),(0,o.jsx)("tr",{children:(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"A maze with a single rail for experiments in feedback control."})})})]})})}),"\n",(0,o.jsx)(n.h2,{children:"Challenge 3: Closed Loop Control of the Two-Dimensional Marble Game"}),"\n",(0,o.jsx)(n.p,{children:"In the third challenge, we extend our work to control the ball to balance\r\non a plane in two dimensions."}),"\n",(0,o.jsx)(n.p,{children:"The maze is empty inside. The Start is at the top left and the goal is center of the\r\nplaying field."}),"\n",(0,o.jsx)(n.h3,{children:"Camera"}),"\n",(0,o.jsx)(n.p,{children:"Modify your camera setup and vision application to estimate the position on the\r\ntop of the plane."}),"\n",(0,o.jsx)(n.h3,{children:"PID Control"}),"\n",(0,o.jsx)(n.p,{children:"Add and tune an additional PID controller so that you can balance on the plane."}),"\n",(0,o.jsx)("div",{style:{textAlign:"center",width:"40%"},children:(0,o.jsx)("table",{children:(0,o.jsxs)("tbody",{children:[(0,o.jsx)("tr",{children:(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"./maze3.svg",alt:"maze3"})})})}),(0,o.jsx)("tr",{children:(0,o.jsx)("td",{children:(0,o.jsx)(n.p,{children:"A maze with a single rail for experiments in feedback control."})})})]})})}),"\n",(0,o.jsx)(n.h2,{children:"Honesty declaration"}),"\n",(0,o.jsx)(n.p,{children:"By submitting an assignment, you claim that your submission is only your own work.\r\nThis means that you have developed the design, implemented the code, run the experiments,\r\nand all other work necessary to complete the assignment by yourself."}),"\n",(0,o.jsxs)(n.p,{children:["If you discussed your work with other students or used sources on the Internet, then you ",(0,o.jsx)(n.strong,{children:"must"}),"\r\nsay so clearly at the beginning of the assignment."]}),"\n",(0,o.jsx)(n.p,{children:"You can discuss parts of the assignment with others, but these discussions must be limited\r\nto sharing ideas on a whiteboard or notepad. If you exchange code/programs/designs or\r\nexchange any material via the Internet, then you must say so in your honesty declaration."}),"\n",(0,o.jsxs)(n.p,{children:["Fill out the ",(0,o.jsx)(n.a,{href:"https://docs.google.com/document/d/1Z9FyOFt--OL_cqse55b-CifBgPDfFZi2L6-sUQBvZ4I/edit?usp=sharing",children:"Honesty Declaration"}),"\r\nand add any external sources that you used during the assignment."]}),"\n",(0,o.jsx)(n.h2,{children:"Submissions"}),"\n",(0,o.jsx)(n.p,{children:"This assignment must be done in groups of maximal two students."}),"\n",(0,o.jsx)(n.p,{children:"If you use information or code that is not your own (e.g., sample code from the Internet,\r\nideas for new features from a classmate, etc.), then you must specify this in your assignment\r\nwrite-up. Failure to disclose that you used external sources will lead to disciplinary actions."}),"\n",(0,o.jsx)(n.p,{children:"To hand in your assignment:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Create a directory to hold all of your data. The directory name should be <student id>_a<number>,\r\nwhere <student id> is your student id and <number> is the number of the assignment,"}),"\n",(0,o.jsx)(n.li,{children:"Create a directory source inside of the directory <student id>_a<number>."}),"\n",(0,o.jsx)(n.li,{children:"Put the source code, which may contain of multiple files, for your assignment’s solution\r\ninto the directory source."}),"\n",(0,o.jsx)(n.li,{children:"Your prg\\ram must compile by just running the command make in the source directory or a\r\nsimilar step for your programming language of choice."}),"\n",(0,o.jsx)(n.li,{children:"Write a README file to explain anything you feel is necessary or important about your\r\nsubmission. This may include special features/bugs of your program. Describe what parts\r\nof the assignment you implemented. It is in your interest to simplify the job of the marker."}),"\n"]})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(_createMdxContent,e)})):_createMdxContent(e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1234)}),_N_E=e.O()}]);