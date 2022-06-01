# Future package structure for Klik

## Core

The `@lego/klik-core` package contains the core web components that have no dependencies on any framework - which means they can be used with any framework or no framework at all.

## React

The `@lego/klik-react` package depends on and contains compability wrappers for the `@lego/klik-core` components, which means they can be used as regular React components within a React app.

## React Styled

The `@lego/klik-react-styled` package depends on and contains backwards compability wrappers for the `@lego/klik-react` components, to enable styling through style props. This package only exists to ensure a smooth transition from the current Chakra UI based offering which relies heavily on style props. _It should be deprecated when all dependent projects have moved away from using style props._

# Dependency setup

`klik-react-styled` depends on `klik-react` which depends on `klik-core`.

To set that up, run

```sh

yarn workspace klik-react-styled add klik-react@0.0.1
yarn workspace klik-react-styled add klik-react@0.0.1

```

Also, our packages/klik-ui-avatar (the test-bed) depends on `klik-react-styled`, with

```sh
yarn workspace @lego/klik-ui-avatar add klik-react-styled@0.0.1

```
