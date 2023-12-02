import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "All Posts",
  description:
    "I am a software engineering student with a keen interest in web development and UI/UX design. I am passionate about creating user-friendly web applications and visually appealing designs for websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
