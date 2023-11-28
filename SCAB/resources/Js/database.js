// Init dataset mock
class CarDetails {
    constructor(name, model, year, price, transmission, color, location, km, traction, description, summary, image) {
        this.name = name;
        this.model = model;
        this.year = year;
        this.price = price;
        this.transmission = transmission;
        this.color = color;
        this.location = location;
        this.km = km;
        this.traction = traction;
        this.description = description;
        this.summary = summary;
        this.image = image;
    }
}

//Load list on Application memory - That contains list of Object 'CarDetails' 
var CarDetailsList = [];

//Ferrari//

CarDetailsList.push(new CarDetails('296 GTB', 'Ferrari', '2023', 'R$ 4.288,00', 'Automática','Vermelho', 'São Paulo', '0', 'Traseira', 'A Ferrari 296 GTB, com seu motor V6 Turbo PHEV e transmissão F1-DCT, personifica a excelência italiana em performance e eficiência. Seu design elegante e aerodinâmico combina-se perfeitamente com a inovação tecnológica, proporcionando uma experiência de condução emocionante e sustentável. No interior, o luxo se encontra com a funcionalidade, criando um ambiente envolvente. Este modelo é uma síntese magistral de potência, estilo e responsabilidade ambiental, representando o que há de melhor na engenharia automotiva da Ferrari.', '3.0 V6 TURBO PHEV F1-DCT', 'resources/Storage/Ferrari/296GTB.jpg'));

CarDetailsList.push(new CarDetails('458 Italia', 'Ferrari', '2011', 'R$ 2.439,00', 'Automatico', 'Vermelho', 'São Paulo', '13.700', 'Traseira', 'A Ferrari 458 Italia, com seu motor V8 de 4.5 litros e transmissão F1-DCT, é uma obra-prima de engenharia e elegância. Seu design arrojado e linhas fluidas combinam-se harmoniosamente com um desempenho excepcional, proporcionando uma experiência de condução emocionante. No interior, a fusão de luxo e tecnologia eleva o conforto a novos patamares. Esta obra de arte automotiva é uma expressão sublime de paixão pela velocidade e design refinado.', '4.5 V8 GASOLINA F1-DCT', 'resources/Storage/Ferrari/458Italia.jpg'));

CarDetailsList.push(new CarDetails('488 Pista', 'Ferrari', '2020', 'R$ 6.200,00', 'Automática', 'Cinza', 'São Paulo', '3.852', 'Traseira', 'A Ferrari 488 Pista é a epitome da excelência automotiva, combinando potência e elegância. Seu design aerodinâmico é uma obra-prima, refletindo a paixão pela velocidade. O motor V8 proporciona uma experiência de condução visceral, enquanto o interior luxuoso completa a sinfonia de desempenho e sofisticação. A 488 Pista transcende o comum, elevando o padrão dos supercarros com um equilíbrio magistral entre forma e função.', '3.9 V8 TURBO GASOLINA F1-DCT', 'resources/Storage/Ferrari/488Pista.jpg'));

CarDetailsList.push(new CarDetails('F8 Tributo', 'Ferrari', '2021', 'R$ 3.950,00', 'Automatico', 'Amarelo', 'São Paulo', '2.955', 'Traseira', 'A Ferrari F8 Tributo, com seu motor V8 turbo e transmissão F1-DCT, é uma obra-prima de elegância e potência. Seu design arrojado é uma expressão de sofisticação, enquanto o desempenho excepcional oferece uma experiência de condução emocionante. No interior, materiais luxuosos e tecnologia de ponta se unem para criar um ambiente envolvente e exclusivo. Esta máquina é mais do que um carro; é uma sinfonia de engenharia italiana que harmoniza perfeitamente desempenho e sofisticação.', '3.9 V8 TURBO GASOLINA F1-DCT', 'resources/Storage/Ferrari/F8Tributo.jpg'));

CarDetailsList.push(new CarDetails('Roma', 'Ferrari', '2022', 'R$ 2.950,00', 'Automatizada DCT','Vermelho', 'São Paulo', '430', 'Traseira', 'A Ferrari Roma, com seu motor V8 turbo e transmissão F1-DCT, é um tributo à elegância e desempenho. Seu design sofisticado incorpora linhas fluidas, enquanto o motor potente proporciona uma experiência de condução emocionante. O interior combina luxo e tecnologia de forma harmoniosa, elevando a jornada a um nível de requinte. A Roma é mais do que um carro; é uma obra-prima que personifica a paixão italiana pela velocidade e estilo refinado.', '3.9 V8 TURBO GASOLINA F1-DCT', 'resources/Storage/Ferrari/Roma.jpg'));

CarDetailsList.push(new CarDetails('SF 90', 'Ferrari', '2022', 'R$ 5.439,00', 'Automática', 'Vermelho', 'São Paulo', '000', 'Traseira', 'A Ferrari SF 90 é uma obra-prima de engenharia e design. Com linhas esculpidas e aerodinâmica impressionante, personifica elegância e velocidade. Seu sistema híbrido inovador e motor V8 oferecem um desempenho eletrizante. No interior, materiais luxuosos e tecnologia de ponta se unem para criar uma experiência de condução sofisticada. A SF 90 é a encarnação da paixão da Ferrari pela excelência, fundindo potência e estilo de maneira sublime.', '3.9 V8 TURBO GASOLINA F1-DCT', 'resources/Storage/Ferrari/SF90.jpg'));

// Lambroghini//

CarDetailsList.push(new CarDetails('Aventador', 'Lamborghini', '2022', 'R$ 8.500,00', 'Automática', 'Preto', 'São Paulo', '0', 'Integral', 'A Lamborghini Aventador LP 780-4 Ultimae ISR é uma obra-prima automotiva que transcende a excelência. Seu poderoso motor V12 proporciona uma experiência de condução emocionante, enquanto o design arrojado e elegante reflete o compromisso com a perfeição estética. No interior, luxo e tecnologia se entrelaçam, criando um santuário de sofisticação. Esta obra-prima da engenharia é a personificação da paixão pela velocidade e design distinto.', '6.5 V12 GASOLINA LP 780-4 ULTIMAE ISR', 'resources/Storage/Lamborghini/Aventador.jpg'));

CarDetailsList.push(new CarDetails('Gallardo', 'Lamborghini', '2010', 'R$ 1.149,99', 'Automática', 'Branco', 'São Paulo', '18.000 km', 'Traseira', 'A Lamborghini Gallardo, um ícone de elegância e potência, combina linhas aerodinâmicas sofisticadas com um desempenho excepcional. Seu motor V10 proporciona uma experiência de condução emocionante, enquanto o interior refinado e luxuoso envolve os ocupantes em um ambiente de conforto e estilo. Uma síntese perfeita entre forma e função, a Gallardo é uma obra-prima que transcende a simples definição de carro esportivo.', '5.2 V10 GASOLINA LP560-4 E-GEAR', 'resources/Storage/Lamborghini/Gallardo.jpg'));

CarDetailsList.push(new CarDetails('Huracán', 'Lamborghini', '2021', 'R$ 5.499,00', 'Automática', 'Branco', 'São Paulo', '1.100 km', 'Traseira ', 'A Lamborghini Huracán personifica a união perfeita entre elegância e desempenho. Seu design escultural e linhas aerodinâmicas sugerem velocidade, enquanto o potente motor V10 proporciona uma experiência de condução visceral. No interior, materiais luxuosos e tecnologia de ponta garantem conforto e sofisticação. Uma obra-prima automotiva que transcende as expectativas, cada detalhe da Huracán é meticulosamente projetado para cativar e inspirar.', '5.2 V10 GASOLINA LP 640 STO LDF', 'resources/Storage/Lamborghini/Huracán.jpg'));

CarDetailsList.push(new CarDetails('Huracán Evo Spyder', 'Lamborghini', '2022', 'R$ 4.950,00', 'Automática', 'Branco', 'São Paulo', '0', 'Integral', 'A Lamborghini Huracán LP 640 Evo Spyder LDF é uma obra-prima automotiva que transcende a velocidade. Seu motor V10 oferece potência extraordinária, enquanto o design escultural e a capota retrátil proporcionam uma estética impressionante. No interior, a fusão de luxo e tecnologia proporciona uma experiência de condução incomparável. Cada detalhe da Huracán é uma expressão sutil de elegância combinada com desempenho excepcional.', '5.2 V10 GASOLINA LP 640 EVO SPYDER LDF', 'resources/Storage/Lamborghini/HuracánEvo.jpg'));

CarDetailsList.push(new CarDetails('Huracán Performante', 'Lamborghini', '2019', 'R$ 3.890,00', 'Automática', 'Cinza', 'São Paulo', '5.861', 'Integral', 'A Lamborghini Huracán LP 640-4 Performante LDF é uma obra-prima de potência e elegância. Seu motor V10 de 5.2 litros proporciona uma experiência de condução visceral, enquanto seu design arrojado e linhas aerodinâmicas refletem sofisticação. No interior, a combinação de luxo e tecnologia eleva a experiência do condutor. Este exemplar é uma expressão sublime de engenharia e estilo, unindo desempenho extraordinário e beleza excepcional.', '5.2 V10 GASOLINA LP 640-4 PERFORMANTE LDF', 'resources/Storage/Lamborghini/HuracánPerformante.jpg'));

CarDetailsList.push(new CarDetails('Urus', 'Lamborghini', '2022', 'R$ 3.390,00', 'Automática', 'Laranja', 'São Paulo', '3.888', 'Integral', 'A Lamborghini Urus redefine o conceito de SUV de luxo, incorporando elegância agressiva e desempenho extraordinário. Com linhas aerodinâmicas, seu design expressa sofisticação e poder. O interior combina conforto premium com tecnologia inovadora, proporcionando uma experiência de condução única. Um equilíbrio magistral entre utilidade e exuberância, a Urus personifica a excelência automotiva com uma presença imponente e refinada.', '4.0 V8 TURBO GASOLINA LP650-4 AUTOMÁTICO', 'resources/Storage/Lamborghini/Urus.jpg'));

//McLaren//

CarDetailsList.push(new CarDetails('570s', 'McLaren', '2018', 'R$ 2.100,00', 'Automática','Preto', 'São Paulo', '8.325', 'Traseira', 'A McLaren 570S, com seu motor V8 Turbo e transmissão SSG, é uma fusão refinada de desempenho e elegância. Seu design escultural e linhas aerodinâmicas expressam sofisticação, enquanto a potência do motor oferece uma experiência de condução envolvente. No interior, materiais luxuosos se combinam com tecnologia de ponta, proporcionando conforto e conectividade. Este modelo é uma obra-prima da engenharia britânica, destacando-se pela harmonia perfeita entre performance esportiva e estilo requintado.', '3.8 V8 TURBO GASOLINA SSG', 'resources/Storage/McLaren/570s.jpg'));

CarDetailsList.push(new CarDetails('600LT', 'McLaren', '2023', 'R$ 2.799,00', 'Automatica','Verde', 'São Paulo', '820', 'Traseira', 'A McLaren 600LT, equipada com um motor V8 Turbo, é uma obra-prima de potência e elegância. Seu design aerodinâmico sugere velocidade, enquanto a transmissão SSG proporciona uma condução envolvente. No interior, a fusão de luxo e tecnologia eleva a experiência do condutor. Este modelo é uma expressão sublime da engenharia, unindo desempenho excepcional e sofisticação com maestria.', '3.8 V8 TURBO GASOLINA SSG', 'resources/Storage/McLaren/600LT.jpg'));

CarDetailsList.push(new CarDetails('720S', 'McLaren', '2020', 'R$ 2.950,00', 'Automatica','Preto', 'São Paulo', '1.400', 'Traseira', 'A McLaren 720S, com seu motor V8 Turbo e transmissão SSG, é uma obra-prima que funde poder e elegância. Seu design escultural sugere velocidade, enquanto o desempenho excepcional oferece uma experiência de condução emocionante. No interior, a fusão de luxo e tecnologia eleva a experiência do condutor. Este modelo é uma expressão sublime de precisão britânica, onde cada detalhe reflete a busca pela perfeição na performance e no estilo.', '4.0 V8 TURBO GASOLINA SSG', 'resources/Storage/McLaren/720S.jpg'));

CarDetailsList.push(new CarDetails('720S Spider', 'McLaren', '2020', 'R$ 5.490,00', 'Automatica','Azul', 'São Paulo', '350', 'Traseira', 'A McLaren 720S, com seu motor V8 Turbo, é uma obra-prima de desempenho e sofisticação. Seu design arrojado e linhas aerodinâmicas evocam elegância e velocidade. O teto conversível Spider SSG amplifica a experiência de condução, combinando estilo aberto com tecnologia avançada. No interior, materiais premium e tecnologia intuitiva se unem para criar um ambiente luxuoso. A 720S é mais do que um carro; é uma expressão de paixão pela velocidade e engenharia refinada, elevando cada viagem a uma experiência excepcional.', '4.0 V8 TURBO GASOLINA SPIDER SSG', 'resources/Storage/McLaren/720S_blue.jpg'));

CarDetailsList.push(new CarDetails('765LT', 'McLaren', '2021', 'R$ 4.490,00', 'Automatica', 'Roxo', 'São Paulo', '1.480', 'Traseira', 'A McLaren 765LT, com seu motor V8 Turbo e transmissão SSG, redefine a excelência em desempenho automotivo. Seu design impressionante e linhas aerodinâmicas expressam elegância agressiva. Esta obra-prima combina potência bruta com precisão técnica, oferecendo uma experiência de condução exuberante. No interior, luxo se alia à funcionalidade, criando um ambiente onde cada detalhe reflete a busca pela perfeição. A 765LT é mais do que um veículo; é uma expressão de paixão pela velocidade e inovação, representando a vanguarda da engenharia da McLaren.', '4.0 V8 TURBO GASOLINA SSG', 'resources/Storage/McLaren/765LT.jpg'));

CarDetailsList.push(new CarDetails('Artura', 'McLaren', '2023', 'R$ 2.799,00', 'Automatica', 'Verde', 'São Paulo', '840', 'Traseira', 'A McLaren Artura, com seu motor V6 biturbo híbrido e transmissão SSG, redefine o conceito de desempenho sustentável. Seu design escultural e linhas aerodinâmicas refletem elegância e inovação. Combinando potência e eficiência, oferece uma experiência de condução emocionante e ambientalmente consciente. O interior combina luxo e tecnologia, criando um ambiente cativante. A Artura é uma expressão sublime da engenharia McLaren, onde a performance encontra a responsabilidade ambiental em perfeita harmonia.', '3.0 V6 BITURBO HYBRID SSG', 'resources/Storage/McLaren/Artura.jpg'));

//Porsche//

CarDetailsList.push(new CarDetails('911 Carreira Cabriolet', 'Porsche', '2022', 'R$ 1.280,00', 'Automática', 'Cinza', 'São Paulo', '3.045', 'Traseira', 'O Porsche 911 Carrera Cabriolet é a personificação do luxo dinâmico. Com suas linhas icônicas e capota retrátil, combina design clássico com sofisticação contemporânea. O desempenho emocionante e o interior elegante convergem para criar uma experiência de condução que transcende o ordinário, enquanto a atenção aos detalhes revela o compromisso da Porsche com a excelência automotiva. O Carrera Cabriolet é mais do que um carro; é uma declaração de estilo e paixão pela estrada.', '3.0 24V H6 GASOLINA CARRERA CABRIOLET PDK', 'resources/Storage/911Carreira.jpg'));

CarDetailsList.push(new CarDetails('911 GT3', 'Porsche', '2022', 'R$ 2.439,00', 'Automática', 'Azul', 'São Paulo', '3.852', 'Traseira', 'O Porsche 911 GT3 PDK é uma obra-prima de engenharia e elegância. Com sua transmissão PDK de última geração, proporciona trocas de marchas suaves e precisas. Seu design aerodinâmico, aliado ao desempenho excepcional, oferece uma experiência de condução emocionante. No interior, a união de luxo e tecnologia complementa a essência esportiva. O GT3 PDK é uma expressão refinada de velocidade e sofisticação, elevando o padrão dos carros esportivos de alto desempenho.', '4.0 24V H6 GASOLINA GT3 PDK', 'resources/Storage/911GT3.jpg'));

CarDetailsList.push(new CarDetails('911 GT3 RS', 'Porsche', '2022', 'R$ 5.200,00', 'Automática', 'Branco', 'São Paulo', '200', 'Traseira', 'O Porsche 911 GT3 RS PDK é uma obra-prima de engenharia e elegância. Com sua transmissão PDK de última geração, proporciona trocas de marchas suaves e precisas. Seu design aerodinâmico, aliado ao desempenho excepcional, oferece uma experiência de condução emocionante. No interior, a união de luxo e tecnologia complementa a essência esportiva. O GT3 RS PDK é uma expressão refinada de velocidade e sofisticação, elevando o padrão dos carros esportivos de alto desempenho.', '4.0 24V H6 GASOLINA GT3 RS PDK', 'resources/Storage/Porsche/911GT3RS.jpg'));

CarDetailsList.push(new CarDetails('Cayman GTS', 'Porsche', '2016', 'R$ 479,90', 'Automatica', 'Vermelho', 'São Paulo', '4.925', 'Traseira', 'O Porsche Cayman 3.4 GTS, com seu motor I6 de 24V, é uma sinfonia de potência e elegância. Seu design atemporal e linhas aerodinâmicas refletem sofisticação, enquanto o desempenho excepcional oferece uma experiência de condução emocionante. No interior, materiais premium e tecnologia se combinam para criar um ambiente luxuoso e envolvente. Este automóvel é uma obra-prima da engenharia que equilibra magistralmente performance e estilo refinado.', '3.4 GTS I6 24V GASOLINA 2P AUTOMÁTICO', 'resources/Storage/CaymanGTS.jpg'));

CarDetailsList.push(new CarDetails('Cayman GT4 RS', 'Porsche', '2023', 'R$ 2.400,00', 'Automática', 'Branco', 'São Paulo', '1.166', 'Traseira', 'O Porsche Cayman GT4 RS 4.0, com seu motor H6 e transmissão PDK, personifica a maestria automotiva. Sua estética arrojada e linhas aerodinâmicas sugerem potência, enquanto o desempenho excepcional proporciona uma experiência de condução visceral. No interior, luxo se funde com tecnologia, criando um ambiente envolvente. Este Cayman GT4 RS é a expressão sublime de elegância e desempenho, elevando a experiência de dirigir a um patamar superior.', '4.0 H6 GASOLINA CAYMAN GT4 RS PDK', 'resources/Storage/Porsche/CaymanGT4RS.jpg'));

CarDetailsList.push(new CarDetails('Panamera', 'Porsche', '2018', 'R$ 589,000', 'Automática', 'Vermelho', 'São Paulo', '1.166', 'Integral', 'A Porsche Panamera 2.9 V6 E-Hybrid 4 PDK personifica o equilíbrio entre desempenho e eficiência. Seu motor híbrido oferece potência notável, enquanto o design elegante e as linhas aerodinâmicas refletem sofisticação. O interior, repleto de tecnologia e conforto, cria uma experiência de condução envolvente e consciente. Este modelo é uma expressão sutil de luxo e inovação na categoria de veículos de alto desempenho.', '2.9 V6 E-HYBRID 4 PDK', 'resources/Storage/Porsche/Panamera.jpg'));

// functions to help optimize querys on database

function findCarDetailsByName(search) {
    let lowerCaseName = search.toLowerCase();
    return CarDetailsList.find(car => car.name.toLowerCase().includes(lowerCaseName) || car.model.toLowerCase().includes(lowerCaseName));
}

function showCarDetailsPrice(name) {
    let sectionId = "car-details-price";

    let elementCar = findCarDetailsByName(name);

    let elementCarDetailsPrice = `
        <div class="card card-price-height animate__animated animate__fadeInRight">
            <div class="card-body">
                <div>
                    <h5 class="card-title"> ${elementCar.model} <span class="common-text-marked">${elementCar.name}</span> - ${elementCar.summary} - ${elementCar.year}</h5>
                    <span class="common-divisor mb-3" style="width: 100%;"></span>
                    <p class="card-subtitle mb-2 text-body-secondary">${elementCar.km} • ${elementCar.location}</p>
                </div>
                <h5 class="mt-2">${elementCar.price} - ao dia</h5>
                <div class="mt-5 mb-3">
                    <a href="#" class="btn btn-main w-100 mb-2"><i class="bi bi-check-circle-fill"></i> Fazer Reserva</a>
                    <a href="#" class="btn btn-main w-100"><i class="bi bi-heart-fill"></i> Add. Favoritos</a>
                </div>
                <a href="index.html" class="text-muted d-flex justify-content-end"> Voltar para a página inicial</a>
            </div>
        </div>
    `;

    // Inserindo o elemento no section Id
    document.getElementById(sectionId).innerHTML = elementCarDetailsPrice;
}

function showCarDetails(name) {
    let sectionId = "car-details";

    let elementCar = findCarDetailsByName(name);

    let elementCarDetails = `
        <div class="card animate__animated animate__fadeInUp">
            <img class="card-img-top card-details-img-height common-img-fluid object-fit-cover" src="${elementCar.image}"  alt="${elementCar.name}"/>
            <div class="card-body">
                <h5>Informações básicas</h5>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <p class="text-muted mb-0">Acionamento das rodas</p>
                        <p class="card-text">${elementCar.traction}</p>
                    </div>
                    <div class="col-md-6 mb-3">
                        <p class="text-muted mb-0">Transmissão</p>
                        <p class="card-text">${elementCar.transmission}</p>
                    </div>
                    <div class="col-md-6 mb-3">
                        <p class="text-muted mb-0">Kms</p>
                        <p class="card-text">${elementCar.km}</p>
                    </div>
                    <div class="col-md-6 mb-3">
                        <p class="text-muted mb-0">Loja</p>
                        <p class="card-text">AutoBahn - ${elementCar.location}</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById(sectionId).innerHTML = elementCarDetails;
}

function showErrorSearc() {
    let sectionId = `car-search-error`;

    let elementError = `
        <div class="col-md-12 mb">
            <div class="card animate__animated animate__fadeInUp">
                <div class="card-body text-center">
                    <h5>Ops! Carro não encontrado!</h5>
                    <p class="text-muted mb-0">Não conseguimos encontrar o carro que deseja, tente pesquisar por outro modelo. - Ex: 'Gallardo', 'Huracán' e etc...</p>
                    
                </div>
            </div>
        </div>
    `;

    document.getElementById(sectionId).innerHTML = elementError;
}

function showCar(name) {
    showCarDetails(name);
    showCarDetailsPrice(name);
}