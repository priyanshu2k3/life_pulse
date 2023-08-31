import Footer from "@/components/footer"
export default function About() {
    return (
        
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-semibold mb-4">About Us</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="md:pr-8">
                            <img src="about_image.jpg" alt="Blood Donation Team" className="rounded-lg shadow-md" />
                        </div>
                        <div className="md:pl-8">
                            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                            <p className="text-gray-700 mb-4">
                                At Blood Donation, we are dedicated to saving lives by ensuring a stable and safe supply of blood and blood products. Our mission is to connect generous donors with those in need, creating a strong community of support for patients and their families.
                            </p>
                            <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
                            <p className="text-gray-700">
                                We are a passionate team of healthcare professionals, volunteers, and supporters who believe in the power of giving. Our organization has been serving the community for over a decade, and we continue to strive for excellence in all aspects of blood donation and distribution.
                            </p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </section>
            
    )
}