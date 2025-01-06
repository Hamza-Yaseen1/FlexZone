import { Button } from "@/components/ui/button";

function Hero(){
    return (
<>
<div className="hero bg-[url('/images/Hero.jpg')] bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center">
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
        <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">The Best Fitness Studio in Town</h1>
        <p className="text-blue-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis.</p>
        <div className="mt-8">
            
            <Button variant="outline" className="bg-purple-500 text-white">
            Explore More
            </Button>
        </div>
        </div>
    </div>
</div>
</>
    )
}
export default Hero;