import React from "react";

export function CategoryIcon({ type, size = 44 }: { type: string; size?: number }) {
  const c = "#111113";
  if (type === "cam") {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48">
        <rect x="3" y="9" width="30" height="16" rx="6" fill="#fff" stroke={c} strokeWidth="1.6" />
        <circle cx="13" cy="17" r="5" fill={c} />
        <circle cx="13" cy="17" r="2" fill="#0071E3" />
        <path d="M33 14l8-3v13l-8-3" fill="none" stroke={c} strokeWidth="1.6" />
      </svg>
    );
  }
  if (type === "dome") {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48">
        <path d="M6 30a18 18 0 0 1 36 0Z" fill="#fff" stroke={c} strokeWidth="1.6" />
        <circle cx="24" cy="26" r="5" fill={c} />
        <circle cx="24" cy="26" r="2" fill="#0071E3" />
        <rect x="4" y="30" width="40" height="4" rx="2" fill={c} />
      </svg>
    );
  }
  if (type === "dvr") {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48">
        <rect x="4" y="14" width="40" height="18" rx="4" fill="#fff" stroke={c} strokeWidth="1.6" />
        <rect x="10" y="21" width="16" height="4" rx="2" fill={c} />
        <circle cx="36" cy="23" r="2.5" fill="#0071E3" />
      </svg>
    );
  }
  if (type === "hdd") {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48">
        <rect x="8" y="6" width="32" height="36" rx="5" fill="#fff" stroke={c} strokeWidth="1.6" />
        <circle cx="24" cy="22" r="9" fill="none" stroke={c} strokeWidth="1.6" />
        <circle cx="24" cy="22" r="2.5" fill="#0071E3" />
        <rect x="14" y="36" width="12" height="2.5" rx="1.2" fill={c} />
      </svg>
    );
  }
  if (type === "net") {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48">
        <rect x="4" y="18" width="40" height="14" rx="3" fill="#fff" stroke={c} strokeWidth="1.6" />
        <g fill={c}>
          <rect x="9" y="22" width="4" height="6" rx="1" />
          <rect x="16" y="22" width="4" height="6" rx="1" />
          <rect x="23" y="22" width="4" height="6" rx="1" />
        </g>
        <circle cx="37" cy="25" r="2" fill="#0071E3" />
      </svg>
    );
  }
  if (type === "int") {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48">
        <rect x="12" y="4" width="24" height="40" rx="5" fill="#fff" stroke={c} strokeWidth="1.6" />
        <circle cx="24" cy="14" r="3.5" fill={c} />
        <rect x="17" y="24" width="14" height="10" rx="2" fill="#0071E3" opacity=".9" />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 48 48">
      <rect x="8" y="12" width="32" height="24" rx="6" fill="#fff" stroke={c} strokeWidth="1.6" />
    </svg>
  );
}

export default CategoryIcon;
