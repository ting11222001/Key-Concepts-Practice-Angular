# Practice takeUntilDestroyed in Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Inspiration

[Use takeUntilDestroyed to Unsubscribe from Angular's Observables](https://www.youtube.com/watch?v=Cr4NRfZxaP0)

## Concepts

- Add and subscribe this observable without unsubscribing it to see memory leak in action:
```bash
interval(1000)
```
This `interval()` creates an Observable that emits sequential numbers every specified interval of time.

- `takeUntilDestroyed` can only be used within an injection context. Think of `Injection context` as the codes that runs during construction where we can inject services.

- `DestroyRef` can be used with `takeUntilDestroyed`.

## Development server

To start a local development server, run:

```bash
ng serve
```