'use strict';
//terapias principales
const therapies = [
  {
    id: 'therapy-1',
    title: 'Infantil y juvenil',
    image: './assets/images/transgeneracional.jpeg',
    description: 'Los menores presentan las mismas dificultades que los adultos, salvo que sus manifestaciones se hacen en función de los recursos y capacidades propias de su edad y de su momento evolutivo. Nuestros pequeños se ven sometidos a distintas tensiones que les hacen sentir malestar que manifiestan con conductas de desorden, agresión, desobediencia, impulsividad….tanto en casa, como en el colegio o con sus iguales. Su desarrollo personal y académico puede verse afectado si no atendemos estas señales. En ocasiones, la intervención pasa por pautas que os ayudan a los padres a resolver el problema sin la necesidad de que el niño acuda a sesiones individuales. En otras, es necesario iniciar un trabajo de evaluación y diseño de tratamiento más específico para la situación conflictiva del menor. El trabajo con los padres, formando “equipo terapéutico”,es muy importante para poder ayudarle, junto con la coordinación con el colegio u otros profesionales si también fuera necesario.',
  },
  {
    id: 'therapy-13',
    title: 'Adultos',
    image: './assets/images/adultos.jpg',
    description: ['#Bienvenid@Todocambio.com', '#Hombres y mujeres maduros.', '#Arteterapia.', '#Valores para vivir la vida', '#Ante la soledad', '#Taller de transgresión', '#Preparación post-parto.', '#Familia funcional', '#Mentoring en competencias profesionales', '#Taller de transegresión adolescente', '#Adopción internacional'],
  },
  {
    id: 'therapy-2',
    title: 'De pareja',
    image: './assets/images/conect.png',
    description: 'Las exigencias a las que nos vemos sometidos en un mundo donde estar formado, trabajar y ser competitivo, dejar el hogar la mayor parte del día al tiempo que se ha de llevar, los hijos y su educación (o los no tenidos), la familia de que procedemos y nuestras inseguridades, pueden producir que el amor, la ilusión, los proyectos compartidos e individuales y apoyados; se puedan venir al traste. Os ofrecemos un espacio en el que poder volver a ser tú mismo/a junto a tu pareja. Sabemos que no resulta sencillo si la relación se ha deteriorado y se ve amenazada por la ruptura y las pérdidas. En nuestra experiencia, cambiar la perspectiva de abordaje, una comunicación que aclare las diferencias y conseguir mirar juntos en la misma dirección, genera el sentimiento y la certeza de que las segundas oportunidades pueden conseguir algo que parecía imposible en otros momentos.',
  },
  {
    id: 'therapy-3',
    title: 'De familia',
    image: './assets/images/familia.jpg',
    description: 'En las familias, a veces los momentos de transición y los cambios de sus miembros no son sencillos. Las diferencias generacionales, las pérdidas y los fracasos pueden requerir una intervención que oriente en encontrar una dirección, aquella que nos vuelva a hacer sentir que vale la pena seguir apostando por aquellos con los que mi sentimiento de pertenencia me tiene que ayudar a ser más yo, no a sentirme fuera de lugar o extraño entre los míos.',
  },
  {
    id: 'therapy-7',
    title: 'Coaching',
    image: './assets/images/achive.jpg',
    description: 'Actualizando los recursos disponibles desde distintos modelos de intervención, ofrecemos esta disciplina de novedosa tendencia. El acompañamiento en el descubrir los propios recursos personales para enfrentarnos a los retos laborales, personales, familiares…es la base de esta técnica. Entendemos que nuestra sólida formación psicológica avala y refuerza la consecución de los objetivos deseados.',
  },
  {
    id: 'therapy-8',
    title: 'Terapia EMDR',
    image: './assets/images/terapia-emdr.jpeg',
    description: 'Desde esta orientación terapéutica psicológica se reconoce el ser y sentir en relación con un otro, en una dinámica circular, supeditada al acompañamiento y re-experimentación personal, en el ámbito protegido del espacio de terapia. En el AQUI y el AHORA del momento presente.En ocasiones, respondemos a patrones aprendidos durante nuestra infancia y los re-interpretamos independientemente de la realidad externa. Se denominan patrones conservadores. En el proceso terapéutico se procede a actualizar esos patrones y favorecer la manifestación de una de las herramientas básicas del ser humano que es la creatividad. TERAPIA MODERADA POR EMDR. Desde un modelo integrador, añadimos al proceso terapéutico esta potentísima técnica, actualmente reconocida como altamente eficaz en procesos de trauma. Es la desensibilización y reprocesamiento de acontecimientos vividos en nuestra vida, de carácter altamente doloroso, a través del movimiento ocular (estimulación bilateral cerebral). Organizaciones médicas, como la APA (American Psyquiatric Associaton) y la OMS (Organización Mundial de la Salud) avalan los resultados en trastornos por estrés postraumático y cuadros asociados.',
  },
  //sección más terapias
  {
    id: 'therapy-4',
    title: 'De grupo infantil',
    image: './assets/images/children.jpg',
    description: 'Siempre que podemos y tenemos la posibilidad de formar un grupo de menores con edades y /o características similares, os planteamos la terapia grupal como forma de avanzar en el proceso. Somos lo que somos por la relación que mantenemos con los demás. Nos formamos y educamos en un entorno social que necesitamos para nuestro crecimiento emocional. Somos en relación con un otro. Temas como habilidades sociales, enfrentamiento al estrés, solución de problemas, técnicas de relajación…son habituales en estas dinámicas.',
  },
  {
    id: 'therapy-5',
    title: 'Asistida por animales',
    image: './assets/images/girl.jpg',
    description: 'Los animales han formado parte de nuestro sistema de subsistencia alimentaria y defensiva desde tiempos remotos. Así también se han ido forjando un espacio de acompañamiento personal a través de la domesticación de ciertas especies. La comunicación con ellos desde lo no verbal es obvia y disfrutada por todos aquellos que tenemos en casa animales de compañía. En el ámbito terapéutico entendemos esta expresión como una técnica mas de apoyo y sostén a nuestros pacientes. uestro co-terapeuta “TUSKO” nos tuvo que dejar hace tiempo y en la actualidad se esta preparando para ello una hermosa mestiza de galgo, "Laiya", que seguro será la continuidad de esta colaboración.',
  },
  {
    id: 'therapy-6',
    title: 'Arte-terapia',
    image: './assets/images/fantasy.jpg',
    description: 'El ser humano se caracteriza entre otras cosas , por su capacidad de expresión artística como forma de comunicación. Cuando no llegan las palabras precisas, cuando podemos expresarnos de otra forma….nuestra capacidad de comunicación se expande.',
  },
  {
    id: 'therapy-10',
    title: 'Procesos adoptivos',
    image: './assets/images/adopcion.jpg',
    description: 'Formamos parte de la lista profesional para la adopción internacional del Colegio Oficial de Psicólogos de Madrid. Desde el año 1999 hemos generado unos 190 informes destinados para la adopción internacional de menores susceptibles de ser adoptados. En el ámbito terapéutico hemos visto pasar una generación de quienes fueron menores adoptados y, a algunos de ellos y a sus familias, les hemos atendido. Tener una visión del proceso preadoptivo y postadoptivo, nos ayuda a entender las dificultades de mutua adaptación por las que pasan estas familias.',
  },
  {
    id: 'therapy-11',
    title: 'Formación',
    image: './assets/images/conect.png',
    description: 'Colaboramos desde hace ya diez años como docentes en dos centros de formación de Terapia Familiar Sistémica. ATENEA e ITAD. Colaborar en la formación integral de profesionales de la atención psicosocial (psicólogos, psiquiatras, trabajadores sociales y educadores sociales) nos hace sentir que aportamos un granito de arena entregando algo de lo que nuestra formación y experiencia profesional desde la intervención nos entregáis las personas que atendemos, vuestra humanidad. Nosotros la acogemos y la mostramos con términos técnicos, con herramientas diseñadas y validadas para el cambio y promovemos intervenciones profesionales desde la aceptación absoluta e incondicional de las personas y las familias.',
  },
  {
    id: 'therapy-12',
    title: 'Talleres',
    image: './assets/images/procesos-terapia-3.jpeg',
    description: ['#Bienvenid@Todocambio.com', '#Hombres y mujeres maduros.', '#Arteterapia.', '#Valores para vivir la vida', '#Ante la soledad', '#Taller de transgresión', '#Preparación post-parto.', '#Familia funcional', '#Mentoring en competencias profesionales', '#Taller de transegresión adolescente', '#Adopción internacional'],
  },
  {
    id: 'therapy-9',
    title: 'Crecimiento en competencias profesionales y el ámbito laboral',
    image: './assets/images/achive.jpg',
    description: 'Tanto para jóvenes como para profesionales maduros, no es sencillo desempeñarse en un mundo tan competitivo. El mundo del trabajo se hace cada vez más exigente en el que debemos conocer bien nuestra profesión que se ha de ver enriquecida con conocimiento de otros ámbitos y, más que nunca, se valoran las competencias profesionales. Te ofrecemos un apoyo y orientación para que te conozcas más y mejor en el ámbito competencial, para que mejores la seguridad en ti mismo para tu desempeño profesional y que, tanto si trabajas con personas a tu cargo, como sólo o para ti; sepas alcanzar un desempeño óptimo disfrutando cada jornada laboral de lo que haces.',
  },
];

//pintar la lista de terapias principales
const therapyGrid = document.querySelector('.cards');
//estructura html de cada terapia
function renderCard(therapy) {
  let codeHTML = '';
  codeHTML += `<article data-id="${therapy.id}" class="card">`;
  codeHTML += `<div>`;
  codeHTML += `<h2 class="card__title">${therapy.title}</h2>`;
  codeHTML += `<img class="card__img" src=${therapy.image} alt="foto de ${therapy.title}" title=${therapy.title} />`;
  codeHTML += `</div>`;
  codeHTML += '</article>';
  codeHTML += `<div class="modal" id="modalcontainer"></div>`;
  return codeHTML;
}
//bucle que recorre el array para pintar cada tarjeta
const paintCards = () => {
  let therapiesHTML = '';
  therapies.forEach((therapy) => {
    therapiesHTML += renderCard(therapy);
  });
  therapyGrid.innerHTML = therapiesHTML;
};
//función para enseñar la modal al pinchar en una tarjeta
function showModal(id) {
  let modalItem = therapies.find((therapy) => {
    return therapy.id === id;
  });
  //estructura html de la tarjeta modal
  const modal = document.getElementById('modalcontainer');
  let modalHTML = '';
  modalHTML += `<aside class='modal-container' id=${modalItem.id}>`;
  modalHTML += `<span class='js-close modal__close' id="btnClose">X</span>`;
  modalHTML += `<h2 class='modal__title'>${modalItem.title}</h2>`;
  modalHTML += `<p class='modal__text'>${modalItem.description}</p>`;
  modalHTML += `</aside>`;
  modal.innerHTML = modalHTML;
  modal.classList.add('show');
  //cerrar la modal a través de la X
  const btnCloseModal = document.getElementById('btnClose');
  btnCloseModal.addEventListener('click', () => {
    const info = document.getElementById('modalcontainer');
    info.classList.remove('show');
  });
}
//función para encontrar el id de la tarjeta clickada y pasarselo por parámetros a la modal
function attachEvents() {
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      //
      let id = card.attributes['data-id'].value;

      showModal(id);
    });
  });
}
//función para que aparezca la flecha al hacer scroll

const arrow = document.querySelector('.arrow');

const arrowappears = () => {
  if (window.scrollY >= 25) {
    arrow.classList.add('arrow-appear');
  } else if (window.scrollY < 10) {
    arrow.classList.remove('arrow-appear');
  }
};
window.addEventListener('scroll', arrowappears);

paintCards();

attachEvents();
