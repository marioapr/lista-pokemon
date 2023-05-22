const pokemons = [
    {
        nome:'Bulbasaur' ,
        numero: '#001',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif',
        tipo: ['grama', 'veneno'],
        descricao: "Há uma semente de planta em suas costas desde o dia que este Pókemon nasce. A semente cresce lentamente."
    },
    {
        nome:'Ivysaur' ,
        numero: '#002',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif',
        tipo: ['grama', 'veneno'],
        descricao: " Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé em suas patas traseiras. "
    },{
        nome:'Venusaur' ,
        numero: '#003',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif',
        tipo: ['grama', 'veneno'],
        descricao: "Sua planta floresce quando está absorvendo energia solar. Elepermanece em movimento para buscar a luz solar."
    },{
        nome:'Charmander' ,
        numero: '#004',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif',
        tipo: ['fogo'],
        descricao: "  Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.  Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda. "
    },{
        nome:'Charmeleon' ,
        numero: '#005',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif',
        tipo: ['fogo'],
        descricao: "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda ardente e corta com garras afiadas."
    },{
        nome:'Charizard' ,
        numero: '#006',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif',
        tipo: ['fogo'],
        descricao: " Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas."
    },{
        nome:'Squirtle' ,
        numero: '#007',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif',
        tipo: ['agua'],
        descricao: "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa."
    },{
        nome:'Wartortle' ,
        numero: '#008',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif',
        tipo: ['agua'],
        descricao: " É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo."
    },{
        nome:'Blastoise' ,
        numero: '#009',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif',
        tipo: ['agua'],
        descricao: "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha."
    },{
        nome:'Caterpie' ,
        numero: '#010',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/10.gif',
        tipo: ['inseto'],
        descricao: " Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos."
    },{
        nome:'Metapod' ,
        numero: '#011',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/11.gif',
        tipo: ['inseto'],
        descricao: "Está esperando o momento de evoluir. Nesta fase, só pode endurecer, por isso permanece imóvel para evitar o ataque."
    },{
        nome:'Butterfree' ,
        numero: '#012',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif',
        tipo: ['inseto'],
        descricao: " Em batalha, ele bate as asas em grande velocidade para liberar poeira altamente tóxica no ar."
    },{
        nome:'Weedle' ,
        numero: '#013',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/13.gif',
        tipo: ['inseto', 'veneno'],
        descricao: "Cuidado com o ferrão afiado em sua cabeça. Ele se esconde na grama e nos arbustos onde come folhas."
    },{
        nome:'Kakuna' ,
        numero: '#014',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/14.gif',
        tipo: ['inseto', 'veneno'],
        descricao: "Capaz de se mover apenas ligeiramente. Quando em perigo, pode mostrar seu ferrão e envenenar seu inimigo."
    },{
        nome:'Beedrill' ,
        numero: '#015',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/15.gif',
        tipo: ['inseto', 'veneno'],
        descricao: "Tem três ferrões venenosos nas patas dianteiras e na cauda. Eles são usados para espetar seu inimigo repetidamente."
    },{
        nome:'Pidgey' ,
        numero: '#016',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/16.gif',
        tipo: ['voador', 'normal'],
        descricao: " Muito dócil. Se atacado, muitas vezes chuta areia para se proteger, em vez de revidar."
    },{
        nome:'Pidgeotto' ,
        numero: '#017',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/17.gif',
        tipo: ['voador', 'normal'],
        descricao: "Este Pokémon está cheio de vitalidade. Ele voa constantemente em torno de seu grande território em busca de presas."
    },{
        nome:'Pidgeot' ,
        numero: '#018',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/18.gif',
        tipo: ['voador', 'normal'],
        descricao: " Este Pokémon voa na velocidade de Mach 2, buscando presas. Suas grandes garras são temidas como armas perversas."
    },{
        nome:'Ratatta' ,
        numero: '#019',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif',
        tipo: ['normal'],
        descricao: "Mastigará qualquer coisa com suas presas. Se você vir um, pode ter certeza de que mais 40 vivem na área."
    },{
        nome:'Ratecate' ,
        numero: '#020',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/20.gif',
        tipo: ['normal'],
        descricao: "Suas patas traseiras são palmadas. Eles agem como nadadeiras, então podem nadar em rios e caçar presas."
    },
     {
        nome:'Spearow',
        numero:'#021',
        tipo: ['voador','normal'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/21.gif',
        descricao:"Inepto em voar alto. No entanto, ele pode voar muito rápido para proteger seu território."
    },
    {
        nome:'Fearow',
        numero:'#022',
        tipo:['voador','normal'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/22.gif',
        descricao:'Um Pokémon que remonta a muitos anos. Se sentir perigo, voa alto e para longe, instantaneamente.'
    },
    {
        nome:'Ekans',
        numero:'#023',
        tipo:['veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/23.gif',
        descricao:'Quanto mais velho fica, mais cresce. À noite, envolve seu longo corpo nos galhos das árvores para descansar.'
    },
    {
        nome:'Arbok',
        numero:'#024',
        tipo:['veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/24.gif',
        descricao:'Os padrões assustadores em sua barriga foram estudados. Seis variações foram confirmadas.'
    },
    {
        nome:'Pikachu',
        numero:'#025',
        tipo:['eletrico'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif',
        descricao:'Quando está com raiva, descarrega imediatamente a energia armazenada nas bolsas de suas bochechas.'
    },
    {
        nome:'Raichu',
        numero:'#026',
        tipo:['eletrico'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/26.gif',
        descricao:'Sua cauda descarrega eletricidade no chão, protegendo-o de choques.'
    },
    {
        nome:'Sandshrew',
        numero:'#027',
        tipo:['terra'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/27.gif',
        descricao:'Adora banhar-se na areia de áreas secas e arenosas. Ao tomar banho de areia, o Pokémon se livra da sujeira e umidade grudadas em seu corpo.'
    },
    {
        nome:'Sandslash',
        numero:'#028',
        tipo:['terra'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/28.gif',
        descricao:'Quanto mais seca for a área em que Sandslash vive, mais duros e suaves serão os espinhos do Pokémon quando tocados.'
    },
    {
        nome:'Nidoran♀',
        numero:'#029',
        tipo:['veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/29.gif',
        descricao:'As fêmeas são mais sensíveis aos cheiros do que os machos. Enquanto forrageiam, eles usam seus bigodes para verificar a direção do vento e ficar a favor do vento dos predadores.'
    },
    {
        nome:'Nidorina',
        numero:'#030',
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/30.gif',
        tipo:['veneno'],
        descricao:'O chifre em sua cabeça está atrofiado. Acredita-se que isso aconteça para que os filhos de Nidorina não sejam cutucados enquanto a mãe os alimenta.'
    },
    {
        nome:'Nidoqueen',
        numero:'#031',
        tipo:['veneno', 'terra'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/31.gif',
        descricao:'Nidoqueen é melhor na defesa do que no ataque. Com escamas como armaduras, este Pokémon protegerá seus filhos de qualquer tipo de ataque.'
    },
    {
        nome:'Nidoran♂',
        numero:'#032',
        tipo:['veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif',
        descricao:'O chifre na testa de um Nidoran masculino contém um poderoso veneno. Este é um Pokémon muito cauteloso, sempre esticando suas grandes orelhas.'
    },
    {
        nome:'Nidorino',
        numero:'#033',
        tipo:['veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/33.gif',
        descricao:'Com um chifre mais duro que diamante, este Pokémon anda por aí quebrando pedregulhos enquanto procura uma pedra da lua.'
    },
    {
        nome:'Nidoking',
        numero:'#034',
        tipo:['veneno','terra'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/34.gif',
        descricao:'Quando fica furioso, é impossível controlar. Mas na presença de uma Nidoqueen com quem convive há muito tempo, Nidoking se acalma.'
    },
    {
        nome:'Clefairy',
        numero:'#035',
        tipo:['fada'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/35.gif',
        descricao:'Dizem que a felicidade virá para aqueles que virem uma reunião de Clefairy dançando sob a lua cheia.'
    },
    {
        nome:'Clefable',
        numero:'#036',
        tipo:['fada'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/36.gif',
        descricao:'Um tímido Pokémon fada que raramente é visto, ele corre e se esconde no momento em que detecta as pessoas.'
    },
    {
        nome:'Vulpix',
        numero:'#037',
        tipo:['fogo'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/37.gif',
        descricao:'Enquanto jovem, tem seis lindas caudas. Quando cresce, várias novas caudas brotam.'
    },
    {
        nome:'Ninetales',
        numero:'#038',
        tipo:['fogo'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/38.gif',
        descricao:'Diz-se que vive 1.000 anos e cada uma de suas caudas é carregada de poderes sobrenaturais.'
    },
    {
        nome:'Jigglypuff',
        numero:'#039',
        tipo:['normal','fada'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/39.gif',
        descricao:'Quando seus olhos enormes vacilam, ele canta uma melodia misteriosamente reconfortante que embala seus inimigos para dormir.'
    },
    {
        nome:'Wigglytuff',
        numero:'#040',
        tipo:['normal','fada'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/40.gif',
        descricao:'Tem uma pelagem muito fina. Tome cuidado para não irritá-lo, ou ele pode inflar constantemente e bater com força.'
    },
    {
        nome:'Zubat',
        numero:'#041',
        tipo:['veneno','voador'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/41.gif',
        descricao:'Ele emite ondas ultrassônicas de sua boca para verificar seus arredores. Mesmo em cavernas apertadas, Zubat voa com habilidade.'
    },
    {
        nome:'Golbat',
        numero:'#042',
        tipo:['veneno','voador'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/42.gif',
        descricao:'Adora beber o sangue de outras criaturas. Diz-se que, se encontrar outros de sua espécie passando fome, às vezes compartilha o sangue que colheu.'
    },
    {
        nome:'Oddish',
        numero:'#043',
        tipo:['grama','veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/43.gif',
        descricao:'Se exposto ao luar, ele começa a se mover. Ele vagueia por toda parte à noite para espalhar suas sementes.'
    },
    {
        nome:'Gloom',
        numero:'#044',
        tipo:['grama','veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/44.gif',
        descricao:'Seus pistilos exalam um odor incrivelmente fétido. O fedor horrível pode causar desmaios a uma distância de 1,25 milhas.'
    },
    {
        nome:'Vileplume',
        numero:'#045',
        tipo:['grama','veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/45.gif',
        descricao:'Tem as maiores pétalas do mundo. A cada passo, as pétalas sacodem pesadas nuvens de pólen tóxico.'
    },
    {
        nome:'Paras',
        numero:'#046',
        tipo:['inseto','grama'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/46.gif',
        descricao:'Tocas sob o solo para roer as raízes das árvores. Os cogumelos nas costas absorvem a maior parte da nutrição.'
    },
    {
        nome:'Parasect',
        numero:'#047',
        tipo: ['inseto','grama'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/47.gif',
        descricao:'O hospedeiro do inseto é drenado de energia pelo cogumelo em suas costas. O cogumelo parece fazer todo o pensamento.'
    },
    {
        nome:'Venonat',
        numero:'#048',
        tipo:['inseto','veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/48.gif',
        descricao:'Veneno escorre de todo o seu corpo. Ele pega pequenos Pokémon insetos à noite que são atraídos pela luz.'
    },
    {
        nome:'Venomoth',
        numero:'#049',
        tipo:['inseto','veneno'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif',
        descricao:'As asas são cobertas com escamas semelhantes a poeira. Cada vez que bate as asas, solta poeira altamente tóxica.'
    },
    {
        nome:'Diglett',
        numero:'#050',
        tipo:['terra'],
        imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/50.gif',
        descricao:'Ele vive cerca de um metro no subsolo, onde se alimenta de raízes de plantas. Às vezes aparece acima do solo.'
    }
]