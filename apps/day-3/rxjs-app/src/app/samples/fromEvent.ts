import { fromEvent } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';

const mapEventFn = (e: MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY,
    sourceElement: e.target,
    eventType: e.type
  };
};

const fromDocumentEvent = () => {
  const source$ = fromEvent(document, 'mousedown').pipe(
    map(mapEventFn)
  );
  return source$;
};

const fromDivEvent = () => {
  const div = document.getElementById('someDiv');
  const source$ = fromEvent(div, 'mousemove').pipe(
    map(mapEventFn),
    throttleTime(1000)
  );
  return source$;
};

const fromButtonEvent = () => {
  const btn = document.getElementById('someButton');
  const source$ = fromEvent(btn, 'click').pipe(
    map(mapEventFn)
  );
  return source$;
};

export const beginDemo = () => {
  fromDocumentEvent().subscribe(
    data => console.log('document event data:', data),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );

  fromDivEvent().subscribe(
    data => console.log('div event data:', data),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );

  fromButtonEvent().subscribe(
    data => console.log('button event data:', data),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};