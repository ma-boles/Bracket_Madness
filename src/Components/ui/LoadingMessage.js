export default function LoadingMessage () {
    return (
        <>
        <div className="fixed inset-0 z-40 bg-black/80 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
            <span className="ml-4 text-white text-lg font-semibold">Loading...</span>
        </div>
        </>
    )
}