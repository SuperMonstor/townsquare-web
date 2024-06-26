import "./globals.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export const metadata = {
	title: "Bengaluru Townsquare",
	description: "Discover communities and events in Bangalore.",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
