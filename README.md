# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh\


**useState:** Manages state in functional components.
**useEffect:** Runs side effects like data fetching or subscriptions after render.
**useLayoutEffect:** Similar to useEffect, but fires synchronously after all DOM mutations. Used for layout-related calculations.
**useCallback:** Memoizes a function to avoid re-creating it on every render.
**useMemo:** Memoizes a value to avoid recalculating it on every render.
**useContext:** Consumes context values in functional components.
**useRef:** Creates a mutable object that persists across renders, typically used for accessing DOM elements or storing instance variables.
**useImperativeHandle:** Customizes the instance value exposed when using ref with a functional component.
**useReducer:** Manages complex state logic using a reducer function.
