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
  selector: 'svg[si-first-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>FIRST</title>
    <svg:path
      d="M13.318 20.734c.608.18 1.239.274 1.873.278.834 0 1.472-.189 2.02-.585.609-.432 1.001-1.098 1.001-1.702a1.33 1.33 0 0 0-.49-1.035c-.245-.198-.5-.352-1.02-.595l-.422-.198c-.137-.072-.206-.144-.206-.225 0-.216.275-.378.647-.378.28 0 .612.081 1.247.289l.438-1.626a5.305 5.305 0 0 0-1.4-.194c-1.746 0-3.09.954-3.09 2.188 0 .649.432 1.108 1.51 1.612.51.234.599.297.599.46 0 .242-.265.396-.696.396-.383 0-.873-.117-1.54-.36h-.001Zm-4.526-5.818.138-.018c.686-.08 1.54-.135 2.01-.135.785 0 1.393.09 1.854.28.589.242.942.774.942 1.413 0 .55-.187 1.072-.54 1.477-.304.35-.578.522-1.147.693l-.138.045c.06.045.079.063.108.09.167.19.667 1.162 1.09 2.125h-2.355a32.79 32.79 0 0 0-.795-2.053l-.47 2.053h-2.08Zm-2.697-.036h2.138L6.84 20.886H4.702Zm-4.702 0h4.139l-.39 1.594H3.158l-.196.837h2.07l-.36 1.477H2.628l-.49 2.098H0Zm17.419 0H24l-.363 1.739h-1.54l-1.02 4.267H18.94l1.02-4.267h-1.67zm-8.441 2.864c.687 0 1.168-.406 1.168-.982 0-.306-.226-.46-.667-.46a1.46 1.46 0 0 0-.334.037l-.324 1.387c.07.009.079.018.157.018zm10.89-9.72L16 2.996 14.232 4.84c-.73-.283-1.88-.51-2.753-.51-1.271 0-2.581.434-3.496 1L5.516 2.992v-.003h-.002l-.002-.001v.002l-.882.092-1.904 10.427.886.092v-.003l4.019-1.758.019.018c.956.843 2.39 1.38 3.996 1.38 1.113 0 2.144-.259 2.991-.699l1.615 1.551 5.01-5.216v-.849ZM3.651 13.38 5.486 3.166l2.618 2.48.82.777.626.594 1.488 1.418v.647l.632.607-1.975.9a3.582 3.582 0 0 1-1.138-.745l-.02-.021 1.516-.708-3.564-3.32-.07-.07-.086.46-.842 4.387-.13.682.223-.096.001-.005 1.145-.491c.18.377.436.728.755 1.042zm12.601-.14-1.068-1.026a4.28 4.28 0 0 0 1.05-1l.01-.016L18.842 8.5l.077-.083.34-.353-3.173-3.046-.713.742-.787.82-.536.558-1.01 1.052-.087.092.295.282 1.367 1.333c-.3.283-.68.526-1.109.704l-.903-.865-.886-.851-.602-.571 1.432-1.492.72-.75.781-.814 1.953-2.034 5.143 4.922zm-1.728-1.652a5.57 5.57 0 0 1-.604.263c-.72.266-1.497.4-2.307.4-1.15 0-2.238-.272-3.147-.79a4.517 4.517 0 0 1-1.254-1.03 3.556 3.556 0 0 1-.332-.472 3.001 3.001 0 0 1-.419-1.491c0-.55.158-1.08.47-1.577l.836.846a2.09 2.09 0 0 0-.025 1.08c.057.233.155.46.291.676.108.172.239.335.39.485.415.415.978.74 1.628.943a5.244 5.244 0 0 0 1.562.232c.438 0 .87-.052 1.287-.155.236-.06.465-.134.678-.223.493-.205.926-.49 1.253-.826a2.44 2.44 0 0 0 .652-1.131c.04-.166.06-.332.06-.493 0-.466-.175-.993-.46-1.396l.71-.741c.61.634.97 1.48.97 2.28 0 .147-.013.3-.038.456-.11.671-.466 1.31-1.03 1.848-.33.316-.724.59-1.17.816zm-2.534-1.59.853.82a5.183 5.183 0 0 1-2.923-.14l1.892-.85zm4.925-1.083c.023-.152.037-.302.037-.447 0-.853-.387-1.752-1.035-2.422l.169-.176 2.628 2.524-2.176 2.266c.23-.538.38-1.2.38-1.676a.992.992 0 0 0-.003-.069zm-10.6.04.004.018a.79.79 0 0 0-.004.063c0 .251.154.848.216 1.086l-.817.35.78-4.06.32.316a3.133 3.133 0 0 0-.54 1.74c0 .158.013.317.04.487zm8.415.827-1.24-1.209 1.05-1.094c.374.311.65.684.797 1.093-.009.067-.02.134-.037.201-.088.363-.28.701-.57 1.009zm-6.509-.348-.029-.04a2.109 2.109 0 0 1-.267-.62c-.006-.023-.008-.045-.013-.068a2.21 2.21 0 0 1 .283-.61l.994.982zm4.317-2.83-1.53 1.594-1.343-1.274c.626-.266 1.3-.4 1.98-.396.308 0 .607.027.893.076zm-1.101-2.075c.83 0 1.938.213 2.643.47l-.032.033-.782.814-.002.003a5.113 5.113 0 0 0-1.618-.257c-1.01 0-1.927.28-2.609.737l-.01-.01-.82-.777-.073-.069c.896-.541 2.06-.944 3.303-.944Zm1.881 16.205c.608.18 1.239.274 1.873.278.834 0 1.472-.189 2.02-.585.609-.432 1.001-1.098 1.001-1.702a1.33 1.33 0 0 0-.49-1.035c-.245-.198-.5-.352-1.02-.595l-.422-.198c-.137-.072-.206-.144-.206-.225 0-.216.275-.378.647-.378.28 0 .612.081 1.247.289l.438-1.626a5.305 5.305 0 0 0-1.4-.194c-1.746 0-3.09.954-3.09 2.188 0 .649.432 1.108 1.51 1.612.51.234.599.297.599.46 0 .242-.265.396-.696.396-.383 0-.873-.117-1.54-.36h-.001Zm-4.526-5.818.138-.018c.686-.08 1.54-.135 2.01-.135.785 0 1.393.09 1.854.28.589.242.942.774.942 1.413 0 .55-.187 1.072-.54 1.477-.304.35-.578.522-1.147.693l-.138.045c.06.045.079.063.108.09.167.19.667 1.162 1.09 2.125h-2.355a32.79 32.79 0 0 0-.795-2.053l-.47 2.053h-2.08Zm-2.697-.036h2.138L6.84 20.886H4.702Zm-4.702 0h4.139l-.39 1.594H3.158l-.196.837h2.07l-.36 1.477H2.628l-.49 2.098H0Zm17.419 0H24l-.363 1.739h-1.54l-1.02 4.267H18.94l1.02-4.267h-1.67zm-8.441 2.864c.687 0 1.168-.406 1.168-.982 0-.306-.226-.46-.667-.46a1.46 1.46 0 0 0-.334.037l-.324 1.387c.07.009.079.018.157.018zm10.89-9.72L16 2.996 14.232 4.84c-.73-.283-1.88-.51-2.753-.51-1.271 0-2.581.434-3.496 1L5.516 2.992v-.003h-.002l-.002-.001v.002l-.882.092-1.904 10.427.886.092v-.003l4.019-1.758.019.018c.956.843 2.39 1.38 3.996 1.38 1.113 0 2.144-.259 2.991-.699l1.615 1.551 5.01-5.216v-.849ZM3.651 13.38 5.486 3.166l2.618 2.48.82.777.626.594 1.488 1.418v.647l.632.607-1.975.9a3.582 3.582 0 0 1-1.138-.745l-.02-.021 1.516-.708-3.564-3.32-.07-.07-.086.46-.842 4.387-.13.682.223-.096.001-.005 1.145-.491c.18.377.436.728.755 1.042zm12.601-.14-1.068-1.026a4.28 4.28 0 0 0 1.05-1l.01-.016L18.842 8.5l.077-.083.34-.353-3.173-3.046-.713.742-.787.82-.536.558-1.01 1.052-.087.092.295.282 1.367 1.333c-.3.283-.68.526-1.109.704l-.903-.865-.886-.851-.602-.571 1.432-1.492.72-.75.781-.814 1.953-2.034 5.143 4.922zm-1.728-1.652a5.57 5.57 0 0 1-.604.263c-.72.266-1.497.4-2.307.4-1.15 0-2.238-.272-3.147-.79a4.517 4.517 0 0 1-1.254-1.03 3.556 3.556 0 0 1-.332-.472 3.001 3.001 0 0 1-.419-1.491c0-.55.158-1.08.47-1.577l.836.846a2.09 2.09 0 0 0-.025 1.08c.057.233.155.46.291.676.108.172.239.335.39.485.415.415.978.74 1.628.943a5.244 5.244 0 0 0 1.562.232c.438 0 .87-.052 1.287-.155.236-.06.465-.134.678-.223.493-.205.926-.49 1.253-.826a2.44 2.44 0 0 0 .652-1.131c.04-.166.06-.332.06-.493 0-.466-.175-.993-.46-1.396l.71-.741c.61.634.97 1.48.97 2.28 0 .147-.013.3-.038.456-.11.671-.466 1.31-1.03 1.848-.33.316-.724.59-1.17.816zm-2.534-1.59.853.82a5.183 5.183 0 0 1-2.923-.14l1.892-.85zm4.925-1.083c.023-.152.037-.302.037-.447 0-.853-.387-1.752-1.035-2.422l.169-.176 2.628 2.524-2.176 2.266c.23-.538.38-1.2.38-1.676a.992.992 0 0 0-.003-.069zm-10.6.04.004.018a.79.79 0 0 0-.004.063c0 .251.154.848.216 1.086l-.817.35.78-4.06.32.316a3.133 3.133 0 0 0-.54 1.74c0 .158.013.317.04.487zm8.415.827-1.24-1.209 1.05-1.094c.374.311.65.684.797 1.093-.009.067-.02.134-.037.201-.088.363-.28.701-.57 1.009zm-6.509-.348-.029-.04a2.109 2.109 0 0 1-.267-.62c-.006-.023-.008-.045-.013-.068a2.21 2.21 0 0 1 .283-.61l.994.982zm4.317-2.83-1.53 1.594-1.343-1.274c.626-.266 1.3-.4 1.98-.396.308 0 .607.027.893.076zm-1.101-2.075c.83 0 1.938.213 2.643.47l-.032.033-.782.814-.002.003a5.113 5.113 0 0 0-1.618-.257c-1.01 0-1.927.28-2.609.737l-.01-.01-.82-.777-.073-.069c.896-.541 2.06-.944 3.303-.944Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFirstIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
