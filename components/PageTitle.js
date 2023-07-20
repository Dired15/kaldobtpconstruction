

export function PageTitle(props){

    return (
        <div className=" w-full h-[20vh]   delimitation-red bg-cover bg-no-repeat bg-[url('/heroImage.jpg')] relative">
            <div className="bg-[hsla(0,0%,0%,50%)] flex justify-center items-center px-[140px] w-full h-full delimitation-purple">
                <h1 className=" text-white">{props.name}</h1>
            </div>
        </div>
    );
}