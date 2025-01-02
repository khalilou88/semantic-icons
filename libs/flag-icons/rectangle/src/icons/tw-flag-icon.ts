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
  selector: 'svg[si-tw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <clipPath id="tw-a">
      <svg:path d="M0 0h640v480H0z" />
    </clipPath>
    <g clip-path="url(#tw-a)">
      <svg:path fill="red" d="M0 0h720v480H0z" />
      <svg:path fill="#000095" d="M0 0h360v240H0z" />
      <g fill="#fff">
        <svg:path
          d="m154 126.9-2.5 9.6 9.4 2.6-1.8-7.1zm46.9 5.1-1.8 7.1 9.4-2.6-2.5-9.6zm-41.8-24-5.1 5.1 1.9 6.9z"
        />
        <svg:path d="m155.9 120-1.9 6.9 5.1 5.1z" />
        <svg:path
          d="m154 113.1-6.9 6.9 6.9 6.9 1.9-6.9zm14 27.8 5.1 5.1 6.9-1.9zm18.9 5.1 9.6 2.5 2.6-9.4-7.1 1.8z"
        />
        <svg:path
          d="m192 140.9 7.1-1.8 1.8-7.1zm-31.1-1.8 2.6 9.4 9.6-2.5-5.1-5.1zm19.1 5 6.9 1.9 5.1-5.1z"
        />
        <svg:path
          d="m173.1 146 6.9 6.9 6.9-6.9-6.9-1.9zm-12.2-45.1-9.4 2.6 2.5 9.6 5.1-5.1zm-1.8 31.1 1.8 7.1 7.1 1.8zm45-12 1.9-6.9-5.1-5.1z"
        />
        <svg:path
          d="m168 99.1-7.1 1.8-1.8 7.1zm32.9 8.9-1.8-7.1-7.1-1.8zm5.1 18.9 6.9-6.9-6.9-6.9-1.9 6.9z"
        />
        <svg:path
          d="m200.9 108-8.9-8.9-12-3.2-12 3.2-8.9 8.9-3.2 12 3.2 12 8.9 8.9 12 3.2 12-3.2 8.9-8.9 3.2-12z"
        />
        <svg:path
          d="m200.9 132 5.1-5.1-1.9-6.9zm5.1-18.9 2.5-9.6-9.4-2.6 1.8 7.1zm-6.9-12.2-2.6-9.4-9.6 2.5 5.1 5.1zm-26-6.9-9.6-2.5-2.6 9.4 7.1-1.8zm6.9 1.9-6.9-1.9-5.1 5.1z"
        />
        <svg:path d="m186.9 94-6.9-6.9-6.9 6.9 6.9 1.9z" />
        <svg:path
          d="m192 99.1-5.1-5.1-6.9 1.9zM173.1 146l-9.6 2.5 4.5 16.6 12-12.2zm-5.1 19.1 12 44.9 12-44.9-12-12.2zm-7.1-26-9.4-2.6-4.4 16.4 16.4-4.4z"
        />
        <svg:path
          d="m147.1 152.9-12 45.1 32.9-32.9-4.5-16.6zm-12-20.9L102 165.1l45.1-12.2 4.4-16.4z"
        />
        <svg:path
          d="m154 126.9-6.9-6.9-12 12 16.4 4.5zm0-13.8-2.5-9.6-16.4 4.5 12 12z"
        />
        <svg:path
          d="M135.1 108 90 120l45.1 12 12-12zm90 24-16.6 4.5 4.4 16.4 45.1 12.2z"
        />
        <svg:path
          d="m199.1 139.1-2.6 9.4 16.4 4.4-4.4-16.4zm-12.2 6.9-6.9 6.9 12 12.2 4.5-16.6zm19.1-19.1 2.5 9.6 16.6-4.5-12.2-12z"
        />
        <svg:path
          d="m192 165.1 33.1 32.9-12.2-45.1-16.4-4.4zm7.1-64.2 9.4 2.6 4.4-16.4-16.4 4.4z"
        />
        <svg:path
          d="M225.1 108 258 75.1l-45.1 12-4.4 16.4zm-12.2-20.9L225.1 42 192 75.1l4.5 16.4zm12.2 44.9 44.9-12-44.9-12-12.2 12z"
        />
        <svg:path
          d="m206 113.1 6.9 6.9 12.2-12-16.6-4.5zm-38-38L135.1 42l12 45.1 16.4 4.4z"
        />
        <svg:path d="m160.9 100.9 2.6-9.4-16.4-4.4 4.4 16.4z" />
        <svg:path
          d="m147.1 87.1-45.1-12 33.1 32.9 16.4-4.5zm39.8 6.9 9.6-2.5-4.5-16.4-12 12z"
        />
        <svg:path d="M192 75.1 180 30l-12 45.1 12 12z" />
        <svg:path d="m173.1 94 6.9-6.9-12-12-4.5 16.4z" />
      </g>
      <svg:circle cx="180" cy="120" r="51.1" fill="#000095" />
      <svg:circle cx="180" cy="120" r="45.1" fill="#fff" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTwFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}
