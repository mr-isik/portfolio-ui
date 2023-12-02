import "./globals.css";

export const metadata = {
  title: "Ömer Faruk Işık",
  description:
    "I am a software engineering student with a keen interest in web development and UI/UX design. I am passionate about creating user-friendly web applications and visually appealing designs for websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
