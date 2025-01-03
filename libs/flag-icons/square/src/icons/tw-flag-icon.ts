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
    <svg:clipPath id="tw-a">
      <svg:path d="M0 0h512v512H0z" />
    </svg:clipPath>
    <svg:g clip-path="url(#tw-a)">
      <svg:path fill="red" d="M0 0h768v512H0z" />
      <svg:path fill="#000095" d="M0 0h384v256H0z" />
      <svg:g fill="#fff">
        <svg:path
          d="m164.3 135.4-2.7 10.2 10.1 2.7-2-7.4zm50 5.5-2 7.4 10.1-2.7-2.7-10.2zm-44.6-25.8-5.4 5.5 2 7.4z"
        />
        <svg:path d="m166.3 128-2 7.4 5.4 5.5z" />
        <svg:path
          d="m164.3 120.6-7.4 7.4 7.4 7.4 2-7.4zm14.8 29.7 5.5 5.4 7.4-2zm20.3 5.4 10.2 2.7 2.7-10.1-7.4 2z"
        />
        <svg:path
          d="m204.9 150.3 7.4-2 2-7.4zm-33.2-2 2.7 10.1 10.2-2.7-5.5-5.4zm20.3 5.4 7.4 2 5.5-5.4z"
        />
        <svg:path
          d="m184.6 155.7 7.4 7.4 7.4-7.4-7.4-2zm-12.9-48-10.1 2.7 2.7 10.2 5.4-5.5zm-2 33.2 2 7.4 7.4 2zm48-12.9 2-7.4-5.4-5.5z"
        />
        <svg:path
          d="m179.1 105.7-7.4 2-2 7.4zm35.2 9.4-2-7.4-7.4-2zm5.4 20.3 7.4-7.4-7.4-7.4-2 7.4z"
        />
        <svg:path
          d="m214.3 115.1-9.4-9.4-12.9-3.4-12.9 3.4-9.4 9.4-3.4 12.9 3.4 12.9 9.4 9.4 12.9 3.4 12.9-3.4 9.4-9.4 3.4-12.9z"
        />
        <svg:path
          d="m214.3 140.9 5.4-5.5-2-7.4zm5.4-20.3 2.7-10.2-10.1-2.7 2 7.4zm-7.4-12.9-2.7-10.1-10.2 2.7 5.5 5.4zm-27.7-7.4-10.2-2.7-2.7 10.1 7.4-2z"
        />
        <svg:path d="m192 102.3-7.4-2-5.5 5.4z" />
        <svg:path d="m199.4 100.3-7.4-7.4-7.4 7.4 7.4 2z" />
        <svg:path
          d="m204.9 105.7-5.5-5.4-7.4 2zm-20.3 50-10.2 2.7 4.7 17.6 12.9-12.9zm-5.5 20.3 12.9 48 12.9-48-12.9-12.9zm-7.4-27.7-10.1-2.7-4.7 17.5 17.5-4.7z"
        />
        <svg:path
          d="m156.9 163.1-12.9 48 35.1-35.1-4.7-17.6zM144 140.9 108.9 176l48-12.9 4.7-17.5z"
        />
        <svg:path
          d="m164.3 135.4-7.4-7.4-12.9 12.9 17.6 4.7zm0-14.8-2.7-10.2-17.6 4.7 12.9 12.9z"
        />
        <svg:path
          d="M144 115.1 96 128l48 12.9 12.9-12.9zm96 25.8-17.6 4.7 4.7 17.5 48 12.9z"
        />
        <svg:path
          d="m212.3 148.3-2.7 10.1 17.5 4.7-4.7-17.5zm-12.9 7.4-7.4 7.4 12.9 12.9 4.7-17.6zm20.3-20.3 2.7 10.2 17.6-4.7-12.9-12.9zM204.9 176l35.1 35.1-12.9-48-17.5-4.7zm7.4-68.3 10.1 2.7 4.7-17.5-17.5 4.7zm27.7 7.4L275.1 80l-48 12.9-4.7 17.5zm-12.9-22.2 12.9-48L204.9 80l4.7 17.6zm12.9 48 48-12.9-48-12.9-12.9 12.9z"
        />
        <svg:path
          d="m219.7 120.6 7.4 7.4 12.9-12.9-17.6-4.7zM179.1 80 144 44.9l12.9 48 17.5 4.7zm-7.4 27.7 2.7-10.1-17.5-4.7 4.7 17.5z"
        />
        <svg:path
          d="m156.9 92.9-48-12.9 35.1 35.1 17.6-4.7zm42.5 7.4 10.2-2.7-4.7-17.6L192 92.9z"
        />
        <svg:path d="M204.9 80 192 32l-12.9 48L192 92.9z" />
        <svg:path d="m184.6 100.3 7.4-7.4L179.1 80l-4.7 17.6z" />
      </svg:g>
      <svg:circle cx="192" cy="128" r="54.4" fill="#000095" />
      <svg:circle cx="192" cy="128" r="48" fill="#fff" />
    </svg:g>
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
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
