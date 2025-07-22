
import type { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import './globals.css';

const heebo = Heebo({ 
  subsets: ['hebrew', 'latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'כלים לטיפול בהתמכרות וקרווינג | מרכז ידע אינטראקטיבי',
  description: 'מדריך מקיף ואינטראקטיבי לטיפול בהתמכרות, ניהול קרווינג, מניעת נשירה מטיפול - כלים מבוססי ראיות למטפלים ומטופלים',
  keywords: 'התמכרות, קרווינג, טיפול, מניעת נשירה, SWCM-Q, מפת טריגרים, עבודה עצמית',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${heebo.className} antialiased bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
