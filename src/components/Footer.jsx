function Footer() {
    return (
        <footer class="bg-gray-900 text-white py-8">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 class="font-bold text-lg">Company</h3>
                        <ul>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">About Us</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Careers</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg">Customer Service</h3>
                        <ul>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Contact</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Returns</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Shipping Info</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg">Follow Us</h3>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Facebook</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Instagram</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-pink-500">Twitter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-bold text-lg">Subscribe</h3>
                        <form>
                        <input type="email" placeholder="Your email" class="p-2 w-full text-black" />
                        <button type="submit" class="bg-pink-500 text-white w-full mt-2 p-2">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div class="text-center mt-8">
                    <p class="text-gray-400">© 2025 logo Beauty. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
