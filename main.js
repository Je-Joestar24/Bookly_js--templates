import Builder from "./builder.js"; // Import Builder class for building the application structure
import AbstractTemplate from "./AbstractTemplate.js"; // Import AbstractTemplate class for template inheritance

export default class extends AbstractTemplate {
    constructor() {
        super();
        new Builder(); 
    }
}