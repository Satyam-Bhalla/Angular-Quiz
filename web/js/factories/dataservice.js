/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    angular
        .module("languageFacts")
        .factory("DataService", DataService);

    function DataService(){

        var dataObj = {
            languageData: languageData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    var correctAnswers = [2,2,3,1,0,2,3,1,0,1,2,3,3,0,0];

    var quizQuestions = [
            {
                type: "text",
                complanguage: "c", 
                text: "In C language,What is the correct value to return to the operating system upon the successful completion of a program?",
                possibilities: [
                    {
                    answer: "1"
                    },
                    {
                    answer: "-1"
                    },
                    {
                    answer: "0"
                    },
                    {
                    answer: "program do not return a value"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "c",
                text: "What is the only function all C programs must contain?",
                possibilities: [
                    {
                    answer: "start()"
                    },
                    {
                    answer: "system()"
                    },
                    {
                    answer: "main()"
                    },
                    {
                    answer: "program()"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "c",
                text: " Which of the following is the correct operator to compare two variables?",
                possibilities: [
                    {
                    answer: ":="
                    },
                    {
                    answer: "="
                    },
                    {
                    answer: "equal"
                    },
                    {
                    answer: "=="
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "python",
                text: "In Python,Which of the following statements create a dictionary?",
                possibilities: [
                    {
                    answer: " d = {}"
                    },
                    {
                    answer: "d = {“john”:40, “peter”:45}"
                    },
                    {
                    answer: " d = {40:”john”, 45:”peter”}"
                    },
                    {
                    answer: " d = (40:”john”, 45:”peter”)"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "python",
                text: "Which module in Python supports regular expressions?",
                possibilities: [
                    {
                    answer: "re"
                    },
                    {
                    answer: "regex"
                    },
                    {
                    answer: "pyregex"
                    },
                    {
                    answer: "none of the above"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "python",
                text: "Which keyword is use for function in Python?",
                possibilities: [
                    {
                    answer: "Fun"
                    },
                    {
                    answer: "Define"
                    },
                    {
                    answer: "Def"
                    },
                    {
                    answer: "Function"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "c++",
                text: "In C++,Which is the storage specifier used to modify the member variable even though the class object is a constant object?",
                possibilities: [
                    {
                    answer: "auto"
                    },
                    {
                    answer: "register"
                    },
                    {
                    answer: "static"
                    },
                    {
                    answer: "mutable"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "c++",
                text: "In C++,With respective to streams >> (operator) is called as",
                possibilities: [
                    {
                    answer: "Insertion operator"
                    },
                    {
                    answer: "Extraction operator"
                    },
                    {
                    answer: "Right shift operator"
                    },
                    {
                    answer: "Left shift operator"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "c++",
                text: "In C++, An exception is __",
                possibilities: [
                    {
                    answer: "Runtime error"
                    },
                    {
                    answer: "Compile time error"
                    },
                    {
                    answer: "Logical error"
                    },
                    {
                    answer: "None of the above"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "php",
                text: "PHP server scripts are surrounded by delimiters, which?",
                possibilities: [
                    {
                    answer: "<&>...</&>"
                    },
                    {
                    answer: "<?php...?>"
                    },
                    {
                    answer: "<script>...</script>"
                    },
                    {
                    answer: "<?php>...</?>"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "php",
                text: "All variables in PHP start with which symbol?",
                possibilities: [
                    {
                    answer: "!"
                    },
                    {
                    answer: "&"
                    },
                    {
                    answer: "$"
                    },
                    {
                    answer: "#"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "javascript",
                text: "Inside which HTML element do we put the JavaScript?",
                possibilities: [
                    {
                    answer: "<js>"
                    },
                    {
                    answer: "<javascript>"
                    },
                    {
                    answer: "<scripting>"
                    },
                    {
                    answer: "<script>"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "javascript",
                text: "How do you write 'Hello World' in an alert box using Javascript?",
                possibilities: [
                    {
                    answer: "msg('Hello World');"
                    },
                    {
                    answer: "alertBox('Hello World');"
                    },
                    {
                    answer: "msgBox('Hello World');"
                    },
                    {
                    answer: "alert('Hello World');"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "java",
                text: "In java,Which keyword is used by method to refer to the object that invoked it?",
                possibilities: [
                    {
                    answer: "this"
                    },
                    {
                    answer: "catch"
                    },
                    {
                    answer: "abstract"
                    },
                    {
                    answer: "import"
                    }

                    ],
                    selected: null,
                    correct: null
            },
            {
                type: "text",
                complanguage: "java",
                text: "In Java,Which of these tranfer protocol must be used so that URL can be accessed by URLConnection class object?",
                possibilities: [
                    {
                    answer: "http"
                    },
                    {
                    answer: "https"
                    },
                    {
                    answer: "Any protocol can be used"
                    },
                    {
                    answer: "None of the above"
                    }

                    ],
                    selected: null,
                    correct: null
            }

        
        ];

    var languageData = [
            {
                type: "C Language",
                image_url: "Images/c.png",
                developedIn: "Developed by Dennis Ritchie between 1969 and 1973 at Bell Labs",
                platform: "Cross Platform",
                implementation: "K&R, GCC, Clang, Intel C, Microsoft Visual C++, Pelles C, Watcom C",
                extensions: ".c and .h",
                description: "C is a general-purpose, imperative computer programming language, supporting structured programming, lexical variable scope and recursion, while a static type system prevents many unintended operations. By design, C provides constructs that map efficiently to typical machine instructions, and therefore it has found lasting use in applications that had formerly been coded in assembly language, including operating systems, as well as various application software for computers ranging from supercomputers to embedded systems."
            },
            {
                type: "C++",
                image_url: "Images/c++2.png",
                developedIn: "C++ was developed by Bjarne Stroustrup at Bell Labs since 1979",
                platform: "Cross Platform",
                implementation: "LLVM Clang, GCC, Microsoft Visual C++,Intel C++ Compiler, IBM XL C++",
                extensions: ".cc .cpp .c++ .h .hh .hpp",
                description: "C++ (pronounced cee plus plus /ˈsiː plʌs plʌs/) is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[5] including desktop applications, servers (e.g. e-commerce, web search or SQL servers), and performance-critical applications."
            },
            {
                type: "Python",
                image_url: "Images/python.png",
                developedIn: "Created by Guido van Rossum and first released in 1991.",
                platform: "Cross Platform",
                implementation: "CPython, IronPython, Jython, MicroPython, Numba, PyPy",
                extensions: ".py, .pyc, .pyd, .pyo (prior to 3.5),[4] .pyw, .pyz (since 3.5)",
                description: "Python is a widely used high-level programming language for general-purpose programming. An interpreted language, Python has a design philosophy which emphasizes code readability (notably using whitespace indentation to delimit code blocks rather than curly braces or keywords), and a syntax which allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java.The language provides constructs intended to enable writing clear programs on both a small and large scale."
            },
            {
                type: "Javascript",
                image_url: "Images/js.png",
                developedIn: "Created by Brendan Eich and first appeared in 1995.",
                platform: "Browser Dependent(Works fine in Chrome and Mozila)",
                implementation: "V8, JavaScriptCore, SpiderMonkey, Chakra",
                extensions: ".js",
                description: "JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins.JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented,imperative, and functional programming styles.It has an API for working with text, arrays, dates and regular expressions, but does not include any I/O, such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded."
            },
            {
                type: "Java",
                image_url: "Images/java.jpg",
                developedIn: "James Gosling, Mike Sheridan,and Patrick Naughton initiated the Java language project in 1991",
                platform: "Cross Platform",
                implementation: "OpenJDK, GNU Compiler for Java (GCJ), many others",
                extensions: ".java, .class, .jar",
                description: "Java is a general-purpose computer programming language that is concurrent, class-based, object-oriented,and specifically designed to have as few implementation dependencies as possible. It is intended to let application developers 'write once, run anywhere' (WORA),meaning that compiled Java code can run on all platforms that support Java without the need for recompilation.Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture."
            },
            {
                type: "PHP",
                image_url: "Images/php.png",
                developedIn: "Originally created by Rasmus Lerdorf in 1994",
                platform: "Cross Platform",
                implementation: "Zend Engine, HHVM, Phalanger, Project Zero, Parrot",
                extensions: ".php, .phtml, .php3, .php4, .php5, .php7, .phps",
                description: "PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language.The PHP reference implementation is now produced by The PHP Development Team.PHP originally stood for Personal Home Page,but it now stands for the recursive acronym PHP: Hypertext Preprocessor.PHP code may also be executed with a command-line interface and can be used to implement standalone graphical applications."
            }


        ];

})();
