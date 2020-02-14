import { fromEvent } from 'rxjs';
import { takeUntil, throttleTime, map } from 'rxjs/operators';

const mapEventFn = (e: MouseEvent) => {
  return {
    x: e.clientX,
    y: e.clientY,
    sourceElement: e.target,
    eventType: e.type
  };
};

const fromButtonEvent = () => {
  const btn = document.getElementById('someButton');
  const source$ = fromEvent(btn, 'click');
  return source$;
};

const fromDocumentEvent = () => {
  const button$ = fromButtonEvent();

  const source$ = fromEvent(document, 'mousemove').pipe(
    map(mapEventFn),
    throttleTime(1000),
    takeUntil(button$)
  );

  return source$;
};

export const beginDemo = () => {
  fromDocumentEvent().subscribe(
    data => console.log('document event data:', data),
    error => console.log('Error:', error),
    () => console.log('Completed!')
  );
};
