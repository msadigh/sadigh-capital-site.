export const metadata = {
  title: 'Sadigh Capital — Family Office',
  description: 'Partnering with founders to build enduring, essential businesses.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
