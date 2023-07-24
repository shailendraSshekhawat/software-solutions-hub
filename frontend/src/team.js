const team = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    position: 'developer',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque! Mollitia eaque modi fuga exercitationem?',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 29,
    position: 'UI/UX designer',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque! Mollitia eaque modi fuga exercitationem?',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    id: 3,
    name: 'Steve Smith',
    age: 39,
    position: 'System Designer',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque! Mollitia eaque modi fuga exercitationem?',
    image: 'https://randomuser.me/api/portraits/men/30.jpg',
  },
  {
    id: 4,
    name: 'Sara Smith',
    age: 33,
    position: 'developer',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, atque! Mollitia eaque modi fuga exercitationem?',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

const teamCardContainer = document.querySelector('#team-card-container');

// Team cards

const createTeamCard = (person) => {
  const card = document.createElement('div');
  card.classList.add('col-md-6', 'col-lg-3', 'my-3');
  card.innerHTML = `
    <div class="card bg-light">
      <div class="card-body text-center">
        <img
          src=${person.image}
          class="rounded-circle mb-3" />
        <div class="card-title">${person.name}</div>
        <p class="card-text">
            ${person.description}
        </p>
        <a href="#"><i class="bi bi-twitter text-dark mx-1"></i></a>
        <a href="#"><i class="bi bi-facebook text-dark mx-1"></i></a>
        <a href="#"><i class="bi bi-linkedin text-dark mx-1"></i></a>
        <a href="#"><i class="bi bi-instagram text-dark mx-1"></i></a>
      </div>
    </div>`;
  return card;
};

const genTeam = () => {
  team.map((person) => {
    teamCardContainer.appendChild(createTeamCard(person));
  });
};

export default genTeam;
