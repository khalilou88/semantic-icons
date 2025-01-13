import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-delphi-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Delphi</svg:title>
    <svg:path
      d="M23.922 10.66a11.925 11.925 0 0 0-1.93-5.299 12.002 12.002 0 0 0-1.362-1.692A11.993 11.993 0 0 0 15.271.455a11.916 11.916 0 0 0-2.88-.444c-.237-.005-.474-.015-.71-.004-.345.016-.69.036-1.033.077-.385.046-.77.108-1.15.182a11.947 11.947 0 0 0-4.906 2.297A12.012 12.012 0 0 0 .394 8.94a11.886 11.886 0 0 0-.393 2.883c-.009.51.016 1.019.073 1.526a11.954 11.954 0 0 0 3.103 6.79 11.982 11.982 0 0 0 8.442 3.858c.013 0 .818-.002.868-.004.518-.02 1.032-.076 1.543-.162a11.947 11.947 0 0 0 6.173-3.072 11.975 11.975 0 0 0 3.667-7.028c.053-.406.087-.815.113-1.224.038-.617.006-1.234-.062-1.848zM4.5 11.777c-.052.3-.094.601-.097.906-.003.253-.005.506.004.76.005.148.031.297.051.445.033.252-.067.455-.297.56a.473.473 0 0 1-.227.035c-.217-.019-.433-.05-.65-.077-.073-.01-.147-.017-.22-.03-.017-.003-.04-.025-.042-.041-.041-.249-.086-.497-.115-.747-.024-.206-.03-.413-.043-.62-.006-.118-.014-.236-.013-.355.002-.197.005-.394.017-.59.014-.218.034-.436.06-.653.02-.177.045-.355.083-.529.062-.29.134-.579.207-.867.07-.275.162-.542.273-.804.08-.187.15-.377.235-.56.09-.195.188-.387.295-.573.12-.21.251-.414.382-.619.083-.13.17-.259.26-.384.074-.102.155-.197.234-.295.072-.088.142-.178.217-.263a7.6 7.6 0 0 1 .25-.274c.123-.128.247-.254.373-.378.087-.085.176-.17.27-.248.173-.145.346-.293.528-.427.227-.168.46-.329.697-.483.186-.12.375-.235.572-.336.253-.129.513-.244.773-.359.159-.07.321-.133.486-.19a11.02 11.02 0 0 1 1.312-.359c.279-.05.56-.086.841-.12.194-.023.39-.042.586-.044.312-.003.625-.004.936.019.342.024.683.07 1.023.118.182.026.362.071.54.117.288.075.578.146.86.24.246.08.487.182.724.288.26.116.513.245.767.374.107.054.21.118.311.183.195.124.392.246.58.38.189.135.368.282.55.424.016.012.03.026.05.045-.165.109-.325.211-.481.318-.168.116-.334.235-.5.353-.105.073-.211.145-.315.219-.13.092-.258.187-.387.28l-.45.321c-.11.08-.218.162-.327.243-.129.096-.26.19-.387.288-.217.167-.443.138-.643.003a6.527 6.527 0 0 0-1.757-.83 5.884 5.884 0 0 0-1.33-.246c-.19-.013-.381-.018-.572-.025a4.367 4.367 0 0 0-.792.047 23.89 23.89 0 0 0-.62.105 5.084 5.084 0 0 0-.795.225 6.08 6.08 0 0 0-.527.218 7.22 7.22 0 0 0-.574.294c-.178.103-.347.222-.516.339-.108.073-.214.15-.313.233-.149.124-.292.255-.435.385-.26.235-.486.5-.697.778-.132.174-.25.36-.368.545a5.76 5.76 0 0 0-.489.967 6.298 6.298 0 0 0-.368 1.271zm13.278 5.496c-.175-.122-.353-.242-.527-.366a.5.5 0 0 1-.154-.237l-.222-.55-.21-.532c-.07-.17-.141-.34-.21-.512-.071-.176-.137-.355-.213-.53-.088-.204-.14-.427-.28-.606a4.738 4.738 0 0 0-.288-.337 2.613 2.613 0 0 0-.498-.413c-.14-.09-.298-.12-.457-.148-.449-.081-.896-.166-1.345-.248l-1.368-.246c-.39-.07-.78-.137-1.166-.218-.258-.054-.494.162-.518.407-.023.246.167.456.375.508.56.141 1.118.293 1.677.442.662.175 1.324.347 1.984.527.22.06.416.173.597.313.22.17.4.375.53.62.084.163.151.336.22.506.071.177.14.355.202.534.093.268.182.537.27.806.055.164.11.328.16.492.075.237.147.475.22.712.05.163.099.327.147.49l.184.638c.048.164.098.327.144.492.07.242.14.485.204.729.033.126-.065.268-.2.287-.273.038-.547.07-.821.104-.182.023-.364.043-.546.063l-.66.07c-.28.029-.558.06-.837.09-.118.012-.236.03-.355.028a1.03 1.03 0 0 1-.688-.261c-.144-.126-.223-.292-.316-.451-.078-.135-.152-.272-.235-.403a12.841 12.841 0 0 0-.398-.602c-.134-.187-.28-.365-.423-.544a6.035 6.035 0 0 0-.229-.265 6.95 6.95 0 0 0-.757-.737 8.876 8.876 0 0 0-.641-.488 5.608 5.608 0 0 0-1.755-.803c-.436-.112-.878-.195-1.333-.187a3.542 3.542 0 0 0-.678.07c-.16.034-.309.022-.441-.089-.073-.06-.104-.144-.146-.223-.017-.032-.027-.068-.044-.109.072-.02.143-.042.216-.058a1.93 1.93 0 0 1 .227-.042c.195-.023.39-.053.584-.058.281-.007.564-.01.844.012a7.816 7.816 0 0 1 1.592.321c.24.076.473.175.704.274.387.166.727.407 1.051.673.214.175.419.36.603.567.225.252.449.506.66.77.15.186.282.389.419.587.228.332.43.681.62 1.037.048.089.093.18.133.272.064.153.199.2.341.183l.572-.07.7-.08c.27-.028.54-.054.81-.084.208-.024.416-.05.624-.08.117-.018.202-.132.208-.254.006-.108-.045-.2-.077-.296-.089-.272-.184-.542-.276-.813-.09-.263-.177-.525-.266-.787-.092-.276-.183-.551-.277-.826-.064-.188-.131-.375-.196-.563-.054-.156-.104-.312-.16-.467-.067-.186-.137-.37-.208-.555-.037-.096-.074-.192-.12-.284a1.22 1.22 0 0 0-.482-.514c-.2-.12-.424-.159-.641-.22-.64-.18-1.28-.356-1.92-.533l-.825-.23c-.218-.06-.435-.129-.657-.177-.259-.057-.433-.212-.57-.427a1.32 1.32 0 0 1-.202-.583.867.867 0 0 1 .12-.546.919.919 0 0 1 .44-.382.7.7 0 0 1 .411-.041c.322.06.645.112.968.168.227.04.454.083.681.121.268.045.536.086.803.13.193.032.386.067.579.1.224.037.448.072.671.11.195.034.389.073.584.103.126.019.249.042.362.102.054.029.11.06.156.1.163.146.326.295.484.447.141.136.279.276.413.42a.945.945 0 0 1 .217.392c.033.115.077.227.117.34l.167.471.212.595c.062.178.122.356.185.534l.176.497.188.544.093.268-.013.01zm.708.363a3.104 3.104 0 0 1-.37-.169c-.03-.016-.039-.076-.054-.117-.07-.197-.138-.395-.206-.592l-.23-.664-.23-.653c-.094-.267-.185-.534-.279-.8a78.3 78.3 0 0 0-.2-.565c-.037-.101-.073-.203-.113-.304-.063-.161-.179-.285-.296-.407-.1-.104-.199-.209-.304-.306a18.166 18.166 0 0 0-.605-.537c-.149-.125-.334-.167-.522-.197a66.347 66.347 0 0 1-.603-.098c-.247-.04-.493-.083-.739-.125l-.665-.113-1.026-.172c-.279-.048-.557-.098-.836-.145-.197-.033-.393-.075-.591-.089-.11-.007-.226.026-.335.056a.939.939 0 0 0-.395.235c-.118.113-.21.247-.272.402-.12.306-.101.606.007.909.071.197.173.376.317.528.142.15.307.258.513.306.248.058.493.129.74.196.44.12.881.24 1.322.362l.842.233.841.235c.266.074.48.224.621.46.07.118.117.252.168.382.062.156.119.315.175.474.079.224.156.45.233.675l.194.567.163.489.167.477.19.562.278.816c.01.03.021.058.028.088.01.042-.015.066-.052.07-.167.02-.335.035-.503.054-.084.01-.169.023-.253.032-.177.02-.355.037-.532.058-.189.021-.377.046-.566.068l-.726.082a.5.5 0 0 1-.122.005.085.085 0 0 1-.057-.037c-.068-.127-.129-.257-.198-.382a12.05 12.05 0 0 0-.733-1.196 10.987 10.987 0 0 0-.99-1.204 7.197 7.197 0 0 0-.595-.552 5.461 5.461 0 0 0-.628-.452 3.313 3.313 0 0 0-.704-.345c-.288-.093-.568-.21-.859-.29-.288-.077-.586-.116-.879-.177-.277-.057-.558-.056-.838-.072-.125-.007-.251.003-.377.01-.143.008-.286.017-.428.031a2.592 2.592 0 0 0-.247.04c-.16.03-.318.062-.491.096-.051-.16-.107-.319-.154-.481a5.498 5.498 0 0 1-.2-1.027 5.23 5.23 0 0 1-.021-1.028c.033-.479.113-.951.258-1.41.095-.3.2-.599.344-.88.096-.187.191-.374.298-.554.08-.137.178-.265.271-.394.073-.1.146-.201.225-.297.07-.084.146-.165.223-.243.128-.13.257-.26.392-.383.09-.084.19-.159.288-.234.105-.08.21-.16.32-.232.148-.096.299-.187.45-.275.135-.078.27-.157.411-.22.211-.093.427-.176.643-.257a2.85 2.85 0 0 1 .383-.12c.247-.054.495-.104.744-.14.21-.03.423-.052.634-.052.27 0 .542.015.81.042.466.046.917.156 1.354.323a6.039 6.039 0 0 1 1.819 1.068c.207.175.409.356.583.564.196.231.388.466.57.708.056.074.081.174.112.266.072.213.141.428.208.643.086.274.167.55.252.824.064.208.133.414.198.622.072.231.14.464.211.696l.15.477.165.534c.05.163.103.325.153.489l.117.39c.037.118.077.236.114.355l.291.928.275.865c.01.035.024.07.035.105.02.065-.015.113-.076.09zm.157-12.752a.484.484 0 0 1-.272.408.062.062 0 0 1-.054-.005c-.077-.06-.148-.127-.227-.184-.237-.173-.471-.35-.716-.512a8.86 8.86 0 0 0-.706-.428c-.246-.132-.502-.244-.756-.358a5.709 5.709 0 0 0-.501-.201c-.28-.095-.563-.186-.848-.267a7.965 7.965 0 0 0-1.091-.215c-.3-.042-.6-.076-.903-.081-.176-.003-.352-.015-.528-.009-.28.01-.56.024-.84.047-.209.017-.416.05-.623.08-.289.04-.573.101-.852.183-.236.07-.471.14-.705.217a4.57 4.57 0 0 0-.422.16 10.614 10.614 0 0 0-1.438.718c-.18.107-.352.232-.525.354a7.506 7.506 0 0 0-.394.296 12.185 12.185 0 0 0-.962.865c-.114.115-.219.24-.325.363-.11.128-.223.254-.327.387a8.572 8.572 0 0 0-.653.956c-.098.164-.187.334-.276.503a8.949 8.949 0 0 0-.253.51c-.08.177-.147.358-.216.54a7.726 7.726 0 0 0-.311.986c-.074.335-.149.67-.2 1.01a10.101 10.101 0 0 0-.047 2.328c.028.268.073.534.11.805-.215 0-.4-.063-.512-.256a.766.766 0 0 1-.08-.242 7.924 7.924 0 0 1-.083-.53 12.5 12.5 0 0 1-.07-.702 8.464 8.464 0 0 1-.021-.723 10.525 10.525 0 0 1 .282-2.28c.092-.394.216-.778.363-1.153.078-.198.151-.398.242-.59.13-.273.268-.544.414-.81.105-.192.222-.38.346-.561.145-.214.3-.42.455-.627.102-.135.207-.268.317-.396.105-.121.217-.237.328-.353a9.419 9.419 0 0 1 .578-.56c.18-.155.359-.31.545-.456.145-.114.299-.216.45-.32.13-.09.258-.18.392-.26a13.292 13.292 0 0 1 .975-.531c.146-.07.297-.133.447-.196.116-.05.231-.101.35-.142.248-.084.497-.163.747-.24.137-.043.275-.084.416-.112.299-.062.598-.123.9-.17a7.19 7.19 0 0 1 .743-.078c.325-.016.65-.019.976-.015.216.003.433.022.648.045a9.735 9.735 0 0 1 2.377.532c.432.16.86.332 1.264.56.28.157.557.318.829.49.206.13.405.276.6.424.177.134.35.274.514.423a.43.43 0 0 1 .13.373z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDelphiIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#E62431');
}
