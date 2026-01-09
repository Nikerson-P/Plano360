
      
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
                  const btnAtivarAnimacao =    document.querySelector('#btnAtivarAnimacao'); 
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
                
                  //adiciona funcoes aos botoes do menu de configurações
                  btnAtivarAnimacao.addEventListener('click',()=>{
                    ativarAnimacao();
                  })

                  //abre e fecha o menu
                  btnConfig.addEventListener('click',() =>{
      
                    resultado = window.getComputedStyle(menuConfig)
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
                  
                  modelo.addEventListener('click',()=>{
                    resultado = window.getComputedStyle(menuConfig)
                    console.log("entrou no bloco");
                    console.log(resultado);
                    console.log(resultado.display == 'block');
                    if(resultado.display == 'block')
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
                    }
                    else{
                      animacao.components['animation__rot'].pause()
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
                      //console.log('Clicou em:', this.el.id);

                      const id = this.el.id;

                      controleTroca(id);
                    });

                  }
                });
              //#endregion 
                      


        });

         
      