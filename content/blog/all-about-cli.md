---
title: "All About CLI"
date: 2022-12-18T01:28:38+05:30
description: "What is a Command Line Interface? What does shell and the means?"
draft: false
tags: ["tech", "programming", "terminal"]
---

This article will be on "Command Line Interface," (CLI in short) aka the black
box hackers type into using blue or green text in movies. Terminal, console and
command prompt are other common words too.

If you think there's no reason for you to learn about CLI in 2022 because now
you have glowing user interfaces, trust me, you're wrong, you'll only be a
soydev, a sarcasm generator for the programming community. 

So, let's not be soydevs and learn about CLI.

<div class="hr"></div>

As any other machine, computers are made to automate things humans do
manually. When other machines automate hard labor, computers automate soft
tasks like computing and decision making.

Most machines out there have some sort of controls for them, a mechanism to
control how the machine works.  Cars have pedals, trains have levers and bulbs
have switches. Computers too have mechanisms to let the user control it. Talking
to your phone is one way, but the most prominent mediums of instructing a
computer are CLI and GUI. 

GUI, aka the Graphical User Interface is what everyone uses to instruct
computers. User click, scroll and type on graphical items like buttons, icons
and text boxes etc to instruct the computer.

Now comes the fun part, the CLI. User instruct the computer using CLI by typing
exactly what they want. Computer should know what the user typed. That
means, user should type only the "commands" the computer know. Any other
nonsense text will be thrown away.

<div class="hr"></div>

![Teletype Model 33](/img/teletype.jpg)

What you saw above is called a teletype(aka, a TTY) [model 33]. This is how
computers output the information before screens and monitors were invented. The
computer is connected to this thing using wires. When the computer wants to tell
something to the user, it send the message to this teletype(TTY).  Then the
teletype prints that message on paper. When the user wants to send a message (or
instruction) to the computer, user type it on the keyboard of that TTY.  Then
the TTY transmits it to the computer.

For example, imagine the user wants to log into their user account. User types
the relevant command for login on the keyboard. Then the computer prints a
message like "Enter the password>" on paper via the TTY. User responds back,
typing keys on the TTY. Instructing computer in text, using commands and getting
responses back in text. **That is the command line interface.**

That's how people did computing several decades ago. 

Now, note this well because we need this fact later. In earlier days, only the
big mainframe computers were used. No personal computers. Teletype is just the
input/output device. Mainframe is the computer. It's a big computer. Companies
only had one mainframe, but many users used it by having multiple teletypes
connected to the same mainframe.  So the TTY is like an end point to the
mainframe. **A terminal** to the mainframe. Calling it a terminal makes sense
right?

<div class="hr"></div>

Now, back to the modern times. Here's a modern terminal.

![Bash terminal on a fedora 36](/img/terminal-modern.jpg)

But that terminal looks nothing like the previous model 33 teletype terminal.
So why it is called a terminal? Well, even though we call it a
terminal for our ease, that piece of software is not a terminal, but a
**"terminal emulator"**. Why it's called a "terminal emulator"? Because it
emulates the old "terminal." Most modern terminal emulator software emulates the
old DEC VT100 terminal.

![DEC VT100 terminal](/img/VT100-terminal.jpg)

Above image is a **DEC VT100** terminal. It is what the most modern terminal
emulator software emulates. It does not print computer output on paper as in
above Model 33 teletype. Instead, it displays the output in the monitor screen.
Note that it still is not a full computer, it's just the input/output device.
The difference from model 33 TTY is that it replaced paper printer with a
monitor. Therefore, teletypes like VT100 is known as **Video Teletypes**.

TTY is not capable of processing data. It's not the computer, it's just the
input/output device.  It should be connected to a computer and all computations
and data processing is done by that computer.

Modern terminals emulate old TTYs. So obviously, terminal emulator software
is not capable of doing any calculations and data processing. So what is 
repsonsible for the computational part in modern terminal emulators? It is the 
**"Shell"**.

A shell is a piece of software that is responsible for understanding the input
user enters into the terminal and executes the task user asked for. When user
enters something into the terminal emulator, terminal emulator sends that input to
the shell. Then shell processes that input data and sends a sensible response back
to the terminal. Terminal then displays it to the user. 

Generally, user enters commands to the terminal. Terminal sends them to the
shell.  Shell then executes the command. While the command is executing, that
particular command gets the full control of the terminal. Command can output
text to the terminal and can get input from the terminal. Once the command is
executed, shell takes back the control of the terminal again and waits for another
command.  If the user enters a command that is not existing in the computer,
shell will inform that the command does not exist. 

Here's an example, a terminal running python shell.

![Python shell](/img/python-shell.png)

In above example, the black background and white color text is created by the 
terminal emulator software. Terminal emulator sends whatever I typed to the
python shell.  In this example, the text `print("Hello world")` is the input I
entered to the terminal.  Terminal sent it to the python shell. Then the python
shell executed that input and provided a sensible output. In this case, the text
`"Hello world"`.

Note: Even though I used python shell for above example, python is a programming 
language. So instead of running commands, user have to enter python code to the
terminal when using python shell. Therefore, python shell is not suitable for 
day to day terminal usage. I used it above just as an example.

There are many famous shell programs being `zsh` and `bash` the most famous. 
`bash` shell is the default shell in most linux operating systems and old mac
versions. `zsh` is the default shell in Mac OS. Some other popular shells are 
listed below.

+ Bash
+ Zsh
+ csh (C Shell)
+ ksh (Korn Shell)
+ Fish shell

In windows however, things are a bit different. `cmd.exe` the windows command
prompt acts as both terminal emulator and also the shell.

<div class="hr"></div>

Now that we know what a terminal and a shell means, let's look into "commands."

To use a command line interface properly, user should enter commands to the
terminal.  These commands must be valid commands. If not, the shell will greet
the user with an error message like "command not found." 

These commands are nothing but programs installed in the computer. Entering a
command to the terminal is same as double clicking and opening a software in a
GUI environment. For example, user can open calculator app on windows by
clicking calculator icon from the menu. Same thing can be achieved by typing
`calc.exe` in windows command prompt.

Unlike the calculator example above, common CLI commands are specifically
crafted to suit terminal environments. Commands accept data from the user as
parameters, which are space separated values entered after the command name. 
Usually, a command line looks like follows.

```sh
command_name parameter1 parameter2 param_n
```

When a command line which looks like above format is entered, terminal pass it
to the shell. Shell then identifies that given command and runs it. Shell passes
the parameters to the command when executing the command.

When the command is running, command has the full control of  the terminal.
Hence, it outputs text into the terminal and also it is possible for the command
to prompt for user input too. Commands can also run successfully without even
displaying anything to the user.  For example, the command `mv`, which stands for
moving a file from one location to another moves the requested file and exit,
without printing anything to the screen.

<div class="hr"></div>

That is the end of this article. Here's a summary.

+ Terminal is a piece of software that creates a textual input output
environment. Programs can use that environment to take user input and also to
display outputs to the user.
+ Shell is a special software which executes the commands user requested to run.
It acts as a middle man between respective commands and the user.
+ Commands are programs installed in the computer. These programs most of the
times does not have a graphical interface. Instead, they are meant to use in a
command line interface.
+ Mac OS and Linux based operating systems use same shell software. Hence, the
terminal syntax is common. Windows command prompt and powershell are outliers.