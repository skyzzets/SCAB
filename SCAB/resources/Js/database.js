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

//3 Carros da pagina principal//

CarDetailsList.push(new CarDetails('C 63 AMG', 'Mercedes-Benz', '2018', 'R$ 174,99', 'Automática', 'Preto', 'São Paulo', '23.900 km', 'Traseira ', 'A Mercedes-Benz C 63 AMG personifica luxo e potência com elegância atemporal. Seu design expressivo e linhas fluidas combinam-se com um motor de alto desempenho, proporcionando uma experiência de condução emocionante. No interior, a fusão de materiais premium e tecnologia avançada oferece conforto e sofisticação. Cada detalhe reflete a maestria da engenharia alemã, tornando a C 63 AMG uma combinação perfeita entre estilo refinado e desempenho envolvente.A Lamborghini Huracán personifica a união perfeita entre elegância e desempenho. Seu design escultural e linhas aerodinâmicas sugerem velocidade, enquanto o potente motor V10 proporciona uma experiência de condução visceral. No interior, materiais luxuosos e tecnologia de ponta garantem conforto e sofisticação. Uma obra-prima automotiva que transcende as expectativas, cada detalhe da Huracán é meticulosamente projetado para cativar e inspirar.', '4.0 V8 TURBO GASOLINA S SPEEDSHIFT', 'resources/Storage/Mercedes/MercedesC63.jpg'));

CarDetailsList.push(new CarDetails('R8', 'Audi', '2022', 'R$ 1.905,00', 'Automática', 'Amarelo', 'São Paulo', '1.800 km', 'Traseira ', 'A Audi R8 personifica a elegância e potência em um casamento perfeito. Seu design aerodinâmico é uma expressão de sofisticação, enquanto o motor potente oferece uma experiência de condução visceral. O interior combina luxo moderno com tecnologia intuitiva, proporcionando uma jornada envolvente e confortável. A R8 é mais do que um carro; é uma obra-prima que une com maestria performance e estilo, cativando todos os sentidos.', '5.2 V10 FSI GASOLINA COUPÉ QUATTRO S TRONIC', 'resources/Storage/Audi/AudiR8.jpg'));

CarDetailsList.push(new CarDetails('AMG GT', 'Mercedes-Benz', '2021', 'R$ 5.599,00', 'Automática', 'Laranja', 'São Paulo', '500 km', 'Traseira ', 'A Mercedes-Benz AMG GT personifica a elegância atlética. Seu design arrojado e fluido é uma declaração de sofisticação, enquanto o motor de alto desempenho oferece uma experiência de condução emocionante. No interior, o luxo encontra a tecnologia de ponta, proporcionando conforto e conectividade. Cada curva da AMG GT é uma fusão magistral de forma e função, criando uma experiência de condução que transcende as expectativas.', '4.0 V8 TURBO GASOLINA BLACK SERIES 7G-DCT', 'resources/Storage/Mercedes/MercedesAMGGT.jpg'));

// Lambroghini//
CarDetailsList.push(new CarDetails('Huracán', 'Lamborghini', '2021', 'R$ 5.499,00', 'Automática', 'Branco', 'São Paulo', '1.100 km', 'Traseira ', 'A Lamborghini Huracán personifica a união perfeita entre elegância e desempenho. Seu design escultural e linhas aerodinâmicas sugerem velocidade, enquanto o potente motor V10 proporciona uma experiência de condução visceral. No interior, materiais luxuosos e tecnologia de ponta garantem conforto e sofisticação. Uma obra-prima automotiva que transcende as expectativas, cada detalhe da Huracán é meticulosamente projetado para cativar e inspirar.', '5.2 V10 GASOLINA LP 640 STO LDF', 'resources/Storage/Lamborghini/LamborghiniHuracán.jpg'));

CarDetailsList.push(new CarDetails('Gallardo', 'Lamborghini', '2010', 'R$ 1.149,99', 'Automática', 'Branco', 'São Paulo', '18.000 km', 'Traseira', 'A Lamborghini Gallardo, um ícone de elegância e potência, combina linhas aerodinâmicas sofisticadas com um desempenho excepcional. Seu motor V10 proporciona uma experiência de condução emocionante, enquanto o interior refinado e luxuoso envolve os ocupantes em um ambiente de conforto e estilo. Uma síntese perfeita entre forma e função, a Gallardo é uma obra-prima que transcende a simples definição de carro esportivo.', '5.2 V10 GASOLINA LP560-4 E-GEAR', 'resources/Storage/Lamborghini/LamborghiniGallardo.jpg'));

CarDetailsList.push(new CarDetails('Urus', 'Lamborghini', '2022', 'R$ 3.390.00', 'Automática', 'Laranja', 'São Paulo', '3.888', 'Integral', 'A Lamborghini Urus redefine o conceito de SUV de luxo, incorporando elegância agressiva e desempenho extraordinário. Com linhas aerodinâmicas, seu design expressa sofisticação e poder. O interior combina conforto premium com tecnologia inovadora, proporcionando uma experiência de condução única. Um equilíbrio magistral entre utilidade e exuberância, a Urus personifica a excelência automotiva com uma presença imponente e refinada.', '4.0 V8 TURBO GASOLINA LP650-4 AUTOMÁTICO', 'resources/Storage/Lamborghini/LamborghiniUrus.jpg'));

//Porsche//

CarDetailsList.push(new CarDetails('Cayman GT4', 'Porsche', '2016', 'R$ 990.00', 'Manual', 'Azul', 'São Paulo', '13.045', 'Traseira', 'O Porsche Cayman GT4 é a síntese perfeita de elegância e desempenho. Com linhas aerodinâmicas e refinamento visual, esse modelo transmite esportividade e classe. Seu motor de alta potência, associado à precisão na dirigibilidade, proporciona uma experiência de condução envolvente. No interior, a sofisticação se alia à funcionalidade, criando um ambiente que complementa a paixão pela estrada. O Cayman GT4 é uma expressão sutil de excelência automotiva, capturando a essência do prazer de dirigir de forma sublime.', '3.8 GT4 I6 24V GASOLINA 2P MANUAL', 'resources/Storage/PorscheCaymanGT4.jpg'));

CarDetailsList.push(new CarDetails('911 Carreira Cabriolet', 'Porsche', '2022', 'R$ 1.280.00', 'Automática', 'Cinza', 'São Paulo', '3.045', '4x2', 'O Porsche 911 Carrera Cabriolet é a personificação do luxo dinâmico. Com suas linhas icônicas e capota retrátil, combina design clássico com sofisticação contemporânea. O desempenho emocionante e o interior elegante convergem para criar uma experiência de condução que transcende o ordinário, enquanto a atenção aos detalhes revela o compromisso da Porsche com a excelência automotiva. O Carrera Cabriolet é mais do que um carro; é uma declaração de estilo e paixão pela estrada.', '3.0 24V H6 GASOLINA CARRERA CABRIOLET PDK', 'resources/Storage/Porsche911Carreira.jpg'));

CarDetailsList.push(new CarDetails('911 GT3', 'Porsche', '2022', 'R$ 2.439.00', 'Automática', 'Azul', 'São Paulo', '3.852', '4x2', 'O Porsche 911 GT3 PDK é uma obra-prima de engenharia e elegância. Com sua transmissão PDK de última geração, proporciona trocas de marchas suaves e precisas. Seu design aerodinâmico, aliado ao desempenho excepcional, oferece uma experiência de condução emocionante. No interior, a união de luxo e tecnologia complementa a essência esportiva. O GT3 PDK é uma expressão refinada de velocidade e sofisticação, elevando o padrão dos carros esportivos de alto desempenho.', '4.0 24V H6 GASOLINA GT3 PDK', 'resources/Storage/Porsche911GT3.jpg'));

//Ferrari//

CarDetailsList.push(new CarDetails('488 Pista', 'Ferrari', '2020', 'R$ 6.200.00', 'Automática', 'Cinza', 'São Paulo', '3.852', '4x2', 'O Porsche 911 GT3 PDK é uma obra-prima de engenharia e elegância. Com sua transmissão PDK de última geração, proporciona trocas de marchas suaves e precisas. Seu design aerodinâmico, aliado ao desempenho excepcional, oferece uma experiência de condução emocionante. No interior, a união de luxo e tecnologia complementa a essência esportiva. O GT3 PDK é uma expressão refinada de velocidade e sofisticação, elevando o padrão dos carros esportivos de alto desempenho.', '3.9 V8 TURBO GASOLINA F1-DCT', 'resources/Storage/Ferrari488Pista.jpg'));

// functions to help optimize querys on database

function findCarDetailsByName(name) {
    let lowerCaseName = name.toLowerCase();
    return CarDetailsList.find(car => car.name.toLowerCase().includes(lowerCaseName));
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