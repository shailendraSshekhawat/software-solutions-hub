export const portfolioData = [
  {
    name: 'Project 1',
    description: 'Description of Project 1',
    image: 'project1.jpg',
  },
  {
    name: 'Project 2',
    description: 'Description of Project 2',
    image: 'project2.jpg',
  },
  {
    name: 'Project 1',
    description: 'Description of Project 1',
    image: 'project1.jpg',
  },
  {
    name: 'Project 2',
    description: 'Description of Project 2',
    image: 'project2.jpg',
  },
];

const portfolioCardContainer = document.querySelector(
  '#portfolio-card-container'
);

const createPortfolioCard = (project) => {
  const card = document.createElement('div');
  card.classList.add('col-md-6', 'col-lg-3', 'my-3');
  card.innerHTML = `<div class="card">
    <img
      src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="my image" />
    <div class="card-overlay">
      <h3>${project.name}</h3>
      <p>
        ${project.description}
      </p>
    </div>
  </div>`;
  return card;
};

const genPortFolio = () => {
  portfolioData.map((project) => {
    portfolioCardContainer.appendChild(createPortfolioCard(project));
  });
};

export default genPortFolio;
