export const Bio = {
    name: "Amr Abdelwahed",
    roles: [
      "Software Engineer.",
      "Machine Learning Developer.",
      "Data Engineer.",
      "Full Stack Developer.",
    ],
    github: "https://github.com/amrabdelwahed",
    resume: "https://drive.google.com/file/d/1GEAD-K4HNvLsbN0_r7JvecZ4N3IwOPZc/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/amrabdelwahed/",
  };
  
  export const skills = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          image: require('../images/html.png'),
        },
        {
          name: "CSS",
          image: require('../images/css.png'),
        },
        {
          name: "JavaScript",
          image: require('../images/javascript.png'),
        },
        {
          name: "React.js",
          image: require('../images/react.png'),
        },
        {
          name: "Angular",
          image: require('../images/angular.png'),
        },
        {
          name: "Next.js",
          image: require('../images/nextjs.png'),
        },
        {
          name: "Bootstrap",
          image: require('../images/bootstrap.png'),
        },
        {
          name: "Tailwind",
          image: require('../images/tailwind.png'),
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          image: require('../images/node.png'),
        },
        {
          name: "Express.js",
          image: require('../images/express.png'),
        },
        {
          name: "MongoDB",
          image: require('../images/mongodb.png'),
        },
        {
          name: "C#",
          image: require('../images/csharp.png'),
        },  
        {
          name: ".NET",
          image: require('../images/net.png'),
        },
        {
          name: "Java",
          image: require('../images/java.png'),
        },
        {
          name: "Spring Boot",
          image: require('../images/springboot.png'),
        },
        {
          name: "php",
          image: require('../images/php.png'),
        },
        {
          name: "SQL Server",
          image: require('../images/sqlserver.png'),
        },
        {
          name: "Flask",
          image: require('../images/flask.png'),
        },
        {
          name: "Django",
          image: require('../images/django.png'),
        },
      ],
    },
    {
      title: "Data Science",
      skills: [
        {
          name: "Python",
          image: require('../images/python.png'),
        },
        {
          name: "R",
          image: require('../images/r.png'),
        },
        {
          name: "SQL",
          image: require('../images/sql.jpg'),
        },
        {
          name: "Hadoop",
          image: require('../images/hadoop.png'),
        },
        {
          name: "Kafka",
          image: require('../images/kafka.png'),
        },
        {
          name: "Spark",
          image: require('../images/spark.png'),
        },
        {
          name: "Hive",
          image: require('../images/hive.png'),
        },
        {
          name: "Tableau",
          image: require('../images/tableau.png'),
        },
        {
          name: "Power BI",
          image: require('../images/powerbi.png'),
        },
      ],
    },
    {
      title: "Tools / Technologies",
      skills: [
        {
          name: "Git",
          image: require('../images/git.png'),
        },
        {
          name: "GitHub",
          image: require('../images/github.png'),
        },
        {
          name: "Jira",
          image: require('../images/jira.jpg'),
        },
        {
          name: "Unity",
          image: require('../images/unity.png'),
        },
        {
          name: "Figma",
          image: require('../images/figma.png'),
        },
        {
          name: "Slack",
          image: require('../images/slack.png'),
        },
        {
          name: "Jupyter",
          image: require('../images/jupyter.png'),
        },
        {
          name: "Postman",
          image: require('../images/postman.png'),
        },
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: require('../images/sheridan.jpg'),
      school: "Sheridan College - Oakville, Canada",
      date: "Sep 2021 - Dec 2024",
      degree: "Software Development and Network Engineering",
    },
    {
      id: 1,
      img: require('../images/oxford.jpg'),      
      school: "Oxford Academy Kuwait",
      date: "Sep 2018 - Apr 2020",
      degree: "A-levels (Equivalent to High School Diploma)",
    },
  ];

  export const experience = [
    {
      id: 0,
      img: require('../images/sunlife.png'),
      position: "Network Automation Analyst Intern",
      date: "May 2024 - Aug 2024",
      company: "Sun Life Financial",
    },
    {
      id: 1,
      img: require('../images/sunlife.png'),
      position: "Network Analyst Intern",
      date: "September 2024 - December 2024",
      company: "Sun Life Financial",
    },
    {
      id: 2,
      img: require('../images/kaneff.png'),
      position: "Network Analyst Intern",
      date: "January 2024 - April 2024",
      company: "Kaneff Properties",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Docusafe",
      date: "Sep 2023 - Dec 2024",
      description:
        "DocuSafe is an AI-driven platform that creates unique digital signature profiles by scanning and analyzing multiple samples of a user's signature. By linking each verified signature to the sender's account, DocuSafe ensures secure, traceable document authentication for businesses and individuals needing reliable verification.",
      image:
        require('../images/docusafe.jpg'),
      tags: [
        "Python",
        "React",
        "Tensorflow",
        "Flask",
        "MongoDB",
        "Firebase"
      ],
      category: "web",
      link: "https://docusafe.online/"
    },
    {
      id: 1,
      title: "Remmi",
      date: "May 2023 - July 2023",
      description:
        "Remmi is an innovative voice reminder app developed with Swift, designed to help users stay organized effortlessly. Powered by advanced AI technology, Remmi enables users to create and manage audible reminders with natural voice prompts, ensuring they never miss a task or event.",
      image:
        require('../images/remmi.png'),
      tags: [
        "Swift",
        "SwiftUI",
        "UIKit",
        "MongoDB",
        "Firebase",
      ],
      category: "mobile",
      link: "https://apps.apple.com/ca/app/remmi/id6499106472"
    },
    {
      id: 2,
      title: "SoccerEdge AI",
      date: "Sep 2024 - Dec 2024",
      description:
        "This web application hosts a machine learning model built to predict the outcomes of Premier League soccer matches. By analyzing historical data, including team performance, player statistics, and match conditions, the model forecasts the most probable results.",
      image:
        require('../images/SoccerEdge.png'),
      tags: [
        "Python",
        "TensorFlow",
        "StreamLit",
        "SciKit-Learn",
        "Pandas"
      ],
      category: "web",
      link: "https://amrabdelwahed-the-football-fortune-teller-app-05nkzh.streamlit.app/"
    },
    {
      id: 3,
      title: "StreamlinePay",
      date: "Sep 2024 - Dec 2024",
      description:
        "StreamlinePay is a financial transaction management system built with Java, Spring Boot, MongoDB, and Kafka. It allows users to create and manage transactions, with real-time messaging powered by Kafka. Docker is used to containerize the application for easy deployment and scalability.",
      image:
        require('../images/StreamlinePay.png'),
      tags: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "Kafka",
        "Docker"
      ],
      category: "web",
      link: "https://streamlinepay.up.railway.app/"
    }
 
  ];