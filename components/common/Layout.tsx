import Link from "next/link";


interface Props {
    children:React.ReactChild
}

export default function Layout({ children }:Props) {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
