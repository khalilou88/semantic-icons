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
  selector: 'svg[si-text-format-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.0001 3.25C11.2964 3.25 11.565 3.42455 11.6854 3.6954L17.4631 16.6954C17.6313 17.0739 17.4608 17.5171 17.0823 17.6854C16.7038 17.8536 16.2606 17.6831 16.0924 17.3046L14.436 13.5777L7.56395 13.5775L5.90752 17.3043C5.73929 17.6829 5.29606 17.8533 4.91755 17.6851C4.53904 17.5168 4.36858 17.0736 4.53681 16.6951L10.3147 3.69539C10.4351 3.42454 10.7037 3.25 11.0001 3.25ZM8.23064 12.0775L13.7693 12.0777L11 5.84664L8.23064 12.0775Z"
      fill="#323544"
    />
    <svg:path
      d="M19.7495 4.00051L19.75 17C19.75 17.4142 20.0858 17.75 20.5 17.75C20.9142 17.75 21.25 17.4142 21.25 17L21.2495 4.00046C21.2495 3.58625 20.9137 3.25047 20.4995 3.25049C20.0853 3.2505 19.7495 3.5863 19.7495 4.00051Z"
      fill="#323544"
    />
    <svg:path
      d="M17.4996 20.75L4.49997 20.7496C4.08576 20.7495 3.74999 20.4137 3.75 19.9995C3.75001 19.5853 4.08581 19.2495 4.50003 19.2496L17.4997 19.25C17.9139 19.25 18.2496 19.5858 18.2496 20C18.2496 20.4142 17.9138 20.75 17.4996 20.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTextFormatIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}