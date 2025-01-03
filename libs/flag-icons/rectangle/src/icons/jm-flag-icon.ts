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
  selector: 'svg[si-jm-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd">
      <svg:path fill="#000001" d="m0 0 320 240L0 480zm640 0L320 240l320 240z" />
      <svg:path fill="#090" d="m0 0 320 240L640 0zm0 480 320-240 320 240z" />
      <svg:path fill="#fc0" d="M640 0h-59.6L0 435.3V480h59.6L640 44.7z" />
      <svg:path fill="#fc0" d="M0 0v44.7L580.4 480H640v-44.7L59.6 0z" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiJmFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
