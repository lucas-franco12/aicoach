export const dummyLessonData = [
  {
    id: "1",
    title: "What is Python?",
    subtitle: "Introduction to Python programming language",
    lessons: 1,
    practices: 2,
    content: [
      {
        type: "paragraph",
        text: "Python is a high-level, interpreted programming language known for its readability and versatility. It was created by Guido van Rossum and first released in 1991.",
      },
      {
        type: "paragraph",
        text: "Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming. It has a large standard library that provides tools suited to many tasks, from web development to data analysis.",
      },
      {
        type: "heading",
        level: 2,
        text: "Key features of Python",
      },
      {
        type: "list",
        items: [
          "Easy to read and write: Python's syntax is designed to be readable and straightforward, making it an excellent choice for beginners.",
          "Interpreted language: Python code is executed line by line, which makes debugging easier and allows for interactive programming.",
          "Extensive standard library: Python comes with a vast library of modules and packages that can be used to perform a wide range of tasks.",
          "Community support: Python has a large and active community that contributes to its development and provides support through forums, tutorials, and documentation.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Setting up Your Python Environment",
    subtitle: "Guide to installing Python and setting up a code editor",
    lessons: 1,
    practices: 1,
    content: [
      {
        type: "paragraph",
        text: "Before you start programming in Python, you need to set up your development environment. This lesson will guide you through the process of installing Python and setting up a code editor.",
      },
      {
        type: "heading",
        level: 2,
        text: "Steps to Set Up Your Python Environment",
      },
      {
        type: "list",
        items: [
          "Download Python from the official website (python.org)",
          "Install Python on your computer, making sure to add Python to your PATH",
          'Verify the installation by opening a command prompt and typing "python --version"',
          "Install a code editor or IDE (Integrated Development Environment) such as VSCode, PyCharm, or Sublime Text",
          "Set up your first Python project and start coding!",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Python Basics: Variables and Data Types",
    subtitle: "Understanding variables and data types in Python",
    lessons: 1,
    practices: 3,
    content: [
      {
        type: "paragraph",
        text: "In this lesson, you will learn about variables and data types in Python. Variables are used to store data, and data types define the type of data a variable can hold.",
      },
      {
        type: "heading",
        level: 2,
        text: "Common Data Types in Python",
      },
      {
        type: "list",
        items: [
          "Integers: Whole numbers, e.g., 1, 2, 3",
          "Floats: Decimal numbers, e.g., 1.5, 2.75",
          "Strings: Text, e.g., 'Hello, World!'",
          "Booleans: True or False values",
          "Lists: Ordered collections of items, e.g., [1, 2, 3]",
          "Dictionaries: Key-value pairs, e.g., {'name': 'Alice', 'age': 25}",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Control Flow: Conditionals and Loops",
    subtitle: "Using conditionals and loops to control the flow of your code",
    lessons: 1,
    practices: 2,
    content: [
      {
        type: "paragraph",
        text: "Control flow statements allow you to control the execution of your code based on certain conditions. In this lesson, you will learn about conditionals and loops.",
      },
      {
        type: "heading",
        level: 2,
        text: "Conditionals",
      },
      {
        type: "list",
        items: [
          "if statements: Execute code if a condition is true",
          "else statements: Execute code if the condition is false",
          "elif statements: Check multiple conditions",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Loops",
      },
      {
        type: "list",
        items: [
          "for loops: Iterate over a sequence of items",
          "while loops: Execute code as long as a condition is true",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Functions in Python",
    subtitle: "Defining and using functions in Python",
    lessons: 1,
    practices: 2,
    content: [
      {
        type: "paragraph",
        text: "Functions are reusable blocks of code that perform a specific task. In this lesson, you will learn how to define and use functions in Python.",
      },
      {
        type: "heading",
        level: 2,
        text: "Defining Functions",
      },
      {
        type: "list",
        items: [
          "Use the def keyword to define a function",
          "Functions can take parameters and return values",
          "Use the return keyword to return a value from a function",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Working with Modules and Packages",
    subtitle: "Organizing your code with modules and packages",
    lessons: 1,
    practices: 1,
    content: [
      {
        type: "paragraph",
        text: "Modules and packages allow you to organize your code into reusable components. In this lesson, you will learn how to import and use modules and packages in Python.",
      },
      {
        type: "heading",
        level: 2,
        text: "Importing Modules",
      },
      {
        type: "list",
        items: [
          "Use the import keyword to import a module",
          "Use the from keyword to import specific functions or classes from a module",
          "Use the as keyword to give a module an alias",
        ],
      },
    ],
  },
  {
    id: "7",
    title: "File Handling in Python",
    subtitle: "Reading from and writing to files in Python",
    lessons: 1,
    practices: 2,
    content: [
      {
        type: "paragraph",
        text: "Python provides built-in functions for working with files. In this lesson, you will learn how to read from and write to files in Python.",
      },
      {
        type: "heading",
        level: 2,
        text: "Reading from Files",
      },
      {
        type: "list",
        items: [
          "Use the open function to open a file",
          "Use the read method to read the contents of a file",
          "Use the close method to close the file",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Writing to Files",
      },
      {
        type: "list",
        items: [
          "Use the write method to write data to a file",
          "Use the writelines method to write multiple lines to a file",
        ],
      },
    ],
  },
  {
    id: "8",
    title: "Error Handling in Python",
    subtitle: "Managing errors with try, except, and finally blocks",
    lessons: 1,
    practices: 2,
    content: [
      {
        type: "paragraph",
        text: "Error handling allows you to manage errors that occur during the execution of your code. In this lesson, you will learn how to use try, except, and finally blocks to handle errors in Python.",
      },
      {
        type: "heading",
        level: 2,
        text: "Using try and except",
      },
      {
        type: "list",
        items: [
          "Use the try block to wrap code that may raise an exception",
          "Use the except block to handle the exception",
          "Use the finally block to execute code regardless of whether an exception occurred",
        ],
      },
    ],
  },
  {
    id: "9",
    title: "Object-Oriented Programming in Python",
    subtitle: "Basics of object-oriented programming in Python",
    lessons: 1,
    practices: 3,
    content: [
      {
        type: "paragraph",
        text: "Object-oriented programming (OOP) is a programming paradigm based on the concept of objects. In this lesson, you will learn the basics of OOP in Python.",
      },
      {
        type: "heading",
        level: 2,
        text: "Classes and Objects",
      },
      {
        type: "list",
        items: [
          "Use the class keyword to define a class",
          "Create objects (instances) of a class",
          "Use the __init__ method to initialize object attributes",
        ],
      },
    ],
  },
  {
    id: "10",
    title: "Introduction to Web Development with Python",
    subtitle: "Getting started with web development using Python",
    lessons: 1,
    practices: 2,
    content: [
      {
        type: "paragraph",
        text: "Python is widely used in web development. In this lesson, you will get an introduction to web development with Python using frameworks like Flask and Django.",
      },
      {
        type: "heading",
        level: 2,
        text: "Flask Framework",
      },
      {
        type: "list",
        items: [
          "Flask is a lightweight web framework for Python",
          "Use Flask to create web applications with minimal setup",
          "Define routes and views to handle web requests",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Django Framework",
      },
      {
        type: "list",
        items: [
          "Django is a high-level web framework for Python",
          "Use Django to create robust and scalable web applications",
          "Define models, views, and templates to build web applications",
        ],
      },
    ],
  },
];
