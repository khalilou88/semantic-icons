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
  selector: 'svg[si-number-6-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.886 2L10.4482 9.6864C10.9454 9.56459 11.4652 9.5 12 9.5C15.5899 9.5 18.5 12.4101 18.5 16C18.5 19.5899 15.5899 22.5 12 22.5C8.41015 22.5 5.5 19.5899 5.5 16C5.5 14.7949 5.82793 13.6665 6.39941 12.699L12.576 2H14.886ZM12 11.5C9.51472 11.5 7.5 13.5147 7.5 16C7.5 18.4853 9.51472 20.5 12 20.5C14.4853 20.5 16.5 18.4853 16.5 16C16.5 13.5147 14.4853 11.5 12 11.5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNumber6Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
