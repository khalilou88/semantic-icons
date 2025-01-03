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
  selector: 'svg[si-cc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path fill="#6da544" d="M0 0h512v512H0z" />
      <svg:g fill="#ffda44">
        <svg:path
          d="m393 367.3 7 14.7 15.9-3.7-7.1 14.7 12.7 10-15.9 3.7V423L393 412.8 380.3 423v-16.3l-15.9-3.6 12.8-10.1-7.1-14.7L386 382zm-65.4-155.8 7 14.7 16-3.7-7.2 14.7 12.8 10-16 3.6.1 16.3-12.7-10.2-12.7 10.2v-16.3l-15.8-3.5 12.7-10.1-7-14.7 15.8 3.7zm65.4-89 7 14.6 15.9-3.6-7.1 14.6 12.7 10.1-15.9 3.6v16.3L393 167.9l-12.7 10.2v-16.3l-15.9-3.6 12.8-10-7.1-14.7L386 137zm57 66.7 7 14.7 16-3.7-7.1 14.7 12.7 10.1-15.9 3.6v16.3l-12.6-10.2-12.7 10.2v-16.3l-15.9-3.6 12.8-10.1-7.1-14.7L443 204zm-40.8 78 5.6 17h17.9l-14.5 10.4 5.5 17-14.5-10.5-14.4 10.6 5.5-17-14.5-10.6h18z"
        />
        <svg:path
          d="M283.8 328.3a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7zM161 100.2a44.5 44.5 0 0 0-77.1 0h77zm.1.2-38.7 38.7-38.7-38.7a44.3 44.3 0 0 0-5.8 22 44.5 44.5 0 1 0 89 0 44.3 44.3 0 0 0-5.8-22z"
        />
      </svg:g>
      <svg:path
        fill="#a2001d"
        d="M111.3 128v37.6a44.6 44.6 0 0 0 11.1 1.4c3.9 0 7.6-.5 11.2-1.4V128h-22.3z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCcFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}