import Link from "next/link";

const Interests = () => (
  <ul>
    <li>
      Self-hosting. I have a{" "}
      <Link href="https://www.raspberrypi.com" target="_blank">
        Raspberry Pi 5
      </Link>{" "}
      sitting at my home.
    </li>
    <li>Photography. Be it landscape or portrait.</li>
    <li>
      Anime. Some of my recent favorite titles are{" "}
      <Link href="https://roshidere.com" target="_blank">
        Roshidere
      </Link>{" "}
      and{" "}
      <Link href="https://yurucamp.jp" target="_blank">
        Yuru Camp
      </Link>
      .
    </li>
    <li>
      Gaming of all kinds, including
      <ul>
        <li>
          FPS (
          <Link href="https://www.counter-strike.net" target="_blank">
            Counter-Strike 2
          </Link>
          ,{" "}
          <Link href="https://www.ea.com/games/battlefield" target="_blank">
            Battlefield
          </Link>{" "}
          series)
        </li>
        <li>
          Rhythm (
          <Link href="https://chunithm.sega.jp" target="_blank">
            CHUNITHM
          </Link>
          ,{" "}
          <Link href="https://maimai.sega.jp" target="_blank">
            maimai
          </Link>
          )
        </li>
        <li>
          Strategy (
          <Link href="https://magic.wizards.com" target="_blank">
            MTG
          </Link>
          ,{" "}
          <Link href="https://shadowverse.com" target="_blank">
            Shadowverse
          </Link>
          , Mahjong)
        </li>
      </ul>
    </li>
  </ul>
);

export default Interests;
