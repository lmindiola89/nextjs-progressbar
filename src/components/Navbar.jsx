import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-20 py-3 bg-slate-950">
      <h1>
        <Link href={"/"}>App</Link>
      </h1>
      <ul className="flex gap-x-3">
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
