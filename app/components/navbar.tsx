import Link from 'next/link';

interface NavbarProps {
  
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="bg-gray-200 text-gray-600 py-4 w-full flex items-center justify-between">
      <Link href="/" passHref>
        <h1 className="text-2xl font-semibold cursor-pointer hover:scale-110 transform transition-transform">Logo</h1>
      </Link>
      <div className="space-x-4 flex"> 
        <Link href="/" passHref>
          <h3 className="cursor-pointer hover:scale-110 transform transition-transform">Home</h3>
        </Link>
        <Link href="/about" passHref>
          <h3 className="cursor-pointer hover:scale-110 transform transition-transform">About</h3>
        </Link>
        <Link href="/services" passHref>
          <h3 className="cursor-pointer hover:scale-110 transform transition-transform">Services</h3>
        </Link>
        <Link href="/gallery" passHref>
          <h3 className="cursor-pointer hover:scale-110 transform transition-transform">Gallery</h3>
        </Link>
        <Link href="/team" passHref>
          <h3 className="cursor-pointer hover:scale-110 transform transition-transform">Team</h3>
        </Link>
        <Link href="/blog" passHref>
          <h3 className="cursor-pointer hover:scale-110 transform transition-transform">Blog</h3>
        </Link>
        <Link href="/contact" passHref>
          <h3 className="cursor-pointer hover:scale-110 transform transition-transform">Contact</h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
