import { from } from "rxjs";

const fromNumberArray = () => {
  const array = [100, 200, 300, 400];
  const source$ = from(array);
  return source$;
};

const fromString = () => {
  const str = 'Hello world!';
  const source$ = from(str);
  return source$;
};

const fromResolvedPromise = () => {
  const promise = Promise.resolve({ id: 1, name: 'Ram' });
  const source$ = from(promise);
  return source$;
};

const fromRejectedPromise = () => {
  const promise = Promise.reject({ message: 'Something went wrong!' });
  const source$ = from(promise);
  return source$;
};


export const beginDemo = () => {
  // Example 1
  const source$ = fromNumberArray();

  // Example 2
  // const source$ = fromString();

  // Example 3
  // const source$ = fromResolvedPromise();

  // Example 4
  // const source$ = fromRejectedPromise();

  source$.subscribe(
    data => console.log('Data:', data),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};
