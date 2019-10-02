# global-styles
A package of Ellevation's global styles. Including:
- foundation
- fontawesome
- variables (colors, foundation vars, icon vars, typography vars)
- mixins
- typography
- grid adjustments
- functions
- re-usable component styles (e.g. button, blankslate)

Usage:
`npm i @ellevation/global-styles`

In your project's root sass file:
`@import '${path_to_node_modules}/@ellevation/global-styles/sass/Site.scss'`

Publishing:
Changes made to this repo must be versioned by incrementing the version in package.json. This way all consuming projects will receive the latest style changes.

TODO
- compatibility with web: assess assetts (what needs to come over to global-styles, what can stay)
