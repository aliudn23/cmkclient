import Navbar from "@/app/components/dashboard/navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
            <div>

                <Navbar />

                {children}

            </div>
        </>
    );
        
}