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
  selector: 'svg[si-my-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#eee"
        d="M0 256 256 0h256v55.7l-19.5 33 19.5 33.7v66.8l-22.1 37.7L512 256v66.8l-20.2 38.5 20.2 28.3v66.7l-254.5 28.2L0 456.3v-66.7l26-35.1-26-31.7z"
      />
      <svg:path
        fill="#d80027"
        d="M256 256h256v-66.8H222.9zm-33.1-133.6H512V55.7H222.9zM512 512v-55.7H0V512zM0 389.6h512v-66.8H0z"
      />
      <svg:path fill="#0052b4" d="M0 0h256v256H0z" />
      <svg:g fill="#ffda44">
        <svg:path
          d="M170.2 219.1a63.3 63.3 0 1 1 30.1-119 78 78 0 1 0 0 111.4 63 63 0 0 1-30 7.6z"
        />
        <svg:path
          d="m188 111.3 11.3 23.5 25.4-5.9-11.4 23.5 20.4 16.2-25.4 5.7.1 26-20.3-16.2-20.4 16.2.1-26-25.4-5.7 20.4-16.2-11.4-23.5 25.4 6z"
        />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMyFlagIcon implements OnInit {
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
