import Link from 'next/link';
import AwsCommunityBuilders from '@/components/global/icons/AwsCommunityBuilders';
import { ProfileIcon } from '@/components/global/icons/RandomIcons';

export default function Header(props: any): JSX.Element {
  return (
    <div className="flex flex-row justify-between px-8 text-white bg-secondary-900">
      <div className="flex flex-row">
        <AwsCommunityBuilders className="w-24" />
      </div>
      <div className="flex flex-row items-center">
        <Link href="/schedule">
          <a className="flex flex-col items-center m-2 text-center">
            {`Schedule`.toUpperCase()}
          </a>
        </Link>
        <Link href="/speakers">
          <a className="flex flex-col items-center m-2 text-center">
            {`Speakers`.toUpperCase()}
          </a>
        </Link>
        <Link href="/expo">
          <a className="flex flex-col items-center m-2 text-center">
            {`Expo`.toUpperCase()}
          </a>
        </Link>
        <Link href="/jobs">
          <a className="flex flex-col items-center m-2 text-center">
            {`Jobs`.toUpperCase()}
          </a>
        </Link>
      </div>
      <div className="flex flex-row items-center text-white">
        <Link href="/admin">
          <button className="btn-primary">Admin</button>
        </Link>

        <ProfileIcon />
      </div>
    </div>
  );
}
