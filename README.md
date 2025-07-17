# Practice takeUntilDestroyed in Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Inspiration

[Use takeUntilDestroyed to Unsubscribe from Angular's Observables](https://www.youtube.com/watch?v=Cr4NRfZxaP0)
[How Does an RxJS Observable Pipeline Work?](https://www.youtube.com/watch?v=TYJ2V-4JktE)

## Concepts

- Add and subscribe this observable without unsubscribing it to see memory leak in action:
```bash
interval(1000)
```
This `interval()` creates an Observable that emits sequential numbers every specified interval of time.

- `takeUntilDestroyed` can only be used within an injection context. Think of `Injection context` as the codes that runs during construction where we can inject services.

- `DestroyRef` can be used with `takeUntilDestroyed`.

- Order of pipeline operations: `takeUntilDestroyed` should put put after the operators it tears down (see example in the detail5 component) and before any operators that exetue when the source stream completes (see example in the detail6 component) .

## Development server

To start a local development server, run:

```bash
ng serve
```