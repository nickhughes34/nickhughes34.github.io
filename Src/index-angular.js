var app = angular.module('MainPage', []);

app.controller("MainController", function($scope){
  var html = "text-orange fa-brands fa-html5 fa-3x";
  var css = "text-primary fa-brands fa-css3-alt fa-3x";
  var javascript = "text-warning fa-brands fa-js-square fa-3x";
  var angular = "text-danger fa-brands fa-angular fa-3x";
  var bootstrap = "text-secondary fa-brands fa-bootstrap fa-3x";
  var mdb = "text-primary fa-brands fa-mdb fa-3x";
  var react = "text-info fa-brands fa-react fa-3x";
  var nodeJs = "text-success fa-brands fa-node fa-3x";
  var python = "text-warning fa-brands fa-python fa-3x";
  var jQuery = "jQuery";
  var c = "cProgramming";
  var linux = "fa-brands fa-linux fa-3x";
  var flask = "flask";
  var java = "java";
  var mysql = "mysql";
  var mongoDB = "mongoDB";
  var vuejs = "text-success fa-brands fa-vuejs fa-3x";
  var typescript = "typescript";
  var django = "django";
  var php = "text-primary fa-brands fa-php fa-3x";
  var bootstrap = "text-purple fa-brands fa-bootstrap fa-3x";
  var aws = "text-warning fa-brands fa-aws fa-3x";
  var colors = ["#FFFFFF", "#F8F8F8", "#F5F5F5", "#F0F0F0", "#E8E8E8", "#E0E0E0", "#DCDCDC", "#D8D8D8", "#D3D3D3", "#D0D0D0", "#C8C8C8"];
  //var colors = ["#FFFFFF", "#979DAC", "#7D8597", "#5C677D", "#33415C", "#001233", "#001845", "#002855", "#023E7D", "#0353A4", "#0466C8"];

  $scope.projects = [
    {
      id:"bank",
      status:"show active",
      title:"Bank Page", 
      name:"Bank of Sunshine Loan Page",
      image:"Src/Bank-of-Sunshine-screenshot.png",
      alt:"bank screenshot",
      description:"This project takes user input and checks for validation with custom validation messages. Also has server side validation for usernames, \
                   email and passwords. Used Flask framework in python and sessions to keep the user logged in.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Bank",
      link:"https://nickhughes34.pythonanywhere.com/",
      tech:{python, flask, mysql, angular, bootstrap, html, css, javascript},
      demo: true
    },
    {
      id:"capstone",
      status:"",
      title:"Capstone Project", 
      name:"Capstone Student Commute 2023",
      image:"Src/capstone-screenshot.png",
      alt:"capstone screenshot",
      description:"This project parses user data (cvs file), then takes user locations and queries Google Maps API to get transit route information. \
                   then saves this information to the Postgresql database. Tranist information extracted later.",
      code:"https://github.com/nickhughes34/Capstone-Student-Commute-2023",
      link:"https://github.com/nickhughes34/Capstone-Student-Commute-2023",
      tech:{python, mysql},
      demo: false
    },
    {
      id:"homepage4",
      status:"",
      title:"Quick Meals", 
      name:"Quick Meals Mock Homepage",
      image:"Src/homepage4-screenshot.png",
      alt:"Quick Meals screenshot",
      description:"This project is a mock homepage for a food delivery company. It uses plain JavaScript.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Homepage4",
      link:"https://nickhughes34.github.io/Homepage4/homepage.html",
      tech:{html, css, javascript},
      demo: true
    },
    {
      id:"blockchain",
      status:"",
      title:"Voting Blockchain", 
      name:"Government Voting Over The Blockchain",
      image:"Src/blockchain-screenshot.jpg",
      alt:"Voting Over The Blockchain screenshot",
      description:"This application takes a persons vote and adds it to the blockchain which allows for safe and secure voting. \
                   Application was developed mainly using Flask in Python and Angular with JavaScript.",
      code:"https://github.com/nickhughes34/Voting-over-Blockchain",
      link:"https://github.com/nickhughes34/Voting-over-Blockchain",
      tech:{python, flask, angular, html, css, javascript},
      demo: false
    },
    {
      id:"cryptography",
      status:"",
      title:"Cryptography Project", 
      name:"Unique Cryptographic Encryption System",
      image:"Src/cryptography-screenshot.png",
      alt:"Cryptographic Encryption System screenshot",
      description:"This project is a unique cryptographic encryption system that did not use any other libraries \
                   or any form of randomization. Additionally it does not copy an existing encryption systems.",
      code:"https://github.com/OzymandiasThe2/Cryptography-Project",
      link:"https://github.com/OzymandiasThe2/Cryptography-Project",
      tech:{python},
      demo: false
    },
    {
      id:"homepage3",
      status:"",
      title:"Turbo Logistics", 
      name:"Turbo Logistics Mock Homepage",
      image:"Src/homepage3-screenshot.png",
      alt:"Turbo Logistics screenshot",
      description:"This project is a mock homepage for a delivery company. It uses plain JavaScript.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Homepage3",
      link:"https://nickhughes34.github.io/Homepage3/homepage.html",
      tech:{html, css, javascript},
      demo: true
    },
    {
      id:"homepage5",
      status:"",
      title:"Durham Print", 
      name:"Durham Print Mock Homepage",
      image:"Src/homepage5-screenshot.png",
      alt:"Durham Print screenshot",
      description:"This project is a mock homepage for a business card company. It uses plain JavaScript.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Homepage5",
      link:"https://nickhughes34.github.io/Homepage5/homepage.html",
      tech:{html, css, javascript},
      demo: true
    },
    {
      id:"stock",
      status:"",
      title:"Stock Viewer", 
      name:"NDVP Stock Viewer",
      image:"Src/NDVP-stock-app.png",
      alt:"stock viewer screenshot",
      description:"This project takes user input as a prop and interacts with other components. Uses the TradeView import to lookup and display stock values.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/stock_app",
      link:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/stock_app",
      tech:{react, bootstrap, mdb},
      demo: false
    },
    {
      id:"homepage1",
      status:"",
      title:"Financial Freedom Canada", 
      name:"Financial Freedom Canada Mock Homepage",
      image:"Src/homepage1-screenshot.png",
      alt:"Financial Freedom Canada screenshot",
      description:"This project is a mock homepage for a bank. It uses plain JavaScript.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Homepage1",
      link:"https://nickhughes34.github.io/Homepage1/homepage.html",
      tech:{html, css, javascript},
      demo: true
    },
    {
      id:"weather",
      status:"",
      title:"Weather App",
      name:"Weather Checker Webpage",
      image:"Src/Weather-screenshot.png",
      alt:"weather app screenshot",
      description:"This project lets the user input a city name to get the weather results. This project used plain Javascript to control the DOM to add all the weather elements.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Weather",
      link:"https://nickhughes34.github.io/Weather/weather.html",
      tech:{html, css, javascript},
      demo: true
    },
    {
      id:"homepage2",
      status:"",
      title:"The Space Station", 
      name:"The Space Station Mock Homepage",
      image:"Src/homepage2-screenshot.png",
      alt:"The Space Station screenshot",
      description:"This project is a mock homepage for a space exploration company. It uses plain JavaScript.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Homepage2",
      link:"https://nickhughes34.github.io/Homepage2/homepage.html",
      tech:{html, css, javascript},
      demo: true
    },
    {
      id:"coffee",
      status:"",
      title:"Coffee Menu", 
      name:"Coffee Menu Webpage",
      image:"Src/Coffee-screenshot.png",
      alt:"coffee menu screenshot",
      description:"This project lets the user view a menu for Coffee Cafe Today. Used jQuery to setup a delayed animation for when user scrolls into view. \
                   Used Bootstrap and Angular for easy placement of elements.",code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Coffee",
      link:"https://nickhughes34.github.io/Coffee/coffee.html",
      tech:{html, css, javascript, angular, bootstrap, mdb},
      demo: true
    },
    {
      id:"real",
      status:"",
      title:"Real Estate Page", 
      name:"Real Esate Webpage",
      image:"Src/Real-Estate-screenshot.png",
      alt:"real estate screenshot",
      description:"This project lets the user view a real estate homepage for Real Estate Today. Used Bootstrap for easy placement of elements.",
      code:"https://github.com/nickhughes34/nickhughes34.github.io/tree/main/Real_Estate",link:"https://nickhughes34.github.io/Real_Estate/Real_Estate.html",
      tech:{html, css, javascript, bootstrap, mdb},
      demo: true
    }
  ];

  $scope.proficient = [
    ["Python", "5 years", python],
    ["HTML", "5 years", html], 
    ["CSS", "5 years", css], 
    ["Javascript", "5 years", javascript],
    ["Node.js", "3 years", nodeJs],
    ["MongoDB", "3 years", mongoDB],
    ["Bootstrap", "3 years", bootstrap],
    ["Angular","3 years", angular],
    ["Linux", "3 year", linux], 
    ["C", "2 years", c], 
    ["MySQL", "2 years", mysql], 
    ["jQuery", "2 years", jQuery],
    ["Flask", "2 years", flask],
    ["Django", "2 years", django],
    ["TypeScript", "1 years", typescript],
    ["VueJS", "1 years", vuejs],
    ["React", "1 year", react],
    ["Java", "1 year", java],
    ["PHP", "1 year", php],
    ["AWS RDS", "1 year", aws],
    ["AWS DynamoDB", "< 1 year", aws]
  ];

  $scope.description1 = "\
                        I am currently attending Ontario Tech University studying Networking and IT Security. \
                        Over the years of attending this school I have gained various skills. \
                        Some of them would include network design, python programming, front end and back end web design. \
                        I have developed some projects such as a Bank Loan Page, Weather App, Product Webpage, and more listed below. \
                        I have also used various technologies such as API's, Amazon's RDS, Python Anywhere's MySQL, and MongoDB.";
  
  $scope.description2 = "I have developed some mobile applications such as a game, and a food delivery app in Android Studio. \
                         I make abundant long-term and short-term goals to stay organized. \
                         I have plenty of experience with coding and network systems.";

  $scope.description3 = "I am currenty working at SAIN Lab at Ontario Tech University. I have been working here since the start of May 2022. \
                         Over my time here at SAIN Lab I have gained and developed various skills. \
                         Some of them would be my Python skills, Linux skills, front end skills, and back end skills. \
                         I had the opportunity to work with a production level server. I was able to create several scripts for the server. \
                         Some of them include, the automation of deletion of old data, the automation of installation of security patches, scheduled reboot of the system, and etc. \
                         I also preformed maintenance on the server, using LVM’s to increase SWAP memory, and reparation drives, more of my experience is listed below.";

  $scope.description4 = "My name is Nicholas Hughes, I am a full stack engineer based in Ontario, Canada. \
                        I have developed many front-end and back-end applications for SAIN Labs, as well as \
                        implementing UI/UX interfaces into their front-end applications. I am pursing new \
                        experiences and opportunities, and I have a passion to learn.";

  $scope.hobbies = [
    ["Leafs Fan", "https://images.unsplash.com/photo-1653408333886-510ce003d440?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"], 
    ["Reading", "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"], 
    ["Coding", "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"], 
    ["Walking", "https://images.unsplash.com/photo-1582454235987-29762ef064f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"], 
    ["Moblie Game Design", "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"], 
    ["Building Computers", "https://images.unsplash.com/photo-1520520688967-7bdc16e77dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"], 
    ["Solving Puzzels", "https://images.unsplash.com/photo-1494059980473-813e73ee784b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"], 
    ["Network Design", "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"], 
    ["Website Design", "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80"], 
    ["Machine Learning", "https://images.unsplash.com/photo-1495592822108-9e6261896da8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"]
  ];

  $scope.workExperience1 = [{
    work: "Ontario Tech University / Lab Technician / May 2022 - April 2023",
    description: [
      "Implemented/updated UX and UI designs using Bootstrap, CSS, HTML, JavaScript, Node, Express, etc. Which increased user interactions by 40%.",
      "Led in the development of some front-end and back-end web applications using Bootstrap, JavaScript, Node, Express, etc.",
      "Updated and improved old and pre-existing architecture. Which increased server processing times by 10%.",
      "Tested and debugged web applications regularly to improve performance and security.",
      "Collaborated with team members to improve technical and creative aspects of the website. Which increased user interactions by 10%.",
      "Managed the website. That includes updating pages, creating new pages, and creating user profiles.",
      "Managed the web servers. That includes updating software, installing new software, creating user accounts.",
      "Performed maintenance on a production-level server using LVM’s to increase SWAP memory and re-partitioned disk space.",
      "Implemented Python scripts to automate the deletion of old data, the installation of security patches, and scheduled reboot of the system.",
      "Used DreamHost, Nginx, and Certbot to host web applications on a production-level server with custom domain names."
    ],
    website: "https://www.sain.ca/"
  }]

  $scope.AnimationOn = function(index, $event){
    //console.log(index, $event["currentTarget"]);
    //$event["currentTarget"].classList.add("clicken");
    var value = ((index + 1) * (100/11)) + "vw";
    document.querySelector(":root").style.setProperty('--waveAnimationLength', value);
  }

  $scope.AnimationOff = function(index, $event){
    //console.log(index, $event["currentTarget"]);
    //$event["currentTarget"].classList.add("clicken");
    var value = "0vw";
    document.querySelector(":root").style.setProperty('--waveAnimationLength', value);
  }

  $scope.AnimationClick = function(index, $event){
    //var value = ((index) * (100/10)) + "%";
    var value = "100%";
    var color = colors[index];
    //document.querySelector(":root").style.setProperty('--waveAnimationLength', value);
    //document.querySelector(":root").style.setProperty('--waveBackgroundColor', color);
  }

  $scope.AnimationClick2 = function(index, $event){
    //var value = ((index) * (100/9)) + "%";
    var value = "100%";
    var color = colors[index];
    //document.querySelector(":root").style.setProperty('--waveAnimationLength', value);
    //document.querySelector(":root").style.setProperty('--waveBackgroundColor', color);
  }

})
