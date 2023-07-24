const questions = [
  {
    id: 1,
    question: `What do software developers do?`,
    answer: `Software developers retrieve, store, and alter data to analyze a system’s requirements and capability. They design, program, build, deploy and maintain software using different skills and tools. Also, they meet with clients, determine needs, help develop, ensure usability, and complete quality assurance. Equipped with a team of talented and tech-savvy software developers, we offer unmatchable development services to our clients.`,
  },
  {
    id: 2,
    question: `What is agile software development?`,
    answer: `Agile software development emphasizes streamlining the procedure and producing minimum viable products (MVPs) that go through numerous iterations before being finalized. Feedback is gathered and implemented continually. We also use this methodology to ensure improved quality, satisfied customers, better control, increased flexibility, reduced risks, etc.`,
  },
  {
    id: 3,
    question: `What is the software development life cycle?`,
    answer: `Software development life cycle refers to the structured process used to design, develop, and test high-quality software. Our software development life cycle is divided into six steps - conducting a software discovery workshop, software development consultation, wireframing and designing, development, testing, and deployment.`,
  },
  {
    id: 4,
    question: `How does the cloud enable digital transformation?`,
    answer: `Successful digital transformation is made possible by the cloud. Delivering flexible, on-demand access to the resources and supporting these new digital business offerings requires a cloud-based architecture. It enables enterprises to scale infrastructure as necessary to accommodate changing business goals while lowering the risks of wasted IT resources that inhibited past investments in new digital services.`,
  },
];

const questionsContainer = document.querySelector('#questions-container');

const createAccordion = (question) => {
  const item = document.createElement('div');
  item.classList.add('accordion-item');
  item.innerHTML = `
  <h2 class="accordion-header">
  <button
    class="accordion-button collapsed"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#${question.id}">
    Where exactly are you located?
    ${question.question}
  </button>
</h2>
<div
  id="${question.id}"
  class="accordion-collapse collapse"
  data-bs-parent="#questions">
  <div class="accordion-body">
    <strong>${question.answer}</strong>
  </div>
</div>`;

  return item;
};

const genQuestions = () => {
  questions.map((question) => {
    questionsContainer.appendChild(createAccordion(question));
  });
};

export default genQuestions;
