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
  selector: 'svg[si-css3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.23242 2.24032C3.23242 2.37383 3.57065 6.29016 3.98899 10.9453C4.39842 15.5915 4.75445 19.5345 4.76335 19.7036L4.79005 20.0062L8.39486 21.0031L11.9908 22L12.7117 21.8042C13.1034 21.6974 14.7144 21.2523 16.2987 20.8162C18.7553 20.1397 19.1737 19.9973 19.2093 19.846C19.2538 19.6324 20.7669 2.48064 20.7669 2.19582V2H3.23242V2.24032ZM17.5359 6.02314C17.5003 6.23676 17.2689 8.76457 17.0197 11.6573C16.7616 14.5412 16.548 16.9266 16.5302 16.9444C16.4945 16.9889 12.1243 18.1994 11.9997 18.1994C11.9107 18.1994 9.52526 17.5496 7.89642 17.0868L7.44248 16.9533L7.33567 15.7784C7.28227 15.1286 7.21106 14.3453 7.17546 14.0338L7.12205 13.482H8.23465C9.48965 13.482 9.45405 13.4642 9.46295 14.2385C9.46295 14.4344 9.48965 14.737 9.51636 14.915L9.56976 15.2354L10.7892 15.5559L11.9997 15.8763L13.2013 15.5559C13.8599 15.3778 14.4118 15.2265 14.4118 15.2265C14.4207 15.2176 14.4741 14.6925 14.5275 14.0605C14.5809 13.4197 14.6432 12.7966 14.6699 12.6542L14.7144 12.4139H7.07755L7.03304 12.2092C7.00634 12.1024 6.95294 11.5861 6.91734 11.0521L6.85503 10.0997H14.8746L14.928 9.49444C14.9636 9.16511 15.017 8.65777 15.0437 8.37294C15.0793 8.00801 15.0704 7.8656 14.9992 7.9101C14.9458 7.9368 13.05 7.9368 10.7714 7.9012L6.63251 7.8478L6.57911 7.21584C6.5435 6.86871 6.499 6.37027 6.4723 6.11215L6.41889 5.64931H17.5804L17.5359 6.02314Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCss3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}