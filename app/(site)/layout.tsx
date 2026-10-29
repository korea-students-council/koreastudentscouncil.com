import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';

const SiteLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      <main className="pt-(--header)">{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
