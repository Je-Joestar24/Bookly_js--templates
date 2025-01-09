# Bookly_js--templates

**Bookly_js--templates** is a submodule that defines the core structure and layout placeholders for the Bookly application. It is responsible for generating the essential layout elements such as navigation, footer, message display areas, and other placeholders that will be dynamically populated later. The `main.js` file within this submodule is the only one that needs to be included in the project to initialize and load the templates and structure.

## Features

- **Dynamic Placeholders**: Key areas such as `app__nav`, `app__display`, `app__footer`, `app__message`, and any future templates are initially created by the `Builder` class.
- **Modular Architecture**: Allows easy extension where additional templates or sections can be added to the layout without modifying the core structure.
- **Flexible Structure**: The placeholders are dynamically created, and later content can be injected as needed, allowing for a dynamic and customizable application layout.

## Installation

To include the `Bookly_js--templates` submodule in your project:

1. Add the submodule to your repository:
   ```bash
   git submodule add [<repository_url](https://github.com/Je-Joestar24/Bookly_js--templates)> <desired folder>
   ```

2. In your project, include the `main.js` file, which is the entry point for building the dynamic layout. This file imports and uses the `Builder` class to construct the placeholders and core structure of the app.

### Example `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bookly</title>
  </head>
  <body>
    <div
      id="app"
      role="main"
      aria-label="Book Library at Your Fingertips Application"
    >
    </div>
    <script type="module" src="js/main.js"></script>
  </body>
</html>
```

### Example `main.js` (Inside `Bookly_js--templates` Submodule)

```javascript
import Builder from "./builder.js"; // Import Builder class for building the application structure
import AbstractTemplate from "./AbstractTemplate.js"; // Import AbstractTemplate class for template inheritance

export default class MainTemplate extends AbstractTemplate {
    constructor() {
        super();
        new Builder();  // Initialize Builder to construct the layout structure
    }
}
```

The `main.js` file is the only file that needs to be included in your project. This file calls the `Builder` class to construct the essential layout (navigation, main content, footer, etc.) and creates the necessary placeholders for dynamic content.

## How It Works

1. The **`Builder`** class is responsible for creating the core structure of the application, such as the navigation (`app__nav`), display area (`app__display`), footer (`app__footer`), and message display (`app__message`), along with any other future templates.
2. The `main.js` file is the entry point for your project. By including it in your project, you initialize the `Builder` and allow it to populate the `#app` div with the placeholders.
3. You can later populate these placeholders with dynamic content as needed.

### Dynamic Content Integration

The placeholders created by the `Builder` class are empty containers where content will be injected later. You can populate areas like `app__display` with dynamic content, show messages in `app__message`, and modify the footer as required.

Example of dynamic content injection:
- **Navigation**: Links like "Home" and "About" are created inside the `#app__nav` element, and you can dynamically change the active link.
- **Message Display**: The `app__message` element can be used to show success, error, or informational messages based on the application's state.
- **Main Content**: The `app__display` element can be populated with content dynamically.

## Contributing

If you'd like to contribute, feel free to fork the repository, create a feature branch, and submit a pull request. Make sure to follow the project’s coding conventions and include relevant documentation for any new features or changes.
