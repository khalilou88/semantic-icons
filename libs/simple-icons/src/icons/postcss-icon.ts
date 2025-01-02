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
  selector: 'svg[si-postcss-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>PostCSS</title>
    <svg:path
      d="M11.627.008q-.352.014-.706.065c-.226.024-.453.064-.672.097-.267.033-.534.05-.801.081-.252.033-.51.082-.762.123-.09.016-.178.048-.268.064-.194.04-.396.057-.59.122A16 16 0 0 0 6.79.917c-.316.13-.624.268-.923.43-.308.17-.6.373-.892.568q-.415.277-.82.592c-.257.203-.501.43-.736.657-.13.13-.235.284-.356.43-.203.236-.405.462-.6.706-.16.203-.308.414-.462.625-.275.373-.51.77-.728 1.168-.09.162-.17.325-.25.487-.123.243-.252.478-.366.73-.08.17-.146.357-.194.544a67 67 0 0 0-.332 1.2c-.098.358-.122.73-.13 1.096-.008.324.024.64.057.965.008.082-.04.18.056.244-.032.09-.008.138.04.154-.056.09.025.146-.007.227-.008.017.025.05.04.073 0 .025-.008.057 0 .08.01.074.04.147.04.229 0 .056.05.12.066.178.008.024 0 .065-.017.08-.048.058-.04.106.033.139.04.105.024.154.016.203.016.073-.008.097 0 .114.065.13.09.275.097.42 0 .034.016.066.033.107.008 0 0 .154 0 .154.04-.024.073-.032.113-.05q.036.16.081.294c.04.065.041.097.025.105.032.145.048.283.105.42 0-.153-.016-.307-.04-.453.113.04.21.08.275.08.008-.023.016-.055.025-.072-.049-.048-.09-.12-.138-.17.016.065 0 .09 0 .114a1 1 0 0 0-.114-.05c.033-.04.065-.08.114-.13 0-.072-.04-.137-.154-.13.05-.015.097-.04.154-.055.09-.048-.008-.138-.008-.25.008-.14-.073-.277-.097-.423-.04-.227-.033-.568-.057-.795-.049-.04-.09.065-.097.073q.04.293.064.584c-.048-.162-.08-.34-.12-.536-.01.057-.017.08-.017.114-.04.04-.008.09.016.146-.056-.025-.12-.016-.12-.016v.227c-.082-.08-.106-.146-.147-.203-.016-.065-.025-.13-.04-.194.015-.04 0-.065 0-.09l-.025-.195a1 1 0 0 0-.008-.13c.065.009.106.016.146.016-.08-.104-.025-.17.008-.234.016-.033.073-.04.09-.074.064-.12.17-.218.17-.373 0-.073.025-.154.032-.227q.027-.207.04-.414c.017-.178 0-.357.041-.527.065-.283.146-.568.235-.852.065-.203.138-.397.22-.6.12-.317.234-.633.388-.933.22-.438.47-.86.713-1.29.154-.268.316-.52.487-.78.16-.25.323-.51.51-.746.26-.332.543-.64.86-.917.323-.292.63-.592.98-.86a10 10 0 0 1 1.44-.925c.414-.219.843-.39 1.273-.552.275-.105.575-.154.859-.243.324-.106.648-.154.988-.162.219-.008.43-.033.648-.057a16 16 0 0 0 .6-.057.4.4 0 0 0-.04.065c-.09.13-.187.26-.276.39-.073.105-.154.218-.227.324-.13.17-.268.34-.39.52-.185.267-.356.543-.55.81-.194.26-.405.504-.608.755-.267.35-.518.706-.785 1.055-.244.332-.502.65-.737.982-.21.292-.398.6-.6.9-.3.446-.6.884-.9 1.33a84 84 0 0 1-.712 1.015c-.016.024-.04.032-.065.048-.064.105-.064.162-.09.21a4 4 0 0 1-.202.358c-.04.065-.097.122-.146.187-.008-.098.13-.147.065-.27-.04.067-.08.123-.12.188l-.1.194c.033.024.088.04.035.088-.005-.02-.032-.032-.053-.048a5 5 0 0 0-.194.293c.05.04.073.024.105-.033.03-.06.072-.104.11-.154l-.042.074a.3.3 0 0 0 .09-.08c0 .088-.05.16-.09.233-.033.065-.114.114-.17.163.008.008.065.032.073.04.073-.024.097-.064.106-.04.024-.033.048-.057.056-.08a.3.3 0 0 1 .162-.18q.046-.026.08-.064c.244-.252.495-.496.714-.764.34-.413.648-.843.973-1.265.137-.178.3-.357.445-.527.024.186.008.365 0 .535-.025.3-.04.6-.065.908-.008.122 0 .244-.008.366 0 .032-.025.056-.025.09 0 .08.025.17.025.25-.025.3-.057.592-.082.893-.008.064.024.13.04.186-.04.438.05.9-.024 1.364.057-.09.073-.147.073-.203.008-.05 0-.097 0-.154v-.08c.008-.147.04-.3.024-.448a1.5 1.5 0 0 1 .016-.47c.017-.065-.007-.146.033-.227v.12c-.008.463.01.926-.056 1.388-.008.04.024.114-.065.106-.073.146.016.252-.065.333-.016.016.016.09.024.138-.032.097-.032.097.016.105.008.18.025.34.033.51.13-.307.064-.624.122-.941.008.13.016.26.008.398 0 .21-.01.414-.017.625q-.002.06-.016.122c-.024.113-.032.227-.072.332-.033.08-.016.203-.016.3v.31c.032.137-.01.21.016.29-.025.083-.033.107-.025.13l.025.123c.162-.016.09.106.153.17-.048.065-.032.09-.032.122 0 .073-.008.138-.016.21 0 .188-.008.374-.008.553 0 .025.008.048.008.073l-.008.227c.016.024 0 .05-.025.073-.008 0-.032-1.03-.032-1.03h-.12c-.017.486.023.924-.066 1.38-.097.007-.13.023-.235.023q-.378-.002-.754.008c-.3 0-.59.008-.89.008-.147 0-.3.017-.446.017-.195 0-.397-.025-.59-.025-.3 0-.593.024-.893.032-.22.008-.437.008-.656.017-.146.008-.292.015-.438.032-.064.008-.12.032-.202.056-.025 0-.08-.008-.13 0-.08.017-.153.065-.235.082-.122.024-.154.056-.138.178v.08c-.008.017.178-.024.178-.024-.016 0-.024.05-.049.09.065-.025.106-.04.147-.057.121.057.226.025.323.05.316.08.64.113.964.145.21.016.414.025.624.032.3.017.6.033.9.033.25 0 .493-.025.744-.025.348 0 .697.016 1.045.025.073 0 .154-.008.235-.008h.592c.527-.016 1.053-.025 1.58-.04.3-.01.608-.025.907-.033l.924-.025c.357-.008.713-.008 1.062-.015.267 0 .526-.01.794-.017.3-.008.607-.032.907-.048.162-.008.324-.025.486-.04.195-.017.398-.04.592-.05.29-.016.59-.024.883-.04.365-.024.73-.057 1.102-.065.34-.016.689-.008 1.03-.016.3-.008.599-.025.907-.033l.51-.025s.34-.008.51-.024c.293-.016.584-.05.876-.057.186-.008.372 0 .559-.008.3-.008.606-.024.906-.024.113 0 .235.016.38.024-.064.057-.105.09-.153.13.032.008.064.025.097.04a.22.22 0 0 1-.13.04c-.016.042-.032.058-.048.139h.145c-.056 0-.105.073-.16.122-.066-.017-.123 0-.156.09.057.03.05.056.04.09-.096.03-.17.063-.128.169q-.05.022-.114.056c-.04.065-.113.08-.097.17.032.008.064.025.09.033-.042.016-.082.04-.123.056-.145.09-.08.13-.048.17q-.037.027-.073.04c.016.074.04.09.048.09l-.085.069.01-.027h-.032q0 .022.005.04l-.02.016c-.024.072-.056.104-.09.153-.03.048-.046.114-.087.162-.17.187-.292.406-.51.552-.081.057-.154.13-.227.203-.146.138-.276.292-.43.422a9 9 0 0 1-.631.478c-.267.187-.534.374-.802.552-.146.097-.308.17-.462.26s-.3.17-.454.26c-.097.064-.186.153-.291.202-.268.114-.551.211-.827.317-.268.114-.462.21-.664.284a5 5 0 0 1-.575.153c-.065.017-.138 0-.211.01-.138.024-.276.057-.414.073-.356.048-.713.08-1.07.13-.21.024-.413.064-.623.09-.146.007-.3-.009-.446-.009-.105 0-.218.025-.324.01-.17-.026-.34-.066-.51-.098-.04-.008-.097-.025-.13-.008-.064.032-.122-.016-.187 0-.04.008-.08-.025-.12-.025-.033-.008-.074.01-.115 0-.09-.024-.17-.056-.268-.048-.096.008-.194-.04-.298-.065l-.43-.097a.7.7 0 0 1-.162-.073c-.21 0-.348-.008-.478-.057-.113-.04-.22-.097-.34-.08-.032.007-.057-.009-.09-.009-.024-.033-.048-.098-.072-.098-.162.008-.26-.13-.397-.17-.073-.024-.13-.105-.202-.13-.18-.073-.324-.227-.527-.25-.064-.01-.13-.042-.202-.066.024.032.04.057.064.08-.235-.113-.453-.242-.672-.364-.032-.008-.056-.04-.08-.057l-.22-.147c-.12.024-.17-.025-.203-.04-.218-.154-.47-.252-.68-.421-.09-.074-.194-.122-.26-.212a1.3 1.3 0 0 0-.404-.316c-.122-.064-.235-.138-.348-.21-.057-.041-.114-.09-.114-.18 0-.056-.024-.113-.097-.08-.032-.05-.065-.106-.105-.122-.097-.04-.162-.114-.235-.18-.073-.064-.13-.153-.22-.185-.161-.065-.26-.203-.355-.316-.228-.268-.43-.56-.64-.844-.017-.024-.05-.04-.074-.065.033.09.073.162.114.243a.5.5 0 0 1-.186-.146c-.008.008.558.942.558.942.05.073.09.146.138.219a.25.25 0 0 1-.243-.13c-.073-.13-.154-.21-.316-.194a1.4 1.4 0 0 1-.04-.18.6.6 0 0 1-.114-.008c.114.179.21.333.316.51l-.08-.047c.145.154.25.349.436.446.04.187.25.276.3.454l-.114-.024c-.065-.081-.138-.162-.21-.251a.4.4 0 0 0 .072.145c.098.122.187.244.3.35.04.04.098.057.098.13.064.032.09.04.113.04.017.049-.008.122.09.106.064.12.128.12.218.08.105.105.162.114.235.05 0 .04.008.08.008.113.032-.017.025-.04.025-.081.04.033.064.049.08.065.08.114.154.219.268.307.154.13.29.268.437.39.283.235.6.43.916.608.39.22.762.455 1.16.665a6.2 6.2 0 0 0 1.513.545c.195.04.38.08.576.13.17.048.34.121.51.161.26.057.527.106.786.154l.179.025c.072.016.16-.016.177.008.04.065.073.032.122.024.057-.016.12-.016.186-.016.227.008.445.056.672.04.05 0 .122-.04.163.04.073-.032.113-.032.146-.04.008.073 0 .073-.016.08-.017.01-.04.017-.073.04.292.058.567.066.81 0a2.7 2.7 0 0 0 1.135-.136c.032.04.056.097.105.016.016-.025.056-.033.089-.04.073-.017.162-.05.227-.026.073.025.097-.04.154-.04.097 0 .186-.008.276-.024.048-.008.097-.033.153-.05a.4.4 0 0 0-.178-.04 7 7 0 0 1 .276-.13c-.017.025-.033.057-.065.057h.113c-.025 0-.057.073-.097.122.29-.073.558-.138.818-.204-.09-.17.097-.113.162-.21a3 3 0 0 1-.243.064c.275-.137.559-.26.834-.38-.04.048-.09.073-.162.114.049.008.08.008.106.015.129.04.097-.08.137-.154.154 0 .219-.024.292-.05q.12-.033.243-.08c.13-.056.25-.13.38-.194.025-.01.065 0 .098 0 .09-.057.12-.106.145-.098.114.017.194-.024.227-.13l.023-.015c.033.07.098.08.203.007q-.1-.002-.187-.016-.008.002-.011.006.06-.047.11-.08c.178-.096.347-.193.526-.29.065 0 .097 0 .113-.008a4 4 0 0 0 .3-.163c-.024-.008-.08-.04-.08-.04a1 1 0 0 0 .154-.04c.193-.23.46-.383.664-.56.089-.008.089-.032.089-.048.032-.041.064-.09.105-.122.177-.163.371-.3.533-.47q.354-.355.673-.732c.194-.227.39-.454.55-.705.228-.35.422-.706.625-1.072.146-.26.275-.52.422-.778.015-.025.048-.057.072-.057.22-.025.438-.04.65-.065.047-.008.104-.04.152-.065-.024-.04-.04-.09-.064-.13-.033-.05-.08-.09-.114-.138-.032-.04-.056-.09-.08-.138-.025-.04-.05-.072-.074-.114a3 3 0 0 1-.138-.275c-.008-.024-.025-.065-.016-.09.146-.315.202-.656.34-.972.138-.325.18-.69.243-1.04.057-.331.09-.664.13-.997.024-.235.057-.462.064-.697.05-.373.033-.723.025-1.072-.008-.308-.025-.624-.04-.933-.017-.317-.025-.633-.058-.95-.056-.43-.113-.868-.21-1.29a7 7 0 0 0-.316-1.014c-.154-.39-.308-.787-.503-1.16-.316-.6-.73-1.136-1.11-1.696-.252-.357-.576-.65-.82-1.014-.135-.21-.34-.39-.541-.55a14 14 0 0 0-1.004-.723 10 10 0 0 0-.794-.504c-.22-.122-.454-.22-.68-.325-.26-.12-.511-.268-.803-.324-.073-.016-.138-.04-.21-.065-.187-.065-.365-.138-.552-.195-.283-.089-.56-.194-.85-.267a8 8 0 0 0-.87-.163c-.323-.047-.655-.064-.98-.096a8 8 0 0 0-.623-.056c-.307-.018-.623-.018-.93-.025-.154-.008-.316-.024-.47-.016Zm.694.94q.156.027.3.041l.389.025c.292.023.583.04.875.08.243.033.486.081.737.122a10.4 10.4 0 0 1 1.572.405c.3.098.59.228.884.35.656.267 1.28.592 1.895.932.194.106.308.276.454.43.21.22.42.438.624.665.234.268.453.544.68.82.201.243.412.486.615.73.065.073.114.163.17.244.13.194.275.38.39.592.08.154.13.333.185.503.08.252.162.495.243.746.056.187.104.382.145.576.033.13.025.268.065.397.05.17 0 .358.05.528.007.017.015.04.023.057.033.032.057.065.008.114-.008.008-.008.04 0 .064.017-.016.025-.032.04-.057 0 .017.01.025.01.033 0 .032-.01.065 0 .097 0 .016.015.04.023.057.016-.017.032-.025.064-.05.073.276.082.552.082.836 0 .268.048.536-.065.795.024-.09-.033-.17-.008-.252l.003.002c-.008 0-.056-.05-.064-.057-.01.025 0 .05-.017.08-.008-.023-.064-.014-.064-.04-.01.115.048.228.04.34.024-.014.12-.023.146-.047a.1.1 0 0 0 .032.016c-.162.122-.12.244-.048.382.016.032.064.097.016.162-.016.016.008.065.016.106h.024v.015l-.073.025c-.016-.025-.113-.073-.113-.114v.414c.08.025.08.138.113.195a.2.2 0 0 0 .033-.064l.008.008q-.01.072-.032.146c-.016.072-.033.137-.04.21 0 .008.015.025.015.033-.09.203-.04.43-.072.64-.025.154 0 .317-.017.48a4 4 0 0 1-.08.42c-.009.025-.026.033-.066.05a.7.7 0 0 0-.008-.252c-.008 0-.114-.057-.122-.057 0 .114.065.268.09.398-.025-.008-.122-.065-.13-.065-.017.097-.017.227-.025.332-.008.082-.08.154-.09.244 0 .05.058.08.05.162h.064c0-.162.074-.308.074-.478h.023c.01.016.033.032.025.04-.016.09-.05.187-.04.276 0 .05.04.097.024.154a1 1 0 0 0-.033.17c-.008-.04-.016-.056-.016-.08l-.09-.008c-.007.05.058.097.05.138-.01.008-.017.008-.033.016l-.267-.39a82 82 0 0 1-.632-.932 2 2 0 0 1-.147-.244q-.372-.645-.833-1.24c-.235-.3-.422-.626-.64-.94-.203-.302-.405-.594-.608-.895-.073-.097-.162-.186-.227-.292-.21-.332-.397-.673-.607-1.006-.178-.276-.372-.544-.56-.81q-.097-.137-.194-.286a.1.1 0 0 1-.016-.055 12 12 0 0 1-.04-.528c0-.162.016-.324.016-.495V6.96c0-.04.008-.073.008-.113.008-.008.016-.025.024-.033-.235 0-.478-.01-.713 0-.154.008-.235-.057-.34-.17-.308-.35-.535-.747-.802-1.12a50 50 0 0 0-.77-1.055c-.211-.284-.422-.56-.632-.844-.236-.324-.462-.65-.705-.973q-.44-.585-.892-1.168c-.138-.179-.292-.35-.446-.536m-.752.426q.026.005.05.038c.218.276.437.56.655.835.163.204.325.398.48.61.185.26.364.52.55.778q.316.448.624.908c.308.455.6.91.907 1.363.227.333.454.658.672.99h-.413c-.38-.008-.77-.04-1.15-.024-.52.025-1.046.08-1.564.122a23 23 0 0 1-1.976.064c-.236 0-.47.033-.705.05-.284.016-.56.032-.843.04-.333.016-.656.024-.99.033-.185.008-.38 0-.582 0V7.18c.26-.357.527-.714.786-1.08.08-.105.145-.22.226-.324.025-.033.058-.05.098-.082l-.008-.015c.032-.04.064-.074.08-.106.042-.065.066-.138.099-.21a.1.1 0 0 1 .032-.033c.114.057.114-.064.154-.105a6 6 0 0 0 .21-.252c.05-.064.098-.12.139-.194.007-.025-.017-.065-.025-.098H9.05c.024-.016.049-.04.073-.056.008 0 .008 0 .016-.008a5 5 0 0 1 .146-.21c.097-.13.202-.26.315-.374q-.024.062-.048.113c.008 0 .008.008.016.008.097-.13.203-.252.3-.382q-.012-.014-.025-.016c-.04.04-.072.082-.113.122q-.012-.014-.025-.016c.082-.106.163-.21.243-.333.017.025.033.057.065.122.033-.08.065-.138.09-.195-.025.025-.057.05-.081.074l-.025-.025.146-.218c.154-.22.308-.447.462-.666.057-.08.13-.146.178-.227.154-.308.398-.552.584-.836.04-.056.097-.105.145-.154q.03-.035.056-.03zm-2.285 3.16c-.048.033-.09.057-.137.09-.01.008-.017.008-.01.008.01.04.01.073.017.13.057-.082.097-.147.146-.21zm6.838 3.342c.073 0 .113.025.154.09q.108.182.227.365c.008.016.024.04.024.064 0 .18 0 .365.008.544.008.187.025.365.032.552 0 .186-.016.38-.008.576.009.276.016.56.016.843h.002v.074c-.008 0-.016.008-.032.008-.033-.114-.065-.236-.106-.35a2.7 2.7 0 0 0-.316-.68c-.163-.228-.308-.463-.47-.698-.04-.057-.098-.106-.146-.154-.17-.187-.34-.382-.56-.52a6.6 6.6 0 0 0-1.012-.52 2 2 0 0 1-.284-.145h.194L15.23 7.9c.3-.008.59-.008.89-.024m-6.083.212q.088-.003.178.008c-.13.065-.26.13-.373.21-.146.098-.283.228-.43.334a2.4 2.4 0 0 0-.396.373c-.154.186-.324.348-.487.527-.113.13-.243.252-.34.39-.137.178-.26.372-.39.575.042-.77.09-1.533.058-2.312.382-.016.746-.04 1.12-.056.29-.017.59-.025.88-.04q.09-.008.18-.01zm2.033.415c.242.008.485.008.728.024.105.008.203.032.3.064.12.04.25.098.365.154q.204.11.397.244c.235.154.453.324.688.462.227.138.405.325.55.536.18.25.382.48.463.787l.12.535c.026.098.083.195.058.308-.04.203-.073.415-.105.617a1 1 0 0 0-.024.244c.015.252-.082.47-.18.698-.031.073-.08.146-.12.227a.2.2 0 0 0 .064.033l.073-.146c.009 0 .009 0 .016.008-.04.113-.072.235-.113.35-.097.25-.194.51-.316.753-.065.138-.178.25-.26.382-.08.113-.145.235-.226.34-.073.09-.145.18-.243.244a6 6 0 0 1-.68.454c-.146.09-.316.138-.478.178h.002c-.26.064-.527.138-.794.17-.227.033-.462.025-.697.025a8 8 0 0 1-.625-.025c-.235-.024-.47-.05-.696-.154-.195-.09-.398-.17-.591-.268-.196-.097-.39-.21-.536-.39-.105-.13-.251-.234-.38-.348a.38.38 0 0 0 .17.235c-.041.05-.098.025-.18-.106-.023.017-.047.025-.064.033.025-.057.049-.114.073-.162-.032-.065-.073-.138-.105-.204a7 7 0 0 1-.187-.324c-.016-.024-.016-.048-.032-.073a2 2 0 0 1-.114-.146c-.064-.097-.12-.202-.202-.3 0 .025.008.05.008.082-.008 0-.016.008-.016.008l-.17-.414c-.008 0-.008 0-.016.008l.145.535c-.008 0-.016.01-.024.01-.024-.034-.048-.066-.065-.106-.016-.066-.065-.066-.105-.04-.025.015-.041.072-.033.096q.088.207.187.414a1 1 0 0 0 .057.138c.008.016.032.032.032.056.033.065.057.13.098.187.073.097.154.195.227.292.072.097.137.203.2.3.009.016.034.016.04.025.043.12.18.21.277.162.025.186.227.25.308.43a4 4 0 0 1-.235-.106c-.008.008-.008.016-.016.032.097.05.195.098.283.154.082.05.163.098.236.155.097.09.21.138.348.17a.1.1 0 0 0-.016-.033c.227.106.462.22.64.308-.843.017-1.742.033-2.674.05 0-.155-.008-.3-.008-.455 0-.065.016-.122.008-.187-.025-.372-.025-.746-.073-1.11a8 8 0 0 1-.04-1.162c.007-.21-.01-.43-.017-.64 0-.284 0-.56.009-.844 0-.04.016-.073.032-.114h.025c.008.017 0 .04.015.05.025.024.066.064.082.056.048-.033.12-.065.138-.114a.8.8 0 0 0 .056-.3c0-.073.033-.12.065-.17.016-.025.025-.05.04-.08-.031-.025-.064-.042-.104-.074.032-.09.024-.195.146-.243.016-.008.016-.05.024-.073.008-.066.015-.14.024-.204.016.025.025.033.04.05q.015-.026.017-.026c0-.032-.008-.097 0-.097.097-.016.057-.122.105-.17.008-.01-.008-.033-.008-.05 0-.015 0-.04.008-.04.113-.024.097-.146.17-.203.024-.016.032-.04.065-.08.064.112-.05.17-.057.25.137-.08.178-.275.097-.332a.5.5 0 0 0 .089-.09c.09-.097.186-.186.267-.283.057-.073.09-.162.146-.235.033-.04.098-.073.146-.098.146-.08.284-.17.373-.307q.026-.025.064-.05c.025-.015.074-.015.082-.04.008-.016-.016-.057-.033-.08.032-.017.065-.05.13-.082-.025.05-.032.08-.05.114l.04.04c.074-.057.188-.12.26-.17 0-.008-.04-.04-.04-.04-.05.024-.121.065-.194.097.015-.024.015-.04.025-.05.113-.072.226-.144.348-.202.283-.13.567-.26.85-.38.049-.025.114-.01.17-.01.025 0 .04 0 .065-.006.13-.04.26-.082.39-.114a.7.7 0 0 1 .178-.024m-.316.12-.234.106c0 .008-.041.073-.033.073.04-.008.13-.073.178-.08.024 0 .057.007.082.015 0-.032 0-.065.007-.114m5.858 1.38c.08.107.17.204.227.309.187.34.43.634.656.942.195.268.373.56.552.835.218.333.429.665.648.998.162.252.332.503.502.747q.233.326.477.64c.137.187.283.374.42.56q.244.344.487.674c.08.113.17.227.26.34.05.065.121.114.17.154a.1.1 0 0 1-.032-.008q.034.05.056.073c.09.05.098.098.05.17v-.001c-.008.016-.025.033-.033.05-.008-.017-.008-.042-.016-.075-.05.13-.154.066-.227.066-.437.008-.883.008-1.32.008-.421 0-.85 0-1.271.008-.138 0-.284.032-.422.04a37 37 0 0 1-.997.033c-.024 0-.048-.04-.09-.073l-.048.073c-.008-.016-.024-.032-.04-.056l-.025.064h-.024c-.016-.113-.048-.22-.048-.332 0-.244.024-.487.032-.73.008-.114 0-.22 0-.325l.09.065a1 1 0 0 1 .048-.08s-.016-.008-.033-.025c.016-.008.033-.025.033-.033.008-.024.024-.05.024-.065 0-.057-.016-.105-.024-.153q.012.002.024-.008l.048.243h.025c-.032-.056.073-.106-.016-.17-.008-.008.008-.057.008-.082-.025-.048-.04-.097-.065-.162.008-.008.033-.016.057-.024q-.046-.026-.081-.04c.08-.073.08-.114.008-.195.016-.008.032-.008.032-.015 0-.074 0-.147-.016-.22-.016-.081.025-.178-.097-.227a.2.2 0 0 0 .032.065s-.024.008-.048.024c-.105-.097-.04-.228-.065-.373a1 1 0 0 1 .138.05c-.017-.058-.057-.123-.081-.196h-.033v-.536c0 .008.056.008.09.017 0-.008.007-.016.007-.025l-.09-.105.017-.016c-.065-.08-.032-.194-.032-.22v-.567c.08.082-.04.187.08.235v-.08h-.008c-.008-.122-.008-.244-.016-.366h-.016c-.008.017-.008.025-.016.04h-.016zm-13.65.665c-.098.113-.187.227-.276.34.015.008.04.065.055.082.09-.122.21-.276.3-.39-.008-.008-.072-.024-.08-.032m-.543.398c-.05.072-.17.202-.22.275.009.008.098-.032.106-.023.05-.073.098-.155.146-.228q-.022-.013-.032-.024m.17.12c-.05.034-.097.075-.146.107.016.016.016.025.016.04-.064-.007-.09.026-.12.114-.01.025-.05.033-.09.065-.01.016-.017.057-.033.097l.008.008a.1.1 0 0 1-.04.025c-.05.048-.106.09-.154.138q-.014.036-.016.073c.056-.057.153-.162.226-.227l.01.008c.03-.05.056-.098.09-.146.006.008.006.016.014.024-.024.065-.048.138-.073.203-.017.008-.04.024-.04.016-.033.025-.058.057-.09.08l-.146.098c-.08.073-.162.138-.25.21-.058.09-.114.17-.18.277.098-.025.122.016.114.097.113.016.122-.073.154-.138.008-.016.016-.05.032-.057.073-.065.154-.12.235-.186.017-.016.017-.05.017-.073 0-.008-.04-.008-.066-.017.073-.08.18-.218.25-.307.042-.025.083-.058.083-.082-.007-.075.032-.104.082-.13-.037.175-.144.325-.252.356.033.016.065.033.09.025s.04-.05.056-.074l.22-.316.072-.122-.032-.033c-.033.058-.065.107-.098.164l-.027-.014.002-.002c-.032-.025-.04-.05-.04-.057a.3.3 0 0 1 .04-.074c.017 0 .04-.008.04-.008.034-.056.034-.097.066-.146-.008-.008-.016-.008-.025-.016zm14.059.999h-.002v.006zm-.002.006a.2.2 0 0 0-.007.067q-.002-.034.007-.067m-.007.147v.008c.008.008.009.008.016 0-.008 0-.008 0-.016-.007zm0 .016c-.024.008-.05.008-.081.017.04.015.079.023.08.04zm0 .056v.002zm-1.192 1.422c-.016.925.09 1.833.21 2.75l-2.786.097a3.3 3.3 0 0 0 .94-.624 1 1 0 0 1 .13-.114c.34-.21.59-.503.818-.828.259-.373.429-.795.64-1.192a1 1 0 0 1 .048-.09m1.134.073.033.08c.04-.007.057-.007.073-.015q-.002-.012.008-.024c-.024-.01-.057-.024-.114-.04zm.024.074-.007.006c.008 0 .016.01.016.01l-.008-.01zM1.07 14.01a.2.2 0 0 0-.073.033c.032.08.073.17.105.252a.2.2 0 0 1 .065-.033c-.033-.08-.065-.17-.097-.252m-.228.333c-.024.04-.048.08-.04.113 0 .024.04.05.065.073 0-.008.008-.016.016-.023-.016-.057-.024-.106-.04-.163m21.657.008c0 .016.008.04 0 .057zm-21.235.18a.3.3 0 0 0-.073.03c.065.139.13.285.194.423.01 0 .073-.032.073-.032-.065-.14-.105-.293-.194-.422m-.162.324c0 .032-.04.024-.04.057-.049 0-.09-.008-.13-.008-.008.008.024.056.033.065h.17c0-.04-.008-.073-.008-.114zm7.453.316q.133.205.276.398l-.008.008c-.017-.008-.041-.017-.057-.033l-.194-.292a.1.1 0 0 1-.017-.08m9.043.438c-.008.097-.016.17-.016.243 0 .016.016.048.024.048.016.01.049-.008.065-.015a.06.06 0 0 0 .016-.032c-.024-.017-.048-.025-.073-.042.154-.08 0-.12-.016-.202m-14.114 4.59c.088.099.177.196.266.302-.048-.025-.105-.04-.13-.073-.056-.065-.104-.138-.16-.203zm.34.286c.024.04.04.089.064.138-.113-.008-.17-.057-.137-.122.024-.008.05-.008.073-.016m15.434 1.241c-.065.015-.114.024-.154.04-.016.033-.033.057-.05.09q.013.001.026.015c.049-.05.105-.09.178-.145m-.414.226c-.09.057-.186.113-.276.17.008.008.008.017.017.025a.8.8 0 0 0 .292-.146c-.008-.017-.025-.034-.033-.05m-3.97 1.542c-.371.106-.493.122-.534.065.187-.025.357-.04.535-.065m-.551.073c.008.016.008.032.016.048-.05 0-.081.017-.122.025-.113.024-.235.04-.348.057-.04.008-.09.05-.105-.025-.017.008-.033.008-.05.017.04.12.139.024.22.072-.18.025-.348.04-.52.065v-.016c.05-.008.107-.016.155-.025v-.024a2 2 0 0 0-.243-.016c-.024 0-.056.033-.08.04a.4.4 0 0 1-.106.017c-.138.008-.275.008-.405.016-.008 0-.025-.008-.033-.008v-.025c.543-.072 1.078-.145 1.62-.218zm-1.694.21v.024a4 4 0 0 1-.453.05v-.025z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPostcssIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
