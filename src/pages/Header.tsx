import { User } from 'lucide-react';

export default function Header() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  
  return (
    <header style={{
      width: '100%',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      backgroundColor: '#fff',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Left: Month */}
      <div style={{
        fontSize: 16,
        color: '#666',
        fontWeight: 500
      }}>
        {currentMonth}
      </div>
      
      {/* Center: Restaurant Name */}
      <div style={{
        fontSize: 20,
        fontWeight: 600,
        color: '#1976d2',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)'
      }}>
        Restaurant X
      </div>
      
      {/* Right: Profile Icon */}
      <button style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '1.5px solid #1976d2',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: '#1976d2'
      }}>
        <User size={20} />
      </button>
    </header>
  );
}