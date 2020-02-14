import { of, zip } from 'rxjs';
import { map } from 'rxjs/operators';

const getProducts = () => {
  const names$ = of('iPhone X', 'Google Pixel 3');
  const prices$ = of(60000, 55000);
  const availability$ = of(true, false);

  const products$ = zip(names$, prices$, availability$).pipe(
    map(([name, price, isAvailable]) => ({ name, price, isAvailable }))
  );
  return products$;
}

export const beginDemo = () => {
  getProducts().subscribe(
    product => console.log('Data:', product),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};
