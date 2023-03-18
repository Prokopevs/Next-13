export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <nav>About NavBar</nav>
            <main>{children}</main>
        </>
    )
}
