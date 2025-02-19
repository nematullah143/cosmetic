function Hero() {
    return(
            <div className="mt-36 h screen text-center pt-6">
                <h1 className="text-7xl">TOP <b>SHELF</b></h1>
                <p className="text-2xl">Beauty news, reviews and hot takes</p>
                <div className="flex gap-4 bg-pink-500 p-4 rounded-md w-[85%] mx-auto" >
                    <div className="flex w-1/2" >
                         <h1>What's New</h1>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className="ml-auto">
                        <a href="#">Login</a>
                    </div>
                    
                </div>
            </div>
    )
}
export default Hero;
