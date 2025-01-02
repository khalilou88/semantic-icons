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
  selector: 'svg[si-it-21-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <mask
        id="a"
        width="576"
        height="576"
        x="-32"
        y="-32"
        maskUnits="userSpaceOnUse"
      >
        <svg:circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
    </defs>
    <g mask="url(#a)">
      <svg:path fill="#d80027" d="M0 0h512v512H0V0Z" />
      <svg:path
        fill="#eee"
        fill-rule="evenodd"
        d="M512 204.8H310.9V0H201.1v204.8H0v102.4h201.1V512h109.8V307.2H512V204.8z"
      />
      <svg:path
        fill="#0052b4"
        d="M256 544c-77 0-149.3-30-203.6-84.4C-2 405.3-32 333-32 256S-2 106.7 52.4 52.4C106.7-2 179-32 256-32S405.3-2 459.6 52.4C514 106.7 544 179 544 256s-30 149.3-84.4 203.6A286.1 286.1 0 0 1 256 544Zm0-512c-59.8 0-116 23.3-158.4 65.6C55.3 140 32 196.2 32 256s23.3 116 65.6 158.4C140 456.7 196.2 480 256 480s116-23.3 158.4-65.6C456.7 372 480 315.8 480 256s-23.3-116-65.6-158.4A222.5 222.5 0 0 0 256 32Z"
      />
      <svg:path
        fill="#0052b4"
        d="m432 176-32-64H112l-32 64h64l-20-40h120l-20 40h64l-20-40h120l-20 40h64Z"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIt21FlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '512');
    this.render.setAttribute(svg, 'height', '512');
  }
}
