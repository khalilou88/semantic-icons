import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-ws-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd" stroke-width="1pt">
      <svg:path fill="#ce1126" d="M0 0h512v512H0z" />
      <svg:path fill="#002b7f" d="M0 0h256v256H0z" />
      <svg:path
        fill="#fff"
        d="m147 231.4-19.6-13.3-18.9 13.5 6-23.5-18-14.7 23.2-1.3 7.7-22.4 8.5 22.8 22.8.5-18.2 15.5zm-3.4-156.8-15.6-10-15.4 10 4.2-19-13.7-12.1 18.3-1.6 6.8-17.5 7.1 17.7 18 1.4-14 12.5zM74.3 131l-15.2-10.8-15.4 10.4 4.6-18.3L34 100.2l18.2-.8 6.7-18.1 6.6 17.8 18.3 1.1-14.3 12zm139-12.7-14.7-9.5-14.3 9.7 4-17.4-13-11.2 17.3-1.4 6-16.4 6.6 16.6 16.8 1-13.2 11.6zm-41.1 41.3-9.7-6.2-9.6 6.2 2.5-11.6-8.7-7.7 11.4-1 4.4-11 4.5 11 11.2 1-8.5 7.7z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}