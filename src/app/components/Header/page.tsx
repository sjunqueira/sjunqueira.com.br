import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex mx-auto justify-between p-5">
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="<sjunqueira/>"
          height={15}
          width={150}
        ></Image>
      </Link>
      <Link href={"/blog"} className="rounded-3xl pl-5 pr-5">
        <button />
        Blog
      </Link>
    </div>
  );
};

export default Header;
<div></div>;
