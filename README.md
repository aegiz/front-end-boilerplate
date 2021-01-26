# Next.js + TypeScript + Styled components example

This is a boilerplate that shows how to use Next.js with TypeScript and Styled Components in a scalable and synthetic way.

## Available commands

Execute the following commands to launch the development server:

```bash
# Install the dependencies of this project
npm i
# Launch dev server
npm run dev
```

Execute this command compile the project

```bash
npm build
```

## Folder architecture

### `build` folder

All the code after executing the build command will be placed there.

### `components` folder

This is where components used by more than one page or modules get placed.
Note that apart from the `Layout.tsx` file every component will always have it's own folder with an `index.tsx` file. This way it's easier to call them elsewhere.
If a component if starting to be complex, you can also have subfolders within this folder.

### `pages` folder

This is where your main pages will be.
Usually within a page there are multiple sections (like a hero).
If this hero component is not in used anywhere else we will externalize it in the same page folder to minimize the size.

### `public` folder

This is where all the assets will be (including .jpg and .svg).

### `utils + utils/hooks` folders

The `utils` folder contains all the overly complicated piece of code (for example a date manipulator).
The hooks folder within it is a collection of useful hooks.

## Conventions

### Naming conventions

#### For files in general

-   Use `.ts` extension for pure JS file, use `.tsx` extension for returned JSX file

#### For the `components` folder

Use `PascalCase` (an uppercase letter at the beginning + `camelCase`)

#### For the `pages` folder

Use lowercase and dashes (like URL)

#### For the public` folder

Use lowercase and dashes (like URL)

#### For the `utils + utils/hooks` folders

Use `camelCase`

### Coding convention

#### React code

-   Any component which is used more than in one page should be externalizes to the `component` folder.
-   Always export default at the end of file - you can use a regular export if necessary.
-   For components receiving props, don't use `defaultProps` (it's going to be deprecated) but rather use an `interface` for that.
-   Don't import React (unless you have to use `useState` or similar hooks)
-   Don't use React FC, make DRY and simple functional components.
-   For every component don't forget to return a type.

#### Styled Components

-   Styled components code goes between the JSX and the export default
-   Styled component should be descriptive, using the right HTML attribute and use `PascalCase`
-   Explore the different examples on the index and about page to see for example how to handle hover states.

**For Global components (shared across multiple page):**

-   Always export default the component itself at the end of the file
-   If there are variants of the same components, create a wrapper and export the different variants of the component (the idea behind this is to stay away from passing type as a props and keep a strict scope for each variant).
-   Alternatively, if you just to test a quick variant of a component you can test it directly in the "receiver" component.

**For single page components:**

-   Every element which has styles applied to it should have a corresponding styled component
-   (exception) If we need a quick css fix on an element use the `css` attribute
-   If a component has two variants only use a Boolean props (pass it with the "$" sign)
-   If a component has X variants use inheritance
-   Use as much as possible the provided `theme` css properties
-   If you have to pass props don't forget that you have to type them with TS

## Misc Notes

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.
