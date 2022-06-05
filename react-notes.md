# Daily Notes of React

## Styling

### CSS Framework

#### [Material UI](https://mui.com/getting-started/usage/)

##### `<Grid>`

- [Grid](https://mui.com/components/grid/)

- [Grid API](https://mui.com/api/grid/)

> 1.How to nested `<Grid>` components with proper spacing ?

Solution:

    A `<Grid>` tag to have an `item` AND `container` property, they should be nested like `Grid[container] => Grid[item] => Grid[container]`.

Demo:

```javascript
<Grid
  container
  spacing={3}
  direction="row"
  justify="center"
  alignItems="center"
>
  <Grid item direction="row" justify="center" alignItems="center" xs={8}>
    <Grid container spacing={3}>
      <Item />
      <Item />
      <Item />
    </Grid>
  </Grid>

  <Grid item direction="row" justify="center" alignItems="center" xs={4}>
    <Grid container spacing={3}>
      <Item />
      <Item />
    </Grid>
  </Grid>

  <Grid item direction="row" justify="center" alignItems="center" xs={12}>
    <Item />
  </Grid>
</Grid>
```

References:

- [Material-ui nested grids margins](https://stackoverflow.com/questions/59992924/material-ui-nested-grids-margins)

---

> 2.How to set item width in `<Grid>` components ?

Solution:

    Using [fluid grid property](https://material-ui.com/customization/breakpoints/), this property only works on item elements, not on container. The padding between items is setting in contaner using `spacing` keyword

    `xs` Defines the number of grids the component is going to use. It's applied for **all the screen sizes** with the lowest priority.

    `sm` Defines the number of grids the component is going to use. It's applied for the sm breakpoint and wider screens if not overridden.

    `md` Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.

Demo:

    Refer to `<Grid>.1`

References:

- [Full Width Material-UI Grid not working as it should](https://stackoverflow.com/questions/49797264/full-width-material-ui-grid-not-working-as-it-should)
- [The MUI grid system](https://blog.logrocket.com/mui-grid-system/)

---
