import React from "react";

export const RequestButton: React.FC = () => {
  return (
    <button type="button" className="btn-primary flex items-center gap-1">
      <span className="text-sm">📦</span>
      Request
    </button>
  );
};
