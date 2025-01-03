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
  selector: 'svg[si-mz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="mz-a">
        <svg:path fill-opacity=".7" d="M0 0h496v496H0z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#mz-a)" transform="scale(1.0321)">
      <svg:path fill="#009a00" fill-rule="evenodd" d="M0 0h744v155H0z" />
      <svg:path fill="#fff" fill-rule="evenodd" d="M0 155h744v15.5H0z" />
      <svg:path fill="#000001" fill-rule="evenodd" d="M0 170.5h744v155H0z" />
      <svg:path fill="#fff" fill-rule="evenodd" d="M0 325.5h744V341H0z" />
      <svg:path fill="#ffca00" fill-rule="evenodd" d="M0 341h744v155H0z" />
      <svg:path fill="red" fill-rule="evenodd" d="M0 0v496l325.6-248z" />
      <svg:path
        fill="#ffca00"
        fill-rule="evenodd"
        d="m192.3 322.6-49.6-36.3-49.5 36.3 19.2-58.4-50-36 61.6.3 18.7-58.5 18.8 58.5 61.5-.3-50 36z"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.1"
        d="M99.6 281.9h35.8c2.9 3.2 9.3 4.5 15.4 0 11.2-6.2 32.9 0 32.9 0l4.3-4.6-10.4-34.1-3.8-4s-8-4.8-23.2-3.2c-15.2 1.6-20.5-.6-20.5-.6S116.7 237 113 239l-4.3 4.3-9 38.7z"
      />
      <svg:path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.1"
        d="M106.8 273s34.2-4.2 44 8.9c-5.5 3.8-10.4 4-15.7.2.9-1.4 12.3-13.3 41.4-9.3"
      />
      <svg:path
        fill="none"
        stroke="#000"
        stroke-width="1.1"
        d="m143.4 238.9-.3 37.6m30.7-37 6.4 29.8"
      />
      <svg:path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.1"
        d="m113.3 239-3.5 15.4"
      />
      <svg:path
        fill-rule="evenodd"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.1"
        d="m76.4 286 8.4 9.8c1 .6 1.9.6 2.8 0l12.4-15 5.3-6.4a4.1 4.1 0 0 0 1-3l10-9c.8.2 1.3.3 2 .3-.9-.3-1.6-.7-.8-1.8l2.2-1.7 1.8 2.2s-2.5 3.3-2.8 3.3H116l-5.3 4.7 2.3 2 3.5 9.5 4.2-3-2.7-9.7 6-6.5-2.3-3.5 1.5-2s20.7 13 28.7 9.5c.2.1.5-9.3.5-9.3s-21.5-2.2-22-6.4c-.5-4.3 4.8-4.8 4.8-4.8l-2.3-3.2.5-1.8 3.8 4.8 8.4-7.3 49.9 56.9c2.7-1.1 3.3-1.8 3.5-4.5L150 234l3.8-4c.7-.8 1-1.2 1-2.5l5.7-5a7.1 7.1 0 0 1 3.7 3l15.8-13.3c.4.4 1.7.8 2.5.3l26-25-28.3 20-1-.7c0-.8 1-1 0-2.5-1.1-1.3-2.8 1.3-3 1.3s-4.1-1.4-5-3.1l-.2 4.6-7.3 6.7-5.5-.2-8 7.7-1 3 1.3 2.5s-4.2 3.7-4.2 3.5c0-.3-.9-1.1-1-1.3l3.7-3.2.5-2.3-1.2-1.9c-.4.3-5 5.2-5.3 4.7L129.7 211l.7-2.8-8.5-9.2c-3-1-8-1.2-9 5.5-.7 1.6-7.2.2-7.2.2l-3.4.8-19.7 27.9 11 13.2 22.4-28.4.6-8 4.7 5.2c1.6.2 3.1.2 4.5-.5l13.3 14.8-2.2 2.2 2 2.2 2.2-1.6 1 1.3c-1.2.6-2 1.4-3 2-1.9-1.1-3.6-2.6-3.4-4.9l-7.5 6.2-.3 1.3-22.2 18.4-2 .3-.5 5.7 14.5-12v-1.7l1.5 1.2 11.2-9s.8 1 .5 1-10 9-10 9l-.2 1-1.7 1.5-1-.7-13.5 12h-2l-7.5 7.4c-1.9.2-3.6.4-5.2 1.5z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMzFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
