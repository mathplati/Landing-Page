            const navLinks = document.querySelectorAll('nav a');
            const sections = document.querySelectorAll('.section');

            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault(); 
                    const targetId = link.getAttribute('href').substring(1); 
                    const targetSection = document.getElementById(targetId); 
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                });
            });

            function highlightActiveLink() {
                let index = -1;
                sections.forEach((section, i) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        index = i;
                    }
                });
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                if (index !== -1) {
                    navLinks[index].classList.add('active');
                }
            }

            window.addEventListener('scroll', highlightActiveLink);
            highlightActiveLink(); 

            const sectionsToAnimate = document.querySelectorAll('.section');

            function animateSections() {
                sectionsToAnimate.forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                        section.classList.add('animated');
                    } else {
                        section.classList.remove('animated');
                    }
                });
            }

            window.addEventListener('scroll', animateSections);
            animateSections(); 

            const hamburger = document.querySelector('.hamburger');
            const menu = document.querySelector('.navbar ul');
            if (hamburger) {
                hamburger.addEventListener('click', () => {
                    menu.classList.toggle('show');
                });
            }

            const form = document.querySelector('#form-inscricao');
            form.addEventListener('submit', function(e) {
                const email = form.querySelector('#email');
                if (!email.value) {
                    e.preventDefault();
                    alert('O campo de e-mail é obrigatório!');
                } else {
                    alert('Inscrição realizada com sucesso!');
                }
            });

            const prevButton = document.querySelector('.carousel .prev');
            const nextButton = document.querySelector('.carousel .next');
            const slides = document.querySelector('.carousel .slides');
            let currentIndex = 0;

            function moveCarousel() {
                slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            }

            prevButton.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    moveCarousel();
                }
            });

            nextButton.addEventListener('click', function() {
                if (currentIndex < slides.children.length - 1) {
                    currentIndex++;
                    moveCarousel();
                }
            });
        });

        function validarFormulario() {
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            if (nome === "" || email === "") {
                alert("Por favor, preencha todos os campos.");
                return false;
            }
            return true;
        }
