
interface BlogCardProps {
    title:string
    authorName: string,
    content: string,
    publishDate: string
}

export const BlogCard = ({
    authorName,
    publishDate, 
    content, 
    title
}:BlogCardProps) =>{
    return <div>
        <div className="flex ">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>

            </div>
            <div className=" mx-3 text-sm">
                {authorName} •
            </div>
            <div className=" text-sm text-slate-400">
                {publishDate}
            </div>
        </div>
        <div>
            <div className="text-2xl font-semibold mt-3 mb-2">
                {title}
            </div>
            <div className="text-sm font-extralight mr-72">
                {content.length>200 ? `${content.substring(0,200)}...`:content}
            </div>
            <div className="flex text-sm text-slate-400">
                <div>
                    {`${Math.ceil(content.length)/100} mintues` }
                </div>

            </div>
            <div className="border-t border-slate-300 my-4 mr-4"></div>

   
        </div>
    </div>
}