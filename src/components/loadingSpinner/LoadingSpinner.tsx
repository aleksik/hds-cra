import React from "react";
import { LoadingSpinner as HDSLoadingSpinner } from "hds-react";

export const LoadingSpinner = () => {
  const theme = {
    "--spinner-color": "var(--color-tram)",
    "--spinner-color-stage1": "var(--color-coat-of-arms)",
    "--spinner-color-stage2": "var(--color-tram)",
    "--spinner-color-stage3": "var(--color-metro)",
  };

  return (
    <div>
      <h1>Loading spinners</h1>
      <div style={{ display: "flex" }}>
        <HDSLoadingSpinner />
        <HDSLoadingSpinner small />
        <HDSLoadingSpinner multicolor />
        <HDSLoadingSpinner multicolor theme={theme} />
      </div>
    </div>
  );
};
