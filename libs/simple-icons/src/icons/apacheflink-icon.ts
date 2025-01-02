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
  selector: 'svg[si-apacheflink-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Apache Flink</title>
    <svg:path
      d="M3.192 13.236c.028.035.064.069.098.101l.024.022.008.004a.736.736 0 0 0 .179.065 8.117 8.117 0 0 1-.138-1.758c.027-.797.178-1.47.462-2.059a8.02 8.02 0 0 1 .315-.519s-.176 1.202-.202 1.673a7.104 7.104 0 0 0 .16 1.868l.072-.05c-.043-.389-.042-.8.004-1.22a6.987 6.987 0 0 1 .419-1.721 9.266 9.266 0 0 1 .973-1.892c-1.985.209-2.418 2.1-2.418 2.1s.017-.347.024-.434c.057-.649.123-.961.205-1.287-.13.238-.212.488-.271.688-.139.47-.216.949-.273 1.356a9.022 9.022 0 0 0-.096 1.289c.002.38.024.828.176 1.263.073.205.164.373.279.511zm1.44-.737c.179-.113.385-.2.626-.268.425-.119.889-.239 1.461-.379l.19-.046c.478-.116.974-.237 1.439-.415.283-.108.552-.25.824-.436.38-.26.721-.579 1.012-.951.154-.196.232-.349.309-.605l.114-.378s.464.519-.004 1.436c.297-.107.582-.413.798-.788.181-.315.491-1.451.491-1.451s.569.875-.105 2.011a1.59 1.59 0 0 0 .356-.227c2.507-2.49.349-3.899-.103-4.236a4.141 4.141 0 0 0-.982-.525L11 5.218c-.03-.013-.047-.033-.055-.042l-.321-.35.563.155c.079.021.154.042.228.064.614.182 1.082.4 1.472.686.445.325 2.142 1.751.348 3.837.556-.191 1.606-.772 1.962-1.272 1.713-2.405-.254-3.808-.17-3.808.019 0 .044.002.099.01a.44.44 0 0 0 .069.006c.036 0 .097-.006.109-.041.015-.042-.014-.122-.073-.168-.154-.117-.321-.202-.533-.169C12.926 4.4 12.3 3.85 12.3 3.85s2.482.129 2.562-.28a4.92 4.92 0 0 0-1.225-.912 6.697 6.697 0 0 0-2.228-.743c-1.207-.179-2.13.053-2.13.053.096-.121.574-.667 2.556-.511.802.063 1.564.316 2.27.669.182.091.29-.125.293-.223.004-.114.201.379.203.405.019-.049.096-.308.112-.308.047 0 .24.603.24.603.002-.024.257-.286.257-.286.076.343.066.514.047.562.002-.009.267-.172.267-.172s.152.638.412.891c.084.082.238.296.328.527.19-.133.421-.799.421-.799s.119.353.019.988c.007-.008.301-.219.301-.219s.042.449-.15 1.008a.572.572 0 0 0-.022.095c.162-.091.404-.388.404-.388l-.042.188c-.048.214-.137.629-.327.953a2.549 2.549 0 0 0-.29.686c.049-.045.099-.085.152-.12.1-.065.199-.117.293-.151l.232-.085c.392-.142.788-.309 1.173-.479.812-.359.631-.86.631-.86-.209.408-.966.816-.966.816s.98-.878.562-1.905c-.115.27-.224.538-.327.792-.144.353-.314.726-.59 1.055-.141.168-.286.29-.446.373a.686.686 0 0 1-.115.048l-.043.016s.172-.283.184-1.063c.004-.282.012-.571.012-.826v-.054c0-.132-.003-.263-.002-.395.005-.558.015-.982.132-1.373-.012-.022-.005-.045-.018-.068-.027-.046-.047-.099-.071-.157-.036-.089-.066-.178-.101-.275-.127-.36-.308-.538-.365-.588-.038.115-.271.591-.271.591s.001-.365-.001-.393c-.067-.511-1.33-.972-1.356-.988l.067.401s-.382-.028-.545-.284c-.034-.052-.084-.09-.13-.125l.09.306.093.214s-.296-.024-.435-.269c-.033-.057-.075-.121-.112-.189a.746.746 0 0 0-.574-.396 8.393 8.393 0 0 0-.601-.062 1.301 1.301 0 0 1-.479-.11L12.573 0l.046.087c.015.029.025.058.04.095l.008.022.032.078.048.172s-.353-.014-.765-.299c-.089-.062-.201-.062-.325-.072L11.622.08a4.192 4.192 0 0 0-.332-.014 3.097 3.097 0 0 0-.974.149c.035-.002.071-.003.106-.003l.067.001c.677.012.887.413.887.413s-.606 0-.785.023c-.209.027-.42.052-.616.106a5.102 5.102 0 0 0-1.622.796c-.124.088-.253.17-.389.256-.23.147-.424.341-.576.577a.357.357 0 0 0-.034.068c-.014.036-.008.039.015.051a.78.78 0 0 0 .168.061 2.353 2.353 0 0 1 1.786 2.005l.015.123c.035.307.072.623.056.944a3.413 3.413 0 0 1-.901 2.191c-.59.646-1.323.69-1.316.685.435-.406.722-.95.876-1.66a1.395 1.395 0 0 0-.084-.828.868.868 0 0 0-.016.047c-.097.276-.22.594-.447.857-.132.15-.312.322-.521.521-.911.867-2.435 2.317-2.409 4.623 0 .135.027.3.056.427zm13.967-5.836c-.113.098-.226.196-.341.292-.205.171-.351.28-.666.394-.276.099-.488-.124-.488-.124a1.3 1.3 0 0 0 .447-.389 7.968 7.968 0 0 0-1.154.71 2.41 2.41 0 0 0-.389.353c-.124.156-.205.318-.205.484v.002c0-.003.044-.005.053-.007a6.122 6.122 0 0 0 1.226-.49 16.006 16.006 0 0 0 1.757-1.074.334.334 0 0 1 .095-.048l.371-.106-.228.314a.288.288 0 0 1-.027.034c-.745.741-1.517 1.272-2.36 1.622a4.734 4.734 0 0 1-.492.174 9.201 9.201 0 0 0 1.513-.525c.537-.244.913-.483 1.22-.772.475-.45.814-.981 1.009-1.576a.732.732 0 0 0 .024-.1l-.111.033c-.127.037-.258.074-.373.13a2.367 2.367 0 0 0-.427.286c-.158.127-.321.269-.454.383zM1.578 14.987c.128.205.268.407.403.602l.021.031c-.351-1.236.223-1.982.223-1.982l.142.391c.036.101.091.199.167.302.147-.275.326-.538.534-.784a1.438 1.438 0 0 1-.472-.415c-.2-.264-.332-.581-.415-.996a5.507 5.507 0 0 1-.069-1.562c.015-.174.036-.348.059-.525a8.377 8.377 0 0 0-1.626 2.716.046.046 0 0 0 .003.021 9.438 9.438 0 0 0 1.03 2.201zM18.221 3.353a5.045 5.045 0 0 1 .366-1.933l.018-.041a.94.94 0 0 0-.246.252c-.168.242-.291.53-.397.932-.182.687-.29 1.427-.337 2.308.192-.205.507-.657.572-1.215.011-.094.024-.199.024-.303zm3.368 19.012c-.396-.065-1.234-.36-1.468-.945-.288.707.306 1.221.75 1.451.077.04.1.05.181.082.084.037-.165.494.045.704.21.21.409.148.487.148 0 0 .361.335.567.111.053-.058.098-.262.029-.385-.086-.152-.295-.124-.315-.124-.41.005-.373-.188-.311-.27.045-.059.132-.055.205-.055.017 0 .034.001.053.004.094.011.184.016.268.016.335 0 .726-.035.985-.179.186-.104.491-.456.475-.692-.017.006-.825.319-1.951.134zm2.324-7.785c-.038-.097-.085-.196-.126-.283l-.06-.126c-.021-.047-.044-.093-.066-.139-.055-.111-.112-.226-.151-.35-.034-.106-.043-.216-.052-.32a3.312 3.312 0 0 0-1.886-2.716 1.25 1.25 0 0 1-.215.417c-.09.12-.144.138-.262.138-.157 0-.18-.18-.133-.265a1.45 1.45 0 0 0 .196-.543c.033-.377-.177-.786-.435-1.068-.239-.261-.649-.564-.979-.663-.079.307.017.812.124 1.109.132.36.544 1.069.445 1.499 0 0-.029.275-.304.448-.153.096-.215.053-.215.053.294-.627.297-.891-.028-1.485-.245-.447-.358-.899-.27-1.398.003-.02.01-.04.014-.06a2.222 2.222 0 0 1-.088.199c-.25.439-.486.667-.628 1.121-.149.508.01 1.059.325 1.598a1.237 1.237 0 0 1-.553-.804 4.323 4.323 0 0 0-1.334 1.166c-.08.104-.175.191-.259.268a4.92 4.92 0 0 1-1.978 1.099c-.493.145-1.001.267-1.502.388l-.131.031c-.683.165-1.409.351-2.097.657-.792.352-1.42.757-1.918 1.239a4.412 4.412 0 0 0-1.326 2.593c-.114.781-.055 1.595.18 2.49.008.032-1.03-.941-.494-3.741a6.322 6.322 0 0 0-.236-.007l-.067.001c-1.933.058-2.737 1.123-2.737 1.123s.126-1.182 1.987-1.579c.14-.03 1.312-.293 1.352-.306.154-.314.341-.612.557-.889l-.166.026c-.319.05-.648.1-.975.143l-.252.03c-.577.074-1.174.149-1.74.316-.594.174-1.059.426-1.422.768-.389.366-.668.839-.852 1.442l-.023.086c-.013.05-.026.101-.045.151-.02.052-.024.11.018.22.348.923.945 1.723 1.774 2.376a7.587 7.587 0 0 0 2.146 1.18c.026.009.07.024.109.064l.348.337-.544-.13c-.064-.015-.127-.029-.191-.047-1.114-.306-2.085-.821-2.885-1.532-.273-.099-1.668-.794-2.26-1.936l-.099-.19s.757.746 1.288.855a5.59 5.59 0 0 1-.564-1.22.283.283 0 0 0-.049-.087C1.273 17.196.624 16.054.196 14.834a4.708 4.708 0 0 1-.085-.262c-.043.355-.064.71-.064 1.057 0 .11.955 2.647.955 2.647s-.42-.467-.768-1.059c0 0-.061-.199-.069-.212.149.897.439 1.74.863 2.521 1.167 2.147 2.956 3.554 5.47 4.212a7.73 7.73 0 0 0 1.955.255l7.855.007c.369 0 .652-.022.915-.07l.041-.007a1.47 1.47 0 0 1 .281-.034c.106.001.219.014.345.044l.062.015c.116.026.224.052.331.052 1.32.01 1.137-.785 1.137-.785-.055-.207-.295-.351-.557-.413a1.204 1.204 0 0 0-.28-.033c-.179 0-.367.041-.559.12l-.288.123-.172.075a1.317 1.317 0 0 1-.098.038.54.54 0 0 1-.17.036c-.199 0-.208-.195-.213-.312a.46.46 0 0 1 .169-.373c.093-.079.194-.156.302-.228.195-.132.396-.268.551-.446a1.49 1.49 0 0 0 .361-.699.825.825 0 0 0-.044-.469c-.014-.035-.027-.042-.04-.046a9.037 9.037 0 0 0-.368-.112c-.488-.137-.847-.342-1.127-.643a2.803 2.803 0 0 1-.439-.671 5.783 5.783 0 0 1-.416-1.096c-.159-.601-.536-1.083-1.15-1.472a3.536 3.536 0 0 0-1.557-.524c-.137-.015-.276-.021-.423-.028-.037-.002-.122-.013-.208-.024-.077-.01-.153-.021-.188-.022l-.21-.013s.054-.076.489-.242c.082-.031.167-.039.25-.054.201-.035.4-.053.59-.053.458 0 .891.106 1.288.314.494.26.888.656 1.206 1.211.173.302.309.626.416.992.021.07.038.14.058.216.035.134.071.271.122.396.307.756.876 1.198 1.69 1.315.216.031.426.046.626.046a3.48 3.48 0 0 0 1.077-.165c.455-.149.803-.382 1.062-.712a1.42 1.42 0 0 0 .255-.494l.035-.121.203.048c.043.011.086.021.13.03a.483.483 0 0 0 .094.009c.092 0 .186-.022.288-.044l.017-.004c.076-.017.15-.02.222-.023l.061-.003c.072 0 .132.048.159.093.031.053.081.083.175.104a.367.367 0 0 0 .075.007c.229 0 .47-.21.476-.416.003-.079-.018-.127-.07-.163-.041-.028-.083-.054-.131-.084l-.228-.143.152-.116a.245.245 0 0 1 .147-.051c.045 0 .085.013.12.028 0 0-.191-1.01-1.527-.716 0 0-.217.089-.328.131l-.052.02a.27.27 0 0 1-.101.019.358.358 0 0 1-.166-.047c-.468-.235-.926-.131-1.002-.131a2.28 2.28 0 0 1-.538-.059.222.222 0 0 1-.116-.067l-.086-.097a2.634 2.634 0 0 1-1.183-.197c-.436-.186-.784-.47-.995-.903a1.487 1.487 0 0 1-.15-.685l.026.067c.084.248.208.474.374.678.306.379.701.634 1.15.813.243.097.495.165.764.21 0 0 .955.036 1.38-.317.323-.18.614-.264.917-.264h.063c1.027-.001 1.118-.498 1.118-.498s.117.076.281.051a.666.666 0 0 0 .604-.63l-.34-.306-.072-.063-.134-.106.092-.105a.274.274 0 0 1 .207-.099c.046 0 .091.012.134.035.061.034.115.077.164.117l.051.04.064.05a.559.559 0 0 0-.036-.265zm-1.267-.273c-.038.106-.088.123-.199.099a.688.688 0 0 0-.181-.014c-.111.005-.221.024-.332.026-.277.005-.543-.045-.763-.225-.312-.256-.372-.559-.177-.943l.004.037a.745.745 0 0 0 .345.611c.18.121.385.17.595.196.17.021.338.05.487.142l.041.021a.043.043 0 0 1 .006-.007c-.029-.041-.039-.183-.024-.242a.565.565 0 0 0 .002-.297.622.622 0 0 1-.25.304.076.076 0 0 1-.053.02 2.53 2.53 0 0 1-.654-.233c-.186-.102-.283-.261-.234-.484a.198.198 0 0 0-.056-.189c-.023-.023-.043-.05-.067-.078.055-.051.102-.1.155-.143.05-.04.102-.078.158-.109.432-.245 1.016-.061 1.208.389.049.114.075.24.089.363.028.259-.013.511-.1.756zm-20.67 2.926c-.02-.237-.033-.474-.046-.756a.102.102 0 0 0-.021-.064c-.63-.909-1.089-1.696-1.446-2.476a7.292 7.292 0 0 1-.169-.394 7.748 7.748 0 0 0 1.682 3.694v-.004zm18.991 4.103c.176.117.395.203.732.287.34.085.653.125.966.125.185 0 .334-.019.47-.059a.81.81 0 0 0 .59-.639 6.03 6.03 0 0 0 .128-.713 1.798 1.798 0 0 0-.372-1.323c-.035.031-.07.061-.106.089a1.104 1.104 0 0 1-.198.121.658.658 0 0 1-.291.072.593.593 0 0 1-.281-.072.96.96 0 0 0-.461-.104c-.063 0-.131.005-.208.013-.027.003-.039.009-.054.04-.258.531-.683.908-1.298 1.154l-.017.007-.003.013a1.15 1.15 0 0 0-.001.454c.054.216.185.391.404.535zM14.99 9.512c-.516.525-1.141.958-1.964 1.364-.52.256-1.1.441-1.826.582-.415.081-.829.159-1.243.237l-.086.015-1.056.2c-.929.178-1.92.389-2.872.71-.691.234-1.224.481-1.677.779-.444.291-.75.591-.965.943a2.637 2.637 0 0 0-.146.291 5.696 5.696 0 0 1-.075.159.42.42 0 0 1-.076.114c-.484.473-.69 1.064-.613 1.756.046.416.176.821.395 1.236.127-.846.574-1.492 1.328-1.92.41-.233.863-.403 1.383-.517.526-.117 1.06-.214 1.561-.304l.307-.054c.516-.091 1.051-.184 1.558-.345.12-.038.238-.08.348-.121.147-.055.275-.12.391-.206.141-.105.289-.2.444-.291-.653-.015-1.76-.017-2.104-.019-.77-.004-1.3.06-1.964.312-.694.264-2.676 1.271-2.676 1.271s.985-1.054 2.837-1.844a7.858 7.858 0 0 1 2.928-.53c.275 0 .561.011.872.033.512.038 1.024.075 1.535.11l.014.001c.024 0 .05-.004.075-.011a10.63 10.63 0 0 1 1.572-.325c.175-.025.353-.061.528-.097-.034-.011-.069-.02-.103-.03a1.13 1.13 0 0 1-.118-.044l-.088-.035-.345-.233 1.296.028c.279 0 3.032-.443 4.21-3.723.078-.219.16-.437.223-.676a7.611 7.611 0 0 1-2.669 1.063 7.155 7.155 0 0 1-1.139.121zm4.784-1.871zm1.701 5.622a.27.27 0 1 0 .54 0 .27.27 0 0 0-.54 0z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiApacheflinkIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
