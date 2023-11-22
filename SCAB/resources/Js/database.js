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
CarDetailsList.push(new CarDetails('Huracán', 'Lamborghini', '2021', 'R$ 5.499,00', 'Automática', 'Branco', 'São Paulo', '1.100 km', '4x2', 'A Lamborghini Huracán personifica a união perfeita entre elegância e desempenho. Seu design escultural e linhas aerodinâmicas sugerem velocidade, enquanto o potente motor V10 proporciona uma experiência de condução visceral. No interior, materiais luxuosos e tecnologia de ponta garantem conforto e sofisticação. Uma obra-prima automotiva que transcende as expectativas, cada detalhe da Huracán é meticulosamente projetado para cativar e inspirar.', '5.2 V10 GASOLINA LP 640 STO LDF', 'resources/Storage/LamborghiniHuracán.jpg'));
CarDetailsList.push(new CarDetails('Gallardo', 'Lamborghini', '2010', 'R$ 1.149,99', 'Automática', 'Branco', 'São Paulo', '18.000 km', '4x2', 'A Lamborghini Gallardo, um ícone de elegância e potência, combina linhas aerodinâmicas sofisticadas com um desempenho excepcional. Seu motor V10 proporciona uma experiência de condução emocionante, enquanto o interior refinado e luxuoso envolve os ocupantes em um ambiente de conforto e estilo. Uma síntese perfeita entre forma e função, a Gallardo é uma obra-prima que transcende a simples definição de carro esportivo.', '5.2 V10 GASOLINA LP560-4 E-GEAR', 'resources/Storage/LamborghiniGallardo.jpg'));
CarDetailsList.push(new CarDetails('Urus', 'Lamborghini', '2022', 'R$ 3.390.00', 'Automática', 'Laranja', 'São Paulo', '3.888', '4x4', 'A Lamborghini Urus redefine o conceito de SUV de luxo, incorporando elegância agressiva e desempenho extraordinário. Com linhas aerodinâmicas, seu design expressa sofisticação e poder. O interior combina conforto premium com tecnologia inovadora, proporcionando uma experiência de condução única. Um equilíbrio magistral entre utilidade e exuberância, a Urus personifica a excelência automotiva com uma presença imponente e refinada.', '4.0 V8 TURBO GASOLINA LP650-4 AUTOMÁTICO', 'resources/Storage/LamborghiniUrus.jpg'));

// functions to help optimize querys on database

function findCarDetailsByName(name){
    let lowerCaseName = name.toLowerCase();
    return CarDetailsList.find(car => car.name.toLowerCase().includes(lowerCaseName));
}

function showCarDetailsPrice(name){
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

function showCarDetails(name){
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

function showErrorSearc(){
    let sectionId = `car-search-error`;
    
    let elementError = `
        <div class="col-md-12">
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

function showCar(name){
    showCarDetails(name);
    showCarDetailsPrice(name);
}