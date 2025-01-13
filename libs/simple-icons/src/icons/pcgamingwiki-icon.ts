import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pcgamingwiki-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>PCGamingWiki</svg:title>
    <svg:path
      d="M12.726 0L3.453 3.461v17.425L12.792 24l7.754-1.034-.002-.598V1.183zm-.742.991l-.02 21.948-7.988-2.527L3.95 3.964zm1.349.114l6.4.869v20.189l-6.404.796zm.33.366l.007 21.139 5.748-.727V2.228zm-2.152.263L8.251 2.91v4.924l3.279-.422zm-3.61 1.353L4.264 4.274v4.023l3.66-.408zm2.11.015a.738.738 0 01.51.22c.531.502.583 1.41.44 2.076-.128.596-.537 1.477-1.278 1.411-.132-.012-.395-.079-.469-.207L9.212 6.6l.078-.205c.285.122.546.211.839.04.283-.166.471-.503.578-.803.211-.588.211-1.382-.171-1.9-.465-.63-1.126-.3-1.442.288a3.036 3.036 0 00-.25.937 2.14 2.14 0 00.017.441c.02.168.107.341.086.511-.006.052-.037.085-.095.095-.345-.58-.157-1.508.102-2.081.185-.41.615-.824 1.057-.82zM6.427 4.105l-.394 1.098.397-.213-1.151 2.655-.002-.002.502-1.908-.324.155.446-1.634zm3.416.201a.28.28 0 01.106.018c.424.162.294.884.11 1.167-.097.151-.262.157-.424.157v.003c-.066-.24.238-.404.306-.588.04-.108-.002-.199-.045-.29-.102-.053-.186-.022-.223.083a1.341 1.341 0 01-.26.457 1.078 1.078 0 01.136-.846.376.376 0 01.294-.16zm-.138.148c-.04 0-.073.052-.073.114 0 .063.033.114.073.114.04 0 .072-.052.072-.114 0-.064-.033-.114-.072-.114zm.282 0c-.04 0-.072.052-.072.114 0 .063.033.114.072.114.04 0 .073-.052.073-.114 0-.064-.033-.114-.073-.114zm-.46.264c-.04 0-.072.053-.072.115 0 .063.033.114.073.114.04 0 .072-.053.072-.114 0-.064-.033-.115-.072-.115zm.573.06c-.04 0-.072.053-.072.115 0 .063.033.114.072.114.04 0 .073-.053.073-.114 0-.064-.033-.115-.073-.115zm-.396.339h.002c.01.014.01.028.004.041-.195.44-.387.881-.583 1.324-.018-.008-.029-.008-.035-.014a1.234 1.234 0 01-.161-.271c-.019-.038.002-.075.025-.106l.677-.904a.227.227 0 01.07-.07zm.305.015c-.04 0-.072.053-.072.114 0 .064.033.115.072.115.041 0 .073-.053.073-.115 0-.063-.033-.114-.073-.114zm-.18.223c-.04 0-.073.052-.073.114 0 .064.033.114.073.114.04 0 .072-.052.072-.114 0-.064-.033-.114-.072-.114zm4.285.295l4.992.156.002.401-4.994-.06zm-2.64 2.3l-3.225.4-.006 6.944 3.206.1zm-3.561.434l-3.628.339.025 6.341 3.594.207zm8.936.54c.33.004.648.287.832.782l1.367.008.033 1.279-1.406.06c-.227 1.04-1.36.943-1.618.058l-1.908.064-.004-1.405 1.846-.068c.229-.542.548-.783.858-.778zm.018.41a.64 1.072 0 00-.64 1.07.64 1.072 0 00.64 1.073.64 1.072 0 00.64-1.072.64 1.072 0 00-.64-1.072zm-11.359.332l.368.319 1.617-.058.01.128-1.67.062-.41-.353zm-.246.215a.173.173 0 01.015.346.173.173 0 01-.163-.101l-.467.02-.006-.128.467-.02a.175.175 0 01.154-.117zm4.985.265c.054.108-.002.307.111.333.153.036.174.075.211.218.017.064-.008.095.058.132.072.041.157.029.159.126.002.133-.056.114-.157.114-.037 0-.05.07-.052.097-.008.098.009.118.104.145.122.035.1.068.1.18 0 .056.011.025-.063.04-.118.022-.145.006-.139.14.009.161.277.03.2.26-.032.1-.195.023-.195.11 0 .11-.023.16.111.17.132.01.124.188.008.228-.07.025-.095-.002-.12.082-.024.085-.022.174-.053.26-.126.092-.24-.036-.24.173 0 .056-.012.097-.022.15-.019.104-.046.015-.12.038-.02-.025 0-.163 0-.196 0-.098-.033-.12-.145-.112-.006.12-.004.248-.1.335-.06-.04-.083-.1-.088-.168-.006-.134.004-.138-.134-.171a.865.865 0 00-.03.3c-.108.054-.125-.112-.125-.178 0-.056.023-.118-.047-.139-.07-.018-.095.017-.097.08-.004.127-.01.183-.11.253-.04-.111-.006-.304-.136-.34-.145-.036-.163-.142-.165-.28-.003-.151-.184-.007-.184-.17 0-.016-.013-.101 0-.114.06-.043.12.025.175.002.027-.074.037-.186-.043-.205-.083-.018-.161-.028-.143-.124.023-.118.002-.111.13-.12.098-.006.062-.107.065-.173-.129-.06-.182.016-.182-.154 0-.115-.009-.105.107-.105.1 0 .07-.035.07-.13 0-.106-.19-.013-.198-.158-.004-.062.02-.116.08-.138.106-.042.118-.048.123-.162.006-.165.115-.184.247-.25l-.002-.002c-.002-.106 0-.207.066-.294.124.004.102.2.104.296.212.105.1-.224.21-.317.157-.016-.012.331.143.327.101-.002.08-.05.078-.138-.002-.081.009-.162.079-.213.17.064.016.376.231.326 0-.132-.02-.293.12-.364zm-2.987.13a.172.172 0 01.178.168.172.172 0 01-.168.178.172.172 0 01-.16-.097l-.523.015a.171.171 0 01-.329-.067.172.172 0 01.167-.178v-.002a.175.175 0 01.168.116l.508-.014a.174.174 0 01.159-.118zm-1.206.253l1.475 2.15-.11.068-1.448-2.092-1.322.081-.004-.124zm1.501.157l-.008.186-.136.197a.173.173 0 01-.023.192v-.002a.173.173 0 01-.244.017.171.171 0 01-.016-.242.172.172 0 01.186-.05zM6.858 11a.168.168 0 01.144.073c.041.06.041.135.004.193l.527.786.002.203-.634-.917a.169.169 0 01-.18-.068l-.002.002a.173.173 0 01.043-.24.171.171 0 01.096-.032zm-.856.071a.173.173 0 01.014.346.173.173 0 01-.163-.102l-1.181.06-.006-.128 1.181-.06a.175.175 0 01.155-.116zm.361.683l.393.49a.166.166 0 01.085-.022c.095 0 .173.078.173.173a.175.175 0 01-.173.174.175.175 0 01-.174-.174c0-.016.004-.033.008-.05l-.361-.46-1.626.04-.004-.13zm-1.117.436h.002c.059.001.11.032.138.077l.992.027.39.474a.166.166 0 01.085-.023c.095 0 .174.079.174.174a.175.175 0 01-.174.174.175.175 0 01-.174-.174.21.21 0 01.009-.05l-.36-.445-.919-.027a.164.164 0 01-.159.124.166.166 0 01-.002-.33h-.002zm-.447.205c.06 0 .104.014.15.085.136.213.264.432.394.65.064.107.13.215.196.32.095.153.12.166.302.178.13.009.262.009.394.009.137 0 .133-.114.263-.102.111.106.111.242 0 .348-.124.008-.11-.12-.203-.12H5.9c-.197 0-.256.043-.358-.116l-.694-1.109h-.171V12.4c.048 0 .088-.004.123-.004zm1.5.34a.172.172 0 01.178.167.172.172 0 01-.167.178.172.172 0 01-.161-.097l-.459.01a.172.172 0 01-.328-.066.172.172 0 01.167-.178v-.002a.175.175 0 01.167.116l.444-.01a.174.174 0 01.16-.118zm.965.181a.171.171 0 11-.023.34l-.516.76-.136.001.543-.827a.172.172 0 01.132-.274zm-2.437.013a.166.166 0 010 .331.166.166 0 010-.331zm.364.563c.045 0 .089.017.123.051a.171.171 0 010 .245.17.17 0 01-.244 0 .198.198 0 01-.03-.042l-.147-.006-.163.228-.095-.09.2-.266.192.006a.181.181 0 01.043-.075.168.168 0 01.121-.05zm2.157.136c.06.001.129.013.17.013.006.058.01.11-.03.161-.071.002-.14-.029-.21-.035l-.123.17c.024.053.103.003.117.074-.02.085-.184.01-.24.019-.028-.09.174-.317.226-.39a.204.204 0 01.09-.012zm8.472.317v7.742l-1.452.174-.004-7.838zM4.337 15.563l-.004 2.125 1.692.231.01-2.234zm1.948.128v4.864l2.927.882v-5.554zm3.313.224l.013 5.745.2.062c.15-.515.42-.316.438.14l.386.115c.004-.543.473-.348.395.117l.357.133-.012-6.188-.263-.017c.058.571-.512.565-.421-.027l-.42-.027c.067.549-.508.534-.419-.035zm-4.614.235l.276.607.17-.31.396.897-1.292-.2zm.71.013c.091 0 .163.072.163.163a.162.162 0 01-.163.164.162.162 0 01-.163-.164c0-.09.072-.163.163-.163zm4.103.498l1.402.147v1.382l-1.402-.205zm-2.24.019c.178.012.347.048.484.178.308.294-.238.863.008 1.208.221-.213.217-.478.384-.703.166.213.31.641.283.912-.142.172-.256.27-.597.294.01.076-.037.149-.016.238.182.194.382.163.622.149.033.17-.139.695-.267.821-.26-.118-.394-.37-.539-.602a.64.64 0 00-.132.126c.035.267.372.606.328.842a.636.636 0 01-.365.07c-.128-.018-.18-.088-.21-.225-.069-.303.065-.677-.19-.894-.125.246-.09.518-.123.785-.2-.05-.345-.45-.384-.621.035-.205.142-.356.266-.515.058-.075.077-.15.04-.236-.015-.033-.013-.075-.042-.102-.18.031-.287.17-.41.29-.14-.145-.108-.69.003-.85a.601.601 0 01.467.12c.11-.108.116-.213.019-.325-.075-.085-.304-.184-.345-.271-.033-.13.21-.57.357-.563.161.238.256.507.31.788.056.023.105.044.17.031.032-.32-.04-.626-.141-.926.01-.01.016-.019.02-.019zm-3.23 1.305v2.12l1.708.417.019-2.284zm5.472.245l1.4.225v1.395l-1.4-.3zm-4.6.3l.014 1.398-.337-.432-.301-.066v-.598l.283.041zm.398.095a.08.08 0 01.013.002c.037.085.08.172.105.265.103.393.103.773-.118 1.144l-.002-.002c-.04-.077-.029-.135-.002-.203.064-.168.122-.34.11-.521a1.544 1.544 0 00-.096-.464 4.151 4.151 0 01-.068-.186c.015-.022.03-.037.058-.035zm-.143.145c.02.001.028.014.034.027.043.088.074.177.093.275.02.113.01.225.018.337.006.072-.016.143-.027.211a.267.267 0 01-.134.197v.002h-.002l.002-.002c-.006-.067.019-.127.033-.187.02-.09.052-.182.064-.273.017-.116-.02-.227-.05-.34l-.045-.154c-.008-.033-.014-.064.004-.093h.01zm-.123.162c.011 0 .021.002.033.005a.96.96 0 01.074.424c-.002.056-.023.106-.035.158-.01.039-.037.062-.07.08-.027-.027-.019-.051-.013-.078.017-.077.033-.151.035-.23.005-.12-.033-.232-.06-.35h-.002a.1.1 0 01.038-.009zm4.468.835l1.396.318v1.383l-1.396-.385z"
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
export class SiPcgamingwikiIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#556DB3');
}
