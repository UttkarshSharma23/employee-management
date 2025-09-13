import { TodoComponent } from "./components";
import { TodoEndpointService, TodosService } from "./services";

export const components = [
  TodoComponent
]

export const providers = [
  TodoEndpointService,
  TodosService
]
