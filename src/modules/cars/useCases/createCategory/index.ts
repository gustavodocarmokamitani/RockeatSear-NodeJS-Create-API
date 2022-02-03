import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoryiesResponsiry = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoryiesResponsiry)

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export { createCategoryController, createCategoryUseCase }