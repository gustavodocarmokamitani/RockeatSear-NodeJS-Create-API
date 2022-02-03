

interface IRequest {
    name: string,
    description: string
}

class CreateSpecificationService {
    constructor(private specificationsRepository: ISpecificationRepository) {
        
    }

    execute() {
        console.log("TODO");
    }
}

export { CreateSpecificationService }