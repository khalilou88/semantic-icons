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
  selector: 'svg[si-mapillary-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Mapillary</svg:title>
    <svg:path
      d="M.362 11.812c-.564-.305-.46-1.099.25-1.302.602-.17 5.495-1.81 6.975-2.308a.897.897 0 0 0 .565-.558L10.528.671C10.75.02 11.555.017 11.884.65c.117.224 4.546 8.25 4.7 8.591.154.341.055.718-.295.935-.35.218-.918.544-1.117.667-.36.223-.704.068-.869-.277-.163-.346-1.427-2.577-1.942-3.525-.258-.472-1.033-.654-1.295.111-.187.553-.627 1.842-.857 2.514a.93.93 0 0 1-.567.564l-2.582.855c-.509.168-.756.948-.069 1.277.144.07 3.24 1.73 3.56 1.882.32.152.497.59.31.9-.255.425-.582.962-.7 1.138a.728.728 0 0 1-.948.224c-.34-.179-8.651-4.584-8.853-4.692zm22.528 11.91c-.334-.18-10.918-5.78-11.355-6.003-.436-.222-.542-.606-.308-1.021.118-.211.376-.633.586-.972.288-.467.709-.468.946-.33.238.138 3.598 1.906 3.816 2.025.512.284 1.27-.363.93-.93-.163-.27-1.579-2.853-2.03-3.705-.203-.387-.147-.736.31-.968a17.5 17.5 0 0 0 .98-.568c.357-.216.834-.052 1.028.27.193.325 5.926 10.887 6.109 11.215.362.651-.343 1.348-1.011.988"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMapillaryIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '00AF66');
  }
}
