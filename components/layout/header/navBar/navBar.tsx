import Link from "next/link";
import Image from "next/image";
import MiNavStyled from "./miNavStyled";

function NavBar(): React.ReactElement {
  return (
    <MiNavStyled>
      <Link href="/">
        <Image src="/home.png" alt="home" width={36} height={36} />{" "}
      </Link>{" "}
      <Link href="/HTML">
        <Image
          src="/img/HTML5_logo_and_wordmark.svg.png"
          alt="logo html"
          width={36}
          height={36}
        />{" "}
      </Link>{" "}
      <Link href="/CSS">
        <Image
          src={"/img/CSS3_logo_and_wordmark.svg"}
          alt="css logo"
          width={36}
          height={36}
        />
      </Link>
      <Link href="JS">
        <Image
          src="/img/JavaScript-logo.png"
          alt="logo js"
          width={36}
          height={36}
        />
      </Link>{" "}
      <Link href="TS">
        <Image
          src="/img/Typescript_logo_2020.svg.png"
          alt="logo ts"
          width={36}
          height={36}
        />
      </Link>{" "}
      <Link href="ANGULAR">
        <Image
          src="/img/Angular_full_color_logo.svg.png"
          alt="logo Angular"
          width={36}
          height={36}
        />
      </Link>{" "}
      <Link href="/REACT">
        <Image
          src="/img/React.svg.png"
          alt="logo react"
          width={36}
          height={36}
        />
      </Link>
    </MiNavStyled>
  );
}

export default NavBar;
