// Data for project cards
const projectsData = [
    {
      title: "Task Reminder Extension",
      ghLink: "https://github.com/Himanshu8747/Expense-Tracker",
      src: "../img/projects/TaskReminder.png",
      isVideo: false
    },
    {
      title: "Password Generator",
      ghLink: "https://github.com/Himanshu8747/Expense-Tracker",
      src: "../img/projects/Password-Generator.mp4",
      isVideo: true
    },
    {
      title: "Name It - Name Generator",
      ghLink: "https://github.com/Himanshu8747/Expense-Tracker",
      src: "../img/projects/Name It - Brave 2024-02-24 13-44-34 (online-video-cutter.com).mp4",
      isVideo: true
    },
    {
      title: "React Quiz",
      ghLink: "https://github.com/Himanshu8747/Expense-Tracker",
      src: "../img/projects/The React Quiz - Brave 2024-02-24 14-26-59 (online-video-cutter.com).mp4",
      isVideo: true
    },
    {
      title: "InterLingo - Language Translator",
      ghLink: "https://github.com/Himanshu8747/Expense-Tracker",
      src: "../img/projects/React Translator - Brave 2024-02-24 13-55-09 (online-video-cutter.com).mp4",
      isVideo: true
    },
  ];
  
  // Function to create project card HTML
  function createProjectCard(project) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('project-card', 'bg-white', 'p-6', 'rounded-lg', 'overflow-hidden', 'shadow-lg', 'mb-4');
  
    const mediaElement = project.isVideo ?
      `<video class="project-media w-full h-80 object-cover object-center mb-4" controls autoplay loop muted>
        <source src="${project.src}" type="video/mp4">
        Your browser does not support the video tag.
      </video>` :
      `<img src="${project.src}" class="project-media w-full h-80 object-cover object-center mb-4" alt="Project Media">`;
  
    cardDiv.innerHTML = `
      ${mediaElement}
      <h2 class="project-title text-xl font-semibold text-center mb-5">${project.title}</h2>
      <div class="project-links flex justify-center space-x-4 mb-4">
        <a href="${project.ghLink}" target="_blank" rel="noopener noreferrer" class="project-link bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center">GitHub</a>
        ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" class="project-link bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center">Demo</a>` : ''}
      </div>`;
  
    return cardDiv;
  }
  
  // Function to render project cards
  function renderProjectCards() {
    const projectCardsContainer = document.getElementById('projectCards');
    projectsData.forEach(project => {
      const card = createProjectCard(project);
      projectCardsContainer.appendChild(card);
    });
  }
  
  // Call the function to render project cards
  renderProjectCards();
  