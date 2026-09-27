import { Link } from 'react-router-dom';

const ICONS = {
  bag: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M6 8h12l1 13H5L6 8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  heart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M12 20s-7-4.35-9.5-8.5C.5 8 2 4.5 5.5 4c2-.3 3.7.8 4.5 2.3C10.8 4.8 12.5 3.7 14.5 4c3.5.5 5 4 3 7.5C19 15.65 12 20 12 20z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  message: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        d="M4 5h16v11H8l-4 4V5z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

const ACTIONS = [
  { key: 'bag', label: 'Orders', to: '/orders' },
  { key: 'heart', label: 'Favorites', to: '/favorites' },
  { key: 'message', label: 'Messages', to: '/messages' },
];

export default function SideActions() {
  return (
    <div className="side-actions">
      {ACTIONS.map((a) => (
        <Link to={a.to} className="side-actions-item" key={a.key}>
          {ICONS[a.key]}
          <span>{a.label}</span>
        </Link>
      ))}
      <Link to="/login" className="side-actions-login">
        Login
      </Link>
    </div>
  );
}