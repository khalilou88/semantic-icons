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
  selector: 'svg[si-az-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#3f9c35" d="M.1 0h640v480H.1z" />
    <svg:path fill="#ed2939" d="M.1 0h640v320H.1z" />
    <svg:path fill="#00b9e4" d="M.1 0h640v160H.1z" />
    <svg:circle cx="304" cy="240" r="72" fill="#fff" />
    <svg:circle cx="320" cy="240" r="60" fill="#ed2939" />
    <svg:path
      fill="#fff"
      d="m384 200 7.7 21.5 20.6-9.8-9.8 20.7L424 240l-21.5 7.7 9.8 20.6-20.6-9.8L384 280l-7.7-21.5-20.6 9.8 9.8-20.6L344 240l21.5-7.7-9.8-20.6 20.6 9.8z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAzFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}