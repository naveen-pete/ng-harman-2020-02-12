import { fromEvent } from 'rxjs';
import { take, throttleTime, map } from 'rxjs/operators';

const mapEventFn = (e: MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY,
    sourceElement: e.target,
    eventType: e.type
  };
};

const takeFromDocumentEvent = () => {
  const source$ = fromEvent(document, 'mousemove').pipe(
    map(mapEventFn),
    throttleTime(1000),
    take(5)
  );

  return source$;
};

export const beginDemo = () => {
  takeFromDocumentEvent().subscribe(
    data => console.log('document event data:', data),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};
