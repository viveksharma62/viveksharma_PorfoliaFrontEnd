import React, { useState } from 'react';
import './Project.css';
import WeatherWeb from '../../assets/images/weather-application.png';
import tejasAss from '../../assets/images/tejas.png';
import TextUtil from '../../assets/images/text-utils.png';
import BMS from '../../assets/images/bankmanagementsystem1.png';
import AiImage from '../../assets/images/AiImages.png'

const Projects = () => {
  const projectData = [
    {
      title: 'AI Image Generator',
      image: AiImage,
      badges: ['MongoDB', 'Express', 'React', 'Node'],
      tag: 'Responsive',
      link: 'https://viveksharma62-image-zenerated.vercel.app/',
    },
    {
      title: 'Hotstar clone website',
      image: 'https://repository-images.githubusercontent.com/618076926/821b1ab6-7853-4e1c-857d-f91dc1362bd2',
      badges: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
      tag: 'Responsive',
      link: 'https://viveksharma62.github.io/hotstarClone_Project/hotstar.html?',
    },
    {
      title: 'Gmail Clone',
      image: 'https://media.iqonic.design/iqonic-design/wp-content/uploads/2021/08/01_imail-small-preview-min.jpg',
      badges: ['Node', 'Express', 'React', 'MongoDB'],
      tag: 'Full stack',
      link: 'https://viveksharma62.github.io/Thankyou/',
    },
    {
      title: 'Weather Application',
      image: WeatherWeb,
      badges: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
      tag: 'Front-end',
      link: 'https://viveksharma62.github.io/Thankyou/',
    },
    {
      title: 'Tejas Assistance',
      image: tejasAss,
      badges: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
      tag: 'Front-end',
      link: 'https://tejas-assitance.vercel.app/',
    },
    {
      title: 'Text Utils',
      image: TextUtil,
      badges: ['Html', 'React', 'CSS', 'Bootstrap'],
      tag: 'Front-end',
      link: 'https://text-utils-project-green.vercel.app/',
    },
    {
      title: 'Banking Management System',
      image: BMS,
      badges: ['Java', 'Swing', 'Servlets', 'PHPMyadmin'],
      tag: 'Full stack',
      link: 'https://text-utils-project-green.vercel.app/',
    },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < projectData.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const project = projectData[index];

  return (
    <div className='container text-center' id='project'>
      <h2 className='mt-3 mb-1 text-uppercase'>TOP RECENT PROJECT</h2>
      <hr />
      <p className='pb-3'>
        👉 Hi guys, I’m Vivek Kumar, a MERN stack developer. These are some of my projects built with HTML, CSS, JavaScript, React, Node, MongoDB, etc. I'm currently learning Android development.
      </p>

      {/* Project Card */}
      <div className='card-container'>
        <div className='card rounded m-auto'>
          <div className='card-image'>
            <span className='card-notify-badge'>{project.tag}</span>
            <img src={project.image} alt='project' className='img-fluid' />
          </div>
          <div className='card-image-overly mt-3'>
            {project.badges.map((badge, i) => (
              <span key={i} className='card-detail-badge'>{badge}</span>
            ))}
          </div>
          <div className='card-body'>
            <h5 className='text-uppercase'>{project.title}</h5>
            <a className='ad-btn' href={project.link} target='_blank' rel='noreferrer'>Live</a>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div
        className='d-flex justify-content-between align-items-center mt-4'
        style={{ maxWidth: '400px', margin: 'auto' }}
      >
        {index > 0 && (
          <button className='btn btn-primary' onClick={handlePrev}>
            ⏮ Prev
          </button>
        )}
        {index < projectData.length - 1 && (
          <button className='btn btn-primary' onClick={handleNext}>
            Next ⏭
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
    