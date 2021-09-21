---
layout: default
---

# Ush MicroShell Project

As a project for a class, I needed to create this micro version of a shell to learn more about computer systems, threads, and processes. This project was mainly coded with C.

## What is a shell?

Simply put, a shell is a processor that executes text commands given through the command line by user input or a script. One of its main features is expanding text and symbols to create larger expressions.

## 1st Task: Command Line Arguments
To start the project, I implemented parsing of command line arguments. The shell needed to know how many arguments are given and be able to use them properly in user commands -- like “echo” and “ls” -- and simple program executables such as the printargs in the picture below.
(The printargs program prints all the arguments given in the command line.)

![1st Task](/assests/img/1st_Task.png)

## 2nd Task: Built-in Commands and Symbol Expansion
For the next step of the shell project, I implemented useful commands built into the microshell and the ability to expand given symbols into certain variables or information. For the most part, implementing these were relatively easy except I had some difficulty with fully implementing some built-in commands and symbol expansions like “sstat” and asterisk “*”.

![2nd Task](/assests/img/2nd_Task.png)

## 3rd Task: Script Processing
For this task, I implemented script processing where the microshell could execute a script file with arguments (if any) when starting the shell in the command line with the script and its arguments as arguments for the shell.

![3rd Task](/assests/img/3rd_Task.png)

## 4th Task: Pipelines
For the final task of this project, I had to implement pipelines where the output of one command is used as the input for the next command. With this feature, one can easily chain a list of commands with pipes to achieve a desired output. Personally, this was the hardest part to fully implement due to the nature of coding pipes that involve linking certain ends of the pipes to the next pipe and closing used pipes.

![4th Task](/assests/img/4th_Task.png)

[back](./)
