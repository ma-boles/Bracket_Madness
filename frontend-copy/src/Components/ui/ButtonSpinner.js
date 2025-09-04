export function ButtonSpinner({ size = 5 }) {
    return (
        <div  className={`m-auto border-4 border-black border-t-transparent rounded-full animate-spin`}
            style={{ width: size * 4, height: size * 4 }}
        />
    )
}