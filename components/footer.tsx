import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const date = new Date();

  return (
    <footer className="py-10 text-center">
      <div className="space-y-10 lg:flex justify-between items-center lg:space-y-0">
        <div className="text-3xl">DynamicRep</div>
        <div className="flex gap-4 text-xl justify-center">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedin />
          <FaYoutube />
        </div>
      </div>

      <hr className="my-10" />

      <div className="pb-10 text-slate-600 md:flex md:flex-row-reverse md:items-center justify-center gap-10">
        <div className="flex flex-col gap-4 text-sm md:flex-row">
          <span className="underline underline-offset-2">Privacy Policy</span>
          <span className="underline underline-offset-2">
            Terms and Conditions
          </span>
          <span className="underline underline-offset-2">Cookie Policy</span>
        </div>
        <small className="mt-8 block md:mt-0">
          &copy; {date.getFullYear()} Dynamic Rep Goal System. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
}
