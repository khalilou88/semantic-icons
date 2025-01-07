import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-face-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.02 5H6C3.79 5 2 6.79 2 9c0 .55.12 1.07.32 1.54A10 10 0 0 1 6.02 5zm9.08-1.5C14.36 2.59 13.25 2 12 2s-2.36.59-3.1 1.5c.98-.32 2.02-.5 3.1-.5s2.12.18 3.1.5zM12 5.31c0 2.24 1.82 4.06 4.06 4.06.93 0 1.82-.32 2.53-.89A7.983 7.983 0 0 0 12.03 5c-.01.11-.03.21-.03.31zM2.5 16.12c-.31.56-.5 1.19-.5 1.88a3.999 3.999 0 0 0 5.25 3.8 10.081 10.081 0 0 1-4.75-5.68zm19.18-5.58c.2-.47.32-.99.32-1.54 0-2.21-1.79-4-4-4h-.02a10 10 0 0 1 3.7 5.54zM16.75 21.8A3.999 3.999 0 0 0 22 18c0-.69-.19-1.32-.5-1.88-.81 2.44-2.52 4.47-4.75 5.68z"
      opacity=".3"
    />
    <svg:path
      d="M21.97 13.52v-.04C23.21 12.38 24 10.78 24 9c0-3.31-2.69-6-6-6-.26 0-.52.02-.78.06a5.98 5.98 0 0 0-10.44 0C6.52 3.02 6.26 3 6 3 2.69 3 0 5.69 0 9c0 1.78.79 3.38 2.02 4.48v.04A6.008 6.008 0 0 0 0 18c0 3.31 2.69 6 6 6 1.39 0 2.67-.48 3.69-1.28.74.18 1.51.28 2.31.28s1.57-.1 2.31-.28c1.02.8 2.3 1.28 3.69 1.28 3.31 0 6-2.69 6-6 0-1.78-.79-3.38-2.03-4.48zM18 5c2.21 0 4 1.79 4 4 0 .55-.12 1.07-.32 1.54A10 10 0 0 0 17.98 5H18zm.6 3.48c-.71.57-1.6.89-2.53.89A4.059 4.059 0 0 1 12 5.31c0-.1.02-.21.03-.31 2.72.01 5.13 1.39 6.57 3.48zM12 2c1.25 0 2.36.59 3.1 1.5-.98-.32-2.02-.5-3.1-.5s-2.12.18-3.1.5C9.64 2.59 10.75 2 12 2zM2 9c0-2.21 1.79-4 4-4h.02a10 10 0 0 0-3.7 5.54C2.12 10.07 2 9.55 2 9zm4 13c-2.21 0-4-1.79-4-4 0-.69.19-1.32.5-1.88.8 2.44 2.52 4.47 4.74 5.68-.39.13-.8.2-1.24.2zm6-1c-4.41 0-8-3.59-8-8 0-3.72 2.56-6.85 6-7.74v.05c0 3.34 2.72 6.06 6.06 6.06 1.26 0 2.45-.39 3.45-1.09.31.86.49 1.77.49 2.72 0 4.41-3.59 8-8 8zm6 1c-.44 0-.85-.07-1.25-.2 2.23-1.21 3.94-3.24 4.74-5.68.31.56.5 1.2.5 1.88.01 2.21-1.78 4-3.99 4z"
    />
    <svg:circle cx="9" cy="14" r="1.25" />
    <svg:circle cx="15" cy="14" r="1.25" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFace2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
