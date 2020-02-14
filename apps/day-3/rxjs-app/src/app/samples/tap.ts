import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const ofNumbers = () => {
  const source$ = of(101, 202, 303, 404, 505).pipe(
    tap(n => console.log(`  before map(): ${n}`)),
    map(x => x * 2),
    tap(y => console.log(`  after map(): ${y}`))
  );

  return source$;
};

export const beginDemo = () => {
  ofNumbers().subscribe(
    n => console.log('Final data:', n),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};
