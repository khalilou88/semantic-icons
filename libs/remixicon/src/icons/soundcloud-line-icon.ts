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
  selector: 'svg[si-soundcloud-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 10C4.55228 10 5 10.4477 5 11V18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18V11C3 10.4477 3.44772 10 4 10ZM7 11C7.55228 11 8 11.4477 8 12V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V12C6 11.4477 6.44772 11 7 11ZM10 7C10.5523 7 11 7.44772 11 8V18C11 18.5523 10.5523 19 10 19C9.44771 19 9 18.5523 9 18V8C9 7.44772 9.44771 7 10 7ZM15 6C18.2384 6 20.8776 8.56557 20.9959 11.7751L20.999 12.0353C22.6956 12.2775 24 13.7364 24 15.5C24 17.3686 22.5357 18.8951 20.692 18.9948L20.5 19H16.999C16.4468 19 15.999 18.5523 15.999 18C15.9989 17.4872 16.3849 17.0645 16.8823 17.0067L16.999 17L20.4461 17.0007L20.584 16.9977C21.3751 16.955 22 16.2975 22 15.5C22 14.7984 21.5142 14.199 20.8512 14.0409L20.7164 14.0152L18.9467 13.7626L18.999 11.976L18.9951 11.8004C18.8943 9.75011 17.2499 8.10567 15.1996 8.0049L15 8C14.7321 8 14.4687 8.02612 14.2123 8.07715L13.999 8.126L13.999 18.0005C13.999 18.5131 13.6132 18.9355 13.1161 18.9933L12.9995 19C12.4475 19 12 18.5525 11.9999 18.0005L11.999 6.80325C12.8818 6.2924 13.9067 6 15 6ZM1 12C1.55228 12 2 12.4477 2 13V17C2 17.5523 1.55228 18 1 18C0.447715 18 0 17.5523 0 17V13C0 12.4477 0.447715 12 1 12Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSoundcloudLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
