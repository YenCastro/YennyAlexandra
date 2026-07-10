// main.js
const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    
    "hero.subtitle": "Full Stack Developer",
    "hero.title1": "Construyendo puentes entre el",
    "hero.title2": "Diseño y el Código",
    "hero.desc": "Desarrolladora apasionada por crear experiencias web inmersivas y arquitecturas robustas. Transformando ideas complejas en soluciones elegantes, con un toque de magia estelar.",
    "hero.btn.projects": "Ver Proyectos",
    "hero.btn.contact": "Contáctame",
    
    "tech.title": "TECNOLOGÍAS PRINCIPALES",
    
    "proj.title": "Mis Proyectos",
    "proj.desc": "Explora una selección de mis trabajos más destacados, donde combino diseño celestial con ingeniería de software robusta.",
    "proj.btn.demo": "Demo",
    "proj.btn.repo": "Código",
    "proj.btn.preview": "Vista Previa",
    
    "proj.trendy.desc": "E-commerce desarrollado en grupo durante la Hackathon Generation. Experiencia de compra moderna y dinámica enfocada en la usabilidad.",
    "proj.scrum.desc": "Simulación de un proyecto de desarrollo bajo la metodología ágil SCRUM. Enfoque en la planificación, sprints y entrega de valor continuo.",
    "proj.chat.desc": "Aplicación interactiva de chat que permite explorar y comunicarse en un entorno simulado del metaverso de datos. Interfaz inmersiva.",
    "proj.anime.desc": "Plataforma inmersiva para descubrir y seguir series de anime. Sistema de recomendaciones basado en preferencias estelares.",
    "proj.data.desc": "Herramienta para procesar datos astronómicos. Visualizaciones interactivas utilizando WebGL para mapear constelaciones de datos.",
    "proj.bank.desc": "Arquitectura financiera robusta y segura. Diseño enfocado en la transparencia para reflejar la claridad de las transacciones.",
    
    "exp.title": "Trayectoria",
    "exp.desc": "Un viaje a través del desarrollo profesional y la formación técnica, constelando experiencias clave que definen mi perfil como Full Stack Developer.",
    "exp.prof": "Experiencia Profesional",
    "exp.onelink.desc": "Desarrollo de habilidades blandas, resolución de problemas bajo presión y atención al detalle en entornos dinámicos, estableciendo una base sólida para la comunicación efectiva en equipos técnicos.",
    "exp.henkel.desc": "Gestión de estrategias comerciales, análisis de datos en punto de venta y optimización de procesos operativos, aportando visión analítica aplicable al desarrollo de productos digitales.",
    "exp.edu": "Educación Continua",
    "exp.lab.desc": "Formación inmersiva en desarrollo web front-end. Construcción de aplicaciones interactivas, consumo de APIs y metodologías ágiles bajo un enfoque de aprendizaje continuo y colaborativo.",
    "exp.gen.desc": "Especialización en tecnologías back-end y front-end. Diseño de bases de datos, creación de APIs RESTful con Spring Boot y desarrollo de interfaces con Angular.",
    "exp.sena.desc": "Fundamentos sólidos en análisis y desarrollo de sistemas de información. Bases de ingeniería de software, modelado de datos y fundamentos de programación estructurada.",
    
    "contact.title": "Conectemos",
    "contact.desc": "Si tienes un proyecto en mente, una oportunidad de colaboración o simplemente quieres decir hola, me encantaría escucharte.",
    "contact.loc": "Ubicación",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.subj": "Asunto",
    "contact.msg": "Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.p.name": "Tu nombre",
    "contact.p.email": "tu@email.com",
    "contact.p.subj": "¿De qué quieres hablar?",
    "contact.p.msg": "Escribe tu mensaje aquí...",
    
    "skills.title": "Arsenales Técnicos",
    "skills.desc": "Navegando a través de constelaciones de código y arquitecturas de datos. Un recorrido por las herramientas y lenguajes que impulsan mis creaciones digitales.",
    "skills.core": "Desarrollo Core",
    "skills.env": "Entorno & Herramientas",
    "skills.db": "Bases de Datos",
    "skills.lang": "Idiomas",
    "skills.lang.es": "Español (Nativo)",
    "skills.lang.en": "Inglés (B2)",
    
    "footer.desc": "© 2026 Yenny Alexandra Castro Manjarrez. Diseñado con magia.",
    "modal.loading": "Cargando preview..."
  },
  en: {
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    
    "hero.subtitle": "Full Stack Developer",
    "hero.title1": "Building bridges between",
    "hero.title2": "Design and Code",
    "hero.desc": "Passionate developer creating immersive web experiences and robust architectures. Transforming complex ideas into elegant solutions with a touch of stellar magic.",
    "hero.btn.projects": "View Projects",
    "hero.btn.contact": "Contact Me",
    
    "tech.title": "CORE TECHNOLOGIES",
    
    "proj.title": "My Projects",
    "proj.desc": "Explore a selection of my most prominent works, combining celestial design with robust software engineering.",
    "proj.btn.demo": "Demo",
    "proj.btn.repo": "Code",
    "proj.btn.preview": "Preview",
    
    "proj.trendy.desc": "E-commerce developed in a group during Generation Hackathon. Modern and dynamic shopping experience focused on usability.",
    "proj.scrum.desc": "Simulation of a development project under the agile SCRUM methodology. Focus on planning, sprints, and continuous value delivery.",
    "proj.chat.desc": "Interactive chat application that allows exploring and communicating in a simulated data metaverse environment. Immersive interface.",
    "proj.anime.desc": "Immersive platform to discover and track anime series. Recommendation system based on stellar preferences.",
    "proj.data.desc": "Tool for processing astronomical data. Interactive visualizations using WebGL to map data constellations.",
    "proj.bank.desc": "Robust and secure financial architecture. Design focused on transparency to reflect the clarity of transactions.",

    "exp.title": "My Journey",
    "exp.desc": "A journey through professional development and technical training, constellating key experiences that define my Full Stack Developer profile.",
    "exp.prof": "Professional Experience",
    "exp.onelink.desc": "Soft skills development, problem-solving under pressure, and attention to detail in dynamic environments, establishing a solid foundation for effective communication in tech teams.",
    "exp.henkel.desc": "Management of commercial strategies, data analysis at the point of sale, and optimization of operational processes, providing analytical vision applicable to digital product development.",
    "exp.edu": "Continuous Education",
    "exp.lab.desc": "Immersive training in front-end web development. Building interactive applications, API consumption, and agile methodologies under a continuous and collaborative learning approach.",
    "exp.gen.desc": "Specialization in back-end and front-end technologies. Database design, creation of RESTful APIs with Spring Boot, and interface development with Angular.",
    "exp.sena.desc": "Solid foundations in systems analysis and development. Software engineering bases, data modeling, and fundamentals of structured programming.",

    "contact.title": "Let's Connect",
    "contact.desc": "If you have a project in mind, a collaboration opportunity, or just want to say hi, I'd love to hear from you.",
    "contact.loc": "Location",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.subj": "Subject",
    "contact.msg": "Message",
    "contact.send": "Send Message",
    "contact.p.name": "Your name",
    "contact.p.email": "you@email.com",
    "contact.p.subj": "What do you want to talk about?",
    "contact.p.msg": "Write your message here...",

    "skills.title": "Technical Arsenals",
    "skills.desc": "Navigating through constellations of code and data architectures. A journey through the tools and languages that power my digital creations.",
    "skills.core": "Core Development",
    "skills.env": "Environment & Tools",
    "skills.db": "Databases",
    "skills.lang": "Languages",
    "skills.lang.es": "Spanish (Native)",
    "skills.lang.en": "English (B2)",
    
    "footer.desc": "© 2026 Yenny Alexandra Castro Manjarrez. Designed with magic.",
    "modal.loading": "Loading preview..."
  }
};

class PortfolioApp {
  constructor() {
    this.currentLang = localStorage.getItem('lang') || 'es';
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupNavbarScroll();
    this.setupCanvasStars();
    this.setupTheme();
    this.setupLanguage();
    this.setupModals();
  }

  setupTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'dark';
    
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    if (themeToggleBtn) {
      this.updateThemeIcon(themeToggleBtn, savedTheme);
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        if (newTheme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        } else {
          document.documentElement.removeAttribute('data-theme');
        }
        
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(themeToggleBtn, newTheme);
      });
    }
  }

  updateThemeIcon(btn, theme) {
    const icon = btn.querySelector('.material-symbols-outlined');
    if (icon) {
      icon.textContent = theme === 'light' ? 'dark_mode' : 'light_mode';
    }
  }

  setupLanguage() {
    const langToggleBtn = document.getElementById('lang-toggle');
    this.applyTranslations();

    if (langToggleBtn) {
      langToggleBtn.textContent = this.currentLang.toUpperCase();
      langToggleBtn.addEventListener('click', () => {
        this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', this.currentLang);
        langToggleBtn.textContent = this.currentLang.toUpperCase();
        this.applyTranslations();
      });
    }
  }

  applyTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    const dict = translations[this.currentLang];
    if (!dict) return;
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });
  }

  setupModals() {
    const modal = document.getElementById('preview-modal');
    if (!modal) return;
    
    const iframe = document.getElementById('preview-iframe');
    const closeBtn = document.getElementById('close-modal');
    const spinner = modal.querySelector('.loading-spinner');
    
    document.querySelectorAll('.btn-preview').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.getAttribute('data-url');
        if (url) {
          iframe.style.opacity = '0';
          spinner.style.display = 'flex';
          iframe.src = url;
          modal.classList.add('active');
          
          iframe.onload = () => {
            spinner.style.display = 'none';
            iframe.style.opacity = '1';
          };
        }
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      setTimeout(() => { iframe.src = ''; }, 300);
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        setTimeout(() => { iframe.src = ''; }, 300);
      }
    });
  }

  setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('active');
        const icon = btn.querySelector('.material-symbols-outlined');
        if (menu.classList.contains('active')) {
          icon.textContent = 'close';
        } else {
          icon.textContent = 'menu';
        }
      });
    }
  }

  setupNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  }

  setupCanvasStars() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height, stars = [], shootingStars = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((width * height) / 2500);
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          twinkleSpd: (Math.random() * 0.02) + 0.005,
          color: Math.random() > 0.8 ? '0, 213, 213' : '244, 246, 249'
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const isLightMode = document.documentElement.getAttribute('data-theme') === 'light';
      
      stars.forEach(star => {
        star.alpha += star.twinkleSpd;
        if (star.alpha > 1 || star.alpha < 0.1) {
          star.twinkleSpd *= -1;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Adjust star color based on theme
        if (isLightMode) {
           const colors = ['217, 70, 239', '2, 132, 199', '234, 179, 8']; // fuchsia, blue, yellow
           const cIndex = Math.floor(star.x % 3);
           ctx.fillStyle = `rgba(${colors[cIndex]}, ${star.alpha * 0.7})`; 
        } else {
           ctx.fillStyle = `rgba(${star.color}, ${star.alpha})`;
        }
        
        ctx.fill();
      });

      if (Math.random() < 0.01 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * width,
          y: 0,
          length: 60 + Math.random() * 80,
          speed: 6 + Math.random() * 4,
          angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1)
        });
      }

      shootingStars.forEach((ss, i) => {
        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;
        
        const grad = ctx.createLinearGradient(ss.x, ss.y, tailX, tailY);
        if (isLightMode) {
          grad.addColorStop(0, 'rgba(217, 70, 239, 0.8)');
          grad.addColorStop(0.1, 'rgba(2, 132, 199, 0.5)');
          grad.addColorStop(1, 'rgba(234, 179, 8, 0)');
        } else {
          grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
          grad.addColorStop(0.1, 'rgba(0, 213, 213, 0.8)');
          grad.addColorStop(1, 'rgba(0, 213, 213, 0)');
        }
        
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;

        if (ss.y > height || ss.x > width) {
          shootingStars.splice(i, 1);
        }
      });

      requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});
