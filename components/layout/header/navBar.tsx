import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <nav>
      <ul className="miNavBar">
        <li>
          {" "}
          <Link href="/HTML">
            HTML{" "}
            <Image
              src="/img/HTML5_logo_and_wordmark.svg.png"
              alt="logo html"
              width={36}
              height={36}
            />{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/CSS">
            CSS{" "}
            <Image
              src={"/img/CSS3_logo_and_wordmark.svg"}
              alt="css logo"
              width={36}
              height={36}
            />
          </Link>
        </li>
        <li>
          <Link href="JS">
            JS{" "}
            <Image
              src="/img/JavaScript-logo.png"
              alt="logo js"
              width={36}
              height={36}
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href="TS">
            TS{" "}
            <Image
              src="/img/Typescript_logo_2020.svg.png"
              alt="logo ts"
              width={36}
              height={36}
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href="ANGULAR">
            ANGULAR{" "}
            <Image
              src="/img/Angular_full_color_logo.svg.png"
              alt="logo Angular"
              width={36}
              height={36}
            />
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/REACT">
            REACT{" "}
            <Image
              src="/img/React.svg.png"
              alt="logo react"
              width={36}
              height={36}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
