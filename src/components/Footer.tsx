import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary2 shadow-lg text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between mt-2 px-4">
        <div className='flex-1 mb-4 md:mb-0'>
          <h3 className="font-bold mb-4 text-xl">Explore</h3>
          <ul className='flex flex-col space-y-2'>
            <Link href="/investment" className="hover:underline">Investment</Link>
            <Link href="/raise" className="hover:underline">Raise</Link>
            <Link href="/investor-charter" className="hover:underline">Investor Charter</Link>
            <Link href="/fees" className="hover:underline">Fees</Link>
            <Link href="/help-centre" className="hover:underline">Help Centre</Link>
          </ul>
        </div>

        <div className='flex-1 mb-4 md:mb-0'>
          <h3 className="font-bold mb-4 text-xl">Legal</h3>
          <ul className='flex flex-col space-y-2'>
            <Link href="/sitemap" className="hover:underline">Site Map</Link>
            <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/safeguarding" className="hover:underline">Safeguarding</Link>
            <Link href="/data-protection" className="hover:underline">Data Protection</Link>
            <Link href="/admin-login" className="hover:underline">Admin Login</Link>
            <Link href="/team-collaboration" className="hover:underline">Team Collaboration</Link>
          </ul>
        </div>

        <div className='flex-1 mb-4 md:mb-0'>
          <h3 className="font-bold mb-4 text-xl">About Us</h3>
          <ul className='flex flex-col space-y-2'>
            <Link href="/about" className="hover:underline">About Yadeam</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/careers" className="hover:underline">Careers</Link>
            <Link href="/news" className="hover:underline">News</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
          </ul>
        </div>

        <div className="flex justify-start mt-5 md:mt-0">
          <Link href="https://twitter.com" className="mx-2"><FaXTwitter className="text-2xl" /></Link>
          <Link href="https://instagram.com" className="mx-2"><FaInstagram className="text-2xl" /></Link>
          <Link href="https://youtube.com" className="mx-2"><IoLogoYoutube className="text-2xl" /></Link>
          <Link href="https://www.linkedin.com/company/yadeam/posts/?feedView=all" className="mx-2"><BsLinkedin className="text-2xl" /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
