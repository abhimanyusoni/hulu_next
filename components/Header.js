import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeadeItem from "./HeadeItem";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeadeItem title="HOME" Icon={HomeIcon} />
        <HeadeItem title="TRENDIND" Icon={LightningBoltIcon} />
        <HeadeItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeadeItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeadeItem title="SEARCH" Icon={SearchIcon} />
        <HeadeItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={70}
      />
    </header>
  );
};

export default Header;
