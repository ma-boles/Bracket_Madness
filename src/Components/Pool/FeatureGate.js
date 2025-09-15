export default function FeatureGate ({ children }) {
    return (
    <div style={{ position: 'relative' }}>
      {children}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          backdropFilter: 'blur(8px)',            
          WebkitBackdropFilter: 'blur(8px)',      
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'auto'
        }}
      >
        <h1 className="text-2xl text-center font-bold"> Sign in to use this feature</h1>

      </div>
    </div>
    )
}