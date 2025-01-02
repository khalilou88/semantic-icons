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
  selector: 'svg[si-link-2-angular-right-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.1022 14.0998C17.2236 14.9785 15.7989 14.9785 14.9203 14.0998L13.5581 12.7377L12.4971 13.7987L13.8593 15.1608C14.738 16.0395 14.7379 17.4641 13.8593 18.3428L10.1198 22.0822C9.24115 22.9609 7.81652 22.9609 6.93785 22.0822L3.1551 18.2995C2.27642 17.4208 2.27642 15.9962 3.1551 15.1175L6.89455 11.378C7.77323 10.4994 9.19785 10.4994 10.0765 11.378L11.4365 12.738L12.4975 11.677L11.1376 10.3171C10.2589 9.4384 10.2589 8.01378 11.1376 7.1351L14.8812 3.39143C15.7599 2.51275 17.1845 2.51275 18.0632 3.39143L21.8459 7.17415C22.7246 8.05283 22.7246 9.47745 21.8459 10.3561L18.1022 14.0998ZM10.3758 13.7987L9.01587 12.4387C8.72297 12.1458 8.2481 12.1458 7.95521 12.4387L4.21576 16.1782C3.92287 16.471 3.92287 16.9459 4.21576 17.2388L7.99851 21.0216C8.2914 21.3144 8.76627 21.3144 9.05917 21.0216L12.7986 17.2821C13.0915 16.9892 13.0915 16.5143 12.7986 16.2215L11.4365 14.8593L10.205 16.0907C9.91215 16.3836 9.43728 16.3836 9.14439 16.0907C8.85149 15.7979 8.85149 15.323 9.14439 15.0301L10.3758 13.7987ZM15.9809 13.0391C16.2738 13.332 16.7487 13.332 17.0416 13.0391L20.7853 9.29547C21.0781 9.00257 21.0781 8.5277 20.7853 8.23481L17.0025 4.45209C16.7096 4.1592 16.2348 4.1592 15.9419 4.45209L12.1982 8.19576C11.9053 8.48865 11.9053 8.96352 12.1982 9.25642L13.5581 10.6163L14.8012 9.37323C15.0941 9.08034 15.569 9.08034 15.8619 9.37323C16.1548 9.66612 16.1548 10.141 15.8619 10.4339L14.6188 11.677L15.9809 13.0391Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiLink2AngularRightIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
