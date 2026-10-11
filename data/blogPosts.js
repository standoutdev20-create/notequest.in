const blogPosts = [
  {
    slug: "javascript-array-methods",
    title: "JavaScript Array Methods You Should Know",
    excerpt:
      "Learn the most useful JavaScript array methods with simple examples and practical use cases.",
    category: "JavaScript",
    author: "NoteQuest",
    date: "October 8, 2026",
    readTime: "8 min read",
    image: "/images/blog/javascript-array-methods.png",
    featured: true,
    content: [
      {
        heading: "Introduction",
        paragraphs: [
          "JavaScript arrays are one of the most commonly used data structures in web development.",
          "Array methods help developers transform, search, filter and process collections of data without writing unnecessary loops."
        ]
      },
      {
        heading: "map()",
        paragraphs: [
          "The map() method creates a new array by applying a function to every element of the original array."
        ],
        code: `const numbers = [1, 2, 3, 4];

const doubled = numbers.map((number) => number * 2);

console.log(doubled);`
      },
      {
        heading: "filter()",
        paragraphs: [
          "The filter() method creates a new array containing only the elements that satisfy a condition."
        ],
        code: `const numbers = [10, 15, 20, 25];

const result = numbers.filter((number) => number > 15);

console.log(result);`
      },
      {
        heading: "reduce()",
        paragraphs: [
          "The reduce() method is useful when you want to combine all values of an array into a single result."
        ],
        code: `const numbers = [10, 20, 30];

const total = numbers.reduce(
  (sum, number) => sum + number,
  0
);

console.log(total);`
      }
    ]
  },

  {
    slug: "understanding-react-components",
    title: "Understanding React Components",
    excerpt:
      "Understand how React components work and how to build reusable UI with a simple approach.",
    category: "React",
    author: "NoteQuest",
    date: "October 6, 2026",
    readTime: "7 min read",
    image: "/images/blog/react-components.png",
    featured: false
  },

  {
    slug: "modern-web-development",
    title: "A Beginner's Guide to Modern Web Development",
    excerpt:
      "Explore the fundamentals of modern frontend development and the technologies behind today's web.",
    category: "Web Development",
    author: "NoteQuest",
    date: "October 4, 2026",
    readTime: "9 min read",
    image: "/images/blog/modern-web-development.png",
    featured: false
  },

  {
    slug: "data-structures-beginners",
    title: "Data Structures Explained for Beginners",
    excerpt:
      "Start your DSA journey by understanding arrays, linked lists, stacks, queues and more.",
    category: "DSA",
    author: "NoteQuest",
    date: "October 2, 2026",
    readTime: "10 min read",
    image: "/images/blog/data-structures.png",
    featured: false
  },

  {
    slug: "sql-basics",
    title: "SQL Basics Every Developer Should Know",
    excerpt:
      "Learn the essential SQL concepts you need when working with relational databases.",
    category: "Database",
    author: "NoteQuest",
    date: "September 30, 2026",
    readTime: "8 min read",
    image: "/images/blog/sql-basics.png",
    featured: false
  },

  {
    slug: "how-to-start-tech-career",
    title: "How to Start Your Career in Tech",
    excerpt:
      "A practical roadmap for students and beginners who want to start their journey in software development.",
    category: "Career",
    author: "NoteQuest",
    date: "September 28, 2026",
    readTime: "6 min read",
    image: "/images/blog/tech-career.png",
    featured: false
  }
];

export default blogPosts;