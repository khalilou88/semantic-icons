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
  selector: 'svg[si-in-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#f93" d="M0 0h640v160H0z" />
    <svg:path fill="#fff" d="M0 160h640v160H0z" />
    <svg:path fill="#128807" d="M0 320h640v160H0z" />
    <svg:g transform="matrix(3.2 0 0 3.2 320 240)">
      <svg:circle r="20" fill="#008" />
      <svg:circle r="17.5" fill="#fff" />
      <svg:circle r="3.5" fill="#008" />
      <svg:g id="in-d">
        <svg:g id="in-c">
          <svg:g id="in-b">
            <svg:g id="in-a" fill="#008">
              <svg:circle r=".9" transform="rotate(7.5 -8.8 133.5)" />
              <svg:path d="M0 17.5.6 7 0 2l-.6 5z" />
            </svg:g>
            <use
              xlink:href="#in-a"
              width="100%"
              height="100%"
              transform="rotate(15)"
            />
          </svg:g>
          <use
            xlink:href="#in-b"
            width="100%"
            height="100%"
            transform="rotate(30)"
          />
        </svg:g>
        <use
          xlink:href="#in-c"
          width="100%"
          height="100%"
          transform="rotate(60)"
        />
      </svg:g>
      <use
        xlink:href="#in-d"
        width="100%"
        height="100%"
        transform="rotate(120)"
      />
      <use
        xlink:href="#in-d"
        width="100%"
        height="100%"
        transform="rotate(-120)"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiInFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}