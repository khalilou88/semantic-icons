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
  selector: 'svg[si-ir-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 144.7 258.8 39.6 512 144.7v222.6L257 493 0 367.3z"
      />
      <svg:path
        fill="#6da544"
        d="M0 0v144.7h105.6v-22.2h33.6v22.2h33.3v-22.2h33.6v22.2h33.3v-22.2H273v22.2h33v-22.2h33.6v22.2h33.2v-22.2h33.6v22.2H512V0z"
      />
      <svg:path
        fill="#d80027"
        d="M0 367.3V512h512V367.3H406.4v22.4h-33.6v-22.4h-33.2v22.4H306v-22.4h-33v22.4h-33.6v-22.4h-33.3v22.4h-33.6v-22.4h-33.3v22.4h-33.6v-22.4zm339.1-178h-33.4c.2 3.7.4 7.4.4 11.1 0 24.8-6.2 48.8-17 66-3.3 5.2-9 12.6-16.4 17.6v-94.7h-33.4v94.8c-7.5-5-13-12.4-16.4-17.7-10.8-17-17-41-17-65.9 0-3.7.2-7.4.4-11H173a190 190 0 0 0-.4 11c0 68.7 36.7 122.5 83.5 122.5s83.5-53.8 83.5-122.5c0-3.7-.1-7.4-.4-11z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiIrFlagIcon implements OnInit {
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