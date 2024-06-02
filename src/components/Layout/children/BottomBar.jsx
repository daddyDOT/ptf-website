const BottomBar = () => {
  return (
    <div className="w-full bg-slate-200 h-[5vh]">
        <div className="max-w-6xl px-5 mx-auto flex justify-between h-full">
            <div className="flex self-center gap-5 px-3">
                <p className="text-[#131A2D] font-medium">Početna</p>
                <p className="text-[#131A2D] font-medium">O nama</p>
                <p className="text-[#131A2D] font-medium">Kontakt</p>
            </div>
            <div className="self-center">
                <p className="text-[#131A2D] px-3 font-medium">© 2024. Sva prava zadržana.</p>
            </div>
        </div>
    </div>
  )
}

export default BottomBar