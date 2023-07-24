const services = [
  {
    name: 'Web Development',
    description:
      'SoftSol as a custom web development company ensures our solutions increase the potential of business ideas and enable its competitive abilities on the market',
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Mobile Development',
    description:
      'SOftSol is an outsourcing software company with experience in mobile app development services.',
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'UI/UX Design',
    description:
      'Our UI UX design company helps to support any business and gives startups a chance to differentiate and earn the attention of investors',
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Quality Assurance',
    description:
      "We design custom solutions for different qa business goals. Starting with discussion and improvements of an idea, we aim to embody the client's exact vision.",
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Artificial Intelligence And Machine Learning',
    description:
      "Meet the best machine learning application developmentcompany and build the world's finest software solutions with us!",
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'DevOps',
    description:
      'SoftSol as a custom web development company ensures our solutions increase the potential of business ideas and enable its competitive abilities on the market',
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Cloud Solutions',
    description:
      'SoftSol as a custom web development company ensures our solutions increase the potential of business ideas and enable its competitive abilities on the market',
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'IT Consulting',
    description:
      'Identify risks, limit damage, and avoid financial losses with a full range of cybersecurity services and solutions.',
    price: 99.99,
    duration: '1 hour',
    image:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const servicesCardContainer = document.querySelector(
  '#services-card-container'
);

const createServiceCard = (service) => {
  const card = document.createElement('div');
  card.classList.add('col-md-6', 'col-lg-3', 'my-3');
  card.innerHTML = `
            <div class="card">
              <img
                src="${service.image}"
                alt="my image" />
              <div class="card-overlay">
                <h3>${service.name}</h3>
                <p>
                  ${service.description}
                </p>
              </div>
          </div>`;
  return card;
};

const genServices = () => {
  services.map((service) => {
    servicesCardContainer.appendChild(createServiceCard(service));
  });
};

export default genServices;
