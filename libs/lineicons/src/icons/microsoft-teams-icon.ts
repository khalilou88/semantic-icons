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
  selector: 'svg[si-microsoft-teams-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.5343 6.6502C21.5343 7.80646 20.5968 8.74396 19.4405 8.74396C18.2843 8.74396 17.3499 7.80646 17.3499 6.6502C17.3499 5.49394 18.2874 4.55647 19.4405 4.55647C20.5937 4.55647 21.5343 5.49394 21.5343 6.6502Z"
      fill="#323544"
    />
    <svg:path
      d="M15.9537 5.71913C15.9537 7.39099 14.6005 8.74412 12.9318 8.74412H12.8537V7.5785C12.8537 6.82226 12.2412 6.20976 11.4849 6.20976H9.94742C9.91929 6.05038 9.90681 5.88477 9.90681 5.71913C9.90681 4.05039 11.2599 2.69727 12.9318 2.69727C14.6037 2.69727 15.9537 4.05039 15.9537 5.71913Z"
      fill="#323544"
    />
    <svg:path
      d="M22 10.5567V15.2629C22 17.0567 20.5469 18.5129 18.7531 18.5129H18.7375C18.2438 18.5129 17.775 18.4035 17.3531 18.2035C16.5531 19.9879 14.7813 21.2504 12.6969 21.3035C10.4594 21.2473 8.58129 19.7973 7.87815 17.8035H11.4844C12.2407 17.8035 12.8532 17.191 12.8532 16.4348V9.67542H21.1156C21.6062 9.67542 22 10.0692 22 10.5567Z"
      fill="#323544"
    />
    <svg:path
      d="M12.2156 7.57231C12.2094 7.54418 12.2031 7.51605 12.1937 7.48792C12.1844 7.45667 12.1719 7.42541 12.1562 7.39418C12.15 7.37854 12.1406 7.3598 12.1312 7.34419C12.1281 7.33793 12.1281 7.3348 12.125 7.32854C12.0875 7.26293 12.0406 7.20042 11.9906 7.14729C11.8343 6.99103 11.6187 6.89104 11.3812 6.89104H2.85312C2.38125 6.89104 2 7.27228 2 7.74418V16.2692C2 16.741 2.38125 17.1223 2.85312 17.1223H11.3812C11.85 17.1223 12.2312 16.741 12.2312 16.2692V7.74418C12.2312 7.68479 12.225 7.62853 12.2156 7.57231ZM9.35937 10.1285H7.62499V14.7723H6.56873V10.1285H4.87187V9.22853H9.35937V10.1285Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMicrosoftTeamsIcon implements OnInit {
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