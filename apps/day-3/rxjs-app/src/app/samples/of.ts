import { of } from 'rxjs';

const ofNumbers = () => {
  const source$ = of(1, 2, 3, 4, 5);
  return source$;
};

const ofDifferentValues = () => {
  const source$ = of(
    'iPhone X',
    50000,
    true,
    { id: 1, name: 'krish' },
    [10, 15, 20],
    function sum(a, b) { return a + b; }
  );

  return source$;
};

export const beginDemo = () => {
  // Example 1
  const source$ = ofNumbers();

  // Example 2
  // const source$ = ofDifferentValues();

  source$.subscribe(
    data => console.log('Data:', data),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};
