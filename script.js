 // Seleciona todos os links que possuem um href que começa com #
 const links = document.querySelectorAll('a[href^="#"]');

 // Adiciona evento de clique para cada link
 links.forEach(link => {
     link.addEventListener('click', (event) => {
         event.preventDefault(); // Impede o comportamento padrão do link

         // Seleciona a seção de destino
         const targetId = link.getAttribute('href').substring(1); // Pega o valor do href sem o "#"
         const targetSection = document.getElementById(targetId);

         // Calcula o deslocamento da barra de navegação fixa
         const offsetTop = targetSection.offsetTop - 60; // Ajuste de 60px (altura da barra de navegação fixa)

         // Rola suavemente até a seção
         window.scrollTo({
             top: offsetTop,
             behavior: 'smooth'
         });
     });
 });

 //Animação do scroll
 const elemento = document.querySelectorAll('.hidden');
 const element = document.querySelectorAll('.hidden2');

 const olha = new IntersectionObserver((entries) => {
    entries.forEach((entre) => {
        if(entre.isIntersecting){
            entre.target.classList.add('show')
        }else{
            entre.target.classList.remove('show')
        }
    })
 })

 elemento.forEach((secao) =>  olha.observe(secao));

 const olha2 = new IntersectionObserver((entries) => {
    entries.forEach((entre) => {
        if(entre.isIntersecting){
            entre.target.classList.add('show2')
        }else{
            entre.target.classList.remove('show2')
        }
    })
 })

 element.forEach((secao) =>  olha2.observe(secao));

 // Seleciona todos os projetos ocultos
const projetosOcultos = document.querySelectorAll('.projeto-oculto');

const observerProjetos = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('projeto-visivel');
            }, index * 300); // Atraso progressivo (300ms por projeto)
        }else {
            entry.target.classList.remove('projeto-visivel');
        }
    });
}, { threshold: 0.2 });

projetosOcultos.forEach((projeto) => observerProjetos.observe(projeto));
