import { fromEvent } from 'rxjs';
import { debounceTime, map, tap, distinctUntilChanged } from 'rxjs/operators';

const fromInputEvent = () => {
  const input = document.getElementById('search');
  const source$ = fromEvent(input, 'keyup').pipe(
    map((e: any) => e.target.value),
    tap(value => console.log(`    before debounceTime: ${value}`)),
    debounceTime(1000),
    tap(value => console.log(`  after debounceTime: ${value}`)),
    distinctUntilChanged()
  );

  return source$;
};

export const beginDemo = () => {
  fromInputEvent().subscribe(
    value => console.log('Search text:', value),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};
