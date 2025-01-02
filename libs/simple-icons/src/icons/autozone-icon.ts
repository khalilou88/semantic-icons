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
  selector: 'svg[si-autozone-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>AutoZone</title>
    <svg:path
      d="M10.35 6.026c-.7.009-1.69.235-2.176 1.16l-2.442 4.25h1.59l.682-1.188h.773l-.681 1.188h1.58l2.25-3.904c.375-.689.013-1.338-1.149-1.483a3.14 3.14 0 0 0-.427-.023Zm6.082.783-1.891 3.295c-.172.316-.156.668.096.986.179.231.367.348.707.348h.894l.62-1.08h-.676c-.053 0-.11.008-.131-.041-.012-.03-.02-.061-.006-.09l.953-1.656h.803l.66-1.155h-.8l.349-.607Zm3.855.385c-1.166-.001-2.247.942-2.752 2.37-.373 1.057-.216 1.943.928 2.005 1.156.061 2.261-.66 2.879-2.409.374-1.056.107-1.906-.942-1.962a2.15 2.15 0 0 0-.113-.004Zm-8.006.222-1.672 2.912c-.298.548.094 1.094 1.063 1.215.55.069 1.705.004 2.25-.927l.002-.004 1.83-3.196h-1.463l-1.502 2.67c-.123.221-.25.284-.445.246-.244-.048-.141-.234-.07-.361l1.478-2.555zm-2.39.051a.697.697 0 0 1 .101.002c.233.024.309.144.164.385l-.636 1.11h-.776l.697-1.218a.536.536 0 0 1 .45-.279zm9.984.994a.25.25 0 0 1 .053.004c.252.045.144.34-.073.758-.359.693-.603 1.04-.906.98-.22-.043-.14-.357.078-.775.284-.548.588-.956.848-.967zm-16.78 3.944L0 17.791h1.635l3.097-5.386zm2.02 0-3.097 5.386h1.039l3.1-5.386zm1.563 0-3.096 5.386h.643l3.095-5.386Zm1.318 0-3.094 5.386h.377l3.096-5.386zm.979.02-.733 1.276h2.143l-3.682 2.682-.83 1.434h4.363l.729-1.27H8.918l3.559-2.635.853-1.488zm14.707.573a.31.31 0 0 0-.32.32.298.298 0 0 0 .156.277.32.32 0 0 0 .164.042c.06 0 .115-.013.164-.041a.292.292 0 0 0 .113-.113.323.323 0 0 0 .041-.164.325.325 0 0 0-.041-.164.293.293 0 0 0-.113-.116.332.332 0 0 0-.164-.04Zm-.018.067h.018a.237.237 0 0 1 .217.123.27.27 0 0 1 .033.13.268.268 0 0 1-.034.133.226.226 0 0 1-.087.09.253.253 0 0 1-.13.033.258.258 0 0 1-.13-.033.23.23 0 0 1-.088-.09.277.277 0 0 1 0-.263.225.225 0 0 1 .088-.09.254.254 0 0 1 .113-.033zm-.08.07v.355h.057v-.134h.045l.06.134h.06l-.068-.142c.023-.007.04-.017.05-.033a.145.145 0 0 0 .013-.069v-.008c0-.04-.008-.067-.026-.082-.017-.014-.05-.021-.097-.021zm.055.05h.037c.026 0 .044.005.053.012.008.008.011.022.011.045v.004c0 .023-.003.039-.011.047-.009.008-.027.014-.053.014h-.037zm-9.534.4c-1.166-.002-2.247.944-2.751 2.376-.374 1.059-.217 1.95.927 2.01 1.156.062 2.263-.66 2.881-2.414.372-1.059.106-1.914-.943-1.97-.038-.003-.076-.003-.114-.003zm7.852 0c-1.162-.002-2.173.944-2.678 2.376-.373 1.059-.29 1.95.854 2.01.963.051 1.819-.444 2.459-1.623h-1.475c-.2.31-.392.5-.576.465-.17-.034-.113-.355.021-.694h2.147c.083-.174.16-.361.23-.562.374-1.059.18-1.914-.869-1.97-.037-.003-.075-.003-.113-.003zm-3.36.175c-.494.018-.802.31-.802.31l.154-.273h-1.344l-2.314 4.02h1.479l1.388-2.42c.098-.172.23-.368.428-.326.177.037.23.2.172.308l-1.399 2.438h1.465l1.678-2.93c.232-.425-.147-.993-.533-1.088a1.359 1.359 0 0 0-.371-.039Zm-4.904 1.096a.235.235 0 0 1 .051.002c.253.044.147.341-.07.761-.36.695-.606 1.043-.908.983-.22-.044-.138-.357.08-.777.283-.55.587-.959.847-.97zm7.766 0c.014 0 .028 0 .041.002.226.042.15.304-.03.681h-.679c.23-.406.463-.682.668-.683z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiAutozoneIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
