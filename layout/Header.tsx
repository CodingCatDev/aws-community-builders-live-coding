import Link from 'next/link';
import router from 'next/router';
import AwsCommunityBuilders from '@/components/global/icons/AwsCommunityBuilders';
import { ProfileIcon } from '@/components/global/icons/RandomIcons';
import { Auth } from 'aws-amplify';

export default function Header(props: any): JSX.Element {
  async function signout() {
    await Auth.signOut();
  }
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
        <button
          className="btn-primary bg-secondary-500"
          onClick={() => signout()}
        >
          Sign Out
        </button>
        <ProfileIcon />
      </div>
    </div>
  );
}
