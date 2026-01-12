
      
       document.addEventListener('DOMContentLoaded', () => {

                  //pega as divs com a cena e o loading
                  const cena = document.querySelector('#modelo');
                  const cenaPrincipal = document.querySelector('#cenaPrincipal');
                  const loading = document.querySelector('#loading');

                  //adiciona o evento de inicialização
                  cena.addEventListener('componentinitialized',() =>{
                    console.log('Entrou na inicialização');
                    cenaPrincipal.style.display = 'none';

                  })
                  //adiconar o evento de termino de inicialização 
                  cena.addEventListener('loaded',()=>{
                    console.log('terminou a inicialização');
                    cenaPrincipal.style.display = 'block';
                    loading.style.display = 'none'
                  }) 

                  //pega tods os elementos 
                  const animacao =             document.querySelector('#animacao');
                  
                  const sky =                  document.querySelector("#ambiente");
                  const btnCentroShowroom =    document.querySelector("#btnCentroShowroom");
                  const btnBalizadores =       document.querySelector("#btnBalizadores");
                  const btnRefletores =        document.querySelector("#btnRefletores");
                  const btnMesas =             document.querySelector("#btnMesas");
                  const btnMesaAwei =          document.querySelector("#btnMesaAwei");
                  const btnFitas =             document.querySelector("#btnFitas");
                  const btnPendentes =         document.querySelector("#btnPendentes");
                  const btnArandelaDecor1 =    document.querySelector("#btnArandelaDecor1");
                  const btnArandelaDecor2 =    document.querySelector("#btnArandelaDecor2");

                  //pega todos os elementos do menu
                  const menuConfig =           document.querySelector('#menuConfig');
                  const btnConfig =            document.querySelector('#btnConfig');
                  const btnHome =              document.querySelector('#btnHome');
                  
                  //icones do menu config
                  const iconeAtivarAnimacao = document.querySelector('#iconeAtivarAnimacao');
                  

                  //botoes do menu config
                  const btnAtivarAnimacao =    document.querySelector('#btnAtivarAnimacao'); 
                  
                  const btnFacebook = document.querySelector('#btnFacebook');
                  const btnInstagram = document.querySelector('#btnInstagram');
                  const btnWhatsapp = document.querySelector('#btnWhatsapp');

                  //pega a div principal dos panoramas a centralizada em baixo 
                  const panoramas = document.querySelector('#panoramasLabel');

                  //pega a div que vai armazenar as cenas 
                  const cenas_showroom = document.querySelector('.divisorias');
                  const divCenas = document.querySelector('#cenasShowroom');
                  //pegas todas as classes que vao receber uma imagem dinamicamente 
                  const imagens_cenas = document.querySelectorAll('.imagens_cenas');
                  //pegas todas as referencia de imagens do assets
                  const assets_refletores = document.querySelector('#refletores');
                  const assets_arandelas1 = document.querySelector('#arandela1');
                  const assets_arandelas2 = document.querySelector('#arandela2');
                  const assets_awei_mesa = document.querySelector('#awei-mesa');
                  const assets_fitas = document.querySelector('#fitas');
                  const assets_balizadores = document.querySelector('#balizadores');
                  const assets_centro_showroom = document.querySelector('#centro_showroom');
                  const assets_pendentes = document.querySelector('#pendentes');
                  const assets_mesas = document.querySelector('#mesas');

                  const listaRefencia =[
                    assets_arandelas1.src,
                    assets_arandelas2.src,
                    assets_awei_mesa.src,
                    assets_balizadores.src,
                    assets_centro_showroom.src,
                    assets_fitas.src,
                    assets_mesas.src,
                    assets_pendentes.src,
                    assets_refletores.src
                  ];

                  function listar_panoramas(){
                    console.log("está entrando nas imagens");
                    console.log(listaRefencia.assets_arandelas1);
                    console.log(cenas_showroom);
                  }

                  //abre a div que está com os panoramas
                  panoramas.addEventListener('click',()=>{
                    //faz a listagem das imagens do paranorama 
                    listar_panoramas();
                    //pega o style que está definido 
                    let result = window.getComputedStyle(divCenas);
                    //verifica se esta como none ou flex 
                    if(result.display === 'none'){
                      divCenas.style.display = 'flex';
                    }else{
                      divCenas.style.display = 'none';
                    }
                  })
                  

                  //abre uma nova guia do facebook Galaxy 
                  btnFacebook.addEventListener('click',()=>{
                      window.open('https://www.facebook.com/galaxyledbr/', '_blank');

                  })

                  //abare uma nova guia com a pagina do instagram
                  btnInstagram.addEventListener('click',()=>{
                      window.open('https://www.instagram.com/galaxyledbr/', '_blank');

                  })

                  //abre uma nova guia com um layout pronto da guia para conversar com no whatsapp da galaxy
                  btnWhatsapp.addEventListener('click',()=>{
                        window.open('https://wa.me/5511991526976?text=Ol%C3%A1!%20%F0%9F%91%8B%0A%0AEu%20vim%20do%20tour%20virtual%20e%20tenho%20interesse%20em%20ver%20mais%20dos%20seus%20produtos.%20Poderia%20me%20enviar%20mais%20informa%C3%A7%C3%B5es,%20por%20favor%3F%20%F0%9F%98%8A', '_blank')
                  }); 

                  //adiciona funcoes aos botoes do menu de configurações
                  btnAtivarAnimacao.addEventListener('click',()=>{
                    ativarAnimacao();
                  })

                  //abre e fecha o menu
                  btnConfig.addEventListener('click',() =>{
      
                    let resultado = window.getComputedStyle(menuConfig)
                    console.log(resultado.display);
                    if(resultado.display === 'none'){
                      menuConfig.style.display = "block";
                    }else{
                      menuConfig.style.display = 'none';  
                    }
                  });
                  
                  // coloca a funcão de voltar ao inicio, centro do showroom
                  btnHome.addEventListener('click',()=>{
                      Centro();
                  });
                  
                  //sai do menu quando clicar em qualquer area fora da div menu 
                  cena.addEventListener('click',()=>{
                    let resultado = window.getComputedStyle(menuConfig)
                    if(resultado.display === 'block')
                      menuConfig.style.display = 'none';  
                    });
                  

                  function ativarAnimacao(){
                    //pega o controle de animação
                    
                    let valorAnima = animacao.components['animation__rot'];
                    //console.log(valorAnima);
                    //pega a propriedade que verifica se a animacao esta acontecendo
                    let isPlay = valorAnima.isPlaying;
                    
                    if(isPlay == false){
                      animacao.components['animation__rot'].play()
                      iconeAtivarAnimacao.setAttribute('class','fa-solid fa-eye fa-2x');
                    }
                    else{
                      animacao.components['animation__rot'].pause()
                      iconeAtivarAnimacao.setAttribute('class','fa-regular fa-eye fa-2x');
                    }
                  }

                  function LimparPontos(){
                              btnBalizadores.setAttribute('visible',false);
                              btnArandelaDecor1.setAttribute('visible',false);
                              btnArandelaDecor2.setAttribute('visible',false);
                              btnCentroShowroom.setAttribute('visible',false);
                              btnFitas.setAttribute('visible',false);
                              btnMesaAwei.setAttribute('visible',false);
                              btnMesas.setAttribute('visible',false);
                              btnPendentes.setAttribute('visible',false);
                              btnRefletores.setAttribute('visible',false);

                              btnBalizadores.classList.remove('hotspot');
                              btnArandelaDecor1.classList.remove('hotspot');
                              btnArandelaDecor2.classList.remove('hotspot');
                              btnCentroShowroom.classList.remove('hotspot');
                              btnFitas.classList.remove('hotspot');
                              btnMesaAwei.classList.remove('hotspot');
                              btnMesas.classList.remove('hotspot');
                              btnPendentes.classList.remove('hotspot');
                              btnRefletores.classList.remove('hotspot');
                  }

                  //#region Posições e rotações
                  //posições  que ficam na Imagem Centro Showroom 
                  const posicoesCentroShowroom = {
                      pendentes : "4 1.2 0",
                      mesas : "-2.2 1.2 -4",
                      fitas : "-2 1.2 -1",
                      balizadores: "-4 1.2 0"
                  }
                  
                  
                  //posições que ficam na Imagem Refletores
                  const posicoesRefletores={
                    centroShowroom : "-1.9 1.2 4",
                    balizadores : "0 1.2 4"
                  }

                  
                  //posições que ficam na Imagem arandelaDecor1
                  const posicoesArandelaDecor1 = {
                    centroShowroom : "3.3 1.2 6",
                    mesas: "1 1.2 6",
                    fitas : "2.5 1.2 3.5",
                    pendentes: "4 1.2 -1",
                    arandelaDecor2 : "-4 1.2 1.5" 
                  }

                  

                  //posições que ficam na Imagem arandelaDecor2
                  const posicoesArandelaDecor2 ={
                    arandelaDecor1 : "-3 1.2 5",
                    mesas : "0.2 1.2 -4"
                  }

                  //posições que ficam na Imagem awei mesa
                  const posicoesAweimesa= {
                    pendentes : "-0.2 1.2 4",
                    fitas : "-4 1.2 -2",
                    arandelaDecor1 : "1 1.2 2"
                  }
                  
                  //posições que ficam na Imagem Fitas
                  const posicoesFitas ={
                    refletores : "-4 1.2 -4",
                    mesaAwei : "-5 1.2 2.5",
                    mesas : "-2.5 1.2 2.5",
                    pendentes : "-8 1.2 0"
                  }


                  //posições que ficam na Imagem balizadores
                  const posicoesBalizadores = {
                    refletores : "-6 1.2 -0.4"
                  }

                  //posições que ficam na Imagem pendentes
                  const posicoesPendentes = {
                    refletores : "-3.8 1.2 4"
                  }

                  //posições que ficam na Imagem Mesas
                  const posicoesMesas = {
                    arandelaDecor2 : "2.5 1.2 8",
                    arandelaDecor1 : "-2 1.2 6",
                    mesaAwei : "0 1.2 5",
                    centroShowroom : "-3 1.2 -1",
                    fitas : "-0.4 1.2 -3"
                  }

      //#endregion
                  //#region Funções para mudança de marcadores
                  function refletores(){
                              sky.setAttribute('src', '#refletores');
                              LimparPontos()  ;   
                              btnBalizadores.setAttribute('visible',true);
                              btnCentroShowroom.setAttribute('visible',true);
                            
                              
                              btnBalizadores.setAttribute('position',posicoesRefletores.balizadores);
                              btnCentroShowroom.setAttribute('position',posicoesRefletores.centroShowroom);
                  }
                  function balizadores(){
                              sky.setAttribute('src', '#balizadores');
                              LimparPontos()
                              btnRefletores.setAttribute('visible',true);

                              btnRefletores.setAttribute('position',posicoesBalizadores.refletores);
                  }
                  function arandelaDecor1(){
                              sky.setAttribute('src', '#arandela1');
                              LimparPontos();
                              btnArandelaDecor2.setAttribute('visible',true);
                              btnCentroShowroom.setAttribute('visible',true);
                              btnFitas.setAttribute('visible',true);
                              btnMesas.setAttribute('visible',true);
                              btnPendentes.setAttribute('visible',true);

                              btnArandelaDecor2.setAttribute('position',posicoesArandelaDecor1.arandelaDecor2);
                              btnCentroShowroom.setAttribute('position',posicoesArandelaDecor1.centroShowroom);
                              btnFitas.setAttribute('position',posicoesArandelaDecor1.fitas);
                              btnMesas.setAttribute('position',posicoesArandelaDecor1.mesas);
                              btnPendentes.setAttribute('position',posicoesArandelaDecor1.pendentes);
                  }
                  function arandelaDecor2(){
                              sky.setAttribute('src', '#arandela2');
                              LimparPontos();
                              btnArandelaDecor1.setAttribute('visible',true);
                              btnMesas.setAttribute('visible',true);

                              btnArandelaDecor1.setAttribute('position',posicoesArandelaDecor2.arandelaDecor1);
                              btnMesas.setAttribute('position',posicoesArandelaDecor2.mesas);
                  }
                  function Centro(){
                              sky.setAttribute('src', '#centro_showroom');
                              LimparPontos();
                              btnBalizadores.setAttribute('visible',true);
                              btnFitas.setAttribute('visible',true);
                              btnMesas.setAttribute('visible',true);
                              btnPendentes.setAttribute('visible',true);
                              
                              btnBalizadores.setAttribute('position',posicoesCentroShowroom.balizadores);
                              btnFitas.setAttribute('position',posicoesCentroShowroom.fitas);
                              btnMesas.setAttribute('position',posicoesCentroShowroom.mesas);
                              btnPendentes.setAttribute('position',posicoesCentroShowroom.pendentes);
                  }
                  function Fitas(){
                              sky.setAttribute('src', '#fitas');
                              LimparPontos();
                              btnMesaAwei.setAttribute('visible',true);
                              btnMesas.setAttribute('visible',true);
                              btnPendentes.setAttribute('visible',true);
                              btnRefletores.setAttribute('visible',true);

                              btnMesaAwei.setAttribute('position',posicoesFitas.mesaAwei);
                              btnMesas.setAttribute('position',posicoesFitas.mesas);
                              btnPendentes.setAttribute('position',posicoesFitas.pendentes);
                              btnRefletores.setAttribute('position',posicoesFitas.refletores);
                  }
                  function Mesas(){
                              sky.setAttribute('src', '#mesas');
                              LimparPontos();
                              btnArandelaDecor1.setAttribute('visible',true);
                              btnArandelaDecor2.setAttribute('visible',true);
                              btnCentroShowroom.setAttribute('visible',true);
                              btnFitas.setAttribute('visible',true);
                              btnMesaAwei.setAttribute('visible',true);

                              btnArandelaDecor1.setAttribute('position',posicoesMesas.arandelaDecor1);
                              btnArandelaDecor2.setAttribute('position',posicoesMesas.arandelaDecor2);
                              btnCentroShowroom.setAttribute('position',posicoesMesas.centroShowroom);
                              btnFitas.setAttribute('position',posicoesMesas.fitas);
                              btnMesaAwei.setAttribute('position',posicoesMesas.mesaAwei);
                  }
                  function Pendentes(){
                              sky.setAttribute('src', '#pendentes');
                              LimparPontos();
                              btnArandelaDecor1.setAttribute('visible',true);
                              btnArandelaDecor1.setAttribute('position',posicoesPendentes.refletores);
                  }
                  function MesaAwei(){
                              sky.setAttribute('src', '#awei-mesa');

                              LimparPontos()
                              btnArandelaDecor1.setAttribute('visible',true);
                              btnFitas.setAttribute('visible',true);
                              btnPendentes.setAttribute('visible',true);
                              
                              btnArandelaDecor1.setAttribute('position',posicoesAweimesa.arandelaDecor1);
                              btnFitas.setAttribute('position',posicoesAweimesa.fitas);
                              btnPendentes.setAttribute('position',posicoesAweimesa.pendentes);
                  }
                  //#endregion
                  //#region Controle de Eventos


                  function controleTroca(id){
                    switch(id){
                      case 'btnBalizadores':
                              //console.log("balizadores");
                            balizadores();
                        break;
                      case 'btnRefletores':
                        //console.log("refletores");
                              refletores();
                        break;
                      case 'btnMesas':
                        //console.log("Mesa");
                            Mesas()
                        break;
                      case 'btnMesaAwei':
                        //console.log("Mesa Awei");
                              MesaAwei();
                        break;
                      case 'btnFitas':
                        //console.log("Fitas");
                              Fitas();
                        break;
                      case 'btnPendentes':
                        //console.log("Pendentes");
                              Pendentes();
                        break;
                      case 'btnArandelaDecor1':
                        //console.log("ArandelaDecor1");
                              arandelaDecor1();
                        break;
                      case 'btnArandelaDecor2':
                        //console.log("ArandelaDecor2");
                              arandelaDecor2();
                        break;
                      case 'btnCentroShowroom':
                        //console.log("ArandelaDecor2");
                              Centro();
                        break;
                      default:
                        console.log("nenhum ");
                    }   
                  }
                AFRAME.registerComponent('click-listener', {
                  init() {
                    this.el.addEventListener('click', () => {
                      console.log('Clicou em:', this.el.id);

                      const id = this.el.id;

                      controleTroca(id);
                    });

                  }
                });
              //#endregion 
                      


        });

         
      