# Frontend Mentor - Intro component with sign up form - Solution

This is my solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Source Code](https://github.com/irfanoezen/intro-component-with-sign-up-form)
- Live Site URL: [Preview](https://irfanoezen.github.io/intro-component-with-sign-up-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Font faces
- CSS FlexBox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

How to find the next Element?

> [_MDN - nextElementSibling property_](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling)

```js
if (input.parentElement.nextElementSibling?.tagName === "P") {
  ...
} else {
  ...
}
```

<hr>

How to insert an element?

> [_MDN - insertAdjacentElement() method_](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement)

> [_MDN - after() method_](https://developer.mozilla.org/en-US/docs/Web/API/Element/after)

```js
input.parentElement.after(errorMessage);
```

<hr>

How to check if entered value matches input field pattern?

> [_MDN - patternMismatch property_](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/patternMismatch)

```js
if (input.validity.typeMismatch || input.validity.patternMismatch) {
  ...
  } else {
    ...
  }
```

### Continued development

I want to get more confident with Vanilla JavaScript as well as CSS responsive design and behavior.

### Useful resources

- [_MDN - Client-side form validation_](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - This documentation helped me to understand how client-side form validation works.

## Author

- Frontend Mentor Profile - [@irfanoezen](https://www.frontendmentor.io/profile/irfanoezen)
