import { getQuestions } from "./api.js";
import { Application } from "./app.js";

// récupère la liste des tâches à partir du webService de l'exercice1
const questions = await getQuestions();

let app = new Application(questions);
