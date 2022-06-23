import {
    task1,
    task2,
    task3,
    task4
} from "../../images"

const UshMicroshellProject = ({}) => {
    return (
        <>
            <div class="row">
                <div class="col-left col-5">
                    <h1><b>Ush Microshell Project</b></h1>
                    <body>
                        As a project for a class, I created a micro version of a shell that performs certain functions of a shell that include parsing command line arguments, using build-in commands, expanding symbols, processing scripts, and using pipelines. This project was done in order to learn more about computer systems, threads, and processes. This project was mainly coded with C.
                    </body>

                    <br/>
                    <h3><b>What is a shell?</b></h3>
                    <body>
                        Simply put, a shell is a processor that executes text commands given through the command line by user input or a script. One of its main features is expanding text and symbols to create larger expressions.
                    </body>

                    <br/>
                    <h3><b>1st Task: Command Line Arguments</b></h3>
                    <body>
                        To start the project, I implemented parsing of command line arguments. The shell needed to know how many arguments are given and be able to use them properly in user commands – like “echo” and “ls” – and simple program executables such as the printargs in the picture below. (The printargs program prints all the arguments given in the command line.)
                    </body>
                    <img src={task1} width="500px"/>

                    <br/>
                    <h3><b>2nd Task: Built-in Commands and Symbol Expansion</b></h3>
                    <body>
                        For the next step of the shell project, I implemented useful commands built into the microshell and the ability to expand given symbols into certain variables or information. For the most part, implementing these were relatively easy except I had some difficulty with fully implementing some built-in commands and symbol expansions like “sstat” and asterisk “*”.
                    </body>
                    <img src={task2} width="500px"/>

                    <br/>
                    <h3><b>3rd Task: Script Processing</b></h3>
                    <body>
                        For this task, I implemented script processing where the microshell could execute a script file with arguments (if any) when starting the shell in the command line with the script and its arguments as arguments for the shell.
                    </body>
                    <img src={task3} width="500px"/>

                    <br/>
                    <h3><b>4th Task: Pipelines</b></h3>
                    <body>
                        For the final task of this project, I had to implement pipelines where the output of one command is used as the input for the next command. With this feature, one can easily chain a list of commands with pipes to achieve a desired output. Personally, this was the hardest part to fully implement due to the nature of coding pipes that involve linking certain ends of the pipes to the next pipe and closing used pipes.
                    </body>
                    <img src={task4} width="500px"/>
                </div>
            </div>
        </>
    );
}

export default UshMicroshellProject;