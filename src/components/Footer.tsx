import React from 'react';
import Link from 'next/link';
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-primary2 shadow-lg text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between mt-2 px-4">
        <div className='flex-1 mb-4 md:mb-0'>
          <h4 className="font-bold mb-4">Explore</h4>
          <ul className='flex flex-col space-y-2'>
            <li><Link href="/investment" className="hover:underline">Investment</Link></li>
            <li><Link href="/raise" className="hover:underline">Raise</Link></li>
            <li><Link href="/investor-charter" className="hover:underline">Investor Charter</Link></li>
            <li><Link href="/fees" className="hover:underline">Fees</Link></li>
            <li><Link href="/help-centre" className="hover:underline">Help Centre</Link></li>
          </ul>
        </div>

        <div className='flex-1 mb-4 md:mb-0'>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className='flex flex-col space-y-2'>
            <li><Link href="/sitemap" className="hover:underline">Site Map</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/safeguarding" className="hover:underline">Safeguarding</Link></li>
            <li><Link href="/data-protection" className="hover:underline">Data Protection</Link></li>
            <li><Link href="/admin-login" className="hover:underline">Admin Login</Link></li>
            <li><Link href="/team-collaboration" className="hover:underline">Team Collaboration</Link></li>
          </ul>
        </div>

        <div className='flex-1 mb-4 md:mb-0'>
          <h4 className="font-bold mb-4">About Us</h4>
          <ul className='flex flex-col space-y-2'>
            <li><Link href="/about" className="hover:underline">About Yadeam</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
            <li><Link href="/news" className="hover:underline">News</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex justify-center mt-5 md:mt-0">
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
