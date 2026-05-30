import "./globals.css";

export const metadata = {
  title: "QueryDriven | Practical AI Workflows",
  description: "Practical AI workflows for overwhelmed professionals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
