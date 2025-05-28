// import './globals.css';
import MainHeader from '../components/main-header' 

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html style={{height: '100%', width: '100%'}} lang="en">
      <body style={{margin: '0px'}}>
        
     {/* <MainHeader /> */}
        {children}
      </body>
    </html>
  );
}
