const Header: React.FC = () => {
  return (
    <header className="border-b border-border p-1 bg-background/50 backdrop-blur-sm sticky top-0 z-40">
      <nav>
        <a className="underline" href="https://cortez.top" rel="noopener">
          Home
        </a>
      </nav>
    </header>
  );
};

export default Header;
