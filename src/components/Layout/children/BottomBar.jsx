const BottomBar = () => {
  return (
    <div className="w-full bg-slate-200">
        <div className="max-w-6xl px-5 mx-auto flex justify-between">
            <div className="flex gap-5 px-3">
                <p className="text-[#131A2D] py-3 font-medium">Početna</p>
                <p className="text-[#131A2D] py-3 font-medium">O nama</p>
                <p className="text-[#131A2D] py-3 font-medium">Kontakt</p>
            </div>
            <div>
                <p className="text-[#131A2D] py-3 px-3 font-medium">© 2024. Sva prava zadržana.</p>
            </div>
        </div>
    </div>
  )
}

export default BottomBar